# Galeria — entrega de mídia real

A Fase 3 desta conversa é a galeria de experiência de jogo, conforme escopo explícito do responsável. Não inclui o comparativo comercial descrito como Fase 3 no cronograma original.

## Organização

- `content/gallery.ts`: categorias e catálogo tipado de mídias.
- `components/sections/gallery.tsx`: seção e conteúdo estático.
- `components/gallery/`: filtros, cards, placeholders e dialog de ampliação.
- `public/assets/gallery/`: localização recomendada para arquivos reais autorizados (crie quando entregar os assets).

O catálogo atual contém oito imagens oficiais importadas da branch `assets/galeria-dmpes-54`, commit `5004b631345d4040db431e5f22263ee1893bbf0e`. Os espaços pendentes, usados quando uma categoria não tem itens, não são registros de mídia nem capturas do jogo. Quando uma categoria recebe itens reais, seu placeholder desaparece automaticamente. Os filtros continuam mostrando um espaço identificado caso não haja mídia aprovada naquela categoria.

## Adicionar uma imagem

Copie o arquivo real aprovado para `public/assets/gallery/`. Adicione um registro em `galleryItems` com:

```ts
{
  id: "id-unico-da-captura",
  category: "estadios", // estadios | faces | uniformes | gameplay | recursos
  kind: "image",
  title: "Título aprovado pelo responsável",
  description: "Descrição factual aprovada do que a captura mostra.",
  asset: {
    src: "/assets/gallery/seu-arquivo-aprovado.webp",
    alt: "Descrição em pt-BR do conteúdo real da captura.",
    width: 1920, // substitua pela largura real
    height: 1080, // substitua pela altura real
  },
}
```

Os caminhos e as dimensões acima são exemplos de preenchimento, não assets existentes. Use IDs únicos, formato WebP/AVIF e dimensões reais. Os thumbnails reservam espaço 16:9 e usam contain para preservar a imagem inteira; a ampliação também mantém o enquadramento original. Nenhuma modificação estrutural do componente é necessária.

## Adicionar um vídeo

Use `kind: "video"` e `asset` com `src` local terminando em `.mp4`, `label` acessível e `fallback` obrigatório no formato de imagem acima. O poster deve ser um frame real autorizado do mesmo material. `captions: { src: "/assets/gallery/legendas-aprovadas.vtt", label: "Português" }` permite legendas em pt-BR quando houver fala/informação sonora.

O thumbnail usa somente o poster. O player é montado ao abrir o dialog e usa controles manuais, `playsInline`, `preload="none"` e nenhum autoplay. Falha do vídeo exibe a imagem real de fallback e um aviso acessível. Fechar o dialog desmonta o player e interrompe a reprodução. A VSL permanece fora do escopo.

## Aprovação e desempenho

Antes de registrar qualquer mídia, confirme autenticidade, permissão de uso, título, descrição, versão mostrada e características efetivamente existentes. Não adicione números, recursos, marcas, depoimentos ou afirmações sem confirmação. Teste codec, legendas, recorte e tamanho dos arquivos em aparelhos reais. A otimização de `next/image` não dispensa arquivos de origem adequados.

O dialog nativo bloqueia interação com o fundo, permite Escape, mantém foco dentro e restaura foco ao botão que abriu a mídia. Os filtros são botões com `aria-pressed`, acionáveis por Tab/Enter/Espaço; a mudança de categoria é anunciada em uma região de status. Movimento reduzido desativa a microanimação de thumbnail.

## Integração da primeira seleção oficial

Os oito arquivos mantêm seus nomes e bytes originais, incluindo as extensões duplicadas `.jpg.jpg`/`.png.png`. `next/image` fornece tamanhos responsivos, carregamento lazy e versões otimizadas em cache sem regravar os originais. Não houve geração por IA, edição de pixels ou montagem de um arquivo novo.

A composição dos uniformes é um único card com um mosaico CSS de três capturas lado a lado, em desktop e mobile. O mobile enquadra o centro das imagens somente no thumbnail, sem distorção; o original inteiro permanece no lightbox. Um único clique abre a coleção, navegável pelos nomes, botões Anterior/Próximo e setas do teclado, sem fechar/reabrir o dialog. As ampliações dos uniformes usam qualidade 90, mantendo os arquivos originais intactos.

Paulistão 2026 e Cariocão 2026 recebem `edition: "Completo"`, com indicação textual no card e na ampliação. Essa confirmação veio do responsável nesta etapa e não altera a oferta única das três versões nem implica vínculo oficial com organizadores ou Konami. As descrições não repetem alegações de licenciamento impressas nos materiais.
