import { getImage } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import logoHeader from '../assets/images/logo-header-vermelho.png';
import { formatarTelefoneSchema } from './format';

const SITE = 'https://depositojosemariafilho.com.br';
const ORGANIZACAO_ID = `${SITE}/#organizacao`;

type JsonLdValue = string | number | boolean | JsonLdNode | JsonLdValue[];

export type JsonLdNode = {
	[key: string]: JsonLdValue | undefined;
};

function urlAbsoluta(caminho: string) {
	return new URL(caminho, `${SITE}/`).href;
}

function endereco(unidade: CollectionEntry<'unidades'>['data']): JsonLdNode {
	const linha = unidade.complemento
		? `${unidade.logradouro}, ${unidade.numero}, ${unidade.complemento}, ${unidade.bairro}`
		: `${unidade.logradouro}, ${unidade.numero}, ${unidade.bairro}`;

	const address: JsonLdNode = {
		'@type': 'PostalAddress',
		streetAddress: linha,
		addressLocality: unidade.cidade,
		addressRegion: unidade.uf,
		addressCountry: 'BR',
	};

	if (unidade.cep) address.postalCode = unidade.cep;

	return address;
}

export async function organizationSchema(site: CollectionEntry<'site'>): Promise<JsonLdNode> {
	const logo = await getImage({
		src: logoHeader,
		format: 'webp',
		quality: 'mid',
	});

	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': ORGANIZACAO_ID,
		name: site.data.nome,
		legalName: site.data.razaoSocial,
		url: `${SITE}/`,
		logo: urlAbsoluta(logo.src),
		email: site.data.email,
		taxID: site.data.cnpj,
		sameAs: [site.data.instagram, site.data.facebook],
	};
}

export function websiteSchema(site: CollectionEntry<'site'>): JsonLdNode {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${SITE}/#website`,
		name: site.data.nome,
		url: `${SITE}/`,
		inLanguage: 'pt-BR',
		publisher: { '@id': ORGANIZACAO_ID },
	};
}

export async function lojaSchema(
	site: CollectionEntry<'site'>,
	unidade: CollectionEntry<'unidades'>,
): Promise<JsonLdNode> {
	const imagem = await getImage({
		src: unidade.data.imagem,
		format: 'webp',
		quality: 'mid',
	});

	const loja: JsonLdNode = {
		'@context': 'https://schema.org',
		'@type': 'HardwareStore',
		'@id': `${SITE}/unidades/${unidade.id}/#loja`,
		name: `${site.data.nome} — ${unidade.data.cidade} (${unidade.data.bairro})`,
		url: `${SITE}/unidades/${unidade.id}/`,
		image: urlAbsoluta(imagem.src),
		address: endereco(unidade.data),
		hasMap: unidade.data.mapsUrl,
		parentOrganization: { '@id': ORGANIZACAO_ID },
	};

	if (unidade.data.telefone) loja.telephone = formatarTelefoneSchema(unidade.data.telefone);

	if (unidade.data.latitude !== undefined && unidade.data.longitude !== undefined) {
		loja.geo = {
			'@type': 'GeoCoordinates',
			latitude: unidade.data.latitude,
			longitude: unidade.data.longitude,
		};
	}

	if (unidade.data.horario) {
		loja.openingHoursSpecification = {
			'@type': 'OpeningHoursSpecification',
			description: unidade.data.horario,
		};
	}

	return loja;
}

export function breadcrumbSchema(itens: { nome: string; url: string }[]): JsonLdNode {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: itens.map((item, indice) => ({
			'@type': 'ListItem',
			position: indice + 1,
			name: item.nome,
			item: item.url,
		})),
	};
}
