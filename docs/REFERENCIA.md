# Referência — Depósito José Maria Filho

Fonte: `_referencia/home.html` (salvo de `https://depositojosemariafilho.com.br/#inicio`), CSS interno desse arquivo, `_referencia/home_files/` e os prints em `_referencia/prints/`.

O site atual é uma one page. Não há outras páginas salvas além do link para a política de privacidade, que não veio no HTML.

Os IDs de analytics de `_referencia/sitemap.xml` foram ignorados: esse arquivo é a página de erro padrão da hospedagem (“This Page Does Not Exist”), não o site do cliente.

---

## 1. URLs e seções (textos na íntegra)

### URL da página

| Uso | Caminho exato |
|---|---|
| Página salva | `https://depositojosemariafilho.com.br/#inicio` |
| Canonical | `https://depositojosemariafilho.com.br/` (com barra final) |
| Política de privacidade (só no rodapé; HTML não salvo) | `https://depositojosemariafilho.com.br/politica-de-privacidade.html` (sem barra final) |
| Sitemap declarado em `robots.txt` | `https://depositojosemariafilho.com.br/sitemap.xml` |

`robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://depositojosemariafilho.com.br/sitemap.xml
```

### Âncoras

| id | No menu? | Visível? |
|---|---|---|
| `#inicio` | sim | sim |
| (banner) | não — a seção não tem id | sim |
| (diferenciais) | não — a seção não tem id | sim |
| `#produtos` | sim | sim |
| `#ofertas` | sim | sim |
| `#unidades` | sim | sim |
| `#instagram` | não | não (`style="display:none"`) |
| `#parceiros` | não | sim |
| `#depoimentos` | sim | sim |
| `#contato` | sim | sim |

Ordem visual confirmada no print desktop (`prints/home-desktop.png`, 800×16384) e no PDF `prints/fullpage_snapshot_depositojosemariafilho_com_br_2026-09-23-11-04-26.pdf` (1 página, imagem, sem texto selecionável): header, hero, banners, diferenciais, produtos, ofertas, unidades, marcas, depoimentos, contato, rodapé. A seção Instagram não aparece no print.

### Header

Menu (desktop e mobile, mesmos rótulos):

- Início
- Produtos
- Ofertas
- Unidades
- Depoimentos
- Contato

Botões do header:

- Ligar
- WhatsApp

Menu mobile, além dos mesmos itens:

- Ligar
- Instagram
- Facebook

`aria-label` do logo: `Depósito José Maria Filho`  
`alt` do logo: `Depósito José Maria Filho — Materiais para Construção`  
`aria-label` do botão do menu: `Abrir menu`  
`aria-label` do telefone: `Ligar para Loja 1`

### Hero — `#inicio`

- ⭐ Mais de 23 anos de experiência
- Tudo para sua obra em um só lugar
- Do básico ao acabamento, do tijolo ao revestimento. 3 unidades em Poá e Suzano atendendo você com qualidade e preço justo.
- Falar pelo WhatsApp
- ou ligue (11) 4636-8547

`aria-label` do fundo: `Fachada da Loja 1 — Poá`

### Banners (sem id)

O HTML só tem texto de acessibilidade e um placeholder oculto (`display:none`), usado se a imagem falhar:

- alt: `Oferta 1` / `Oferta 2` / `Oferta 3`
- Banner 1 / Banner 2 / Banner 3
- Adicione `assets/banner-1.png` / `assets/banner-2.png` / `assets/banner-3.png`
- Tamanho: **1200 × 450 px**
- `aria-label`: `Banner anterior` / `Próximo banner` / `Banner 1` / `Banner 2` / `Banner 3`

Texto desenhado dentro das imagens (não está no HTML):

**banner-1.png**

- Construção é coisa séria!
- Aqui tem qualidade de verdade
- Areia, pedra, cimento
- +150 modelos de pisos, revestimentos e porcelanatos
- A Entrega +Rápida da Região
- COMPROMISSO COM QUEM CONSTRÓI
- DEPÓSITO JOSÉ MARIA FILHO
- Materiais de Construção

**banner-2.png**

- Cobrimos o seu orçamento!
- Achou mais barato? A gente cobre a oferta pra você economizar na sua obra!
- Traga seu orçamento e garanta o melhor negócio!
- LOJA 01 — AV. ÁGUAS DA PRATA, 1.107 — JARDIM SÃO JOSÉ, POÁ - SP — (11) 98319-0553
- LOJA 02 — RUA CABOCLO, 555 — VILA URUPÊS — (11) 4747-4920
- LOJA 03 — ESTRADA DOS FERNANDES, 2.657 — PQ SANTA ROSA — (11) 96183-6720
- Consulte condições com um de nossos vendedores*
- DEPÓSITO JOSÉ MARIA FILHO
- Materiais de Construção

**banner-3.png**

- Sua construção merece o melhor!
- conte com
- a gente!
- DEPÓSITO JOSÉ MARIA FILHO
- Materiais de Construção

### Diferenciais (sem id)

- 🏆
- +23
- Anos de experiência
- 📍
- 3
- Unidades em Poá e Suzano
- 🪟
- 150+
- Modelos de pisos e revestimentos
- 🤝
- Marcas parceiras líderes de mercado

### Produtos — `#produtos`

- Nossos Produtos
- Tudo que você precisa para construir, reformar e acabar com qualidade

Catálogo completo na seção 2.

### Ofertas — `#ofertas`

- Ofertas do Mês
- Confira as promoções especiais — clique na imagem para ampliar
- alt gerado pelo script: `Oferta do mes 1` / `Oferta do mes 2` / `Oferta do mes 3` (sem acento em “mes”)
- `aria-label`: `Oferta anterior` / `Próxima oferta`
- Tenho interesse nas ofertas

