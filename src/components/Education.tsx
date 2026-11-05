import type { Content } from '../i18n';
import { MiniTitle, SectionLabel, SectionTitle } from './ui';

export default function Education({ t }: { t: Content }) {
  return (
    <section
      id="formacion"
      aria-labelledby="formacion-title"
      className="border-y border-line bg-surface py-[clamp(72px,10vw,128px)]"
    >
      <div className="wrap">
        <SectionLabel>{t.education.label}</SectionLabel>
        <div className="grid items-start gap-[clamp(32px,6vw,80px)] md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <SectionTitle id="formacion-title">{t.education.title}</SectionTitle>
            <ol className="mt-9 border-b border-line">
              {t.education.items.map((e) => (
                <li
                  key={e.title}
                  className="grid gap-1 border-t border-line py-[22px] sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-6"
                >
                  <span className="text-[15px] font-semibold text-accent tabular-nums">{e.period}</span>
                  <div>
                    <h3 className="text-[19px] font-bold text-ink-strong">{e.title}</h3>
                    {e.note && <p className="mt-1 text-[15px] text-muted">{e.note}</p>}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside aria-labelledby="langs-title" className="rounded-[18px] border border-line bg-ground p-7">
            <MiniTitle id="langs-title">{t.education.languagesTitle}</MiniTitle>
            <dl>
              {t.education.languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4 border-t border-line py-3.5">
                  <dt className="font-semibold text-ink-strong">{l.name}</dt>
                  <dd className="font-medium text-muted">{l.level}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
