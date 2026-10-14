import { product } from "@/content/product";

type EditionName = (typeof product.versions)[number]["name"];

/** Owner-approved Phase 4 copy. Technical values/pricing stay in product.ts. */
export const editionDescriptions: Record<EditionName, string> = {
  Completo: "A experiência mais completa do DMPES.",
  Lite: "Conteúdo e armazenamento em equilíbrio.",
  Mobile: "A edição com menor tamanho informado.",
};

export const editionCopy = {
  introduction: "Completo, Lite e Mobile estão incluídos no mesmo acesso. Compare o conteúdo e os tamanhos informados de cada edição.",
  sharedFeatures: "Nas três edições: elencos, ligas e uniformes atualizados.",
  completeExamples: ["Paulistão", "Cariocão", "Copa do Nordeste"],
  technicalNote: "Os valores de tamanho e espaço para extração são informações distintas. Compatibilidade, requisitos técnicos e método de execução da edição Mobile ainda estão em validação.",
} as const;
