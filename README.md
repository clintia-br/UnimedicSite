# Site Unimedic

Site institucional da Unimedic — clínica médica particular em Unamar (Tamoios), Cabo Frio — RJ.

Construído em Next.js (App Router) a partir do pacote de design system entregue
pelo cliente, com animações em GSAP.

## Rodando o projeto

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run start   # servir o build
npm run lint
```

## Estrutura

```
app/
  page.tsx                      home
  onde-estamos/                 unidade: endereço, mapa, horários
  clube-unamais/                Unamais Vantagens (benefícios + planos)
  especialidades/               lista de especialidades
  especialidades/[slug]/        12 páginas de especialidade (SSG)
  globals.css                   design tokens + estilos de componente
components/
  ui/                           primitivos (Button, Card, Band, Accordion…)
  layout/                       Header, Footer, botão flutuante do WhatsApp
  home/ clube/ unidade/ especialidade/
lib/
  data.ts                       especialidades, FAQ, planos, textos
  constants.ts                  WhatsApp, endereço, horários
  gsap.ts                       registro do GSAP + ScrollTrigger
public/assets/unimedic/         logos e marca do WhatsApp
```

## Design system

As cores, tipografia, espaçamentos, sombras e tokens de movimento foram portados
do pacote original para variáveis CSS em `app/globals.css`. A paleta verde da
marca (`--uni-50` a `--uni-950`), os aliases semânticos e as classes de estado
(`.bd-btn`, `.bd-card`, `.uni-*`) seguem os nomes do sistema original.

Tipografia: **Montserrat** (display) e **Roboto** (corpo), carregadas via
`next/font`.

## Animações

O tom de movimento do sistema é "calmo e curto — sem bounce, sem spring". As
animações seguem essa regra: fades e deslocamentos pequenos, com `power2/power3`.

- `components/ui/Reveal.tsx` — revelação por scroll (ScrollTrigger), com modo
  `group` para escalonar os filhos diretos
- `Hero`, `PageHero`, `ClubeHero` — timelines de entrada
- `Collapsible` — abre/fecha por altura + fade, usado no FAQ, no acordeão das
  especialidades e nos horários
- `Header` — entrada, sombra ao rolar e menu mobile animado
- `WhatsAppFab` — entrada em escala e halo pulsante

## Fotos

Os três heroes usam fotos do ensaio, servidas por `next/image`:

| Local | Arquivo | Original |
| --- | --- | --- |
| Hero da home | `fotos/recepcao.jpg` | `EspaçoSolar-38` |
| Hero de "Onde estamos" | `fotos/fachada-letreiro.jpg` | `EspaçoSolar-36` |
| Hero do Unamais Vantagens | `fotos/entrada.jpg` | `EspaçoSolar-31` |

Os originais têm 6240px e 0,6–3,4 MB cada. As versões servidas foram
redimensionadas para 2400px de largura e reencodadas em JPEG progressivo
(qualidade 82, mozjpeg), o que as deixa entre 184 e 269 KB. Para regerar depois
de trocar uma foto, redimensione com os mesmos parâmetros antes de commitar —
não sirva o arquivo de 6240px direto.

Das 16 fotos do ensaio, apenas 5 são horizontais (31, 36, 38, 44, 46); as
demais são retrato e não funcionam numa faixa de hero larga.

**Os cards do blog seguem com placeholder de propósito**: os artigos em si não
existem ainda ("Título do artigo", "Resumo em duas linhas"), e colocar foto real
em conteúdo fictício faria o placeholder passar por publicado. Quando os artigos
existirem, cada um entra com a sua própria imagem.

Fotos ainda não usadas, disponíveis para novas seções: entrada em retrato (32,
33), letreiro em retrato (34, 35), recepção e sala de espera em retrato (37,
39–43, 45), porta de consultório (44) e corredor (46).

Os 16 originais do ensaio ficam em `fotos-originais/` (26 MB). A pasta está fora
de `public/`, então nada dali é servido — é só o acervo de onde as versões
otimizadas são geradas.

## Pendências antes de publicar

1. **Domínio** — preencher `metadataBase`, `canonical` e `og:url`, e o campo
   `url` dos dados estruturados.
2. **Horário de sábado** — conferir se bate com a placa da porta e o Google Meu
   Negócio.
3. **Razão social, CNPJ e diretor técnico com CRM** — placeholders no rodapé.
   Exigência do CFM.
4. **Meta Pixel** — o `pixel-unimedic.js` original (com as proteções para site de
   saúde) ainda não foi portado; ver o pacote de origem antes de reativar.
5. **Acordeões das páginas de especialidade** — ainda com "Conteúdo a preencher".

Os dados estruturados (`MedicalClinic` JSON-LD) já estão portados em
`lib/structured-data.ts` e injetados na home — falta apenas o campo `url` quando
o domínio for definido.
