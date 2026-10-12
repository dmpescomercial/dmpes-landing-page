# Fase 2 — revisão do conteúdo

Fonte: `docs/PRODUCT.md`, seção Scope. Esta revisão não muda fatos do produto.

| Aba | Conteúdo confrontado com a fonte | Limites preservados |
| --- | --- | --- |
| América do Sul | Brasil Série A/B; Argentina, Peru e Colômbia 1ª/2ª divisões; Uruguai; Equador e Chile 1ª divisão; outros clubes CONMEBOL | Nenhuma divisão uruguaia ou lista de clubes individuais presumida |
| Europa | Premier League, La Liga, Serie A Enilive, Bundesliga e outros clubes europeus | Nenhuma liga adicional ou contagem regional presumida |
| Ásia | Liga Saudita e clubes da AFC Champions League | Grupo de clubes não equivale à confirmação do formato/disponibilidade do torneio |
| Seleções | Total de 109: Europa, África, América do Norte/Central, América do Sul e Ásia | Sem nomes de seleções ou totais regionais inventados |

O total “mais de 500 clubes” permanece confirmado. Torneios datados e extras cuja lista/disponibilidade depende de validação continuam excluídos. “Rest of World” e equipes clássicas constam da fonte, mas não foram atribuídos arbitrariamente a uma dessas regiões; o explorador não pretende ser uma lista exaustiva de cada clube do produto.

A introdução do Universo orienta a navegação. “Sul-americano por essência” explica a prioridade editorial e a separação de DMPES GLOBAL, sem repetir a lista de ligas do Hero. Headline, descrição, mídia, CTA e condições comerciais do Hero são preservados.

Os cards ficam mais compactos abaixo de 640 px por ajuste de padding, margens e slot visual, sem ocultar texto. As abas mantêm alvo mínimo de 48 px e os controles de teclado existentes.

Assets futuros: preencher `visual` em `content/universe.ts` com `{ src, alt, width, height }`, usando arquivo real autorizado de `public/assets/`. O componente já alterna placeholder/imagem; o espaço de 48 px no mobile e 64 px nas demais larguras é reservado, e `object-fit: contain` preserva o escudo ou bandeira. Nenhuma alteração estrutural é necessária.
