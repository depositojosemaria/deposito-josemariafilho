export interface ItemNavegacao {
	rotulo: string;
	href: string;
}

export const navegacao: ItemNavegacao[] = [
	{ rotulo: 'Início', href: '/' },
	{ rotulo: 'Sobre', href: '/sobre/' },
	{ rotulo: 'Produtos', href: '/produtos/' },
	{ rotulo: 'Ofertas', href: '/#ofertas' },
	{ rotulo: 'Unidades', href: '/unidades/' },
	{ rotulo: 'Depoimentos', href: '/#depoimentos' },
	{ rotulo: 'Contato', href: '/contato/' },
];
