"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { GameplayVideo } from "@/components/sections/gameplay-video";
import type { GalleryItem } from "@/content/gallery";

export function GalleryLightbox({ item: initialItem, collection, onClose }: { item: GalleryItem; collection?: readonly GalleryItem[]; onClose: () => void }) {
  const entries = collection?.length ? collection : [initialItem];
  const [index, setIndex] = useState(() => Math.max(0, entries.findIndex(item => item.id === initialItem.id)));
  const item = entries[index] ?? initialItem;
  const dialog = useRef<HTMLDialogElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const [failed, setFailed] = useState(false);
  const prefix = useId();

  useEffect(() => {
    const element = dialog.current;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    close.current?.focus();
    return () => {
      element?.querySelectorAll("video").forEach(video => video.pause());
      element?.close();
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, []);

  function selectImage(next: number) {
    setFailed(false);
    setIndex((next + entries.length) % entries.length);
  }

  return <dialog ref={dialog} className="gallery-lightbox"
    aria-labelledby={`${prefix}-title`} aria-describedby={`${prefix}-description`}
    onKeyDown={event => {
      if (entries.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        selectImage(index + (event.key === "ArrowRight" ? 1 : -1));
      }
    }}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="gallery-lightbox-content">
      <div className="gallery-lightbox-header"><h3 id={`${prefix}-title`}>{item.title}</h3><button type="button" ref={close} className="gallery-close" onClick={onClose} aria-label="Fechar mídia ampliada">Fechar <span aria-hidden="true">×</span></button></div>
      <div className="gallery-expanded-media">
        {item.kind === "video" ? <GameplayVideo gameplay={item.asset} /> : failed ?
          <p role="status" className="gallery-unavailable">Não foi possível carregar esta imagem.</p> :
          <Image key={item.id} src={item.asset.src} quality={entries.length > 1 ? 90 : 75} alt={item.asset.alt} width={item.asset.width} height={item.asset.height}
            sizes="(max-width: 768px) 100vw, 85vw" loading="eager" className="gallery-expanded-image" onError={() => setFailed(true)} />}
      </div>
      {entries.length > 1 && <div className="uniform-viewer-controls">
        <div className="uniform-viewer-pagination"><button type="button" className="gallery-close" onClick={() => selectImage(index - 1)} aria-label="Uniforme anterior">Anterior</button><p role="status">{index + 1} de {entries.length} · {item.title}</p><button type="button" className="gallery-close" onClick={() => selectImage(index + 1)} aria-label="Próximo uniforme">Próximo</button></div>
        <div className="uniform-viewer-choices" role="group" aria-label="Escolher uniforme">{entries.map((entry, entryIndex) => <button type="button" key={entry.id} aria-pressed={index === entryIndex} onClick={() => selectImage(entryIndex)}>{entry.title}</button>)}</div>
      </div>}
      {item.edition && <p className="gallery-edition">EXCLUSIVO {item.edition.toUpperCase()}</p>}
      <p id={`${prefix}-description`} className="gallery-expanded-description">{item.description}</p>
    </div>
  </dialog>;
}
