import { profile } from "@/content/profile";
import { isDev } from "@/lib/site";

export type ContactLink = {
  key: "email" | "github" | "x";
  label: string;
  href: string;
  display: string;
};

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Contact links that have actually been filled in, in display order. */
export function getContactLinks(): ContactLink[] {
  const { email, github, x } = profile.links;
  const links: (ContactLink | null)[] = [
    email ? { key: "email", label: "Email", href: `mailto:${email}`, display: email } : null,
    github ? { key: "github", label: "GitHub", href: github, display: stripProtocol(github) } : null,
    x ? { key: "x", label: "X", href: x, display: stripProtocol(x) } : null,
  ];
  return links.filter((l): l is ContactLink => l !== null);
}

/** Names of contact links still missing from content/profile.ts. */
export function getMissingLinks() {
  const { email, github } = profile.links;
  return [!email && "email", !github && "GitHub URL"].filter(Boolean) as string[];
}

export const externalProps = { target: "_blank", rel: "noopener noreferrer me" } as const;

/**
 * Reminder for content that hasn't been filled in yet.
 * Rendered only by `pnpm dev`; the production build never shows it.
 */
export function Todo({ children }: { children: React.ReactNode }) {
  if (!isDev) return null;
  return (
    <p className="rounded-md border border-dashed border-amber-500/60 bg-amber-500/5 px-3 py-2 text-xs text-amber-700 dark:text-amber-400">
      Dev only: {children}
    </p>
  );
}
