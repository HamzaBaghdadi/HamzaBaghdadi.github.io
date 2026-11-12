import { GaugeIcon, LayersIcon, MapPinIcon, ShieldCheckIcon, SlidersHorizontalIcon, WrenchIcon } from "lucide-react";
import { about, interests, philosophyNote, principles, profile } from "@/content/profile";
import { asset } from "@/lib/site";
import { Container, SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  Maintainable: WrenchIcon,
  Performant: GaugeIcon,
  Scalable: LayersIcon,
  Customizable: SlidersHorizontalIcon,
  Reliable: ShieldCheckIcon,
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <figure className="reveal relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card lg:mx-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, image is pre-sized */}
            <img
              src={asset(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              width={720}
              height={720}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/55 px-4 py-3 text-white backdrop-blur-md">
              <span>
                <span className="block text-sm font-semibold">{profile.name}</span>
                <span className="block text-xs text-white/70">{profile.role}</span>
              </span>
              <span className="flex items-center gap-1 text-xs text-white/70">
                <MapPinIcon aria-hidden className="size-3.5" />
                {profile.location}
              </span>
            </figcaption>
          </figure>

          <div>
            <SectionHeading id="about-title" title="More than making it look right" />
            <div className="mt-6 max-w-2xl space-y-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              {about.map((p) => (
                <p key={p.slice(0, 32)} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
            <blockquote className="mt-8 max-w-2xl border-l-2 border-brand pl-5 text-lg leading-relaxed text-pretty">
              {philosophyNote}
            </blockquote>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Engineering interests">
              {interests.map((i) => (
                <li key={i} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-20 text-sm font-medium text-muted-foreground">Good software should be</h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((p, i) => {
            const Icon = icons[p.title] ?? WrenchIcon;
            return (
              <li key={p.title} className={i === principles.length - 1 ? "sm:col-span-2 lg:col-span-1" : undefined}>
                <Spotlight className="reveal h-full p-5">
                  <span className="grid size-9 place-items-center rounded-lg border border-border bg-surface">
                    <Icon aria-hidden className="size-4 text-brand" />
                  </span>
                  <p className="mt-4 font-medium">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Spotlight>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