Estado vazio (só aparece se o script não achar imagens em `assets/ofertas/`):

- Ofertas em breve!
- Adicione arquivos sequenciais em `assets/ofertas/oferta-1.png`, `oferta-2.png`...

Contador, quando há mais slides do que cabem na tela: `Exibindo {início}-{fim} de {total}`

Lightbox (`role="dialog"`, `aria-label` `Visualizar oferta`):

- ✕ (`aria-label` `Fechar`)
- `aria-label`: `Oferta anterior` / `Próxima oferta`
- contador: `{n} / {total}`

Os preços e a lista de produtos das ofertas estão só nas imagens `oferta-1.png`, `oferta-2.png` e `oferta-3.png`. Não há esses textos no HTML.

### Unidades — `#unidades`

- Nossas Unidades
- Estamos onde você precisa — Poá e Suzano

**Loja 01**

- Loja 01
- Poá — Jd. São José
- Av. Águas da Prata, 1107
- Jd. São José — Poá, SP
- (11) 4636-8547
- Ver no Maps
- Criar Rota
- WhatsApp desta unidade
- alt da foto: `Fachada Loja 1 — Poá, Jd. São José`

**Loja 02**

- Loja 02
- Suzano — Vila Urupês
- Rua Caboclo, 555
- Vila Urupês — Suzano, SP
- (11) 4747-4920
- Ver no Maps
- Criar Rota
- WhatsApp desta unidade
- alt da foto: `Fachada Loja 2 — Suzano, Vila Urupês`

**Loja 03**

- Loja 03
- Suzano — Pq. Santa Rosa
- Estrada dos Fernandes, 2.657
- Pq. Santa Rosa — Suzano, SP
- (11) 96183-6720
- Ver no Maps
- Criar Rota
- WhatsApp desta unidade
- alt da foto: `Fachada Loja 3 — Suzano, Pq. Santa Rosa`

### Instagram — `#instagram` (oculto)

A seção existe no HTML com `style="display:none"`. Textos internos:

- Siga no Instagram
- @depositojosemariafilho
- Feed do Instagram
- Configure o widget em **behold.so** (gratuito) e cole o código aqui para exibir as últimas postagens automaticamente.
- Ver perfil no Instagram

### Marcas — `#parceiros`

- Trabalhamos com as Melhores Marcas
- Parceiros líderes que garantem qualidade em cada produto

Alts, na ordem do carrossel (o bloco é repetido uma segunda vez para o loop):

Coral, Brasilit, Votorantim Cimentos, Lorenzetti, Embramaco, Fortlev, Quartzolit, Formigres, Nardini, Fortaleza, MGM, LEF, Astras, Ceral, Ferja, MM Gabinetes

### Depoimentos — `#depoimentos`

- O que nossos Clientes Dizem
- Avaliações verificadas no Google

Cinco depoimentos únicos. O HTML repete o mesmo grupo em seguida para o carrossel infinito. Todos têm ★★★★★.

| Nome | Data | Texto | Inicial | Cor do avatar |
|---|---|---|---|---|
| Ronaldo Marinho Cabral | um ano atrás | Melhor que muitos por ai | R | `#CC0000` |
| Jurisbalino Da Silva | 3 semanas atrás | As atendentes são muito educadas e prestativas. | J | `#1565C0` |
| Fabio Mendes | 4 meses atrás | Muito bom. | F | `#2E7D32` |
| Hélio Venegeroles | um ano atrás | Ótimo atendimento, continuem assim | H | `#6A1B9A` |
| Jonatas Abrao | um ano atrás | Ótimo atendimento, | J | `#E65100` |

Botão: `Ver todas as avaliações no Google`

### Contato — `#contato`

- Entre em Contato
- Fale com nossa equipe — respondemos rapidinho!
- Prefere falar direto pelo WhatsApp?
- Nossa equipe está pronta para te atender e tirar todas as suas dúvidas sobre produtos, preços e disponibilidade. Clique no botão e mande uma mensagem agora!
- Falar pelo WhatsApp

Formulário:

- Nome *
- placeholder: `Seu nome completo`
- Telefone
- placeholder: `(11) 99999-9999`
- E-mail *
- placeholder: `seu@email.com`
- Mensagem *
- placeholder: `Descreva o que você precisa...`
- Enviar Mensagem

Sucesso (oculto até o envio):

- ✅
- Mensagem enviada!
- Em breve nossa equipe entrará em contato com você.

Alertas do script:

- `Por favor, preencha todos os campos obrigatórios.`
- botão durante o envio: `Enviando...`
- `Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp: (11) 98319-0553`

### Rodapé

- alt do logo: `Depósito José Maria Filho`
- Há mais de 23 anos servindo Poá, Suzano e região com os melhores materiais para construção, reformas e acabamentos.
- Nossas Unidades
- Loja 1 — Poá, Jd. São José
- Loja 2 — Suzano, Vila Urupês
- Loja 3 — Suzano, Pq. Santa Rosa
- Contato
- (11) 4636-8547 — Loja 1
- (11) 4747-4920 — Loja 2
- (11) 96183-6720 — Loja 3
- (11) 98319-0553 — WhatsApp
- depositojosemaria2@gmail.com
- © 2026 Depósito José Maria Filho — CNPJ 16.889.395/0001-65. Todos os direitos reservados.
- Política de Privacidade
- Desenvolvido por Aprumo Marketing

### Botão flutuante

`aria-label`: `Falar pelo WhatsApp`  
Sem texto visível; só o ícone.

---

## 2. Catálogo de produtos

Nove categorias, nesta ordem. Não há página por categoria: cada item é só uma linha do card.

### Materiais Básicos

- Areia e Pedra
- Cimento
- Tijolos e Blocos de Concreto
- Cal e Gesso

