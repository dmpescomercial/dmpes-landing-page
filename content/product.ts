/** Confirmed facts from docs/PRODUCT.md. Pending claims do not belong here. */
export const product = {
  name: "DMPES SUDAMERICAN",
  version: "5.4",
  edition: "Next Season",
  positioning: "O futebol sul-americano é protagonista.",
  description: "Um mod independente para PES 2017, com foco no futebol sul-americano, incluindo o Brasileirão Série A e Série B.",
  heroDescription: "Viva o Brasileirão Série A e B, as grandes ligas da América do Sul e muito mais. São mais de 500 clubes e 109 seleções em uma experiência renovada para PES 2017.",
  aboutDescription: "A proposta é dar prioridade às ligas sul-americanas e às divisões nacionais na seleção do conteúdo. DMPES Sudamerican é um produto separado de DMPES GLOBAL.",
  subscription: {
    priceBRL: 49.99,
    months: 3,
    includes: "Completo, Lite e Mobile em um único acesso.",
    activeBenefits: "Área de membros, downloads, tutoriais de instalação, atualizações e suporte técnico oficial pelo Telegram durante o período ativo.",
    renewal: "Cartão de crédito e PIX Automático podem renovar a cada três meses quando autorizados e configurados no checkout. PIX convencional não renova automaticamente.",
    expiry: "Após o vencimento, o PATCH instalado pode continuar funcionando. O acesso à área de membros, downloads, novas atualizações e suporte técnico é encerrado.",
  },
  versions: [
    { name: "Completo", faces: "5.000+", stadiums: "400+", downloadGB: 90, extractionGB: 140, extraChampionships: true, masterLeaguePro: true },
    { name: "Lite", faces: "700+", stadiums: "200+", downloadGB: 50, extractionGB: 110, extraChampionships: false, masterLeaguePro: false },
    { name: "Mobile", faces: "300+", stadiums: "40", downloadGB: 35, extractionGB: 70, extraChampionships: false, masterLeaguePro: false },
  ],
} as const;

export const formattedPrice = new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL",
}).format(product.subscription.priceBRL);
