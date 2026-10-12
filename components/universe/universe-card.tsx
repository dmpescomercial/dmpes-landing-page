import Image from "next/image";
import type { UniverseEntry } from "@/content/universe";

export function UniverseCard({ entry }: { entry: UniverseEntry }) {
  return <article className={`universe-card${entry.featured ? " universe-card-featured" : ""}`}>
    <div className="universe-card-top">
      {entry.visual ? <Image src={entry.visual.src} alt={entry.visual.alt} width={entry.visual.width} height={entry.visual.height} sizes="(max-width: 639px) 48px, 64px" className="universe-visual" /> :
        <div className="universe-visual-slot"><span>Visual<br />pendente</span></div>}
      <span className="eyebrow">{entry.featured ? "Em destaque" : entry.category}</span>
    </div>
    <h4>{entry.name}</h4>
    {entry.divisions && <ul className="division-list" aria-label={`Divisões de ${entry.name}`}>{entry.divisions.map(division => <li key={division}>{division}</li>)}</ul>}
    <p className="universe-card-detail">{entry.detail}</p>
  </article>;
}
