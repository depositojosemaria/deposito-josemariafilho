import fs from 'node:fs';
import path from 'node:path';

const raiz = path.resolve('dist');
const origem = 'https://depositojosemariafilho.com.br';
const marcadores = ['[PENDENTE', 'TODO', 'COLE_A_CHAVE', 'lorem'];

function listar(dir, filtro) {
	const achados = [];
	for (const nome of fs.readdirSync(dir)) {
		const arquivo = path.join(dir, nome);
		if (fs.statSync(arquivo).isDirectory()) achados.push(...listar(arquivo, filtro));
		else if (!filtro || filtro(arquivo)) achados.push(arquivo);
	}
	return achados;
}

function relativo(arquivo) {
	return path.relative(raiz, arquivo).replaceAll('\\', '/');
}

function urlDaPagina(arquivo) {
	const rel = relativo(arquivo);
	if (rel === 'index.html') return `${origem}/`;
	if (rel.endsWith('/index.html')) return `${origem}/${rel.slice(0, -'index.html'.length)}`;
	return `${origem}/${rel}`;
}

function atributo(tag, nome) {
	const re = new RegExp(`\\b${nome}\\b(?:\\s*=\\s*(["'])([\\s\\S]*?)\\1)?`, 'i');
	const achado = tag.match(re);
	if (!achado) return null;
	return achado[2] ?? '';
}

function existeNoDist(caminho) {
	const limpo = decodeURIComponent(caminho.split('#')[0].split('?')[0]);
	const rel = limpo.replace(/^\/+/, '');
	if (limpo === '/' || limpo === '') return fs.existsSync(path.join(raiz, 'index.html'));
	if (limpo.endsWith('/')) return fs.existsSync(path.join(raiz, rel, 'index.html'));
	return fs.existsSync(path.join(raiz, rel)) || fs.existsSync(path.join(raiz, rel, 'index.html'));
}

function textoVisivel(html) {
	return html
		.replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}

if (!fs.existsSync(raiz)) {
	console.error('dist/ não existe. Rode pnpm build antes.');
	process.exit(1);
}

const paginas = listar(raiz, (arquivo) => arquivo.endsWith('.html'));
const sitemap = new Set();
for (const arquivo of listar(raiz, (item) => /sitemap-\d+\.xml$/.test(item))) {
	const xml = fs.readFileSync(arquivo, 'utf8');
	for (const loc of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemap.add(loc[1]);
}

const quebrados = [];
const semBarra = [];
const semTitle = [];
const semDescription = [];
const h1Problema = [];
const titulos = new Map();
const descricoes = new Map();
const imagens = [];
const marcadoresAchados = [];
const indexaveisFora = [];
const sitemapNoindex = [];
const jsonInvalido = [];
const robotsPorUrl = new Map();

for (const arquivo of paginas) {
	const html = fs.readFileSync(arquivo, 'utf8');
	const rel = relativo(arquivo);
	const url = urlDaPagina(arquivo);

	for (const achado of html.matchAll(/\bhref\s*=\s*(["'])(.*?)\1/gi)) {
		const href = achado[2];
		if (!href.startsWith('/') || href.startsWith('//')) continue;
		const caminho = href.split('#')[0].split('?')[0];
		const temExtensao = /\/[^/]+\.[a-z0-9]+$/i.test(caminho);
		const ancora = href.includes('#');
		if (!existeNoDist(caminho || '/')) {
			quebrados.push(`${rel} → ${href}`);
		}
		if (caminho && caminho !== '/' && !caminho.endsWith('/') && !temExtensao && !ancora) {
			semBarra.push(`${rel} → ${href}`);
		}
	}

	const title = html.match(/<title>([^<]*)<\/title>/i)?.[1].trim() ?? '';
	if (!title) semTitle.push(rel);
	else {
		if (!titulos.has(title)) titulos.set(title, []);
		titulos.get(title).push(rel);
	}

	const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1].trim() ?? '';
	if (!description) semDescription.push(rel);
	else {
		if (!descricoes.has(description)) descricoes.set(description, []);
		descricoes.get(description).push(rel);
	}

	const h1 = html.match(/<h1\b/gi)?.length ?? 0;
	if (h1 !== 1) h1Problema.push(`${rel}: ${h1} h1`);

	for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
		const img = tag[0];
		const faltas = [];
		if (atributo(img, 'alt') === null) faltas.push('alt');
		if (atributo(img, 'width') === null) faltas.push('width');
		if (atributo(img, 'height') === null) faltas.push('height');
		if (faltas.length) {
			const src = atributo(img, 'src') ?? '(sem src)';
			imagens.push(`${rel}: ${src} sem ${faltas.join(', ')}`);
		}
	}

	const visivel = textoVisivel(html);
	for (const marca of marcadores) {
		if (visivel.includes(marca)) marcadoresAchados.push(`${rel}: contém “${marca}”`);
	}

	const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i)?.[1] ?? '';
	const noindex = /\bnoindex\b/i.test(robots);
	robotsPorUrl.set(url, noindex);
	if (!noindex && !sitemap.has(url)) indexaveisFora.push(url);

	for (const bloco of html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
		try {
			JSON.parse(bloco[1]);
		} catch (erro) {
			jsonInvalido.push(`${rel}: ${erro.message}`);
		}
	}
}

for (const loc of sitemap) {
	if (robotsPorUrl.get(loc)) sitemapNoindex.push(loc);
}

const titulosDuplicados = [...titulos.entries()].filter(([, lista]) => lista.length > 1);
const descricoesDuplicadas = [...descricoes.entries()].filter(([, lista]) => lista.length > 1);

function secao(titulo, itens) {
	console.log(`\n${titulo}`);
	if (!itens.length) {
		console.log('  ok');
		return;
	}
	for (const item of itens) console.log(`  - ${item}`);
}

console.log(`Auditoria de ${paginas.length} HTML em dist/`);
secao('a) Links internos sem arquivo em dist/', quebrados);
secao('b) Links internos sem barra final', semBarra);
secao('c) Title, description ou h1', [...semTitle.map((item) => `${item}: sem title`), ...semDescription.map((item) => `${item}: sem description`), ...h1Problema]);
secao(
	'd) Titles ou descriptions duplicados',
	[
		...titulosDuplicados.map(([texto, lista]) => `title “${texto}” em ${lista.join(', ')}`),
		...descricoesDuplicadas.map(([texto, lista]) => `description “${texto}” em ${lista.join(', ')}`),
	],
);
secao('e) Imagens sem alt, width ou height', imagens);
secao('f) Marcadores no texto visível', marcadoresAchados);
secao('g) Indexáveis fora do sitemap', indexaveisFora);
secao('g) URLs do sitemap com noindex', sitemapNoindex);
secao('h) JSON-LD inválido', jsonInvalido);

const problemas =
	quebrados.length +
	semBarra.length +
	semTitle.length +
	semDescription.length +
	h1Problema.length +
	titulosDuplicados.length +
	descricoesDuplicadas.length +
	imagens.length +
	marcadoresAchados.length +
	indexaveisFora.length +
	sitemapNoindex.length +
	jsonInvalido.length;
process.exit(problemas ? 1 : 0);
