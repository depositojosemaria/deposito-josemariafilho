import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
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
		cnpj: z.string(),
		razaoSocial: z.string(),
		enderecoSede: z.string(),
		gtmId: z.string(),
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
			alt: z.string(),
			ordem: z.number().int(),
		}),
});

const categorias = defineCollection({
	loader: glob({ pattern: '*.md', base: 'src/content/categorias' }),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			nome: z.string(),
			icone: image(),
			itens: z.array(z.string()),
			selo: z.string().optional(),
			descricao: z.string().optional(),
			ordem: z.number().int(),
			indexar: z.boolean(),
			marcas: z.array(reference('marcas')).optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
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
	loader: glob({ pattern: '*.json', base: 'src/content/ofertas' }),
	schema: ({ image }) =>
		z.object({
			// id may be absent for entries created by the CMS
			id: z.string().optional(),
			// imagem is an asset path relative to the JSON file
			imagem: image(),
			alt: z.string(),
			// ordem optional, default 99
			ordem: z.number().int().optional().default(99),
			// validade optional; CMS may write "YYYY-MM-DD" or a datetime string
			validade: z.string().optional(),
			// ativo optional, default true
			ativo: z.boolean().optional().default(true),
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

const paginas = defineCollection({
	loader: glob({ pattern: '*.md', base: 'src/content/paginas' }),
	schema: z.object({
		titulo: z.string(),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		indexar: z.boolean().default(false),
		fundacao: z.number().int().optional(),
		fundador: z.string().optional(),
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
	paginas,
	depoimentos,
};
