# Decisions, Assumptions & Open Questions

## Confirmed
- Product: DMPES SUDAMERICAN 5.4 — Next Season; independent from DMPES GLOBAL.
- Visual: cinematic + premium hybrid; colors/fonts in BRAND.md.
- Stack: Next.js + TypeScript + Tailwind CSS; Codex to implement.
- Price: R$49.99 for 3 months; same amount for current renewals.
- Three versions included together, never separately sold.
- Expired customers retain locally installed PATCH functionality but lose membership/downloads, updates and support.
- Card and PIX Automático auto-renew when authorized; conventional PIX does not.
- WhatsApp pre-sales only; Telegram technical support for active customers.
- Owner has visual assets; high-quality VSL still to be produced.

## Proposed, not yet approved
- Route `/sudamerican` and deployment topology.
- Exact section order and wording in LANDING-PAGE.md.
- GA4/GTM and event schema.
- Optional VSL placement, playback strategy and script.
- Additional longer-term subscription plans or discounts; NOT current offer.

## Blockers before publication
1. Real LastLink checkout URL, recurring payment setup and post-payment behavior.
2. Exact refund, cancellation and renewal notice policy; legal/compliance review.
3. Approved domain, route, hosting, privacy policy and legal footer.
4. Verified PC/mobile compatibility and technical minimum requirements.
5. Actual approved asset files, filenames and permissions; real customer testimonials.
6. Final accuracy check for competition names/counts and feature availability.
7. Support and WhatsApp URLs; support eligibility and access method.
8. Analytics IDs, consent implementation and confirmed-purchase attribution feasibility.
9. Copyright/trademark/licensing review for game footage, team/league branding, mod distribution and third-party content.

## Operating principle
When a blocker affects factual copy or a payment flow, show a clearly marked placeholder in development and ask the owner; do not fabricate an answer.

## Fase 1 — refinamento autorizado pelo responsável
- Fundação técnica, arquitetura, paleta e fontes aprovadas; Hero aprovado visualmente pelo responsável antes do início da Fase 2.
- Headline preservada: “O FUTEBOL SUL-AMERICANO É PROTAGONISTA.”
- Descrição do Hero autorizada: “Viva o Brasileirão Série A e B, as grandes ligas da América do Sul e muito mais. São mais de 500 clubes e 109 seleções em uma experiência renovada para PES 2017.”
- CTA de navegação interna: “Explorar o DMPES”, enquanto o checkout não estiver validado.
- No mobile, mídia após a descrição e antes do bloco comercial; desktop mantém mídia ao lado do conteúdo.
- Suporte a MP4 autêntico com poster/fallback real, controles nativos e reprodução manual. Nenhum asset fictício será adicionado.
- Condições comerciais preservadas. Sem checkout, deploy ou avanço para a Fase 2.

## Fase 2 — Universo DMPES autorizado
- Fase 1 aprovada visualmente pelo responsável. Refinamento final preservado.
- Escopo da Fase 2: números confirmados, exploração por América do Sul, Europa, Ásia e Seleções; sem comparativo, VSL, checkout, analytics ou deploy.
- América do Sul abre por padrão, com destaque para Brasileirão Série A/B e primeiras/segundas divisões de Argentina, Peru e Colômbia.
- O escopo confirmado de ligas e grupos de clubes é a fonte dos cards. Os torneios datados continuam excluídos até validação de nomenclatura/disponibilidade; clubes da AFC Champions League não significam confirmação do formato do torneio.
- Não são presumidos clubes individuais, divisões uruguaias, totais regionais ou nomes de seleções.
- Assets oficiais continuam pendentes. Slots tipados aceitam imagens reais autorizadas, sem escudos ou bandeiras fictícios.
- Navegação interna do Hero e do cabeçalho aponta para o Universo DMPES. Condições comerciais e canais de suporte preservados.

## Fase 2 — direção aprovada e revisão final solicitada
- Direção visual aprovada pelo responsável; conteúdo das quatro abas segue em revisão.
- Introdução do Universo passa a orientar a exploração; “Sul-americano por essência” explica a prioridade editorial, sem repetir a lista do Hero.
- Cards mais compactos no mobile por ajustes de espaçamento; conteúdo e controles acessíveis preservados.
- Catálogo regional conferido com PRODUCT.md sem novas competições. Auditoria em `docs/PHASE2-REVIEW.md`.
- Hero e condições comerciais permanecem inalterados; sem deploy ou avanço para a Fase 3.

## Fase 3 — galeria de experiência de jogo autorizada
- Fase 2 aprovada visualmente pelo responsável. Hero e conteúdo das Fases 1/2 preservados.
- O escopo pedido nesta conversa define Fase 3 como galeria, substituindo a ordem original do cronograma técnico para esta entrega; comparativo comercial segue fora do escopo.
- Categorias: Estádios, Faces, Uniformes, Gameplay e Recursos. Catálogo real vazio até entrega dos assets aprovados.
- Espaços pendentes são separados dos itens de mídia e nunca apresentados como capturas do jogo.
- Imagens otimizadas com ampliação em dialog acessível; vídeo manual usa poster/fallback real e não carrega MP4 antes da interação.
- Sem VSL, checkout, analytics, mudanças comerciais ou deploy. Entrega de assets documentada em `docs/GALLERY-HANDOFF.md`.

