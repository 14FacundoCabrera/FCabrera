import type { Content } from "../i18n";
import { ArrowRight, SectionLabel, SectionTitle, pad } from "./ui";

export default function Process({ t }: { t: Content }) {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="pb-[clamp(72px,10vw,128px)]">
      <div className="wrap">
        <div className="rounded-[28px] border border-line bg-surface p-[clamp(24px,5vw,56px)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel index="02">{t.process.label}</SectionLabel>
              <SectionTitle id="proceso-title" className="text-[clamp(28px,3.4vw,40px)]">
                {t.process.title}
              </SectionTitle>
            </div>
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-[22px] font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white"
            >
              {t.process.cta}
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ol className="mt-12 grid border-line max-md:ml-2 max-md:border-l-2 md:grid-cols-4 md:border-t-2">
            {t.process.steps.map((s, i) => (
              <li key={s.title} className="relative pb-8 max-md:pl-8 md:pt-8 md:pr-6 md:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute size-4 rounded-full max-md:top-1 max-md:-left-[9px] md:-top-[9px] md:left-0 ${
                    i === 0 ? "bg-brand shadow-[0_0_0_5px_var(--tint)]" : "border-2 border-accent bg-surface"
                  }`}
                />
                <p className="font-mono text-[13px] font-semibold text-accent">{pad(i)}</p>
                <h3 className="mt-2 text-[19px] font-bold text-ink-strong">{s.title}</h3>
                <p className="mt-1.5 text-[15px] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
