import Image from "next/image";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { GalleryItem } from "@/content/gallery";

/** One CSS mosaic, one action, three untouched originals. */
export function UniformShowcase({ items, onOpen }: { items: readonly GalleryItem[]; onOpen: (item: GalleryItem) => void }) {
  if (!items.length) return null;
  return <article className="gallery-card uniform-showcase">
    <button type="button" className="uniform-mosaic-open" aria-label={`Explorar uniformes: ${items.map(item => item.title).join(", ")}`} onClick={() => onOpen(items[0])}>
      <span className="uniform-mosaic">
        {items.map(item => {
          const image = item.kind === "image" ? item.asset : item.asset.fallback;
          return <span className="uniform-tile" key={item.id}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height}
              sizes="33vw" className="uniform-mosaic-image" />
            <span className="uniform-name">{item.title}</span>
          </span>;
        })}
      </span>
      <span className="uniform-mosaic-action">Explorar as três capturas<ArrowIcon /></span>
    </button>
    <div className="gallery-card-copy"><h3>Uniformes</h3><p>Três capturas reais, com ampliação individual.</p></div>
  </article>;
}
