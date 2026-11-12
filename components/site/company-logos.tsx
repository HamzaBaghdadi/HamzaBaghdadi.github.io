import { cn } from "@/lib/utils";

/** Layer Technologies mark. Uses currentColor so it works in light and dark themes. */
function LayerTechnologiesLogo({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 44 56" fill="none" className={cn("fill-current", className)}>
      <path
        opacity="0.76"
        d="M43.8079 45.5581L43.7761 45.574L4.83765 55.0103L11.5051 41.3731L11.521 41.3412L13.701 36.8538L24.6649 14.4328L26.5744 10.5183L36.0902 29.9159L37.952 33.719L38.0316 33.8623L34.4353 34.8966L34.3557 34.7534L26.5903 18.9202L18.5226 35.4376L16.3107 39.9409V39.9568L11.6165 49.5681L42.137 42.1687L42.2484 42.1369L43.7442 45.2876L43.8079 45.5581Z"
      />
      <path d="M0 44.7784L21.88 0L38.0314 33.8622L34.4351 34.8966L21.8322 8.49739L7.0175 38.8429L26.8447 32.9552L27.895 36.5038L0 44.7784Z" />
    </svg>
  );
}

const logos: Record<string, React.ComponentType<{ className?: string }>> = {
  "Layer Technologies LLC": LayerTechnologiesLogo,
};

/** Company logo tile; falls back to the company's initial when no logo is registered. */
export function CompanyLogo({ company }: { company: string }) {
  const Logo = logos[company];
  return (
    <span
      aria-hidden
      className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface text-lg font-semibold"
    >
      {Logo ? <Logo className="h-7 w-auto" /> : company.charAt(0)}
    </span>
  );
}
