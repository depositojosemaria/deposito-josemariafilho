# Pendências

O que não está em `docs/REFERENCIA.md` não foi inventado. Os JSON em `src/content/` guardam o texto que o site original mostra, inclusive quando os números divergem.

## Unidades

- **Loja 1, telefone.** O card, o header, o hero e o rodapé mostram o fixo `(11) 4636-8547`. O botão “WhatsApp desta unidade”, o WhatsApp geral e a arte do banner 2 usam `(11) 98319-0553` (`5511983190553`). Em `unidades.json`, `telefone` é o fixo do card e `whatsapp` é o número do botão.
- **Loja 2, WhatsApp.** O botão aponta para `wa.me/551147474920`, o mesmo fixo `(11) 4747-4920`. O JSON guarda esse número.
- **Horários das 3 lojas.** Ausentes no HTML, no CSS e no rodapé. O campo `horario` não foi preenchido.
- **4ª loja citada no Instagram.** `docs/REFERENCIA.md` registra que o HTML, o hero e as meta tags falam em 3 unidades e que não há uma quarta unidade na página salva. Não há nome, endereço nem telefone dessa loja no documento. Nenhuma unidade extra foi criada.
- **CEPs.** Ausentes. O campo `cep` não foi preenchido.
- **Coordenadas.** Ausentes. `latitude` e `longitude` não foram preenchidas.
- Obter no Google Business Profile o link de Maps com CID de cada loja para substituir os links share.google em mapsUrl.
- Confirmar se o nome de cada loja no Google Business Profile bate com o name do schema.
- **Complemento.** Nenhuma unidade traz complemento no card.
- **Cidade na arte do banner 2.** Loja 2 e Loja 3 aparecem sem “Suzano” na linha de bairro. No card, as duas estão em Suzano. O JSON segue o card.
- **Rótulos “Loja 01”, “Loja 02” e “Loja 03”.** Existem no card e não têm campo próprio. O `nome` gravado é o do card (`Poá — Jd. São José`, e os equivalentes).
- **Nomes no rodapé.** O rodapé escreve `Loja 1 — Poá, Jd. São José`, `Loja 2 — Suzano, Vila Urupês` e `Loja 3 — Suzano, Pq. Santa Rosa`. Diferem do nome do card.
- **CNPJ.** Só existe um no copyright: `16.889.395/0001-65`. Não há CNPJ por unidade.
- Fotos das fachadas das 3 lojas em alta resolução (mínimo 1920px de largura) — a atual tem 680px e fica esticada no hero em desktop.

## Depoimentos

- Os cinco textos não dizem de qual unidade são. O botão “Ver todas as avaliações no Google” abre o mesmo `share.google` da Loja 1.
- Ortografia original mantida: `Melhor que muitos por ai`, `Ótimo atendimento,` (com vírgula no fim), `Jonatas Abrao`, `Jurisbalino Da Silva`.

## Conteúdo que existe e ainda não tem campo

- Títulos e subtítulos de seção: `Nossos Produtos`, `Tudo que você precisa para construir, reformar e acabar com qualidade`, `Ofertas do Mês`, `Confira as promoções especiais — clique na imagem para ampliar`, `Nossas Unidades`, `Estamos onde você precisa — Poá e Suzano`, `Trabalhamos com as Melhores Marcas`, `Parceiros líderes que garantem qualidade em cada produto`, `O que nossos Clientes Dizem`, `Avaliações verificadas no Google`, `Entre em Contato`, `Fale com nossa equipe — respondemos rapidinho!`.
- Itens de menu: `Início`, `Produtos`, `Ofertas`, `Unidades`, `Depoimentos`, `Contato`.
- Textos de contato e do formulário: `Prefere falar direto pelo WhatsApp?`, o parágrafo da equipe, rótulos `Nome *`, `Telefone`, `E-mail *`, `Mensagem *`, placeholders, `Mensagem enviada!`, `Em breve nossa equipe entrará em contato com você.`, e o alerta `Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp: (11) 98319-0553`.
- Seção Instagram oculta: `Siga no Instagram`, `Feed do Instagram`, o parágrafo do behold.so e `Ver perfil no Instagram`.
- Emojis dos diferenciais: 🏆, 📍, 🪟, 🤝. O quarto card não tem número; `valor` ficou ausente e `destaque` é `líderes`.
- `descricao` das categorias. Nenhuma existe no documento; o campo ficou vazio.
- Preços e a lista de produtos das ofertas. Estão só nas imagens, não no HTML. `validade` ficou ausente.
- Os banners não têm link. O campo `link` ficou ausente.
- Texto da política de privacidade. Só existe o link `https://depositojosemariafilho.com.br/politica-de-privacidade.html`. O HTML não foi salvo.
- Destino do formulário (`enviar.php`) e para onde o e-mail é enviado.

## Conteúdo exclusivo por loja (para diferenciar as páginas de unidade)

- Horário.
- CEP.
- Pontos de referência.
- Estacionamento.
- Se faz entrega e para quais bairros.
- Fotos internas.
- Especialidades de cada loja.

## Conteúdo das categorias (para ativar indexar: true)

Para cada categoria abaixo, faltam: marcas trabalhadas, produtos mais procurados, diferenciais (entrega, corte, mistura de tintas e outros que a loja realmente ofereça) e fotos reais. Enquanto isso, `indexar` fica `false`.

- Materiais Básicos
- Ferragens e Ferramentas
- Elétrica
- Hidráulica
- Pisos e Revestimentos
- Tintas e Impermeabilizantes
- Gabinetes de Cozinha
- Banheiro e Louças
- Iluminação

## Política de privacidade

- Revisão da Política de Privacidade pelo cliente (contador/advogado).

## GTM (configurar no painel do Google Tag Manager)

- Obter acesso ao container GTM-MVZWDTJJ.
- Garantir que GA4 (G-0VSMNP6YCZ), Google Ads (AW-18182219828) e o pixel da Meta estejam dentro do container, com a verificação de consentimento ativada.
- Conversões do Google Ads: clique em link contendo `wa.me`, clique em link `tel:` e o evento personalizado `lead_formulario_whatsapp`.
- Testar tudo no modo Preview do GTM.

## Alts reescritos

Os alts originais dos banners (`Oferta 1`, `Oferta 2`, `Oferta 3`) e das ofertas (`Oferta do mes 1`, `Oferta do mes 2`, `Oferta do mes 3`) eram genéricos. Os JSON usam alts descritivos em português. As fotos de fachada não tinham um campo de alt na collection; o alt original era `Fachada Loja 1 — Poá, Jd. São José` (e os equivalentes das lojas 2 e 3).
