import type { Content } from "../i18n";
import { ArrowUpRight, BrowserBar, SectionLabel, SectionTitle } from "./ui";

export default function Projects({ t }: { t: Content }) {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="border-y border-line bg-surface py-[clamp(72px,10vw,128px)]"
    >
      <div className="wrap">
        <SectionLabel index="03">{t.projects.label}</SectionLabel>
        <SectionTitle id="proyectos-title">{t.projects.title}</SectionTitle>

        {t.projects.items.map((p) => (
          <article
            key={p.name}
            className="mt-14 grid overflow-hidden rounded-[28px] border border-line bg-ground md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]"
          >
            <div className="flex flex-col gap-[22px] p-[clamp(24px,4vw,48px)]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF4E5] px-3 py-1.5 text-[13px] font-semibold text-[#8A4B08]">
                  <span aria-hidden="true" className="size-[7px] rounded-full bg-[#D98613]" />
                  {p.status}
                </span>
                <span className="font-mono text-xs text-muted">{p.kind}</span>
              </div>
              <h3 className="text-[44px] font-extrabold leading-none tracking-[-0.03em] text-ink-strong">{p.name}</h3>
              <p className="text-[19px] font-medium leading-normal text-ink-strong">{p.summary}</p>
              <ul className="grid grid-cols-2 gap-3">
                {p.features.map((f) => (
                  <li key={f.title} className="rounded-[14px] border border-line bg-surface p-4">
                    <p className="text-sm font-bold text-ink-strong">{f.title}</p>
                    <p className="mt-1 text-[13px] leading-normal text-muted">{f.body}</p>
                  </li>
                ))}
              </ul>
              <ul aria-label="Stack" className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-lg bg-[#1B1D1C] px-3 py-1.5 font-mono text-xs text-[#F3F2EE]">
                    {s}
                  </li>
                ))}
              </ul>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-1.5 self-start font-semibold text-accent no-underline hover:text-accent-strong hover:underline"
                >
                  {t.projects.repoLink}
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>

            {/* Screenshot in a browser window, bleeding off the card's corner */}
            <div className="dots-light flex min-h-[360px] items-end bg-tint pt-[clamp(24px,4vw,48px)] pl-[clamp(24px,4vw,48px)] md:min-h-[520px]">
              <div className="w-full overflow-hidden rounded-tl-2xl border-t border-l border-tint-line bg-surface shadow-[0_30px_60px_-30px_rgba(15,60,40,0.35)]">
                <BrowserBar domain={p.domain} />
                {p.image ? (
                  <img src={p.image} alt={`${p.name} — ${p.domain}`} className="block h-[clamp(280px,32vw,432px)] w-full object-cover object-top" />
                ) : (
                  <div className="flex h-[clamp(280px,32vw,432px)] items-center justify-center bg-[repeating-linear-gradient(135deg,var(--ground)_0_12px,var(--chip)_12px_24px)]">
                    <p className="rounded-[10px] border border-dashed border-paper-muted bg-surface px-4 py-2.5 font-mono text-[13px] text-muted">
                      {p.imagePlaceholder}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
