import { AudioLinesIcon, AwardIcon, GraduationCapIcon, LanguagesIcon } from "lucide-react";
import { beyond, certifications, education, profile } from "@/content/profile";
import { Container, SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";

/** Equalizer bars; heights and delays are fixed so the render is deterministic. */
const bars = [0.5, 0.8, 0.35, 0.95, 0.6, 0.75, 0.4, 0.9, 0.55, 0.7, 0.3, 0.85, 0.65, 0.45, 0.8, 0.5, 0.95, 0.35, 0.6, 0.75];

function Entry({ title, issuer, period, details }: { title: string; issuer: string; period: string; details?: string }) {
  return (
    <li>
      <p className="font-medium">{title}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">
        {issuer} <span className="text-faint">· {period}</span>
      </p>
      {details && <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{details}</p>}
    </li>
  );
}

export function Beyond() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="education-title" title="Education & beyond" />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <Spotlight className="reveal p-6 sm:p-7 lg:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <GraduationCapIcon aria-hidden className="size-5 text-brand" />
                  <h3 className="font-semibold">Education</h3>
                </div>
                <ul className="mt-5 space-y-5">
                  {education.map((e) => (
                    <Entry key={e.title} {...e} />
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <AwardIcon aria-hidden className="size-5 text-brand" />
                  <h3 className="font-semibold">Certifications</h3>
                </div>
                <ul className="mt-5 space-y-5">
                  {certifications.map((c) => (
                    <Entry key={c.title} {...c} />
                  ))}
                </ul>
              </div>
            </div>
          </Spotlight>

          <Spotlight className="reveal p-6 sm:p-7">
            <div className="flex items-center gap-2.5">
              <LanguagesIcon aria-hidden className="size-5 text-brand" />
              <h3 className="font-semibold">Languages</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {profile.languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0">
                  {l.name}
                  <span className="text-sm text-muted-foreground">{l.level}</span>
                </li>
              ))}
            </ul>
          </Spotlight>

          <Spotlight className="reveal overflow-hidden lg:col-span-3">
            <div className="grid lg:grid-cols-[1fr_1.4fr]">
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <AudioLinesIcon aria-hidden className="size-5 text-brand" />
                  <h3 className="font-semibold">{beyond.title}</h3>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground text-pretty">{beyond.body}</p>
              </div>
              <div
                aria-hidden
                className="flex h-32 items-end gap-1.5 border-t border-border bg-surface px-6 pb-6 lg:h-auto lg:min-h-40 lg:border-t-0 lg:border-l lg:pt-8"
              >
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-brand/70 to-brand/20"
                    style={{
                      height: `${h * 100}%`,
                      animation: `eq ${1.4 + (i % 5) * 0.25}s ease-in-out ${i * -0.13}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          </Spotlight>
        </div>
      </Container>
    </section>
  );
}
