import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pastaPublica = path.join(raiz, 'public');
const pastaReferencia = path.join(raiz, '_referencia', 'home_files');
const logo = path.join(raiz, 'src', 'assets', 'images', 'logo-header-vermelho.png');

function faviconOriginal() {
	if (!fs.existsSync(pastaReferencia)) return null;
	const arquivo = fs.readdirSync(pastaReferencia).find((nome) => /favicon|apple-touch-icon/i.test(nome));
	return arquivo ? path.join(pastaReferencia, arquivo) : null;
}

function ehTinta(r, g, b, a) {
	return a > 40 && r > 80 && r > g + 25 && r > b + 25;
}

async function simboloDaCasa() {
	const { data, info } = await sharp(logo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
	const { width, height } = info;
	const tinta = new Uint8Array(width * height);

	for (let pixel = 0, indice = 0; pixel < data.length; pixel += 4, indice += 1) {
		if (ehTinta(data[pixel], data[pixel + 1], data[pixel + 2], data[pixel + 3])) tinta[indice] = 1;
	}

	const pai = new Int32Array(width * height);
	for (let indice = 0; indice < pai.length; indice += 1) pai[indice] = indice;

	const achar = (indice) => {
		while (pai[indice] !== indice) {
			pai[indice] = pai[pai[indice]];
			indice = pai[indice];
		}
		return indice;
	};

	const unir = (a, b) => {
		const raizA = achar(a);
		const raizB = achar(b);
		if (raizA !== raizB) pai[raizA] = raizB;
	};

	for (let y = 0; y < height; y += 1) {
		for (let x = 0; x < width; x += 1) {
			const indice = y * width + x;
			if (!tinta[indice]) continue;
			if (x + 1 < width && tinta[indice + 1]) unir(indice, indice + 1);
			if (y + 1 < height && tinta[indice + width]) unir(indice, indice + width);
		}
	}

	const contagem = new Map();
	for (let indice = 0; indice < tinta.length; indice += 1) {
		if (!tinta[indice]) continue;
		const raiz = achar(indice);
		contagem.set(raiz, (contagem.get(raiz) ?? 0) + 1);
	}

	let maior = -1;
	let maiorContagem = 0;
	for (const [raiz, total] of contagem) {
		if (total > maiorContagem) {
			maior = raiz;
			maiorContagem = total;
		}
	}

	let minX = width;
	let minY = height;
	let maxX = 0;
	let maxY = 0;
	const saida = Buffer.alloc(width * height * 4);

	for (let y = 0; y < height; y += 1) {
		for (let x = 0; x < width; x += 1) {
			const indice = y * width + x;
			if (!tinta[indice] || achar(indice) !== maior) continue;
			const destino = indice * 4;
			saida[destino] = data[destino];
			saida[destino + 1] = data[destino + 1];
			saida[destino + 2] = data[destino + 2];
			saida[destino + 3] = data[destino + 3];
			if (x < minX) minX = x;
			if (y < minY) minY = y;
			if (x > maxX) maxX = x;
			if (y > maxY) maxY = y;
		}
	}

	const margem = 8;
	const esquerda = Math.max(0, minX - margem);
	const topo = Math.max(0, minY - margem);
	const largura = Math.min(width - esquerda, maxX - minX + 1 + margem * 2);
	const altura = Math.min(height - topo, maxY - minY + 1 + margem * 2);

	return sharp(saida, { raw: { width, height, channels: 4 } })
		.extract({ left: esquerda, top: topo, width: largura, height: altura })
		.png()
		.toBuffer();
}

async function fonteDoIcone() {
	const original = faviconOriginal();
	if (!original) return simboloDaCasa();

	if (path.extname(original).toLowerCase() === '.svg') {
		fs.copyFileSync(original, path.join(pastaPublica, 'favicon.svg'));
	}

	return sharp(original).ensureAlpha().png().toBuffer();
}

async function pngNoQuadrado(fonte, tamanho, fundo) {
	const miolo = Math.round(tamanho * 0.82);
	const icone = await sharp(fonte)
		.resize(miolo, miolo, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();

	return sharp({
		create: {
			width: tamanho,
			height: tamanho,
			channels: 4,
			background: fundo,
		},
	})
		.composite([{ input: icone, gravity: 'center' }])
		.png()
		.toBuffer();
}

const transparente = { r: 0, g: 0, b: 0, alpha: 0 };
const branco = { r: 255, g: 255, b: 255, alpha: 1 };
const fonte = await fonteDoIcone();

await fs.promises.writeFile(path.join(pastaPublica, 'favicon-32.png'), await pngNoQuadrado(fonte, 32, transparente));
await fs.promises.writeFile(path.join(pastaPublica, 'apple-touch-icon.png'), await pngNoQuadrado(fonte, 180, branco));
await fs.promises.writeFile(path.join(pastaPublica, 'icon-192.png'), await pngNoQuadrado(fonte, 192, transparente));
await fs.promises.writeFile(path.join(pastaPublica, 'icon-512.png'), await pngNoQuadrado(fonte, 512, transparente));

const tamanhosIco = await Promise.all([16, 32, 48].map((tamanho) => pngNoQuadrado(fonte, tamanho, transparente)));
await fs.promises.writeFile(path.join(pastaPublica, 'favicon.ico'), await pngToIco(tamanhosIco));
