import { ArrowRightIcon, BriefcaseIcon, DownloadIcon, MailIcon, MapPinIcon } from "lucide-react";
import { siGithub, siX } from "simple-icons";
import { experience, profile, stackItems } from "@/content/profile";
import { asset, formatMonth } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CodeWindow } from "./code-window";
import { externalProps, getContactLinks, getMissingLinks, Todo } from "./links";
import { PresetPreview } from "./preset-preview";
import { Container } from "./section-heading";
import { TechIcon } from "./tech-icon";

const featuredStack = ["typescript", "react", "nextjs", "angular", "tailwind", "nx", "node", "docker"];

function BrandGlyph({ path, className }: { path: string; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={cn("size-4 fill-current", className)}>
      <path d={path} />
    </svg>
  );
}

export function Hero() {
  const current = experience[0];
  const links = getContactLinks();
  const email = links.find((l) => l.key === "email");
  const socials = links.filter((l) => l.key !== "email");
  const missing = getMissingLinks();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-brand/[0.07] blur-3xl"
      />

      <Container className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-12 pt-12 pb-16 sm:gap-14 sm:pt-20 sm:pb-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:pt-28 lg:pb-28">
        <div>
          <div className="animate-rise flex flex-wrap items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
            <img
              src={asset(profile.photo)}
              alt={profile.name}
              width={48}
              height={48}
              className="size-12 rounded-full object-cover ring-2 ring-border ring-offset-2 ring-offset-background"
            />
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 py-1 pr-3 pl-2 text-[0.8125rem] text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              {profile.status}
            </p>
          </div>

          <h1
            id="hero-title"
            className="animate-rise mt-6 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance [animation-delay:60ms] sm:text-[3.25rem] lg:text-[3.75rem]"
          >
            I build <span className="text-brand">fast</span>, accessible web apps that stay easy to change.
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:120ms]">
            I&rsquo;m {profile.name}, a {profile.role.toLowerCase()} working with React, Next.js, Angular and TypeScript.
            I care about architecture, design systems, performance and accessibility.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
            <a
              href="#work"
              className="group inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-5 text-[0.9375rem] font-medium text-background transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            {email && (
              <a
                href={email.href}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 text-[0.9375rem] font-medium backdrop-blur transition-colors hover:bg-accent"
              >
                <MailIcon className="size-4" />
                Email me
              </a>
            )}
            {profile.cv && (
              <a
                href={asset(profile.cv)}
                download
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 text-[0.9375rem] font-medium backdrop-blur transition-colors hover:bg-accent"
              >
                <DownloadIcon className="size-4" />
                Download CV
              </a>
            )}
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                {...externalProps}
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground"
              >
                <BrandGlyph path={s.key === "github" ? siGithub.path : siX.path} />
              </a>
            ))}
          </div>
          {missing.length > 0 && (
            <div className="mt-4 max-w-md">
              <Todo>add your {missing.join(", ")} in content/profile.ts to show contact buttons here.</Todo>
            </div>
          )}

          <dl className="animate-rise mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm [animation-delay:240ms]">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Current role</dt>
              <BriefcaseIcon aria-hidden className="size-4 text-faint" />
              <dd>
                {current.company} <span className="text-muted-foreground">· since {formatMonth(current.start)}</span>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Location</dt>
              <MapPinIcon aria-hidden className="size-4 text-faint" />
              <dd>
                {profile.location} <span className="text-muted-foreground">· {profile.timezone}</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="animate-rise relative min-w-0 [animation-delay:200ms] lg:pl-4">
          <CodeWindow />
          <PresetPreview className="relative mt-4 w-full sm:w-[17.5rem] lg:absolute lg:-bottom-20 lg:-left-14 lg:mt-0" />
        </div>
      </Container>

      {/* Stack strip */}
      <div className="relative border-y border-line bg-surface/40">
        <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-sm text-muted-foreground">Tools I work with</p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {featuredStack.map((id) => (
              <li
                key={id}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <TechIcon id={id} className="size-[1.125rem] transition-colors group-hover:fill-[var(--brand-color)] dark:group-hover:fill-current" />
                {stackItems.find((i) => i.id === id)?.name}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
