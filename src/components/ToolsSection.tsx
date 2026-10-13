import { ArrowUpRight } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import { levelLabels, toolCategories, type Tool, type ToolLevel } from "../config/tools";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const isSimpleIcon = (icon: Tool["icon"]): icon is SimpleIcon => typeof icon === "object" && "path" in icon;

function ToolIcon({ icon }: { icon: Tool["icon"] }) {
  if (isSimpleIcon(icon)) {
    return (
      <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="currentColor" aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon className="h-[20px] w-[20px]" strokeWidth={1.6} aria-hidden="true" />;
}

/** Small marker that shows the experience level. Same shapes as the legend. */
function LevelMark({ level }: { level: ToolLevel }) {
  const shape: Record<ToolLevel, string> = {
    "hands-on": "bg-accent shadow-[0_0_8px_rgba(124,184,255,0.7)]",
    familiar: "border border-accent",
    learning: "border border-dashed border-amber-200",
    exploring: "border border-dashed border-amber-200/60",
  };
  return <span className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${shape[level]}`} aria-hidden="true" />;
}

function ToolTile({ tool }: { tool: Tool }) {
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-ink/85 transition duration-300 group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-[0_0_18px_rgba(90,160,255,0.25)]">
        <ToolIcon icon={tool.icon} />
      </span>
      <span className="min-w-0 flex-1 text-[14.5px] leading-snug text-ink">{tool.name}</span>
      <span className="flex shrink-0 items-center gap-2">
        {tool.level && <LevelMark level={tool.level} />}
        {tool.url && (
          <ArrowUpRight
            className="h-3.5 w-3.5 text-ink-faint opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden="true"
          />
        )}
      </span>
      {tool.level && <span className="sr-only">, {levelLabels[tool.level]}</span>}
    </>
  );

  const base = "group flex h-full items-center gap-3 rounded-xl border px-3 py-2.5";

  return tool.url ? (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${tool.name}${tool.level ? ` · ${levelLabels[tool.level]}` : ""} · opens official site`}
      aria-label={`${tool.name}${tool.level ? `, ${levelLabels[tool.level]}` : ""}. Opens official website in a new tab`}
      className={`${base} border-white/[0.08] bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white/[0.06]`}
    >
      {inner}
    </a>
  ) : (
    <div
      className={`${base} border-white/[0.06] bg-transparent`}
      title={tool.level ? levelLabels[tool.level] : undefined}
    >
      {inner}
    </div>
  );
}

export function ToolsSection() {
  const categories = toolCategories.filter((c) => c.tools.length > 0);
  const usedLevels = (Object.keys(levelLabels) as ToolLevel[]).filter((l) =>
    categories.some((c) => c.tools.some((t) => t.level === l)),
  );

  return (
    <section id="tools" aria-labelledby="tools-title" className="py-20 sm:py-28">
      <SectionHeading id="tools-title" eyebrow="// toolkit" title="Tools & Technologies" />

      {usedLevels.length > 0 && (
        <Reveal className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mb-12">
          <span className="font-mono text-[12px] text-ink-faint">key</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {usedLevels.map((l) => (
              <li key={l} className="flex items-center gap-2 text-[13.5px] text-ink-soft">
                <LevelMark level={l} />
                {levelLabels[l]}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <div className="divide-y divide-white/10 border-y border-white/10">
        {categories.map((cat, ci) => (
          <Reveal key={cat.id} delay={ci * 40}>
            <div className="grid gap-5 py-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10 lg:py-10">
              <div className="min-w-0">
                <p className="font-mono text-[12px] text-accent">{String(ci + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug">{cat.title}</h3>
                <p className="mt-1 text-[14px] text-ink-faint">{cat.blurb}</p>
              </div>
              <ul className="grid min-w-0 content-start gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                {cat.tools.map((t) => (
                  <li key={t.name} className="min-w-0">
                    <ToolTile tool={t} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-[13px] text-ink-faint">Tool names link to their official websites.</p>
    </section>
  );
}
