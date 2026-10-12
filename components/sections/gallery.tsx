import { Container } from "@/components/ui/container";
import { GalleryBrowser } from "@/components/gallery/gallery-browser";
import { galleryItems } from "@/content/gallery";

export function Gallery() {
  return <section id="galeria" className="gallery-section" aria-labelledby="gallery-title">
    <Container>
      <div className="gallery-heading"><div><p className="eyebrow">Experiência de jogo / DMPES</p><h2 id="gallery-title">O PATCH.<br /><span>Dentro de campo.</span></h2></div><p>Capturas reais do DMPES Sudamerican 5.4: explore os detalhes por categoria e abra cada imagem para ver o enquadramento completo.</p></div>
      <GalleryBrowser items={galleryItems} />
      <p className="gallery-note">Materiais do PATCH fornecidos e autorizados pelo responsável pelo DMPES. Paulistão 2026 e Cariocão 2026 são exclusivos da edição Completo.</p>
    </Container>
  </section>;
}
