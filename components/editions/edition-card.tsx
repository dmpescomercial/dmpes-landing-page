import { editionCopy, editionDescriptions } from "@/content/editions";
import { EditionSpecs, type Edition } from "@/components/editions/edition-specs";

export function EditionCard({ edition }: { edition: Edition }) {
  const featured = edition.name === "Completo";
  const titleId = `edition-${edition.name.toLowerCase()}-title`;

  return <article className={`edition-card${featured ? " edition-card-featured" : ""}`} aria-labelledby={titleId}>
    <p className="edition-card-label">{featured ? "Recursos exclusivos" : "Incluída na assinatura"}</p>
    <h3 id={titleId}>{edition.name}</h3>
    <p className="edition-description">{editionDescriptions[edition.name]}</p>
    <EditionSpecs edition={edition} />
    {edition.extraChampionships && <p className="edition-extras-note">Exemplos de extras: {editionCopy.completeExamples.join(", ")}.</p>}
  </article>;
}
