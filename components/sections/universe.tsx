import { Container } from "@/components/ui/container";
import { RegionExplorer } from "@/components/universe/region-explorer";
import { universeRegions, universeStats } from "@/content/universe";

export function Universe() {
  return <section id="universo" aria-labelledby="universe-title" className="universe-section">
    <Container>
      <div className="universe-heading"><div><p className="eyebrow">Universo DMPES / Next Season</p><h2 id="universe-title">Muitas ligas.<br /><span>Uma paixão em comum.</span></h2></div><p className="universe-heading-copy">Explore as abas para conhecer as ligas, os grupos de clubes e as regiões representadas pelas seleções.</p></div>
      <dl className="universe-stats">{universeStats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd><span className="universe-stat-value">{stat.value}</span><span className="universe-stat-detail">{stat.detail}</span></dd></div>)}</dl>
      <RegionExplorer regions={universeRegions} />
      <p className="universe-note">Escudos, bandeiras e imagens oficiais aguardam entrega e autorização de uso. Os torneios com nomenclatura ou disponibilidade pendentes de validação não estão listados nesta prévia.</p>
    </Container>
  </section>;
}
