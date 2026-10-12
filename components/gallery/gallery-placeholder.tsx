import type { galleryCategories } from "@/content/gallery";

type Category = (typeof galleryCategories)[number];

export function GalleryPlaceholder({ category }: { category: Category }) {
  return <article className="gallery-card gallery-pending">
    <div className="gallery-placeholder-frame"><span className="eyebrow">Mídia real pendente</span><span className="gallery-placeholder-title">{category.label}</span><span className="gallery-placeholder-label">Espaço reservado · sem captura do jogo</span></div>
    <div className="gallery-card-copy"><h3>{category.label}</h3><p>{category.handoff}</p></div>
  </article>;
}
