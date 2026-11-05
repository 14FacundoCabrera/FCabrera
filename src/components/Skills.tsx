import type { Content } from '../i18n';
import { Chips, SectionLabel, SectionTitle } from './ui';

export default function Skills({ t }: { t: Content }) {
  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="py-[clamp(72px,10vw,128px)]">
      <div className="wrap">
        <SectionLabel>{t.skills.label}</SectionLabel>
        <SectionTitle id="habilidades-title">{t.skills.title}</SectionTitle>

        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-12 gap-y-10">
          {t.skills.groups.map((g) => (
            <div key={g.title} className="border-t border-line pt-5">
              <h3 className="mb-4 text-[17px] font-bold text-ink-strong">{g.title}</h3>
              <Chips items={g.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
