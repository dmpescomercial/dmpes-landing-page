import { Container } from "@/components/ui/container";
import { product } from "@/content/product";
import { footerContent } from "@/content/footer";
import { commercialLinks } from "@/content/links";

export function Footer() {
  return <footer className="site-footer institutional-footer"><Container>
    <div className="institutional-footer-grid">
      <div><p className="footer-brand">{product.name}<br /><span>{product.edition} / {product.version}</span></p></div>
      <nav aria-label="Navegação do rodapé"><h2>Navegação</h2><ul>{footerContent.navigation.map(link => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
      <div className="footer-information"><h2>Informações institucionais</h2><p>Atendimento comercial pré-venda</p><p>{commercialLinks.whatsapp.explanation}</p><ul>{footerContent.documents.map(document => <li key={document}>{document}</li>)}</ul></div>
    </div>
    <p className="footer-independence">{footerContent.independence}</p>
  </Container></footer>;
}