## Fase 3 — integração oficial autorizada
- O responsável autorizou a integração de oito imagens e confirmou seu uso comercial.
- Fonte dos originais: `assets/galeria-dmpes-54`, commit `5004b631345d4040db431e5f22263ee1893bbf0e`; importação seletiva dos assets sem reset, checkout ou merge de código da outra branch.
- Estádio noturno, jogador do Barcelona, Palmeiras x Grêmio, uniformes de Palmeiras/Estudiantes/Peñarol e materiais de Paulistão/Cariocão 2026.
- Paulistão e Cariocão confirmados como exclusivos do Completo; sem alegação de vínculo oficial ou licenciamento na descrição da landing page.
- Composição horizontal dos três uniformes em CSS; arquivos originais preservados e ampliáveis individualmente.
- Hero, Fase 2 e condições comerciais preservados. Sem deploy ou Fase 4; revisão final da Fase 3 permanece pendente.

## Fase 3 — correção do mosaico de uniformes
- O responsável corrigiu a interpretação anterior: exige um único card de Uniformes, não três cards em uma faixa.
- O único mosaico usa os três originais lado a lado por CSS; no mobile, o thumbnail enquadra o centro sem distorcer as imagens. A ampliação preserva todo o original.
- O mesmo dialog permite alternar entre Palmeiras, Estudiantes e Peñarol por botões, nomes e setas, sem remontar o dialog ou perder o foco.
- Arquivos originais, demais capturas, Hero, Fase 2 e condições comerciais preservados. Sem deploy ou Fase 4.

## Fase 3 — refinamento final solicitado
- Estrutura da galeria aprovada; alterações restritas à legibilidade, espaçamentos e hierarquia dos cards existentes.
- Descrições curtas, maior contraste e textos de corpo de 14 px no mobile; título principal preservado.
- Paulistão/Cariocão identificados por “EXCLUSIVO COMPLETO”, com borda verde discreta e mesmo aviso na ampliação.
- Mosaico único e navegação individual mantidos; originais, Hero, Fase 2 e condições comerciais preservados.
- Sem deploy ou Fase 4; aguardar aprovação final.

## Aprovação final — Fase 3 concluída (2026-10-12)

O responsável aprovou visualmente a Fase 3 após revisar as capturas desktop e mobile do refinamento final, incluindo:
- Card único com mosaico horizontal de Palmeiras, Estudiantes e Peñarol.
- Ampliações individuais, navegação no lightbox e acessibilidade.
- Identificação “EXCLUSIVO COMPLETO” de Paulistão 2026 e Cariocão 2026.
- Legibilidade, acabamento visual e responsividade.

Estado: Fase 3 concluída e aprovada. O código completo das Fases 1, 2 e 3, a configuração do projeto, o catálogo e os oito assets oficiais estão consolidados na branch de desenvolvimento `develop/fase-3-aprovada`. As capturas de revisão permanecem na branch `review/capturas-fase-1`, e a origem das mídias permanece em `assets/galeria-dmpes-54`.

Nenhuma alteração adicional nas Fases 1, 2 ou 3 deve ocorrer sem nova solicitação do responsável. Não realizar deploy. Aguardar o briefing da Fase 4; a aprovação desta etapa não autoriza iniciar a próxima implementação.

## Fase 4 — comparativo de edições autorizado
- O responsável aprovou arquitetura, componentes, copy e responsividade e autorizou implementar a Fase 4 em branch específica baseada em `develop/fase-3-aprovada` (`af9928e`).
- Completo: “A experiência mais completa do DMPES.” Lite: “Conteúdo e armazenamento em equilíbrio.” Mobile: “A edição com menor tamanho informado.”
- Cards informativos com destaque premium do Completo, sem preços individuais. Paulistão, Cariocão e Copa do Nordeste são exemplos exclusivos de extras do Completo autorizados nesta entrega.
- Especificações de `content/product.ts`, com rótulo “Tamanho informado”; compatibilidade, requisitos e execução Mobile permanecem em validação.
- Um bloco comercial nesta seção: R$ 49,99 por três meses para as três edições, benefícios no período ativo, renovação autorizada/configurada, ausência de renovação automática do PIX convencional e encerramento dos benefícios após vencimento.
- Checkout inativo. Componentes de servidor, cards empilhados até 1023 px e três colunas no desktop.
- Fases 1–3 preservadas; sem deploy ou Fase 5. A Fase 4 permanece em revisão visual até aprovação do responsável.

