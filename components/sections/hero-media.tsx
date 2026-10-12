import { ArrowIcon } from "@/components/ui/arrow-icon";
import Image from "next/image";
import { GameplayVideo } from "@/components/sections/gameplay-video";
import { media } from "@/content/media";

export function HeroMedia() {
  return (
    <figure className="hero-media">
      {media.gameplay ? (
        <GameplayVideo gameplay={media.gameplay} />
      ) : media.hero ? (
        <Image src={media.hero.src} alt={media.hero.alt} width={media.hero.width} height={media.hero.height}
          sizes="(min-width: 1024px) 45vw, 100vw" preload className="hero-image" />
      ) : (
        <div className="media-placeholder" role="img" aria-label="Espaço reservado para gameplay real aprovado do DMPES. Nenhuma captura do jogo foi adicionada.">
          <div className="frame-corner frame-corner-top" aria-hidden="true" />
          <div className="frame-corner frame-corner-bottom" aria-hidden="true" />
          <span className="media-index" aria-hidden="true">DMPES / 5.4</span>
          <div className="media-placeholder-copy">
            <span className="placeholder-symbol" aria-hidden="true"><ArrowIcon /></span>
            <p className="eyebrow">O campo está reservado</p>
            <p className="placeholder-title">Aqui entra<br />o jogo real.</p>
            <p className="placeholder-description">Espaço para imagem ou gameplay<br />oficial do projeto, após aprovação.</p>
          </div>
          <span className="media-caption-label">Mídia pendente · sem captura do jogo</span>
        </div>
      )}
      <figcaption className="media-caption"><span>FUTEBOL SUL-AMERICANO</span><span>{media.hero || media.gameplay ? "Mídia aprovada do DMPES" : "Placeholder de desenvolvimento"}</span></figcaption>
    </figure>
  );
}
