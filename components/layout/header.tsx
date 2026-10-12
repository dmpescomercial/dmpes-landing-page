import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import { product } from "@/content/product";

export function Header() {
  return (
    <header className="site-header">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-6">
        <a href="#inicio" aria-label={`${product.name} — início`} className="wordmark">
          DMPES<span className="wordmark-detail">SUDAMERICAN / {product.version}</span>
        </a>
        <nav aria-label="Navegação principal" className="flex items-center gap-4 text-sm">
          <a className="nav-link" href="#universo">Universo DMPES</a>
          <a className="nav-link" href="#galeria">Gameplay</a>
          <a className="nav-link" href="#sobre">O projeto <ArrowIcon className="inline-block" /></a>
          <span className="edition-label hidden sm:inline">{product.edition}</span>
        </nav>
      </Container>
    </header>
  );
}
