/** Server-side commercial policy. No environment variables or public activation API. */
export type CommercialChannel = "checkout" | "whatsapp";
export type CommercialState = Readonly<{
  suppliedUrl: string | null;
  ownerConfirmation: "pending" | "confirmed";
  independentVerification: "pending" | "verified";
  activationAuthorization: "pending" | "authorized";
  operationalAvailability: "unavailable" | "available";
  explanation: string;
}>;

const blocked = {
  suppliedUrl: null,
  ownerConfirmation: "pending",
  independentVerification: "pending",
  activationAuthorization: "pending",
  operationalAvailability: "unavailable",
} as const;

export const commercialLinks: Readonly<Record<CommercialChannel, CommercialState>> = {
  checkout: { ...blocked, explanation: "Contratação indisponível nesta prévia. Checkout em validação." },
  whatsapp: { ...blocked, explanation: "Canal comercial ainda não disponível nesta prévia." },
};

/** Evaluates prerequisites only; readiness is not permission to render a link. */
export function hasCommercialPrerequisites(state: CommercialState): boolean {
  if (state.ownerConfirmation !== "confirmed" ||
      state.independentVerification !== "verified" ||
      state.activationAuthorization !== "authorized" ||
      state.operationalAvailability !== "available" || !state.suppliedUrl) return false;
  try {
    const url = new URL(state.suppliedUrl);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}

/** Phase 8C.11 explicitly forbids activation, even if all prerequisites are met.
 * Only a later reviewed code change may introduce an available presentation.
 * Raw URLs never cross this presentation boundary.
 */
export function getCommercialPresentation(state: CommercialState) {
  return { available: false, explanation: state.explanation } as const;
}
