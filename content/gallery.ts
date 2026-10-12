import type { ApprovedGameplay, ApprovedImage } from "@/content/media";

export const galleryCategories = [
  { id: "estadios", label: "Estádios", handoff: "Espaço reservado para capturas reais dos estádios." },
  { id: "faces", label: "Faces", handoff: "Espaço reservado para capturas reais das faces." },
  { id: "uniformes", label: "Uniformes", handoff: "Espaço reservado para capturas reais dos uniformes." },
  { id: "gameplay", label: "Gameplay", handoff: "Espaço reservado para screenshots e vídeos reais de partidas." },
  { id: "recursos", label: "Recursos", handoff: "Espaço reservado para materiais sobre recursos confirmados e aprovados." },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["id"];

type GalleryMetadata = {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  edition?: "Completo";
};

/** Only owner-approved, authentic materials. Image alt and video poster alt are required. */
export type GalleryItem = GalleryMetadata & (
  | { kind: "image"; asset: ApprovedImage }
  | { kind: "video"; asset: ApprovedGameplay }
);

/** Originals imported byte-for-byte from assets/galeria-dmpes-54, commit 5004b631. */
export const galleryItems: readonly GalleryItem[] = [
  {
    id: "estadio-noturno", category: "estadios", kind: "image", title: "Estádio sob as luzes",
    description: "Campo e arquibancadas sob a iluminação noturna.",
    asset: { src: "/assets/gallery/dmpes-54-estadios-01.jpg.jpg", alt: "Partida noturna com jogadores em campo, arquibancadas cheias e iluminação vermelha na cobertura do estádio.", width: 1366, height: 768 },
  },
  {
    id: "face-barcelona", category: "faces", kind: "image", title: "Jogador do Barcelona",
    description: "Face de um jogador com a camisa do Barcelona.",
    asset: { src: "/assets/gallery/dmpes-54-faces-01.jpg.jpg", alt: "Close da face de um jogador com a camisa azul e grená do Barcelona, diante da arquibancada.", width: 1366, height: 768 },
  },
  {
    id: "palmeiras-gremio", category: "gameplay", kind: "image", title: "Palmeiras x Grêmio",
    description: "Um lance de Palmeiras x Grêmio no replay.",
    asset: { src: "/assets/gallery/dmpes-54-gameplay-palmeiras-gremio.jpg.jpg", alt: "Jogador do Palmeiras de camisa verde conduz a bola próximo a jogadores do Grêmio com camisas azul e branca.", width: 2048, height: 1152 },
  },
  {
    id: "uniforme-palmeiras", category: "uniformes", kind: "image", title: "Palmeiras",
    description: "Camisa azul do Palmeiras em detalhe.",
    asset: { src: "/assets/gallery/dmpes-54-uniformes-palmeiras.png.png", alt: "Jogador com camisa azul do Palmeiras, detalhes dourados e faixa de capitão vermelha.", width: 1366, height: 768 },
  },
  {
    id: "uniforme-estudiantes", category: "uniformes", kind: "image", title: "Estudiantes",
    description: "Listras vermelhas e brancas do Estudiantes.",
    asset: { src: "/assets/gallery/dmpes-54-uniformes-estudiantes.png.png", alt: "Jogador do Estudiantes com camisa de listras verticais vermelhas e brancas, diante da torcida.", width: 1366, height: 768 },
  },
  {
    id: "uniforme-penarol", category: "uniformes", kind: "image", title: "Peñarol",
    description: "Amarelo e preto do Peñarol no replay.",
    asset: { src: "/assets/gallery/dmpes-54-uniformes-penarol.png.png", alt: "Jogador do Peñarol com camisa de listras amarelas e pretas, escudo e patrocinadores visíveis.", width: 1366, height: 768 },
  },
  {
    id: "paulistao-2026", category: "recursos", kind: "image", edition: "Completo", title: "Paulistão 2026",
    description: "Telas e identidade visual do Paulistão 2026.",
    asset: { src: "/assets/gallery/dmpes-54-recursos-paulistao.jpg.jpg", alt: "Material do Paulistão 2026 com telas de Portuguesa e Noroeste, placar e identidade visual da competição.", width: 2048, height: 1185 },
  },
  {
    id: "cariocao-2026", category: "recursos", kind: "image", edition: "Completo", title: "Cariocão 2026",
    description: "Telas e identidade visual do Cariocão 2026.",
    asset: { src: "/assets/gallery/dmpes-54-recursos-cariocao.jpg.jpg", alt: "Material do Cariocão 2026 com seleção de times, escalações e apresentação de Madureira x Bangu.", width: 2048, height: 1169 },
  },
];
