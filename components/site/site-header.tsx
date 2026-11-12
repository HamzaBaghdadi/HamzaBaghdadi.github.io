import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { Container } from "./section-heading";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-14 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-md bg-foreground text-[0.6875rem] font-semibold tracking-tight text-background"
          >
            HB
          </span>
          {profile.name}
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-md px-3 py-1.5 transition-colors hover:bg-accent hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="ml-1 hidden h-8 items-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
