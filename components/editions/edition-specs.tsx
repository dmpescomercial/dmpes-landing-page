import { product } from "@/content/product";

export type Edition = (typeof product.versions)[number];

export function EditionSpecs({ edition }: { edition: Edition }) {
  const specs = [
    { label: "Faces", value: edition.faces },
    { label: "Estádios", value: edition.stadiums },
    { label: "Tamanho informado", value: `${edition.downloadGB} GB` },
    { label: "Espaço para extração", value: `${edition.extractionGB} GB` },
    { label: "Campeonatos extras", value: edition.extraChampionships ? "Incluídos" : "Não incluídos" },
    { label: "Master League Pro", value: edition.masterLeaguePro ? "Incluído" : "Não incluído" },
  ];

  return <dl className="edition-specs">{specs.map(spec => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>;
}
