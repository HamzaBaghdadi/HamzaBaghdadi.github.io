import {
  siAngular,
  siDocker,
  siDotnet,
  siElectron,
  siGit,
  siJenkins,
  siLighthouse,
  siOpenapiinitiative,
  siOpenid,
  siGo,
  siWails,
  siHtml5,
  siCss,
  siJavascript,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siNx,
  siPostgresql,
  siPrimeng,
  siReact,
  siReactivex,
  siSass,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/utils";

/** Brand marks for stack ids in content/profile.ts. Items without one fall back to a dot. */
const icons: Record<string, SimpleIcon> = {
  angular: siAngular,
  typescript: siTypescript,
  javascript: siJavascript,
  react: siReact,
  nextjs: siNextdotjs,
  html: siHtml5,
  css: siCss,
  scss: siSass,
  tailwind: siTailwindcss,
  primeng: siPrimeng,
  rxjs: siReactivex,
  nx: siNx,
  node: siNodedotjs,
  nestjs: siNestjs,
  reactnative: siReact,
  csharp: siDotnet,
  git: siGit,
  jenkins: siJenkins,
  electron: siElectron,
  lighthouse: siLighthouse,
  openapi: siOpenapiinitiative,
  oidc: siOpenid,
  go: siGo,
  wails: siWails,
  docker: siDocker,
  postgres: siPostgresql,
};

export function hasTechIcon(id: string) {
  return id in icons;
}

/**
 * Monochrome by default; `colored` paints the brand color
 * (or a group hover can opt in with `group-hover:` via the --brand-color var).
 */
export function TechIcon({ id, className, colored }: { id: string; className?: string; colored?: boolean }) {
  const icon = icons[id];
  if (!icon) {
    return <span aria-hidden className={cn("inline-block size-1.5 rounded-full bg-current opacity-60", className)} />;
  }
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("size-4 shrink-0 fill-current", className)}
      style={colored ? { fill: `#${icon.hex}` } : ({ ["--brand-color" as string]: `#${icon.hex}` } as React.CSSProperties)}
    >
      <path d={icon.path} />
    </svg>
  );
}
