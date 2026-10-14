import { commercialLinks, getCommercialPresentation, type CommercialChannel } from "../../lib/commercial-links";
import { PendingAction } from "./pending-action";

export function CommercialAction({ channel, id, label, primary = false }: {
  channel: CommercialChannel; id: string; label: string; primary?: boolean;
}) {
  const presentation = getCommercialPresentation(commercialLinks[channel]);
  return <PendingAction id={id} label={label} explanation={presentation.explanation} primary={primary} />;
}

export function CommercialNotice({ channel, className }: { channel: CommercialChannel; className?: string }) {
  const presentation = getCommercialPresentation(commercialLinks[channel]);
  return <p className={className}>{presentation.explanation}</p>;
}