## Fase 4 — refinamento do bloco comercial
- Arquitetura, três cards, destaque do Completo e preço aprovados visualmente pelo responsável.
- Refinamento autorizado apenas no bloco comercial: benefícios ativos destacados, renovação e vencimento separados por divisórias, títulos e espaçamento.
- Todas as condições permanecem visíveis, sem accordion, novas ofertas ou alteração de texto comercial centralizado.
- Cards e Fases 1–3 preservados. Checkout inativo, sem deploy ou Fase 5. Aprovação final da Fase 4 pendente.

## Aprovação final — Fase 4 concluída (2026-10-12)

O responsável aprovou oficialmente a Fase 4 após revisar as capturas desktop e mobile do refinamento comercial:
- Três cards comparativos de Completo, Lite e Mobile, com destaque visual do Completo e especificações técnicas.
- Bloco comercial único de R$ 49,99 por três meses, incluindo as três edições.
- Hierarquia dos benefícios durante o período ativo e apresentação transparente da renovação e do vencimento.
- Responsividade e identidade visual.

Estado: Fase 4 concluída e aprovada. Implementação e refinamento consolidados na branch `develop/fase-4-edicoes`, nos commits `0ce0fce` e `f31fbcd`, acrescidos deste registro de aprovação. A branch parte de `develop/fase-3-aprovada` (`af9928e`) e preserva as Fases 1–3 e os oito assets oficiais. As capturas estão na branch `review/capturas-fase-1`, em `review-exports/phase-4/`.

Checkout permanece inativo. Não realizar deploy, não iniciar a Fase 5 e não modificar as fases aprovadas sem nova solicitação. Aguardar o próximo briefing do responsável. Este registro substitui o estado de aprovação pendente nas entradas anteriores da Fase 4.

## Fase 5 — Como funciona autorizado
- Responsável aprovou a proposta e autorizou implementação a partir de `develop/fase-4-edicoes` (`bbd5b7f`), na branch `develop/fase-5-como-funciona`.
- Seção “DO ACESSO AO CAMPO.” imediatamente após comparativo/bloco comercial e antes de “Sul-americano por essência”.
- Copy aprovada: contratação pela LastLink com três edições na assinatura, arquivos na área de membros durante o período ativo, tutoriais e instalação orientada.
- Quatro etapas com igual peso visual, lista ordenada, ícones decorativos e componentes de servidor; quatro colunas desktop, duas tablet e uma mobile.
- WhatsApp apenas comercial pré-venda; Telegram técnico durante o período ativo. Sem preço ou CTA adicional.
- Sem promessas de acesso instantâneo, instalação automática, compatibilidade, prazos ou requisitos não confirmados.
- Fases 1–4 e assets preservados. Checkout inativo; sem deploy ou Fase 6. Aprovação visual da Fase 5 pendente.

## Aprovação final — Fase 5 concluída (2026-10-12)

O responsável aprovou oficialmente a Fase 5 após revisar as capturas desktop e mobile:
- Título “DO ACESSO AO CAMPO.” e quatro etapas numeradas: contratação, área de membros, tutoriais e instalação.
- Distinção clara entre WhatsApp comercial pré-venda e Telegram técnico durante o período ativo.
- Layout responsivo, tipografia, contrastes e identidade visual.
- Ausência de promessas de acesso imediato ou instalação automática.

Estado: Fase 5 concluída e aprovada. Implementação consolidada na branch `develop/fase-5-como-funciona`, a partir do commit `6dca248`, acrescido deste registro de aprovação. As Fases 1–4 e os oito assets oficiais permanecem integralmente preservados. As capturas de revisão estão em `review-exports/phase-5/`, na branch `review/capturas-fase-1`.

Este registro substitui o estado de aprovação pendente da Fase 5. Checkout permanece inativo. Não realizar deploy, não iniciar a Fase 6 e não modificar as fases aprovadas sem nova solicitação. Aguardar o próximo briefing do responsável.

## Fase 6 — FAQ autorizada
- Implementação autorizada a partir de `develop/fase-5-como-funciona` (`2fc26cf`) na branch `develop/fase-6-faq`.
- Título “TUDO O QUE VOCÊ PRECISA SABER.” e cinco perguntas/respostas aprovadas: edições, vencimento, renovação, arquivos/tutoriais e suporte.
- Seção imediatamente após Como funciona e antes de Sul-americano por essência.
- Dados centralizados com edições, preço, período e renovação reutilizados de `content/product.ts`; condições anteriores preservadas.
- Accordion nativo details/summary em componentes de servidor, inicialmente fechado, múltiplos itens abertos, foco visível e indicadores decorativos por estado real. Sem bibliotecas adicionais.
- Sem respostas não validadas sobre compatibilidade, cancelamento, reembolso ou prazos.
- Fases 1–5 e oito assets preservados. Sem checkout, deploy ou Fase 7. Aprovação visual da Fase 6 pendente.