### Ferragens e Ferramentas

- Ferramentas Manuais
- Ferramentas Elétricas
- Pregos, Parafusos e Fixadores
- EPIs e Segurança

### Elétrica

- Fios e Cabos
- Quadros e Disjuntores
- Tomadas e Interruptores
- Eletrodutos e Conduítes

### Hidráulica

- Tubos e Conexões
- Registros e Válvulas
- Caixas d'Água

### Pisos e Revestimentos

- Pisos Cerâmicos
- Pequenos e Grandes Formatos
- Revestimentos de Parede
- selo: `✨ Mais de 150 modelos`

### Tintas e Impermeabilizantes

- Tintas e Vernizes
- Impermeabilizantes
- Argamassas e Rejuntes
- Aditivos e Solventes

### Gabinetes de Cozinha

- Gabinetes Modulados
- Armários e Balcões
- Nichos e Prateleiras

### Banheiro e Louças

- Vasos Sanitários
- Pias e Lavatórios
- Duchas e Chuveiros
- Metais e Torneiras

### Iluminação

- Lâmpadas LED
- Luminárias e Plafons
- Spots e Trilhos

---

## 3. Design tokens

O visual do site está no `<style>` de `home.html`. `_referencia/home_files/css2` é a folha do Google Fonts. `_referencia/home_files/styles__ltr.css` é CSS do reCAPTCHA, não do layout.

### Cores em hex

| Hex | Onde |
|---|---|
| `#CC0000` | `--red`. Títulos com `.text-red`, header dos cards de produto, borda superior dos diferenciais, números dos diferenciais, bolinha da lista de produtos, hover do menu e das redes do header, botão Ligar, link “Ver no Maps”, rótulo `Loja 0X`, títulos do rodapé, hover do Instagram no bloco oculto, botão “Ver perfil no Instagram”, setas do carrossel de ofertas no hover, fechar do lightbox no hover. Também o avatar do depoimento de Ronaldo. |
| `#a30000` | `--red-dark`. Declarada e não usada no CSS. |
| `#25D366` | `--green`. Botões WhatsApp (header, hero, ofertas, contato, cards de unidade) e o botão flutuante. Hover do ícone WhatsApp no rodapé. |
| `#128C7E` | `--green-dark`. Hover dos botões WhatsApp. |
| `#111111` | `--dark`. Texto do body, fundo do hero, fundo de unidades e do rodapé, hover do botão Enviar. Também o título do placeholder do Instagram. |
| `#6b7280` | `--gray`. Subtítulos de seção, itens dos cards, rótulos dos diferenciais, contador das ofertas, texto do placeholder do Instagram. |
| `#f4f4f4` | `--light`. Fundo dos diferenciais e dos depoimentos, fundo dos ícones sociais do header, fundo dos itens de marca, estado vazio de ofertas, fundo dos atalhos do menu mobile. |
| `#ffffff` | `--white`. Fundo da página, cards, header, botão Enviar, texto sobre vermelho/verde. |
| `#FFD700` | Palavra “obra” no H1 e palavra “Contato” no título da seção de contato. |
| `#000000` | Fundo da faixa de banners (escrito `#000`). |
| `#770000` | Fim do degradê do placeholder de banner (`#CC0000` → `#770000`). |
| `#ebebeb` | Borda dos cards de produto e de depoimento. |
| `#1e1e1e` | Fundo do card de unidade. |
| `#2a2a2a` | Borda do card de unidade. |
| `#e5e7eb` | Borda dos atalhos do menu mobile e das setas do carrossel de ofertas. |
| `#FFF3CD` | Fundo do selo “Mais de 150 modelos”. |
| `#856404` | Texto desse selo. |
| `#444444` | Texto do depoimento (escrito `#444`). |
| `#FBBC05` | Estrelas dos depoimentos e o amarelo do logo do Google. |
| `#4285F4` | Azul do logo do Google. |
| `#34A853` | Verde do logo do Google. |
| `#EA4335` | Vermelho do logo do Google. |
| `#dddddd` | Borda do botão “Ver todas as avaliações no Google” (escrito `#ddd`). |
| `#E1306C` | Hover do ícone Instagram no rodapé. |
| `#1877F2` | Hover do ícone Facebook no rodapé. |
| `#fafafa` | Fundo da seção Instagram (oculta). |
| `#fff8f8` | Fundo da seção Ofertas. |
| `#e0e0e0` | Borda tracejada do placeholder do Instagram. |
| `#1565C0` | Avatar de Jurisbalino Da Silva. |
| `#2E7D32` | Avatar de Fabio Mendes. |
| `#6A1B9A` | Avatar de Hélio Venegeroles. |
| `#E65100` | Avatar de Jonatas Abrao. |

Cores que não são hex, e entram no visual:

- Overlay do hero: `linear-gradient(135deg, rgba(180,0,0,0.85) 0%, rgba(0,0,0,0.70) 100%)`. A foto de fundo fica com `opacity: 0.35`.
- Selo do hero: fundo `rgba(255,255,255,0.15)`, borda `rgba(255,255,255,0.3)`.
- Subtítulo das unidades: `rgba(255,255,255,0.6)`. Endereço `rgba(255,255,255,0.65)`. Telefone `rgba(255,255,255,0.8)`.
- “Ver no Maps”: `rgba(204,0,0,0.85)`. “Criar Rota”: `rgba(255,255,255,0.07)`.
- Lightbox: `rgba(0,0,0,0.93)`.
- Sombra do flutuante: `rgba(37,211,102,0.5)` e, no pulso, `rgba(37,211,102,0.9)`.

### Fontes

Carregadas via Google Fonts (`home_files/css2`, arquivos em `fonts.gstatic.com`, `font-display: swap`):

