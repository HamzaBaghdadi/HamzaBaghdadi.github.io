import { experience, stackItems } from "@/content/profile";
import { formatMonth } from "@/lib/site";
import { Container, SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";
import { TechIcon } from "./tech-icon";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="experience-title"
            title="Experience"
            description="Production web apps, the shared architecture behind them, and the tooling that ships them."
          />
        </div>

        <ol className="space-y-5">
          {experience.map((job) => (
            <li key={job.company + job.start}>
              <Spotlight className="reveal p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface text-lg font-semibold"
                    >
                      {job.company.charAt(0)}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <p className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground tabular-nums">
                    {!job.end && <span aria-hidden className="size-1.5 rounded-full bg-emerald-500" />}
                    <time dateTime={job.start}>{formatMonth(job.start)}</time> –{" "}
                    {job.end ? <time dateTime={job.end}>{formatMonth(job.end)}</time> : "Present"}
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-pretty">{job.summary}</p>

                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                  {job.highlights.map((h) => (
                    <div key={h.label} className="flex flex-col-reverse gap-1 bg-surface p-4">
                      <dt className="text-xs leading-snug text-muted-foreground">{h.label}</dt>
                      <dd className="text-2xl font-semibold tracking-tight tabular-nums">{h.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6" aria-label="Technologies">
                  {job.tech.map((id) => (
                    <li key={id} className="flex items-center gap-1.5 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      <TechIcon id={id} className="size-3" />
                      {stackItems.find((s) => s.id === id)?.name}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
