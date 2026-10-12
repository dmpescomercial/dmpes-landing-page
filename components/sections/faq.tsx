import { Container } from "@/components/ui/container";
import { AccordionItem } from "@/components/ui/accordion-item";
import { faq } from "@/content/faq";

export function FAQ() {
  return <section id="faq" className="faq-section" aria-labelledby="faq-title">
    <Container>
      <div className="faq-heading"><h2 id="faq-title">{faq.title}</h2><p>{faq.introduction}</p></div>
      <div className="faq-list">{faq.items.map(item => <AccordionItem key={item.id} id={`faq-${item.id}`} question={item.question}><p>{item.answer}</p></AccordionItem>)}</div>
    </Container>
  </section>;
}