| Família | Pesos no arquivo de fonte | Uso |
|---|---|---|
| Montserrat | 700, 800, 900 | `h1`–`h4`, botões, menu, títulos de seção, números dos diferenciais, nomes de unidade, avatares, botão Enviar |
| Open Sans | 400, 500, 600 | Body, parágrafos, campos do formulário. O peso 500 está no arquivo e não aparece em nenhuma regra do site. |

Pesos aplicados no CSS do site: 400 (body), 600 (selo do hero, rótulo dos diferenciais, labels do formulário), 700 (menu, botões, nomes dos depoimentos, itens de marca no texto do 4º card), 800 (`.section-title`, nome da unidade, botão Enviar, título do placeholder de banner), 900 (H1 do hero e número dos diferenciais).

Open Sans 700 não veio no arquivo de fontes. O menu e vários rótulos pedem `font-weight: 700` em Open Sans; o navegador sintetiza o negrito.

### Tamanhos de fonte

Base: `body` não define `font-size` (fica o padrão do navegador, em geral 16px). `line-height` do body: `1.6`. Títulos: `line-height: 1.2`.

| Elemento | Tamanho |
|---|---|
| `.section-title` | `clamp(1.6rem, 4vw, 2.2rem)` |
| `.section-subtitle` | `1.05rem` |
| `.btn` | `1rem` |
| Menu desktop | `0.92rem` |
| Botões Ligar e WhatsApp do header | `0.85rem`; abaixo de 600px, `0.78rem` |
| Links do menu mobile | `1rem` |
| Atalhos do menu mobile | `0.9rem` |
| Selo do hero | `0.85rem` |
| H1 do hero | `clamp(2rem, 5.5vw, 3.4rem)` |
| Parágrafo do hero | `clamp(1rem, 2.5vw, 1.2rem)` |
| CTA WhatsApp do hero | `1.05rem` |
| Telefone do hero | `0.95rem` |
| Título do placeholder de banner | `1.4rem` |
| Texto do placeholder de banner | `0.9rem` |
| Ícone emoji dos diferenciais | `2.2rem` |
| Número dos diferenciais | `1.9rem` |
| Rótulo dos diferenciais | `0.88rem`; o 4º card força `1rem` |
| Título do card de produto | `1rem`; abaixo de 500px, `0.82rem` |
| Itens do card | `0.85rem`; abaixo de 500px, `0.74rem` |
| Selo “150 modelos” | `0.75rem`; abaixo de 500px, `0.68rem` |
| “Ver no Maps” / “Criar Rota” | `0.76rem` |
| `Loja 0X` | `0.7rem`, `letter-spacing: 2px`, maiúsculas |
| Nome da unidade | `1.05rem` |
| Endereço da unidade | `0.86rem` |
| Telefone da unidade | `0.9rem` |
| WhatsApp da unidade | `0.88rem` |
| “Siga” do Instagram | `0.9rem` |
| Título “Feed do Instagram” | `1.15rem` |
| Texto do placeholder Instagram | `0.9rem` |
| H3 do bloco de contato | `1.5rem` |
| CTA WhatsApp do contato (inline) | `1.1rem` |
| Label do formulário | `0.85rem` |
| Campo do formulário | `0.95rem` |
| Botão Enviar | `1rem` |
| Título de sucesso | `1.3rem` |
| Nome do depoimento | `0.92rem` |
| Data do depoimento | `0.78rem` |
| Estrelas | `1.1rem` |
| Texto do depoimento | `0.88rem` |
| Letra do avatar | `1.1rem` |
| Botão de avaliações | `0.9rem` |
| Descrição do rodapé | `0.88rem` |
| Título de coluna do rodapé | `0.9rem`, maiúsculas, `letter-spacing: 1px` |
| Links do rodapé | `0.88rem` |
| Copyright, privacidade e crédito | `0.8rem` |
| Contador de ofertas | `0.85rem` |
| CTA de ofertas abaixo de 900px | `0.92rem` |
| Contador do lightbox | `0.88rem` |
| Fechar do lightbox | `1.6rem` |

### Espaçamentos

| Token / bloco | Valor |
|---|---|
| `.section` | `padding: 80px 0` |
| `.container` e header | `padding` horizontal `20px`; header `10px 20px`; abaixo de 600px o header vai a `8px 10px` |
| Título → subtítulo | `margin-bottom: 12px` no título |
| Subtítulo → conteúdo | `margin-bottom: 48px` |
| Grade de diferenciais | `gap: 24px`; padding da seção `60px 0`; card `28px 20px` |
| Grade de produtos | `gap: 20px`; abaixo de 500px, `12px` |
| Header do card de produto | `28px 16px 20px`; corpo `16px 20px` |
| Grade de unidades | `gap: 24px`; foto com altura fixa `200px`; info `18px 20px 20px` |
| Marcas | seção `70px 0`; item `14px 22px`; `gap: 16px` |
| Depoimentos | card `24px`; `gap: 20px`; botão com `margin-top: 40px` |
| Contato | colunas com `gap: 60px`; abaixo de 800px, `40px`; grupo de campo `margin-bottom: 16px` |
| Rodapé | `60px 0 30px`; colunas `gap: 40px`; abaixo de 800px, `32px` |
| Botão flutuante | `bottom: 28px; right: 28px` |
| Botões padrão | `padding: 14px 28px`; hero `16px 32px` |
| Fade-in | sobe `28px` |

### Border-radius

| Valor | Onde |
|---|---|
| `--radius: 12px` | Cards de diferencial, produto, unidade, depoimento, viewport de ofertas, sucesso do formulário, placeholder do Instagram |
| `50px` | Botões em pílula, selo do hero, selo de produto, dots ativos não usam isso; contador do lightbox |
| `16px` | Caixa do ícone de produto; `12px` abaixo de 500px |
| `10px` | Item de marca e atalho do menu mobile |
| `8px` | Links do menu, botão WhatsApp da unidade, campos do formulário |
| `4px` | `<code>` dos placeholders e imagem do lightbox |
| `50%` | Ícones sociais, setas dos carrosséis, avatar, botão flutuante, dots dos banners |

