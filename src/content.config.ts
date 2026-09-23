import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const site = defineCollection({
	loader: file('src/content/site.json'),
	schema: z.object({
		id: z.string(),
		nome: z.string(),
		tituloHero: z.string(),
		subtituloHero: z.string(),
		selo: z.string(),
		ctaWhatsapp: z.string(),
		ctaTelefoneHero: z.string(),
		ctaLigar: z.string(),
		ctaWhatsappHeader: z.string(),
		ctaOfertas: z.string(),
		ctaWhatsappUnidade: z.string(),
		ctaMaps: z.string(),
		ctaRota: z.string(),
		ctaEnviar: z.string(),
		ctaAvaliacoes: z.string(),
		anosExperiencia: z.string(),
		email: z.string(),
		instagram: z.string(),
		instagramUsuario: z.string(),
		facebook: z.string(),
		whatsapp: z.string(),
		mensagemWhatsapp: z.string(),
		mensagemWhatsappOfertas: z.string(),
		textoRodape: z.string(),
		copyright: z.string(),
		creditos: z.string(),
	}),
});

const unidades = defineCollection({
	loader: file('src/content/unidades.json'),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			nome: z.string(),
			logradouro: z.string(),
			numero: z.string(),
			complemento: z.string().optional(),
			bairro: z.string(),
			cidade: z.string(),
			uf: z.string(),
			cep: z.string().optional(),
			telefone: z.string().optional(),
			whatsapp: z.string().optional(),
			horario: z.string().optional(),
			mapsUrl: z.string(),
			rotaUrl: z.string(),
			latitude: z.number().optional(),
			longitude: z.number().optional(),
			imagem: image(),
			ordem: z.number().int(),
		}),
});

const categorias = defineCollection({
	loader: file('src/content/categorias.json'),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			nome: z.string(),
			icone: image(),
			itens: z.array(z.string()),
			selo: z.string().optional(),
			descricao: z.string().optional(),
			ordem: z.number().int(),
		}),
});

const diferenciais = defineCollection({
	loader: file('src/content/diferenciais.json'),
	schema: z.object({
		id: z.string(),
		valor: z.string().optional(),
		rotulo: z.string(),
		destaque: z.string().optional(),
		ordem: z.number().int(),
	}),
});

const banners = defineCollection({
	loader: file('src/content/banners.json'),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			imagem: image(),
			alt: z.string(),
			link: z.string().optional(),
			ordem: z.number().int(),
		}),
});

const ofertas = defineCollection({
	loader: file('src/content/ofertas.json'),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			imagem: image(),
			alt: z.string(),
			ordem: z.number().int(),
			validade: z.string().optional(),
		}),
});

const marcas = defineCollection({
	loader: file('src/content/marcas.json'),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			nome: z.string(),
			logo: image(),
			ordem: z.number().int(),
		}),
});

const depoimentos = defineCollection({
	loader: file('src/content/depoimentos.json'),
	schema: z.object({
		id: z.string(),
		autor: z.string(),
		nota: z.number().int().min(1).max(5),
		texto: z.string(),
		dataOriginal: z.string(),
		ordem: z.number().int(),
	}),
});

export const collections = {
	site,
	unidades,
	categorias,
	diferenciais,
	banners,
	ofertas,
	marcas,
	depoimentos,
};
