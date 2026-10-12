"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { GalleryItem } from "@/content/gallery";

export function GalleryCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const [failed, setFailed] = useState(false);
  const preview = item.kind === "image" ? item.asset : item.asset.fallback;
  return <article className={`gallery-card${item.edition ? " gallery-card-exclusive" : ""}`}>
    <button type="button" className="gallery-open" onClick={onOpen} disabled={failed}
      aria-label={`${item.kind === "image" ? "Ampliar imagem" : "Abrir vídeo"}: ${item.title}`}>
      {failed ? <span className="gallery-unavailable">Mídia indisponível</span> :
        <Image src={preview.src} alt={preview.alt} width={preview.width} height={preview.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="gallery-thumbnail" onError={() => setFailed(true)} />}
      {!failed && <span className="gallery-open-label">{item.kind === "image" ? "Ampliar" : "Ver vídeo"}<ArrowIcon /></span>}
    </button>
    <div className="gallery-card-copy">{item.edition && <p className="gallery-edition">EXCLUSIVO {item.edition.toUpperCase()}</p>}<h3>{item.title}</h3><p>{item.description}</p></div>
  </article>;
}
