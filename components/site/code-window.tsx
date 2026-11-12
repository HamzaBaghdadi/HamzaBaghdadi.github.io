"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * The same preset-driven button written for React and for Angular, with a small
 * dependency-free highlighter that only needs to handle these two snippets.
 */

const reactSnippet = `type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = 'solid',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const preset = usePreset();

  return (
    <button
      className={cn(preset.button({ variant, size }), className)}
      {...props}
    />
  );
}`;

const angularSnippet = `@Component({
  selector: 'semi-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'classes()' },
  template: \`<ng-content />\`,
})
export class SemiButton {
  readonly variant = input<Variant>('solid');
  readonly size = input<Size>('md');
  private readonly preset = inject(SEMI_PRESET);

  protected readonly classes = computed(() =>
    this.preset().button({
      variant: this.variant(),
      size: this.size(),
    }),
  );
}`;

const files = [
  { name: "Button.tsx", label: "React", code: reactSnippet },
  { name: "semi-button.ts", label: "Angular", code: angularSnippet },
];

const tokenPattern =
  /(\/\/.*$)|('[^']*'|`[^`]*`)|(@\w+)|\b(export|class|readonly|private|protected|this|import|from|const|function|return|type)\b|\b([A-Z][A-Za-z_]*)\b|\b(\w+)(?=\s*[(<])|(\w+)(?=:)/gm;

type Kind = "comment" | "string" | "decorator" | "keyword" | "type" | "fn" | "prop";
type Token = { text: string; kind?: Kind };

function tokenize(line: string): Token[] {
  const out: Token[] = [];
  let last = 0;
  for (const m of line.matchAll(tokenPattern)) {
    const i = m.index ?? 0;
    if (i > last) out.push({ text: line.slice(last, i) });
    const kind: Kind = m[1]
      ? "comment"
      : m[2]
        ? "string"
        : m[3]
          ? "decorator"
          : m[4]
            ? "keyword"
            : m[5]
              ? "type"
              : m[6]
                ? "fn"
                : "prop";
    out.push({ text: m[0], kind });
    last = i + m[0].length;
  }
  if (last < line.length) out.push({ text: line.slice(last) });
  return out;
}

const colors: Record<Kind, string> = {
  comment: "text-faint italic",
  string: "text-emerald-600 dark:text-emerald-300/90",
  decorator: "text-brand",
  keyword: "text-violet-600 dark:text-violet-300",
  type: "text-amber-700 dark:text-amber-200/90",
  fn: "text-sky-700 dark:text-sky-300",
  prop: "text-foreground",
};

export function CodeWindow() {
  const [active, setActive] = useState(0);
  const lines = files[active].code.split("\n");

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/20 dark:shadow-black/60">
      <div className="flex items-center gap-3 border-b border-border px-4">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <div role="tablist" aria-label="Framework" className="flex">
          {files.map((f, i) => (
            <button
              key={f.name}
              type="button"
              role="tab"
              id={`code-tab-${i}`}
              aria-selected={active === i}
              aria-controls="code-panel"
              onClick={() => setActive(i)}
              className={cn(
                "relative px-3 py-2.5 font-mono text-xs transition-colors",
                active === i ? "text-foreground" : "text-faint hover:text-muted-foreground",
              )}
            >
              {f.name}
              {active === i && <span aria-hidden className="absolute inset-x-3 -bottom-px h-px bg-brand" />}
            </button>
          ))}
        </div>
        <figcaption className="ml-auto hidden text-xs text-faint sm:block">Same component, two frameworks</figcaption>
      </div>
      <pre
        id="code-panel"
        role="tabpanel"
        aria-labelledby={`code-tab-${active}`}
        className="h-80 overflow-auto py-4 sm:h-[24.5rem] font-mono text-[0.75rem] leading-[1.7] sm:text-[0.8125rem]"
      >
        <code>
          {lines.map((line, i) => (
            <span key={i} className="flex">
              <span aria-hidden className="w-10 shrink-0 pr-4 text-right text-faint/70 select-none">
                {i + 1}
              </span>
              <span className="pr-6 whitespace-pre text-muted-foreground">
                {tokenize(line).map((t, j) =>
                  t.kind ? (
                    <span key={j} className={colors[t.kind]}>
                      {t.text}
                    </span>
                  ) : (
                    t.text
                  ),
                )}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
