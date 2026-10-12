"use client";

import { useState } from "react";
import Image from "next/image";
import type { ApprovedGameplay } from "@/content/media";

/** No autoplay or background downloads; real gameplay starts via native controls. */
export function GameplayVideo({ gameplay }: { gameplay: ApprovedGameplay }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="gameplay-fallback">
      <Image src={gameplay.fallback.src} alt={gameplay.fallback.alt}
        width={gameplay.fallback.width} height={gameplay.fallback.height}
        sizes="(min-width: 1024px) 45vw, 100vw" className="hero-image" />
      <p role="status" className="video-status">Não foi possível carregar o vídeo. Exibindo a imagem do gameplay.</p>
    </div>;
  }

  return <video className="hero-video" controls playsInline preload="none"
    src={gameplay.src} poster={gameplay.fallback.src} width={gameplay.fallback.width} height={gameplay.fallback.height}
    aria-label={gameplay.label} onError={() => setFailed(true)}>
    {gameplay.captions && <track kind="captions" src={gameplay.captions.src} srcLang="pt-BR" label={gameplay.captions.label} default />}
    Seu navegador não suporta este vídeo. <a href={gameplay.fallback.src}>Ver a imagem do gameplay</a>.
  </video>;
}
