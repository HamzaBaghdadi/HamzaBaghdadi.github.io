import { About } from "@/components/site/about";
import { Beyond } from "@/components/site/beyond";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { Container } from "@/components/site/section-heading";
import { SiteHeader } from "@/components/site/site-header";
import { Stack } from "@/components/site/stack";
import { experience, profile, projects } from "@/content/profile";
import { siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  worksFor: { "@type": "Organization", name: experience[0].company },
  address: { "@type": "PostalAddress", addressCountry: "SY" },
  knowsLanguage: profile.languages.map((l) => l.name),
  knowsAbout: ["TypeScript", "React", "Next.js", "Angular", "Frontend Architecture", ...projects.map((p) => p.name)],
  sameAs: [profile.links.github, profile.links.x].filter(Boolean),
};

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only rounded-md bg-background px-3 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Stack />
        <Beyond />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <Container className="flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>Built with Next.js, Tailwind CSS and shadcn/ui</p>
        </Container>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
