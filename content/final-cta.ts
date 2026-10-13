import { formattedPrice, product } from "./product";

export const finalCTA = {
  title: "O CAMPO ESTÁ PRONTO. FALTA VOCÊ.",
  description: "Explore o futebol sul-americano com mais de 500 clubes, 109 seleções e três edições incluídas em um único acesso.",
  editions: `${product.versions.slice(0, -1).map(edition => edition.name).join(", ")} e ${product.versions.at(-1)?.name} incluídos.`,
  renewal: `${product.subscription.renewal} O valor atual da renovação também é ${formattedPrice} por ${product.subscription.months} meses.`,
  primaryLabel: "GARANTIR MEU ACESSO",
  secondaryLabel: "TIRAR DÚVIDAS ANTES DE COMPRAR",
} as const;
