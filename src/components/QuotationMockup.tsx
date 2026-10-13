import { Check, Clock, Search } from "lucide-react";

/**
 * Illustrative mockup for the Quotation Machine project.
 * All content is fictional sample data. No prices, suppliers or company data.
 */
const rows = [
  { item: "Sample item A", qty: 10, done: true },
  { item: "Sample item B", qty: 4, done: true },
  { item: "Sample item C", qty: 2, done: false },
];

export function QuotationMockup() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(140deg,rgba(18,48,107,0.6),rgba(5,11,26,0.7))] px-4 pb-10 pt-12 sm:px-6 sm:pb-10 sm:pt-8"
      role="img"
      aria-label="Illustrative mockup with fictional data: a quotation draft listing sample items with check status, beside an internal information lookup panel."
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,184,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,184,255,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-[520px] overflow-hidden rounded-lg border border-white/15 bg-navy-950/85 text-[10.5px] leading-tight shadow-[0_12px_30px_rgba(0,0,0,0.45)] sm:text-[11px]" aria-hidden="true">
        {/* window bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="ml-2 truncate font-mono text-[10px] text-ink-faint">Quotation draft · QT-0000 (sample)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          {/* quotation draft */}
          <div className="min-w-0 p-3">
            <p className="mb-2 text-ink-faint">
              Customer: <span className="text-ink">Sample Trading Co.</span>
            </p>
            <div className="grid grid-cols-[minmax(0,1fr)_32px_56px] gap-x-2 border-b border-white/10 pb-1.5 font-mono text-[9.5px] text-ink-faint">
              <span>item</span>
              <span className="text-right">qty</span>
              <span>check</span>
            </div>
            {rows.map((r) => (
              <div key={r.item} className="grid grid-cols-[minmax(0,1fr)_32px_56px] items-center gap-x-2 border-b border-white/[0.06] py-1.5">
                <span className="truncate text-ink">{r.item}</span>
                <span className="text-right tabular-nums text-ink-soft">{r.qty}</span>
                <span className={`flex items-center gap-1 ${r.done ? "text-emerald-300" : "text-amber-200"}`}>
                  {r.done ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                  {r.done ? "checked" : "pending"}
                </span>
              </div>
            ))}
            <div className="mt-2.5 inline-flex rounded-md bg-accent/20 px-2 py-1 text-accent">Prepare quotation</div>
          </div>

          {/* internal lookup */}
          <div className="hidden min-w-0 border-l border-white/10 bg-white/[0.02] p-3 sm:block">
            <p className="mb-2 font-mono text-[9.5px] text-ink-faint">internal lookup</p>
            <div className="mb-2 flex items-center gap-1.5 rounded-md border border-white/15 px-2 py-1 text-ink-soft">
              <Search className="h-3 w-3 shrink-0" />
              <span className="truncate">Sample item B</span>
            </div>
            {[
              ["Item details", "on file"],
              ["Internal notes", "1 entry"],
              ["Last checked", "sample date"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-2 border-b border-white/[0.06] py-1.5">
                <span className="truncate text-ink-faint">{k}</span>
                <span className="shrink-0 text-ink-soft">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-2.5 left-3 rounded-full border border-white/15 bg-navy-950/70 px-2 py-0.5 font-mono text-[10px] text-ink-soft">
        illustrative mockup · fictional data
      </span>
    </div>
  );
}
