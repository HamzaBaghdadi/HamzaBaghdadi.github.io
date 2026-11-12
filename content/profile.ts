/**
 * All portfolio content lives here. Edit this file to update the site;
 * no layout code needs to change.
 *
 * Links set to `null` are treated as "not provided": they are hidden
 * in the production build and flagged in `pnpm dev` so they are easy to find.
 */

export const site = {
  /** Public URL, used for canonical links and Open Graph. Overridden by NEXT_PUBLIC_SITE_URL at build time. */
  url: "https://hamzabaghdadi.github.io",
};

export const profile = {
  name: "Hamza Baghdadi",
  role: "Frontend Engineer",
  location: "Syria",
  timezone: "UTC+3",
  status: "Open to remote roles and freelance work",
  /** File in /public. */
  photo: "hamza.webp",
  /** CV in /public, offered as a download. Set to null to hide the button. */
  cv: "Hamza-Baghdadi-CV.pdf" as string | null,
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Work proficiency" },
  ],
  intro:
    "Frontend engineer with 2.5+ years building production web applications in TypeScript, from design systems and component libraries to fast, accessible UIs.",
  links: {
    email: "hamzabaghdadi.me@gmail.com" as string | null,
    github: "https://github.com/HamzaBaghdadi" as string | null,
    x: null as string | null,
  },
};

export const about = [
  "I build complex user interfaces, reusable component architectures, and applications that stay maintainable as they grow. At work that means large Angular apps in an Nx monorepo and a Next.js company website; on my own projects it's mostly React and Next.js.",
  "Making an interface look good is the start, not the job. I focus on application architecture, performance, developer experience, accessibility, and clean code.",
  "I pick the framework that fits the job and focus on what carries over between them: TypeScript, component design, state, accessibility and performance. I'm also experienced with RTL and Arabic interfaces and OpenAPI-driven API integration.",
];

export const principles = [
  { title: "Maintainable", body: "Easy to understand, extend, and improve." },
  { title: "Performant", body: "Efficient in resource usage and in how it feels to use." },
  { title: "Scalable", body: "Designed to accommodate future requirements." },
  { title: "Customizable", body: "Flexible enough to adapt to different needs." },
  { title: "Reliable", body: "Stable, with predictable behavior." },
];

export const philosophyNote =
  "I'd rather understand how a technology works internally than simply follow the trend.";

export const experience = [
  {
    role: "Frontend Engineer",
    company: "Layer Technologies LLC",
    start: "2024-03",
    end: null as string | null, // null = present
    summary:
      "Building and maintaining the company's Angular applications and website, from shared architecture to deployment.",
    /** Headline results, shown as stat tiles. */
    highlights: [
      { value: "4", label: "Angular apps in one Nx monorepo" },
      { value: "62 → 95", label: "Lighthouse performance score" },
      { value: "~45%", label: "Faster initial load" },
      { value: "~30%", label: "Less feature development time" },
    ],
    points: [
      "Built and maintained 4 Angular apps in an Nx monorepo using standalone components, Signals, and zoneless change detection.",
      "Designed a shared component and NGXS state architecture across all 4 apps, cutting feature development time by ~30%.",
      "Raised Lighthouse performance from 62 to 95 and cut initial load time by ~45% with lazy loading, compression, and asset optimization.",
      "Replaced ~80% of hand-written API code with OpenAPI-generated clients (ng-openapi-gen), catching contract mismatches at build time.",
      "Built the company website in Next.js (SSG), scoring 99+ on Lighthouse performance, SEO, and accessibility.",
      "Collaborated on ASP.NET API design; containerized apps with Docker and set up Linux hosting with Jenkins CI/CD deployments.",
    ],
    tech: ["angular", "nx", "ngxs", "openapi", "nextjs", "docker", "jenkins"] as StackId[],
  },
];

