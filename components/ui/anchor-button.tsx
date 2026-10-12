import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { ReactNode } from "react";

export function AnchorButton({ href, children }: { href: `#${string}`; children: ReactNode }) {
  return <a className="primary-button" href={href}>{children}<ArrowIcon className="inline-block" /></a>;
}