### Sombras

| Sombra | Onde |
|---|---|
| `--shadow: 0 4px 24px rgba(0,0,0,0.10)` | Cards, viewport de ofertas, setas de ofertas, hover de marca |
| `0 2px 16px rgba(0,0,0,0.10)` | Header |
| `0 8px 24px rgba(0,0,0,0.12)` | Menu mobile aberto |
| `0 12px 32px rgba(0,0,0,0.14)` | Hover do card de produto |
| `0 12px 28px rgba(0,0,0,0.12)` | Hover do depoimento |
| `0 4px 16px rgba(0,0,0,0.2)` | CTA WhatsApp do contato |
| `0 4px 20px rgba(37,211,102,0.5)` | Botão flutuante; no meio da animação, `0 4px 32px rgba(37,211,102,0.9)` |

Transição padrão: `--transition: all 0.3s ease`.

### Container e breakpoints

- Largura máxima do container e do header: **1200px**, centralizado.
- Conteúdo do hero: `max-width: 720px`. Parágrafo do hero: `540px`.
- Unidades em coluna única: `max-width: 480px`.
- Card de depoimento: `min-width: 300px`, `max-width: 340px`.
- Comentário do CSS pede banner `1200 × 450 px` (mobile opcional `800 × 400`). Os arquivos reais são `2048 × 768` (mesma proporção, 2,67:1).

| Breakpoint | Efeito |
|---|---|
| `max-width: 980px` | Some o menu desktop e os ícones sociais do header. Aparece o hambúrguer. O menu mobile abre com a classe `.open`. |
| `max-width: 900px` | Produtos em 2 colunas. Unidades em 1 coluna. Ofertas mostram 2 slides; setas menores; imagem da oferta até `400px` de altura. |
| `max-width: 800px` | Contato em uma coluna. Rodapé em uma coluna. |
| `max-width: 768px` | Diferenciais em 2 colunas. Placeholder de banner com `200px`. Setas do banner somem. |
| `max-width: 600px` | Header mais baixo (logo `58px`). Setas do lightbox menores. |
| `max-width: 500px` | Cards de produto mais compactos, ainda em 2 colunas. |

Hero: `min-height: 85vh`.

---

## 4. Componentes e comportamento

HTML completo, com CSS e JavaScript no próprio arquivo. Sem framework visível.

### Header

Fixo no topo (`position: sticky`, `z-index: 1000`), fundo branco. Logo vermelho (`logo-vermelho.png`, altura `78px`, `58px` abaixo de 600px) aponta para `#inicio`.

### Menu mobile

Oculto no desktop (há um comentário no CSS dizendo que, sem isso, o menu aparecia duplicado). Abaixo de 980px, o botão `#menuToggle` alterna a classe `open` em `#mobileNav`. Qualquer link do menu fecha o painel. O painel inclui Ligar (telefone da Loja 1), Instagram e Facebook. Não há botão WhatsApp dentro do menu mobile; o WhatsApp do header continua visível à direita.

### Hero

Foto da Loja 1 como `background-image` de `.hero-bg` (`assets/fachada-1.png` no CSS original), escurecida e coberta por degradê vermelho/preto. Dois CTAs: WhatsApp geral e telefone da Loja 1.

### Carrossel de banners

Três slides em faixa, `translateX` de 100% por slide. Avança sozinho a cada **5 segundos**. Setas e dots reiniciam o timer. Abaixo de 768px as setas somem; os dots continuam. Se a imagem quebrar, entra o placeholder vermelho.

### Diferenciais

Quatro cards. O quarto não tem número, só o texto “Marcas parceiras líderes de mercado”. Hover sobe `4px`.

### Cards de categoria

Grade de 3 colunas (2 abaixo de 900px, inclusive no mobile). Cabeçalho vermelho, ícone branco por filtro CSS (`brightness(0) invert(1)`), lista com bolinha vermelha. Só “Pisos e Revestimentos” tem selo. O card não é link.

### Ofertas e lightbox

No HTML salvo já existem 3 slides. No carregamento, o script **apaga** esses slides e procura de novo `assets/ofertas/oferta-1.png` (depois `.jpg`, `.jpeg`, `.webp`), em sequência até 30, e para no primeiro arquivo que falhar. Se não achar nenhum, mostra “Ofertas em breve!”.

Desktop mostra 3 por vez; abaixo de 900px, 2. Setas andam um slide. No toque, um arraste maior que 50px troca o slide. Clique na imagem abre o lightbox, trava o scroll, permite zoom (`scale(2.2)`) no clique da imagem, setas, teclas esquerda/direita e Esc. Clique no fundo fecha.

CTA das ofertas abre WhatsApp com outro texto (ver seção 7).

### Unidades

Três cards. Foto com zoom leve no hover (`scale(1.04)`). “Ver no Maps” abre um link `share.google`. “Criar Rota” abre o Google Maps Directions com o endereço na query. Telefone é `tel:`. WhatsApp é `wa.me` com mensagem pronta. Não há mapa embutido (iframe). Não há horário no card.

### Marcas

Faixa infinita, animação `scroll-parceiros` de 38s, pausa no hover. O grupo de logos está duplicado no HTML para o loop. Logos com `grayscale(20%)`; no hover ficam coloridos.

### Depoimentos

Mesma lógica, animação de 45s. Cinco cards duplicados. O botão de avaliações aponta para o mesmo `share.google` da Loja 1, não para um link agregado das três unidades.

### Formulário

