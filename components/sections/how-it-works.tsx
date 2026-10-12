import { Container } from "@/components/ui/container";
import { StepCard } from "@/components/how-it-works/step-card";
import { howItWorks } from "@/content/how-it-works";

export function HowItWorks() {
  return <section id="como-funciona" className="how-section" aria-labelledby="how-title">
    <Container>
      <div className="how-heading"><h2 id="how-title">{howItWorks.title}</h2><p>{howItWorks.description}</p></div>
      <ol className="how-steps" role="list">{howItWorks.steps.map(step => <StepCard key={step.number} step={step} />)}</ol>
      <div className="how-channels">{howItWorks.channels.map(channel => <div key={channel.title}><h3>{channel.title}</h3><p>{channel.description}</p></div>)}</div>
    </Container>
  </section>;
}
