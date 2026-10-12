import type { howItWorks } from "@/content/how-it-works";

type Step = (typeof howItWorks.steps)[number];

const iconPaths: Record<Step["icon"], string> = {
  subscription: "M5 3h14v18H5z M8 8h8 M8 12h8 M8 16h5",
  folder: "M3 6h7l2 3h9v11H3z",
  book: "M12 5v15 M12 5C9 3 6 3 3 4v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1z",
  tools: "M14 5a5 5 0 0 0-6 6l-5 5a2 2 0 0 0 3 3l5-5a5 5 0 0 0 6-6l-3 3-3-3z",
};

export function StepCard({ step }: { step: Step }) {
  return <li className="how-step">
    <div className="how-step-mark"><span className="how-step-number" aria-hidden="true">{step.number}</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={iconPaths[step.icon]} /></svg></div>
    <h3>{step.title}</h3>
    <p>{step.description}</p>
  </li>;
}