`POST` relativo para `enviar.php` (esse arquivo não está na pasta salva), com `FormData`. reCAPTCHA v3, action `submit`, site key no script. Campos obrigatórios: nome, e-mail, mensagem. Telefone ganha máscara `(11) 99999-9999` (11 dígitos; o corte no meio é de 5, então celular de 9 dígitos fica `(11) 99999-9999`). Sucesso esconde o formulário e dispara `dataLayer` com `form_submit_success`. Erro mostra o alerta com o WhatsApp `(11) 98319-0553`.

### Botão flutuante

Fixo, canto inferior direito, `z-index: 9999`, círculo verde de `62px`, animação de pulso de 2,5s. Mesmo WhatsApp e a mesma mensagem do header/hero/contato.

### Fade-in

`.fade-in` começa invisível e sobe 28px. Um `IntersectionObserver` (limiar 0,1) adiciona `.visible` uma vez. No HTML salvo os cards já estão com a classe `visible` (a página foi salva depois da animação).

### O que não é do site

O HTML salvo inclui o painel da extensão Link Grabber (`.lg-badge-container`, oculto) e o atributo `cz-shortcut-listen` no body (extensão de cor). Não fazem parte do layout.

---

## 5. Imagens

Caminho salvo: `_referencia/home_files/`. No site ao vivo os `src` eram `assets/...` (o Chrome reescreveu para `./home_files/` ao salvar). Favicon apontado e não salvo: `https://depositojosemariafilho.com.br/assets/favicon.png`.

### LCP

A candidata a LCP é **`fachada-1.png`**, como `background-image` de `.hero-bg` (caminho original no CSS: `assets/fachada-1.png`). Ela cobre o hero (`min-height: 85vh`) e é o maior recurso visual da primeira dobra. Não é uma tag `<img>`. A mesma foto reaparece no card da Loja 1 com `loading="lazy"`, então essa segunda ocorrência não é LCP.

O logo do header é pequeno (altura 78px). Os banners ficam abaixo do hero de 85vh. `oferta-1.png` tem `loading="eager"`, mas está bem abaixo da dobra.

### Arquivos

| Arquivo | Onde aparece | Dimensões |
|---|---|---|
| `logo-vermelho.png` | Header | 1444×957 |
| `logo-branco.png` | Rodapé | 2891×1914 |
| `fachada-1.png` | Fundo do hero (LCP) e card da Loja 1. Também é o `og:image`. | 680×510 |
| `fachada-2.png` | Card da Loja 2 | 680×510 |
| `fachada-3.png` | Card da Loja 3 | 680×510 |
| `banner-1.png` | 1º slide do carrossel | 2048×768 |
| `banner-2.png` | 2º slide | 2048×768 |
| `banner-3.png` | 3º slide | 2048×768 |
| `oferta-1.png` | Ofertas, slide 1 | 2160×2700 |
| `oferta-2.png` | Ofertas, slide 2 | 2160×2700 |
| `oferta-3.png` | Ofertas, slide 3 | 2160×2700 |
| `icone-básico.png` | Card Materiais Básicos | 1188×1188 |
| `icone_ferragens-e-ferramentas.png` | Card Ferragens e Ferramentas | 1188×1188 |
| `icone-eletrica.png` | Card Elétrica | 1188×1188 |
| `icone-hidráulica.png` | Card Hidráulica | 1188×1188 |
| `icone-pisos-e-revestimentos.png` | Card Pisos e Revestimentos | 1188×1188 |
| `icone-tintas-e-impermeabilizantes.png` | Card Tintas e Impermeabilizantes | 1188×1188 |
| `icone-cozinha.png` | Card Gabinetes de Cozinha | 1188×1188 |
| `icone-banheiro.png` | Card Banheiro e Louças | 1188×1188 |
| `icone-iluminação.png` | Card Iluminação | 1188×1188 |
| `logo-coral.png` | Marcas | 300×152 |
| `logo-brasilit.png` | Marcas | 3580×1182 |
| `logo-votorantim-cimentos.png` | Marcas | 1920×503 |
| `logo-lorenzetti.png` | Marcas | 879×209 |
| `logo_embramaco.png` | Marcas | 388×119 |
| `logo-FORTLEV.png` | Marcas (alt: Fortlev) | 1500×548 |
| `logo-quartzolit.png` | Marcas | 931×226 |
| `logo-formigres.png` | Marcas | 930×550 |
| `logo-nardini.png` | Marcas | 2188×1047 |
| `logo-fortaleza.png` | Marcas | 5644×2054 |
| `logo-mgm.png` | Marcas | 1024×456 |
| `logo-LEF.png` | Marcas | 1972×765 |
| `logo-astras.png` | Marcas | 351×136 |
| `logo-ceral.png` | Marcas | 3350×1307 |
| `logo-ferja.png` | Marcas | 692×227 |
| `logo-mm-gabinetes.png` | Marcas | 2077×1249 |

Ícones de produto são exibidos a 88×88px (58×58 abaixo de 500px), em branco. Logos de marca são exibidos a 44px de altura, largura automática, máximo 120px. Fotos de fachada no card são cortadas a 200px de altura (`object-fit: cover`).

Prints (não entram no site):

| Arquivo | Dimensões |
|---|---|
| `prints/home-desktop.png` | 800×16384 |
| `prints/fullpage_snapshot_depositojosemariafilho_com_br_2026-09-23-11-04-26.pdf` | 1 página, 1,5 MB, sem camada de texto |

---

## 6. Unidades

Não há horário em nenhum texto do HTML, do CSS ou do rodapé.

