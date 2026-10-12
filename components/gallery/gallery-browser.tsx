"use client";

import { useState } from "react";
import { galleryCategories, type GalleryCategory, type GalleryItem } from "@/content/gallery";
import { UniformShowcase } from "@/components/gallery/uniform-showcase";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryPlaceholder } from "@/components/gallery/gallery-placeholder";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

export function GalleryBrowser({ items }: { items: readonly GalleryItem[] }) {
  const [filter, setFilter] = useState<GalleryCategory | "todos">("todos");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const visibleItems = filter === "todos" ? items : items.filter(item => item.category === filter);
  const uniforms = visibleItems.filter(item => item.category === "uniformes");
  const pending = galleryCategories.filter(category => (filter === "todos" || category.id === filter) && !items.some(item => item.category === category.id));
  const label = filter === "todos" ? "Todas as categorias" : galleryCategories.find(category => category.id === filter)?.label;

  return <div className="gallery-browser">
    <div role="group" aria-label="Filtrar mídias por categoria" className="gallery-filters">
      {[{ id: "todos" as const, label: "Todos" }, ...galleryCategories].map(category =>
        <button type="button" key={category.id} aria-pressed={filter === category.id} aria-controls="gallery-results"
          onClick={() => setFilter(category.id)}>{category.label}</button>)}
    </div>
    <p role="status" className="gallery-filter-status">{label}{visibleItems.length === 0 ? " · aguardando mídia real aprovada." : " · mídias aprovadas disponíveis."}</p>
    <div id="gallery-results" className="gallery-grid">
      {visibleItems.map(item => item.category === "uniformes"
        ? item.id === uniforms[0]?.id && <UniformShowcase key="uniformes" items={uniforms} onOpen={setSelected} />
        : <GalleryCard key={item.id} item={item} onOpen={() => setSelected(item)} />)}
      {pending.map(category => <GalleryPlaceholder key={category.id} category={category} />)}
    </div>
    {selected && <GalleryLightbox key={selected.id} item={selected} collection={selected.category === "uniformes" ? items.filter(item => item.category === "uniformes") : undefined} onClose={() => setSelected(null)} />}
  </div>;
}
