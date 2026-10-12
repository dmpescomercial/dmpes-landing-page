import { Container } from "@/components/ui/container";
import { product } from "@/content/product";

export function Footer() {
  return <footer className="site-footer"><Container className="flex flex-col gap-4 py-7 sm:flex-row sm:items-start sm:justify-between"><p className="footer-brand">{product.name}<br /><span>{product.edition} / {product.version}</span></p><p className="max-w-xl text-xs leading-relaxed text-muted">Mod independente para PES 2017, sem vínculo oficial com a Konami, clubes ou competições. Aviso sujeito à revisão jurídica antes da publicação.</p></Container></footer>;
}
