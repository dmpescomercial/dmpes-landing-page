# DMPES Sudamerican 5.4 — Codex Project Brief

Documentation-first handoff for a standalone, cinematic/premium landing page using Next.js, TypeScript and Tailwind CSS.

## Getting started
1. Place these files at the root of a new Git repository.
2. Add approved real DMPES media to `public/assets/` once a Next.js app has been initialized.
3. Open the repository in Codex.
4. Use the prompt in `prompts/START-CODEX.md`.
5. Review each incremental implementation before moving to the next phase.

## Reference order
`AGENTS.md` → `docs/PRODUCT.md` → `docs/BRAND.md` → `docs/LANDING-PAGE.md` → `docs/TECHNICAL.md` → `docs/DECISIONS.md` → `docs/VSL.md`.

These documents are specifications, not a completed website. Several production details still require validation (see DECISIONS.md).

## Fase 1 implementada

Base Next.js App Router, TypeScript strict e Tailwind CSS, com componentes de servidor, Hero estático responsivo, tokens da marca, fontes Anton/Inter locais e dados centralizados. A rota `/` é uma prévia de desenvolvimento; domínio e rota pública continuam pendentes de aprovação. A prévia tem `noindex, nofollow`.

### Executar localmente

Requer Node.js 22 ou superior e npm. As versões das dependências estão fixadas no `package.json` e no lockfile.

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000` no navegador local. Para validar e executar o build de produção:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

O cache npm usa `/tmp/dmpes-npm-cache` para funcionar no ambiente de nuvem. Não há necessidade de variáveis de ambiente ou credenciais nesta fase.

### Organização

- `app/`: layout global, metadados provisórios, tokens e página inicial.
- `components/layout/`: cabeçalho e rodapé sem links comerciais inventados.
- `components/sections/`: Hero e slot de imagem autêntica.
- `components/ui/`: container e botão de navegação interna reutilizáveis.
- `content/product.ts`: fatos, preço, versões e termos confirmados em PRODUCT.md.
- `content/media.ts`: configuração tipada da imagem do Hero, inicialmente vazia.
- `public/assets/README.md`: orientações para entrega de mídia real.

O CTA “Explorar o DMPES” leva ao Universo DMPES. Não existe checkout ativo. Preço e renovação ficam juntos no Hero. O slot do Hero aceita imagem real ou MP4 com poster e fallback obrigatório, sem autoplay e sem download prévio do vídeo. No mobile, a mídia fica entre a descrição e o bloco comercial. Não foram implementados comparativo, galerias, FAQ, analytics, pagamentos ou VSL.

### Pendências do responsável

Fornecer logo e mídia real autorizada (com dimensões, descrição e permissão de uso), aprovar texto e visual, definir domínio/rota e concluir os bloqueios comerciais, técnicos e jurídicos listados em `docs/DECISIONS.md` antes da publicação. Metadados sociais, canonical e sitemap dependem do domínio e dos assets aprovados. Compatibilidade Mobile não foi presumida.

As Fases 1 e 2 foram aprovadas visualmente e a galeria da Fase 3 está em revisão. Não avançar para fases posteriores nem publicar sem aprovação.

## Fase 2 — Universo DMPES

`content/universe.ts` centraliza os números confirmados e o catálogo regional. `components/sections/universe.tsx` apresenta os dados; `components/universe/region-explorer.tsx` limita a interação cliente às abas, e `universe-card.tsx` padroniza os cards.

América do Sul abre por padrão. As abas aceitam clique, Tab, setas esquerda/direita, Home e End; apenas a aba selecionada entra na ordem de tabulação. O painel ativo também recebe foco via Tab. Europa, Ásia e Seleções mostram somente o escopo documentado, sem listas de clubes inventadas ou contagens regionais. Torneios cuja disponibilidade segue pendente não são anunciados.

Para adicionar escudos, bandeiras ou imagens oficiais autorizadas, coloque os arquivos em `public/assets/` e preencha o campo `visual` do card em `content/universe.ts`, com caminho `/assets/...`, alt em pt-BR e dimensões reais. As imagens usam carregamento lazy de `next/image`; o slot de 48 × 48 px no mobile e 64 × 64 px nas demais larguras preserva o layout e o recorte contém a imagem inteira. Sem assets, o slot é explicitamente identificado como “Visual pendente”.

O CTA “Explorar o DMPES” e o link “Universo DMPES” levam à nova seção. Preço, renovação, expiração e suporte não foram alterados. Não há comparativo, VSL, checkout, analytics ou galeria de mídia fictícia nesta entrega.

A revisão final da Fase 2 está registrada em `docs/PHASE2-REVIEW.md`, com a conferência das quatro abas contra PRODUCT.md e orientações para os assets oficiais.

## Fase 3 — experiência de jogo e galeria

Esta etapa implementa a galeria solicitada pelo responsável, com filtros Estádios, Faces, Uniformes, Gameplay e Recursos, sem comparativo comercial. O catálogo `content/gallery.ts` contém oito imagens oficiais; categorias futuras sem material mantêm espaços pendentes claramente identificados. Não há screenshots ou vídeos fictícios.

Para adicionar mídia real, consulte `docs/GALLERY-HANDOFF.md`: copie os arquivos autorizados para `public/assets/gallery/` e preencha os registros tipados. Imagens usam thumbnails lazy e ampliação sob demanda. Vídeos usam poster real e só montam o player no dialog, sem autoplay ou download prévio de MP4. Escape, fechamento, foco e movimento reduzido são respeitados. A reprodução com assets reais precisa ser validada após a entrega.

As Fases 1 e 2, o Hero e as condições comerciais permanecem preservados. Sem avanço ao comparativo, VSL, checkout, analytics ou deploy.

A primeira seleção oficial inclui estádio noturno, jogador do Barcelona, Palmeiras x Grêmio, uniformes de Palmeiras/Estudiantes/Peñarol e recursos Paulistão/Cariocão 2026 exclusivos do Completo. Os originais permanecem intactos em `public/assets/gallery/`; `next/image` otimiza a entrega. A composição horizontal dos uniformes é um único mosaico CSS, com os três originais acessíveis individualmente no mesmo lightbox por nomes, Anterior/Próximo e setas do teclado.
