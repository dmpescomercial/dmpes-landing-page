import { Container } from "@/components/ui/container";
import { EditionCard } from "@/components/editions/edition-card";
import { SubscriptionSummary } from "@/components/editions/subscription-summary";
import { editionCopy } from "@/content/editions";
import { product } from "@/content/product";

export function Editions() {
  return <section id="edicoes" className="editions-section" aria-labelledby="editions-title">
    <Container>
      <div className="editions-heading"><p className="eyebrow">Completo / Lite / Mobile</p><h2 id="editions-title">Três formas de jogar.<br /><span>Uma única assinatura.</span></h2><p>{editionCopy.introduction}</p></div>
      <p className="editions-shared">{editionCopy.sharedFeatures}</p>
      <div className="editions-grid">{product.versions.map(edition => <EditionCard key={edition.name} edition={edition} />)}</div>
      <p className="editions-technical-note">{editionCopy.technicalNote}</p>
      <SubscriptionSummary />
    </Container>
  </section>;
}
