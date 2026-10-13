export function PendingAction({ id, label, explanation, primary = false }: { id: string; label: string; explanation: string; primary?: boolean }) {
  return <div className="pending-action">
    <button type="button" disabled aria-describedby={`${id}-status`} className={`pending-button ${primary ? "pending-primary" : "pending-secondary"}`}>{label}</button>
    <p id={`${id}-status`}>{explanation}</p>
  </div>;
}
