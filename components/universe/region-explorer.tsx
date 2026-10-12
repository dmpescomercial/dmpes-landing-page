"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { UniverseRegion } from "@/content/universe";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { UniverseCard } from "@/components/universe/universe-card";

export function RegionExplorer({ regions }: { regions: readonly UniverseRegion[] }) {
  const [active, setActive] = useState(0);
  const prefix = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  if (!regions.length) return null;

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % regions.length; break;
      case "ArrowLeft": next = (index - 1 + regions.length) % regions.length; break;
      case "Home": next = 0; break;
      case "End": next = regions.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return <div className="region-explorer">
    <div role="tablist" aria-orientation="horizontal" aria-label="Explorar o universo DMPES por região" className="region-tabs">
      {regions.map((region, index) => <button key={region.id} type="button" role="tab"
        id={`${prefix}-tab-${region.id}`} aria-controls={`${prefix}-panel-${region.id}`}
        aria-selected={active === index} tabIndex={active === index ? 0 : -1}
        ref={element => { tabs.current[index] = element; }}
        onClick={() => setActive(index)} onKeyDown={event => navigate(event, index)}>
        {region.label}<ArrowIcon />
      </button>)}
    </div>
    {regions.map((region, index) => <div key={region.id} role="tabpanel"
      id={`${prefix}-panel-${region.id}`} aria-labelledby={`${prefix}-tab-${region.id}`}
      tabIndex={0} hidden={active !== index} className="region-panel">
      <div className="region-introduction"><h3>{region.title}</h3><p>{region.description}</p></div>
      <div className="universe-card-grid">{region.entries.map(entry => <UniverseCard key={entry.id} entry={entry} />)}</div>
    </div>)}
  </div>;
}
