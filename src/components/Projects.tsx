import type { Content } from '../i18n';
import { ArrowUpRight, CheckList, Chips, SectionLabel, SectionTitle, pad } from './ui';

export default function Projects({ t }: { t: Content }) {
  return (
    <section
      id="proyectos"
      aria-labelledby="proyectos-title"
      className="border-y border-line bg-surface py-[clamp(72px,10vw,128px)]"
    >
      <div className="wrap">
        <SectionLabel>{t.projects.label}</SectionLabel>
        <SectionTitle id="proyectos-title">{t.projects.title}</SectionTitle>

        <div className="mt-12 grid gap-5">
          {t.projects.items.map((p, i) => (
            <article
              key={p.name}
              className="grid gap-[clamp(20px,4vw,56px)] rounded-[18px] border border-line bg-ground p-[clamp(24px,4vw,44px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]"
            >
              <header>
                <span className="text-sm font-bold tracking-[0.1em] text-accent tabular-nums">{pad(i)}</span>
                <h3 className="mt-3.5 text-[clamp(22px,2.4vw,28px)] font-bold leading-[1.2] tracking-[-0.01em] text-ink-strong">
                  {p.name}
                </h3>
                <p className="mt-2.5 text-sm font-medium text-muted">{p.role}</p>
              </header>
              <div>
                <p className="mb-[18px] text-lg font-medium text-ink-strong">{p.summary}</p>
                <CheckList items={p.points} className="text-[15px]" />
                <Chips items={p.stack} label="Stack" className="mt-[22px]" />
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    className="mt-[22px] inline-flex min-h-11 items-center gap-1.5 font-semibold text-accent no-underline hover:text-accent-strong hover:underline"
                  >
                    {t.projects.repoLink}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
