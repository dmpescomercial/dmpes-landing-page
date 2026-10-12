import type { ApprovedImage } from "@/content/media";

/** Source: confirmed scope in docs/PRODUCT.md. Pending dated tournaments are excluded. */
export type UniverseEntry = {
  id: string;
  name: string;
  category: "Liga" | "Grupo de clubes" | "Seleções";
  detail: string;
  divisions?: readonly string[];
  featured?: boolean;
  visual: ApprovedImage | null;
};

export type UniverseRegion = {
  id: string;
  label: string;
  title: string;
  description: string;
  entries: readonly UniverseEntry[];
};

export const universeStats = [
  { value: "500+", label: "Clubes", detail: "Mais de 500 clubes no universo DMPES." },
  { value: "109", label: "Seleções", detail: "Seleções de cinco regiões do futebol mundial." },
] as const;

export const universeRegions: readonly UniverseRegion[] = [
  {
    id: "america-do-sul", label: "América do Sul", title: "O nosso futebol em primeiro plano.",
    description: "Das Séries A e B do Brasil às divisões nacionais sul-americanas: o ponto de partida do DMPES Sudamerican.",
    entries: [
      { id: "brasil", name: "Brasileirão", category: "Liga", divisions: ["Série A", "Série B"], detail: "As duas divisões nacionais em destaque.", featured: true, visual: null },
      { id: "argentina", name: "Argentina", category: "Liga", divisions: ["1ª divisão", "2ª divisão"], detail: "Primeira e segunda divisões argentinas.", visual: null },
      { id: "peru", name: "Peru", category: "Liga", divisions: ["1ª divisão", "2ª divisão"], detail: "Primeira e segunda divisões peruanas.", visual: null },
      { id: "colombia", name: "Colômbia", category: "Liga", divisions: ["1ª divisão", "2ª divisão"], detail: "Primeira e segunda divisões colombianas.", visual: null },
      { id: "uruguai", name: "Uruguai", category: "Liga", detail: "O futebol uruguaio também integra o projeto.", visual: null },
      { id: "equador", name: "Equador", category: "Liga", divisions: ["1ª divisão"], detail: "Primeira divisão equatoriana.", visual: null },
      { id: "chile", name: "Chile", category: "Liga", divisions: ["1ª divisão"], detail: "Primeira divisão chilena.", visual: null },
      { id: "conmebol", name: "Outros clubes da CONMEBOL", category: "Grupo de clubes", detail: "Outros clubes sul-americanos previstos no escopo do produto.", visual: null },
    ],
  },
  {
    id: "europa", label: "Europa", title: "O foco é sul-americano. O universo vai além.",
    description: "Ligas europeias selecionadas também fazem parte do DMPES Sudamerican.",
    entries: [
      { id: "premier-league", name: "Premier League", category: "Liga", detail: "Liga inglesa presente no escopo documentado.", visual: null },
      { id: "la-liga", name: "La Liga", category: "Liga", detail: "Liga espanhola presente no escopo documentado.", visual: null },
      { id: "serie-a", name: "Serie A Enilive", category: "Liga", detail: "Liga italiana presente no escopo documentado.", visual: null },
      { id: "bundesliga", name: "Bundesliga", category: "Liga", detail: "Liga alemã presente no escopo documentado.", visual: null },
      { id: "outros-europeus", name: "Outros clubes europeus", category: "Grupo de clubes", detail: "Outros clubes da Europa integram o conjunto documentado.", visual: null },
    ],
  },
  {
    id: "asia", label: "Ásia", title: "Mais caminhos para explorar o futebol.",
    description: "A presença asiática reúne a liga saudita e clubes da AFC Champions League.",
    entries: [
      { id: "liga-saudita", name: "Liga Saudita", category: "Liga", detail: "Liga saudita presente no escopo documentado.", visual: null },
      { id: "clubes-afc", name: "Clubes da AFC Champions League", category: "Grupo de clubes", detail: "Grupo de clubes confirmado; não representa uma confirmação do formato do torneio.", visual: null },
    ],
  },
  {
    id: "selecoes", label: "Seleções", title: "109 seleções. Futebol de diferentes regiões.",
    description: "O total de 109 seleções reúne as regiões abaixo. A documentação não detalha nomes nem quantidades por região.",
    entries: [
      { id: "selecoes-sul", name: "América do Sul", category: "Seleções", detail: "Seleções sul-americanas.", visual: null },
      { id: "selecoes-europa", name: "Europa", category: "Seleções", detail: "Seleções europeias.", visual: null },
      { id: "selecoes-africa", name: "África", category: "Seleções", detail: "Seleções africanas.", visual: null },
      { id: "selecoes-americas", name: "América do Norte e Central", category: "Seleções", detail: "Seleções norte-americanas e centro-americanas.", visual: null },
      { id: "selecoes-asia", name: "Ásia", category: "Seleções", detail: "Seleções asiáticas.", visual: null },
    ],
  },
];
