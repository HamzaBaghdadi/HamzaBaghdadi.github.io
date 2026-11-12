import { ArrowUpRightIcon, CheckIcon, GlobeIcon } from "lucide-react";
import { siGithub } from "simple-icons";
import { projects, stack, type Project } from "@/content/profile";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Todo } from "./links";
import { Container, SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";
import { TechIcon } from "./tech-icon";

const partName = new Map<string, string>(stack.flatMap((g) => g.items.map((i) => [i.id, i.name] as const)));

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const wide = project.featured;

  return (
    <Spotlight as="article" className={cn("group/card reveal flex flex-col overflow-hidden", wide && "lg:flex-row", className)}>
      <div
        className={cn(
          "dots relative h-56 shrink-0 overflow-hidden border-b border-border bg-surface sm:h-72",
          wide && "lg:h-auto lg:min-h-96 lg:w-[56%] lg:border-r lg:border-b-0",
        )}
      >
        {project.image && (
          // Screenshot peeks up from the bottom edge, like a window on a desk.
          <div className="absolute inset-x-5 top-6 bottom-0 overflow-hidden rounded-t-lg border border-b-0 border-border shadow-2xl shadow-black/40 transition-transform duration-500 ease-out group-hover/card:-translate-y-1.5 sm:inset-x-8 sm:top-8">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
            <img
              src={asset(project.image.src)}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{project.status}</span>
        </div>
        <p className="mt-1 text-sm text-faint">{project.kind}</p>
        <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>

        {project.aspects && (
          <ul className="mt-5 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {project.aspects.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <CheckIcon aria-hidden className="size-3.5 shrink-0 text-brand" />
                {a}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <ul className="flex flex-wrap items-center gap-3" aria-label="Built with">
            {project.stack.map((id) => (
              <li key={id} title={partName.get(id)} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <TechIcon id={id} className="size-3.5" />
                {partName.get(id)}
              </li>
            ))}
            {project.stack.length === 0 && <li className="text-xs text-faint">Stack to be decided</li>}
          </ul>
          {(project.url || project.repo) && (
            <div className="flex items-center gap-2">
              {project.url && (
                <ProjectLink href={project.url} label={`Visit ${project.name}`} primary>
                  <GlobeIcon className="size-4" />
                  {new URL(project.url).hostname}
                </ProjectLink>
              )}
              {project.repo && (
                <ProjectLink href={project.repo} label={`${project.name} source code on GitHub`} primary={!project.url}>
                  <svg aria-hidden viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d={siGithub.path} />
                  </svg>
                  Source
                </ProjectLink>
              )}
            </div>
          )}
        </div>
        {!project.repo && !project.url && (
          <div className="mt-4">
            <Todo>add the {project.name} repository URL in content/profile.ts.</Todo>
          </div>
        )}
      </div>
    </Spotlight>
  );
}

function ProjectLink({
  href,
  label,
  primary,
  children,
}: {
  href: string;
  label: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group inline-flex h-9 items-center gap-2 rounded-lg px-3.5 text-sm font-medium transition-colors",
        primary ? "bg-foreground text-background hover:opacity-90" : "border border-border hover:bg-accent",
      )}
    >
      {children}
      <ArrowUpRightIcon aria-hidden className="size-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="work-title"
          title="Selected work"
          description="An open-source Angular UI library, a live chess platform, and a desktop tool for deployments."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} className={p.featured ? "lg:col-span-12" : "lg:col-span-6"} />
          ))}
        </div>
      </Container>
    </section>
  );
}
