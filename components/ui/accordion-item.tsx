import type { ReactNode } from "react";

export function AccordionItem({ id, question, children }: { id: string; question: string; children: ReactNode }) {
  return <details className="faq-item" id={id}>
    <summary className="faq-question"><span>{question}</span><span className="faq-indicator" aria-hidden="true"><span className="faq-plus">+</span><span className="faq-minus">−</span></span></summary>
    <div className="faq-answer">{children}</div>
  </details>;
}
