import { FAQ } from "@/components/sections/faq";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Editions } from "@/components/sections/editions";
import { Gallery } from "@/components/sections/gallery";
import { Universe } from "@/components/sections/universe";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Container } from "@/components/ui/container";
import { product } from "@/content/product";

export default function Home() {
  return <><Header /><main id="conteudo"><Hero /><Universe /><Gallery /><Editions /><HowItWorks /><FAQ /><section id="sobre" aria-labelledby="about-title" className="about-section"><Container className="about-grid"><div><p className="eyebrow">Um projeto independente</p><h2 id="about-title">Sul-americano<br />por essência.</h2></div><div className="about-copy"><p>{product.aboutDescription}</p><p>{product.subscription.activeBenefits}</p><p className="text-muted">{product.subscription.expiry}</p><p className="development-note">Prévia em desenvolvimento. Mídia real e informações finais de contratação serão adicionadas após aprovação.</p></div></Container></section></main><Footer /></>;
}