| | Loja 01 | Loja 02 | Loja 03 |
|---|---|---|---|
| Nome no card | Poá — Jd. São José | Suzano — Vila Urupês | Suzano — Pq. Santa Rosa |
| Nome no rodapé | Loja 1 — Poá, Jd. São José | Loja 2 — Suzano, Vila Urupês | Loja 3 — Suzano, Pq. Santa Rosa |
| Endereço no card | Av. Águas da Prata, 1107, Jd. São José — Poá, SP | Rua Caboclo, 555, Vila Urupês — Suzano, SP | Estrada dos Fernandes, 2.657, Pq. Santa Rosa — Suzano, SP |
| Telefone no card e no rodapé | (11) 4636-8547 | (11) 4747-4920 | (11) 96183-6720 |
| `tel:` | `+551146368547` | `+551147474920` | `+5511961836720` |
| WhatsApp do botão “desta unidade” | `5511983190553` | `551147474920` | `5511961836720` |
| Horário | não informado | não informado | não informado |
| Ver no Maps | `https://share.google/OQNobii3kxe1yYdQW` | `https://share.google/IJRUQZAYHX6u3mlEC` | `https://share.google/Y6QBkRkPNDmmrFbA9` |
| Criar rota | `https://www.google.com/maps/dir/?api=1&destination=Rua+%C3%81guas+da+Prata+1107+Po%C3%A1+SP` | `https://www.google.com/maps/dir/?api=1&destination=Rua+Caboclo+555+Suzano+SP` | `https://www.google.com/maps/dir/?api=1&destination=Estrada+dos+Fernandes+2657+Suzano+SP` |

O telefone do header, do hero e do botão Ligar do menu mobile é sempre o da Loja 1: `(11) 4636-8547`.

O WhatsApp geral (header, hero, flutuante, contato, ícone do rodapé e a linha “(11) 98319-0553 — WhatsApp”) é `5511983190553`. Esse mesmo número é o botão “WhatsApp desta unidade” da Loja 1, que não usa o telefone fixo da loja.

Mensagem padrão (decodificada): `Olá, vim do site de vocês e queria falar com um vendedor.`

Na arte do `banner-2.png`, a Loja 01 aparece com o telefone `(11) 98319-0553`, não com `(11) 4636-8547`.

E-mail único, só no rodapé: `depositojosemaria2@gmail.com`.  
CNPJ único, só no copyright: `16.889.395/0001-65`.

---

## 7. Links externos e scripts

Scripts considerados só os que estão em `home.html` e nos arquivos que esse HTML carrega. Nada do `sitemap.xml`.

### WhatsApp

Mensagem padrão, URL-encoded `Olá, vim do site de vocês e queria falar com um vendedor.`:

- `https://wa.me/5511983190553?text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%20e%20queria%20falar%20com%20um%20vendedor.` — header, hero, Loja 1, contato, rodapé (linha de contato), botão flutuante
- `https://wa.me/5511983190553` — ícone WhatsApp do rodapé, sem texto
- `https://wa.me/551147474920?text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%20e%20queria%20falar%20com%20um%20vendedor.` — Loja 2 (o número é o fixo)
- `https://wa.me/5511961836720?text=Ol%C3%A1%2C%20vim%20do%20site%20de%20voc%C3%AAs%20e%20queria%20falar%20com%20um%20vendedor.` — Loja 3
- Ofertas: `https://wa.me/5511983190553?text=Vim%20do%20site%20e%20tenho%20interesse%20em%20uma%20das%20ofertas%20do%20m%C3%AAs%2C%20queria%20falar%20com%20um%20vendedor` — texto: `Vim do site e tenho interesse em uma das ofertas do mês, queria falar com um vendedor`

### Instagram

`https://www.instagram.com/depositojosemariafilho/` — header, menu mobile, seção oculta (duas vezes) e rodapé.

### Facebook

`https://web.facebook.com/depositojosemariafilho` — header, menu mobile e rodapé. É `web.facebook.com`, não `www.facebook.com`.

### Maps

Links `share.google` e rotas da seção 6. O botão “Ver todas as avaliações no Google” repete o `share.google` da Loja 1.

### Telefone e e-mail

- `tel:+551146368547`
- `tel:+551147474920`
- `tel:+5511961836720`
- `mailto:depositojosemaria2@gmail.com`

### Scripts e pixels (em `home.html`)

| O quê | Identificador | Onde |
|---|---|---|
| Google Tag Manager | `GTM-MVZWDTJJ` | Snippet no `<head>` e `<noscript>` no início do body. Arquivo salvo: `home_files/gtm.js.transferir`. |
| GA4, disparado por esse GTM | `G-0VSMNP6YCZ` | Container salvo. Também aparece a tag `GT-5DDM9C45`. Arquivo salvo: `home_files/js(1)`. |
| Google Ads, disparado por esse GTM | `AW-18182219828` | Container salvo. Arquivo salvo: `home_files/js`. Remarketing em `home_files/f.txt` aponta para `google.com/pagead/1p-user-list/18182219828`. |
| Eventos no GTM | `whatsapp_click` (clique em `wa.me`), `phone_call_click` (clique em `tel:`), `form_submit_success`, clique em link com “interesse”, clique em `share.google` ou `maps/dir`, visibilidade do bloco `#ofertas` | Container salvo. O formulário também faz `dataLayer.push({ event: 'form_submit_success' })`. |
| Meta Pixel | `1914116315921587` | Inline no final do body: `fbq('init')`, `PageView`, e `ViewContent` com `content_name: "Ofertas do Mês"`. Arquivos salvos: `fbevents.js.transferir` e `1914116315921587`. Pixel noscript: `https://www.facebook.com/tr?id=1914116315921587&ev=PageView&noscript=1`. |
| Verificação de domínio Meta | `v8swwpu8c2mjb32or98yob3xs6y4q6` | `<meta name="facebook-domain-verification">` no final do body (fora do `<head>`). |
| reCAPTCHA v3 | site key `6LcQVvYsAAAAAIrd3mmEi7WGvT4HYD7PU0tHxg2h` | `home_files/api.js.transferir`, `recaptcha__pt_br.js.transferir`, `anchor.html`. Badge fixo no canto. |
| Google Fonts | Montserrat e Open Sans | `home_files/css2`, com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`. |
| Behold.so | não carregado | Só em comentário HTML, dentro da seção Instagram oculta (`https://w.behold.so/widget.js`). |
| Formulário | `enviar.php` | `fetch` relativo. Arquivo não está na pasta salva. |

