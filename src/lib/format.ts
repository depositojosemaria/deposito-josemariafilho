export function formatarTelefoneSchema(telefone: string): string {
	let digitos = telefone.replace(/\D/g, '');

	if (digitos.startsWith('55') && (digitos.length === 12 || digitos.length === 13)) {
		digitos = digitos.slice(2);
	}

	if (digitos.startsWith('0') && (digitos.length === 11 || digitos.length === 12)) {
		digitos = digitos.slice(1);
	}

	const ddd = digitos.slice(0, 2);
	const numero = digitos.slice(2);
	const fixo = numero.length === 8;
	const celular = numero.length === 9;

	if (!/^\d{2}$/.test(ddd) || (!fixo && !celular)) {
		throw new Error(`Telefone fora do formato esperado para o schema: ${telefone}`);
	}

	const corte = celular ? 5 : 4;
	return `+55-${ddd}-${numero.slice(0, corte)}-${numero.slice(corte)}`;
}
