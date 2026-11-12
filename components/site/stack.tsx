import { stack } from "@/content/profile";
import { Container, SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";
import { hasTechIcon, TechIcon } from "./tech-icon";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="stack-title" title="Tech stack" description="What I use to design, build and ship." />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {stack.map((group, i) => (
            <Spotlight key={group.group} className={`reveal p-6 ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === stack.length - 1 ? "md:col-span-2" : ""}`}>
              <h3 className="font-semibold">{group.group}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="group flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm transition-colors hover:border-foreground/20"
                  >
                    {hasTechIcon(item.id) && (
                      <TechIcon
                        id={item.id}
                        className="size-3.5 text-muted-foreground transition-colors group-hover:fill-[var(--brand-color)] dark:group-hover:fill-foreground"
                      />
                    )}
                    {item.name}
                  </li>
                ))}
              </ul>
            </Spotlight>
          ))}
        </div>

      </Container>
    </section>
  );
}
