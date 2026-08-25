# CAVEFLIX

Catálogo de filmes e séries desenvolvido em equipe com React + Vite + JavaScript.

## Começando

~~~bash
npm install
npm run dev
~~~

Outros comandos úteis:

~~~bash
npm run build
npm run lint
~~~

## Divisão do trabalho

Cada integrante tem uma página própria para desenvolver. Os nomes abaixo são pontos de partida; troquem pelos nomes reais da equipe quando decidirem a divisão.

| Integrante | Arquivo principal | Responsabilidade |
| --- | --- | --- |
| 01 | src/pages/Home.jsx | Página inicial e destaque |
| 02 | src/pages/Filmes.jsx | Catálogo, busca e filtro de filmes |
| 03 | src/pages/Series.jsx | Catálogo e categorias de séries |
| 04 | src/pages/Sobre.jsx | História, valores e equipe |
| 05 | src/pages/Contato.jsx | Formulário, feedback e validação com Zod |

O Header, o Footer, os componentes reutilizáveis e os estilos compartilhados ficam em src/components e src/index.css. Evitem alterar esses arquivos ao mesmo tempo sem avisar o grupo.

## Estrutura

~~~text
src/
├── components/
│   ├── Button.jsx
│   ├── Footer.jsx
│   ├── FormField.jsx
│   ├── Header.jsx
│   ├── MovieCard.jsx
│   └── SectionHeading.jsx
├── data/
│   └── catalog.js
├── pages/
│   ├── Contato.jsx
│   ├── Filmes.jsx
│   ├── Home.jsx
│   ├── Series.jsx
│   └── Sobre.jsx
├── App.jsx
├── index.css
└── main.jsx
~~~

## Navegação

A aplicação usa rotas por hash para funcionar sem adicionar outra dependência:

- #/ — Início
- #/filmes — Filmes
- #/series — Séries
- #/sobre — Sobre
- #/contato — Contato

## Próximas evoluções

- Substituir os dados de exemplo por uma API de filmes, se o professor solicitar.
- Adicionar autenticação, favoritos ou detalhes individuais sem misturar responsabilidades nas páginas.
- Atualizar os links do GitHub e da Vercel no Footer.jsx quando o repositório e o deploy existirem.
