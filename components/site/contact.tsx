import { ArrowUpRightIcon, CheckIcon, DownloadIcon } from "lucide-react";
import { openTo, profile } from "@/content/profile";
import { asset } from "@/lib/site";
import { externalProps, getContactLinks, getMissingLinks, Todo } from "./links";
import { Container } from "./section-heading";

export function Contact() {
  const links = getContactLinks();
  const missing = getMissingLinks();

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-12 sm:py-16">
          <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_100%_0%,black,transparent_70%)]" />
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <h2 id="contact-title" className="text-[2rem] leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
                Let&rsquo;s work together.
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
                Hiring for a frontend role, or have a project in mind? I&rsquo;d be glad to hear about it.
              </p>
              <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                {openTo.map((o) => (
                  <li key={o} className="flex items-center gap-2.5 text-[0.9375rem]">
                    <CheckIcon aria-hidden className="size-4 shrink-0 text-brand" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {links.length > 0 && (
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        {...(link.key !== "email" && externalProps)}
                        className={
                          link.key === "email"
                            ? "group flex items-center justify-between gap-4 rounded-xl bg-foreground px-5 py-4 text-background transition-opacity hover:opacity-90"
                            : "group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:bg-accent"
                        }
                      >
                        <span className="min-w-0">
                          <span className="block text-sm opacity-70">{link.label}</span>
                          <span className="block truncate font-medium">{link.display}</span>
                        </span>
                        <ArrowUpRightIcon className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {profile.cv && (
                <a
                  href={asset(profile.cv)}
                  download
                  className="group mt-3 flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:bg-accent"
                >
                  <span>
                    <span className="block text-sm opacity-70">Resume</span>
                    <span className="block font-medium">Download CV (PDF)</span>
                  </span>
                  <DownloadIcon className="size-5 shrink-0 transition-transform group-hover:translate-y-0.5" />
                </a>
              )}
              {missing.length > 0 && (
                <div className="mt-4">
                  <Todo>add your {missing.join(", ")} in content/profile.ts.</Todo>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