/** Skills, grouped as on the CV. `id` links a technology to projects and icons. */
export const stack = [
  {
    group: "Frontend",
    description: "Frameworks, styling and UI.",
    items: [
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "angular", name: "Angular" },
      { id: "rxjs", name: "RxJS" },
      { id: "signals", name: "Signals" },
      { id: "zoneless", name: "Standalone, Zoneless & OnPush" },
      { id: "html", name: "HTML & CSS" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "scss", name: "SCSS" },
      { id: "primeng", name: "PrimeNG" },
      { id: "rtl", name: "Responsive & RTL UI" },
    ],
  },
  {
    group: "Architecture & State",
    description: "How large apps stay organized.",
    items: [
      { id: "nx", name: "Nx Monorepos" },
      { id: "ngxs", name: "NGXS" },
      { id: "components", name: "Component Libraries" },
      { id: "tokens", name: "Design Tokens & Theming" },
      { id: "reactive", name: "Reactive Architecture" },
    ],
  },
  {
    group: "APIs & Auth",
    description: "Talking to the backend safely.",
    items: [
      { id: "rest", name: "REST APIs" },
      { id: "openapi", name: "OpenAPI / Swagger" },
      { id: "oidc", name: "OAuth2 / OIDC" },
    ],
  },
  {
    group: "Tools & Engineering",
    description: "Shipping and measuring.",
    items: [
      { id: "git", name: "Git" },
      { id: "docker", name: "Docker" },
      { id: "jenkins", name: "Jenkins CI/CD" },
      { id: "lighthouse", name: "Lighthouse" },
      { id: "electron", name: "Electron" },
    ],
  },
  {
    group: "Also worked with",
    description: "Backend, desktop and mobile.",
    items: [
      { id: "node", name: "Node.js" },
      { id: "nestjs", name: "NestJS" },
      { id: "go", name: "Go" },
      { id: "wails", name: "Wails" },
      { id: "csharp", name: "C# / .NET" },
      { id: "postgres", name: "PostgreSQL" },
      { id: "reactnative", name: "React Native" },
    ],
  },
] as const;

export const interests = [
  "Frontend Architecture",
  "Design Systems",
  "Component Libraries",
  "Web Performance",
  "Developer Experience",
  "Software Architecture",
];

export type StackId = (typeof stack)[number]["items"][number]["id"];

export type Project = {
  name: string;
  kind: string;
  status: string;
  description: string;
  aspects?: string[];
  stack: StackId[];
  /** Source code, for open-source projects. */
  repo: string | null;
  /** Live website, if the project is deployed. */
  url?: string | null;
  /** Screenshot in /public. */
  image?: { src: string; alt: string; width: number; height: number };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "SemiUI",
    kind: "Angular UI component library",
    status: "Open source · Apache-2.0",
    featured: true,
    description:
      "Preset-driven Angular components you copy into your project and restyle freely, not a black-box dependency.",
    aspects: [
      "Customizable theming and preset system",
      "Reusable, accessible components",
      "Tailwind CSS styling architecture",
      "Design tokens for app-wide customization",
    ],
    stack: ["angular", "typescript", "tailwind"],
    repo: "https://github.com/HamzaBaghdadi/SemiUI",
    url: "https://semiui.pages.dev",
    image: { src: "projects/semiui.webp", alt: "SemiUI documentation showing the Button component and its variants", width: 1400, height: 662 },
  },
  {
    name: "Chessien",
    kind: "Online chess platform",
    status: "Live",
    description:
      "A responsive chess platform with interactive gameplay and custom chess modes, built with Next.js and NestJS.",
    aspects: [
      "Next.js with CSR and SSG",
      "Custom chess modes",
      "Animated, component-based UI",
      "Optimized rendering and asset loading",
    ],
    stack: ["nextjs", "nestjs", "typescript", "tailwind"],
    repo: null, // not open source
    url: "https://chessien.me",
    image: { src: "projects/chessien.webp", alt: "Chessien game review with move accuracy and a move list", width: 1400, height: 662 },
  },
  {
    name: "TrueDeploy",
    kind: "Cross-platform DevOps desktop app",
    status: "Open source",
    description:
      "Deploy to your own servers from your desktop: Docker deployments, HTTPS domains, databases, backups and monitoring over SSH. No agent on the server, no root required.",
    stack: ["go", "wails", "react", "typescript", "docker"],
    repo: "https://github.com/HamzaBaghdadi/TrueDeploy",
    image: { src: "projects/truedeploy.webp", alt: "TrueDeploy overview showing servers, projects, alerts and recent deploys", width: 1400, height: 875 },
  },
];

export const beyond = {
  title: "Music production",
  body: "Outside software I produce music in FL Studio, mostly rap. I like experimenting with creative ideas and the places where technology and creativity meet.",
};

export const education = [
  {
    title: "Bachelor's degree, Computer Science",
    issuer: "University of the People",
    period: "2022 – 2027 (expected)",
  },
  {
    title: "Bachelor of Information Technology (BAIT)",
    issuer: "Syrian Virtual University",
    period: "2023 – 2027 (expected)",
  },
];

export const certifications = [
  {
    title: "Advanced C# Programming",
    issuer: "Lifelong Learning Center",
    period: "2023",
    details: "Secure client-server apps in C# and .NET: encryption, digital signatures, multithreading and distributed systems.",
  },
];

export const openTo = [
  "Frontend development roles",
  "Remote software engineering positions",
  "Freelance projects",
  "Open-source collaboration",
];

/** Every stack item in one flat list. */
export const stackItems: ReadonlyArray<{ id: StackId; name: string }> = stack.flatMap(
  (g): ReadonlyArray<{ id: StackId; name: string }> => g.items,
);
