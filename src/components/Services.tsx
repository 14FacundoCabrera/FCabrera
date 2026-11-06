import type { ComponentType, SVGProps } from "react";
import type { Content, ServiceIcon } from "../i18n";
import { ChartIcon, ChipIcon, CloudIcon, CodeIcon, DatabaseIcon, SectionLabel, SectionTitle, pad } from "./ui";

const icons: Record<ServiceIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  chart: ChartIcon,
  database: DatabaseIcon,
  code: CodeIcon,
  cloud: CloudIcon,
  chip: ChipIcon,
};

/** Little bar chart drawn on the dark "Data & BI" card. */
function Bars() {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 120" className="pointer-events-none absolute top-7 right-6 w-[170px] md:w-[220px]">
      <rect x="10" y="70" width="26" height="40" rx="5" fill="var(--night-line)" />
      <rect x="50" y="50" width="26" height="60" rx="5" fill="var(--night-line)" />
      <rect x="90" y="60" width="26" height="50" rx="5" fill="var(--night-line)" />
      <rect x="130" y="30" width="26" height="80" rx="5" fill="var(--night-line)" />
      <rect x="170" y="12" width="26" height="98" rx="5" fill="var(--accent-night)" />
      <path d="M23 62 L63 44 L103 52 L143 24 L183 6" fill="none" stroke="#5CCB98" strokeWidth="2" strokeDasharray="4 5" />
    </svg>
  );
}

export default function Services({ t }: { t: Content }) {
  const [first, second, ...rest] = t.services.items;

  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-[clamp(72px,10vw,128px)]">
      <div className="wrap">
        <div className="grid gap-[clamp(32px,6vw,72px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <SectionLabel index="01">{t.services.label}</SectionLabel>
            <SectionTitle id="servicios-title">{t.services.title}</SectionTitle>
          </div>
          <div>
            <p className="text-[19px] leading-[1.65] text-ink-strong">{t.services.body[0]}</p>
            {t.services.body.slice(1).map((p) => (
              <p key={p} className="mt-[18px]">
                {p}
              </p>
            ))}
            <ul className="mt-7 flex flex-wrap gap-2">
              {t.services.chips.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-medium leading-tight text-ink-strong"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-[clamp(64px,8vw,96px)] mb-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {t.services.heading}
        </h3>
        <ul className="grid gap-4 md:grid-cols-6">
          {/* Lead service: dark card with chart */}
          <li className="lift relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[22px] border border-night bg-night p-8 text-paper md:col-span-3">
            <Bars />
            <span className="font-mono text-[13px] font-semibold text-accent-night">{pad(0)}</span>
            <div className="mt-24 md:mt-0">
              <h4 className="text-2xl font-bold text-paper">{first.title}</h4>
              <p className="mt-2 max-w-[30em] text-[15px] text-paper-muted">{first.body}</p>
            </div>
          </li>

          <ServiceCard item={second} index={1} big />

          {rest.map((s, i) => (
            <ServiceCard key={s.title} item={s} index={i + 2} highlight={i === rest.length - 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard({
  item,
  index,
  big = false,
  highlight = false,
}: {
  item: Content["services"]["items"][number];
  index: number;
  big?: boolean;
  highlight?: boolean;
}) {
  const Icon = icons[item.icon];
  return (
    <li
      className={`lift flex flex-col justify-between gap-10 rounded-[22px] border ${big ? "min-h-[250px] p-8 md:col-span-3" : "p-7 md:col-span-2"} ${
        highlight ? "border-tint-line bg-tint" : "border-line bg-surface"
      }`}
    >
      <div className="flex items-start justify-between">
        <span className={`font-mono text-[13px] font-semibold ${highlight ? "text-tint-ink" : "text-accent"}`}>
          {pad(index)}
        </span>
        <span
          className={`flex items-center justify-center ${big ? "size-12 rounded-[14px]" : "size-11 rounded-[13px]"} ${
            highlight ? "bg-brand text-white" : "bg-tint text-accent"
          }`}
        >
          <Icon className={big ? "size-[22px]" : "size-5"} />
        </span>
      </div>
      <div>
        <h4 className={`font-bold text-ink-strong ${big ? "text-2xl" : "text-xl"}`}>{item.title}</h4>
        <p className={`mt-2 text-[15px] ${highlight ? "text-tint-ink" : "text-muted"}`}>{item.body}</p>
      </div>
    </li>
  );
}
