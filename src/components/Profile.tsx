import type { Content } from '../i18n';
import { CheckList, MiniTitle, SectionLabel, SectionTitle, pad } from './ui';

export default function Profile({ t }: { t: Content }) {
  return (
    <section id="perfil" aria-labelledby="perfil-title" className="py-[clamp(72px,10vw,128px)]">
      <div className="wrap">
        <div className="grid gap-[clamp(32px,6vw,80px)] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div>
            <SectionLabel>{t.about.label}</SectionLabel>
            <SectionTitle id="perfil-title">{t.about.title}</SectionTitle>
          </div>
          <div>
            <div className="space-y-[18px]">
              {t.about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <MiniTitle className="mt-8">{t.about.strengthsTitle}</MiniTitle>
            <CheckList items={t.about.strengths} />
          </div>
        </div>

        <SectionLabel className="mt-[clamp(56px,8vw,96px)]">{t.focus.label}</SectionLabel>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {t.focus.items.map((f, i) => (
            <li key={f.title} className="flex flex-col gap-2.5 rounded-[18px] border border-line bg-surface p-7">
              <span className="text-sm font-bold tracking-[0.1em] text-accent tabular-nums">{pad(i)}</span>
              <h3 className="mt-[18px] text-xl font-bold text-ink-strong">{f.title}</h3>
              <p className="text-[15px] text-muted">{f.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
