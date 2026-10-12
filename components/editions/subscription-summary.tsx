import { formattedPrice, product } from "@/content/product";
import { editionCopy } from "@/content/editions";

export function SubscriptionSummary() {
  return <aside id="assinatura-edicoes" className="edition-subscription" aria-labelledby="subscription-title">
    <div className="edition-subscription-intro">
      <p className="eyebrow">Um único acesso / três edições</p>
      <h3 id="subscription-title">Uma assinatura.<br />As três edições.</h3>
      <p className="edition-price"><strong>{formattedPrice}</strong><span>por {product.subscription.months} meses</span></p>
      <p className="edition-includes">{product.subscription.includes}</p>
      <p className="edition-checkout-status">{editionCopy.checkoutStatus}</p>
    </div>
    <div className="edition-subscription-details">
      <section className="edition-active-benefits" aria-labelledby="subscription-benefits-title"><h4 id="subscription-benefits-title">Durante o período ativo</h4><p>{product.subscription.activeBenefits}</p></section>
      <div className="edition-subscription-terms">
      <div><h4>Renovação</h4><p>{product.subscription.renewal} O valor atual da renovação também é {formattedPrice} por {product.subscription.months} meses.</p></div>
      <div><h4>Após o vencimento</h4><p>{product.subscription.expiry}</p></div>
      </div>
    </div>
  </aside>;
}
