/** Destinos pendentes: nenhum link comercial pode ser acionado nesta fase. */
export const commercialLinks = {
  checkout: { status: "pending", url: null, explanation: "Contratação indisponível nesta prévia. Checkout em validação." },
  whatsapp: { status: "pending", url: null, explanation: "Canal comercial ainda não disponível nesta prévia." },
} as const;