---

## 8. Meta tags e dados estruturados

Uma única página. Não há JSON-LD, nem microdata, nem Twitter Card.

| Tag | Conteúdo |
|---|---|
| `lang` | `pt-BR` |
| `title` | `Depósito José Maria Filho \| Materiais para Construção — Poá e Suzano` |
| `description` | `Depósito José Maria Filho: mais de 23 anos em materiais para construção. Areia, cimento, pisos, revestimentos, elétrica, hidráulica e muito mais. 3 unidades em Poá e Suzano-SP.` |
| `robots` | `index, follow` |
| `canonical` | `https://depositojosemariafilho.com.br/` |
| `viewport` | `width=device-width, initial-scale=1.0` |
| favicon e apple-touch-icon | `https://depositojosemariafilho.com.br/assets/favicon.png` |
| `og:title` | `Depósito José Maria Filho \| Materiais para Construção` |
| `og:description` | `Mais de 23 anos servindo Poá, Suzano e região. 3 unidades com tudo para sua obra.` |
| `og:image` | `assets/fachada-1.png` (relativo, sem URL absoluta) |
| `og:type` | `website` |
| `og:url` | ausente |
| `og:locale` | ausente |

JSON-LD: nenhum.

---

## 9. Tipo de HTML e origem

É **HTML completo**, não SPA. O `<body>` traz header, seções, rodapé e o script da página. Não há `<div id="root">` vazio nem bundle de React, Vue, Angular, Next ou Nuxt.

O arquivo foi salvo pelo Chrome (“saved from url”). O CSS e o JavaScript de interface estão no próprio `home.html`. Comentários em português explicam como trocar banners, ofertas e o feed do Instagram. O rodapé diz “Desenvolvido por Aprumo Marketing”. Nada indica WordPress, Wix, Webflow ou construtor de página: é uma landing page estática escrita à mão, com carrosséis em JavaScript puro.

---

## 10. Dúvidas e inconsistências

- **Telefone da Loja 1.** No card, no header, no hero e no rodapé o fixo é `(11) 4636-8547`. O WhatsApp “desta unidade”, o WhatsApp geral e a arte do `banner-2.png` usam `(11) 98319-0553`. Não dá para saber qual número deve aparecer como telefone da loja.
- **Loja 2 no WhatsApp.** O botão usa `wa.me/551147474920`, o mesmo número do telefone fixo `(11) 4747-4920`. Fixo em link de WhatsApp costuma não abrir conversa.
- **Av. × Rua.** O card diz “Av. Águas da Prata, 1107”. O link “Criar Rota” manda `Rua Águas da Prata 1107 Poá SP`. A arte do banner 2 diz “AV. ÁGUAS DA PRATA, 1.107”.
- **Cidade nas artes.** No banner 2, Loja 2 e Loja 3 não trazem “Suzano” na linha de bairro. No HTML, as duas estão em Suzano.
- **Horário.** Não existe no HTML. O PDF não tem texto selecionável, então o horário não foi lido do print. Se estiver só numa foto de fachada, não entrou nesta lista.
- **Três unidades.** Hero, diferenciais, description, Open Graph e a grade concordam: são 3. Não há uma quarta unidade no HTML.
- **Menu × seções.** Marcas (`#parceiros`) aparece na página e não está no menu. Instagram (`#instagram`) está no HTML, fora do menu e com `display:none`. Banners e diferenciais não têm âncora.
- **Avaliações.** O botão “Ver todas as avaliações no Google” abre o mesmo link da Loja 1. Os cinco textos não dizem de qual unidade são.
- **`og:image` relativo** e sem `og:url`. Redes sociais podem não montar o preview.
- **Seletor do logo do rodapé.** O CSS é `.footer-logo img`, mas o HTML põe a classe no próprio `<img class="footer-logo">`. A altura de 60px pode não aplicar; o arquivo tem 2891×1914.
- **Script de ofertas.** No load ele substitui os slides do HTML por uma busca em `assets/ofertas/`. Se essa pasta não existir no site novo, a seção cai no texto “Ofertas em breve!” mesmo com as imagens no projeto.
- **Tamanho de banner.** O comentário pede 1200×450. Os arquivos são 2048×768 (mesma proporção).
- **`enviar.php` e a política de privacidade** são citados e não foram salvos. Não há como ver para onde o formulário manda o e-mail, nem o texto da política.
- **Um CNPJ só** no copyright. Não há CNPJ por unidade.
- **Open Sans 700** é usado no CSS e não veio no arquivo de fontes. Open Sans 500 veio e não é usado.
- **`--red-dark`** está declarada e não é usada.
- **Alt das ofertas** sai sem acento: “Oferta do mes”.
- **Ortografia original, mantida:** “Melhor que muitos por ai”, “Ótimo atendimento,” (com vírgula no fim), “Jonatas Abrao”, “Jurisbalino Da Silva”.
- **Extensões do navegador** no HTML salvo (Link Grabber e ColorZilla) não são do site.
- **`sitemap.xml` local** não é o sitemap do cliente. O `robots.txt` aponta para `https://depositojosemariafilho.com.br/sitemap.xml`, mas o arquivo salvo nessa pasta é a página de erro da hospedagem.
