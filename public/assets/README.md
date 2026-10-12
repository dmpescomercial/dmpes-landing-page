# Mídia aprovada

Adicione aqui somente imagens e vídeos reais aprovados pelo responsável pelo DMPES, com permissão de uso registrada. Nenhuma mídia foi fornecida para a Fase 1.

Para usar uma imagem, configure `media.hero` em `content/media.ts` com caminho `/assets/...`, descrição acessível em pt-BR e dimensões reais. Prefira WebP/AVIF e verifique o recorte 4:5 em celular e desktop. O Hero usa `next/image` e reserva espaço antes de carregar a imagem.

Para usar MP4 real, configure `media.gameplay` com `src`, `label` acessível e `fallback` obrigatório (imagem real com `src`, `alt`, `width` e `height`). O vídeo tem prioridade sobre `media.hero`. O fallback serve de poster inicial e substitui o player quando ocorre falha de reprodução. O player usa controles nativos, reprodução manual, `playsInline` e `preload="none"`: não baixa o MP4 antes da interação nem inicia automaticamente. O enquadramento 4:5 reserva espaço e usa `object-fit: contain` no vídeo para preservar a captura inteira.

Se houver fala ou informação sonora relevante, forneça legendas WebVTT em pt-BR via `captions: { src, label }`. Teste codec, poster, áudio, legendas e desempenho em dispositivos reais antes da publicação. Sem assets configurados, permanece o placeholder explicitamente identificado.

A VSL não faz parte desta fase. Não adicionar vídeos fictícios, autoplay com som ou mídia sem permissão.
