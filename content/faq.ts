import { formattedPrice, product } from "./product";

const editions = product.versions.map(edition => edition.name);
const includedEditions = `${editions.slice(0, -1).join(", ")} e ${editions.at(-1)}`;

export const faq = {
  title: "TUDO O QUE VOCÊ PRECISA SABER.",
  introduction: "Esclareça suas dúvidas sobre as edições, a assinatura e o acesso ao DMPES.",
  items: [
    { id: "edicoes", question: "Recebo as três edições do DMPES?", answer: `Sim. Uma assinatura inclui acesso às edições ${includedEditions} durante o período ativo. Elas não são vendidas separadamente. Os campeonatos extras e a Master League Pro são exclusivos da edição Completo.` },
    { id: "vencimento", question: "O que acontece quando minha assinatura vence?", answer: "Após o vencimento, o PATCH instalado pode continuar funcionando. O acesso à área de membros, aos downloads, às novas atualizações e ao suporte técnico é encerrado." },
    { id: "renovacao", question: "A assinatura renova automaticamente?", answer: `${product.subscription.renewal.replace("podem renovar a cada", "podem renovar a assinatura a cada").replace("não renova automaticamente.", "não renova automaticamente; nesse caso, é necessário renovar para manter o acesso aos benefícios.")} O valor atual da renovação é ${formattedPrice} por ${product.subscription.months === 3 ? "três" : product.subscription.months} meses.` },
    { id: "arquivos", question: "Onde encontro os arquivos e tutoriais?", answer: "Após a compra, os arquivos e os tutoriais de instalação ficam disponíveis na área de membros da LastLink durante o período ativo. Consulte os tutoriais antes de iniciar a instalação." },
    { id: "suporte", question: "Como funciona o suporte técnico?", answer: "O suporte técnico oficial é realizado pelo Telegram durante o período ativo, para dúvidas de instalação e compatibilidade. O WhatsApp é destinado ao atendimento comercial antes da compra." },
  ],
} as const;
