import type { Content } from "../i18n";
import { ArrowRight, SectionLabel, SectionTitle } from "./ui";

export default function Skills({ t }: { t: Content }) {
  return (
    <section id="habilidades" aria-labelledby="habilidades-title" className="py-[clamp(72px,10vw,128px)]">
      <div className="wrap">
        <SectionLabel index="05">{t.skills.label}</SectionLabel>
        <SectionTitle id="habilidades-title">{t.skills.title}</SectionTitle>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((g) => (
            <div key={g.title} className="lift rounded-[22px] border border-line bg-surface p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-bold text-ink-strong">{g.title}</h3>
                <span className="font-mono text-xs text-accent">{String(g.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-[18px] flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-line bg-ground px-3 py-1.5 text-[13px] font-medium leading-snug text-ink-strong"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col justify-between gap-6 rounded-[22px] bg-night p-7 text-paper">
            <p className="text-[19px] font-semibold leading-[1.45]">{t.skills.ctaText}</p>
            <a
              href="#contacto"
              className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-accent-night no-underline hover:text-accent-night-strong"
            >
              {t.skills.ctaLink}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
