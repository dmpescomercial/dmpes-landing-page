import { Container } from "@/components/ui/container";
import { AnchorButton } from "@/components/ui/anchor-button";
import { HeroMedia } from "@/components/sections/hero-media";
import { formattedPrice, product } from "@/content/product";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="inicio">
      <Container>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow flex items-center gap-3"><span className="status-dot" aria-hidden="true" />{product.name} {product.version}</p>
            <p className="season-label">{product.edition}</p>
            <h1 id="hero-title">O futebol<br /><span>sul-americano</span><br />é protagonista.</h1>
            <p className="hero-description">{product.heroDescription}</p>
          </div>
          <HeroMedia />
          <div className="hero-commercial">
            <div className="hero-actions"><AnchorButton href="#universo">Explorar o DMPES</AnchorButton><span className="action-note">Três versões.<br />Um único acesso.</span></div>
            <div className="hero-offer">
              <p><strong>{formattedPrice}</strong><span> / {product.subscription.months} meses</span></p>
              <p className="offer-versions">{product.subscription.includes}</p>
              <p className="renewal-copy">{product.subscription.renewal}</p>
              <p className="checkout-status">Contratação indisponível nesta prévia. Checkout em validação.</p>
            </div>
          </div>
        </div>
        <div className="hero-bottom" aria-label="Versões incluídas">
          <span className="eyebrow">No mesmo acesso</span>
          <ul className="version-list">{product.versions.map((version, index) => <li key={version.name}><span aria-hidden="true">0{index + 1}</span>{version.name}</li>)}</ul>
        </div>
      </Container>
    </section>
  );
}
