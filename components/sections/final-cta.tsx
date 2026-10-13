import { Container } from "@/components/ui/container";
import { PendingAction } from "@/components/ui/pending-action";
import { finalCTA } from "@/content/final-cta";
import { commercialLinks } from "@/content/links";
import { formattedPrice, product } from "@/content/product";

export function FinalCTA() {
  return <section id="acesso" className="final-cta" aria-labelledby="final-cta-title"><Container>
    <div className="final-cta-grid">
      <div className="final-cta-heading"><h2 id="final-cta-title">{finalCTA.title}</h2><p>{finalCTA.description}</p></div>
      <div className="final-cta-offer">
        <p className="final-cta-price"><strong>{formattedPrice}</strong><span>por {product.subscription.months} meses</span></p>
        <p className="final-cta-editions">{finalCTA.editions}</p>
        <div className="final-cta-renewal"><h3>Renovação</h3><p>{finalCTA.renewal}</p></div>
        <div className="final-cta-actions"><PendingAction id="final-checkout" label={finalCTA.primaryLabel} explanation={commercialLinks.checkout.explanation} primary /><PendingAction id="final-whatsapp" label={finalCTA.secondaryLabel} explanation={commercialLinks.whatsapp.explanation} /></div>
      </div>
    </div>
    <div className="final-cta-conditions"><div><h3>Durante o período ativo</h3><p>{product.subscription.activeBenefits}</p></div><div><h3>Após o vencimento</h3><p>{product.subscription.expiry}</p></div></div>
  </Container></section>;
}
