import type { Content } from "../i18n";
import { SectionLabel, SectionTitle } from "./ui";

export default function Education({ t }: { t: Content }) {
  return (
    <section
      id="formacion"
      aria-labelledby="formacion-title"
      className="border-t border-line bg-surface py-[clamp(72px,10vw,128px)]"
    >
      <div className="wrap grid items-start gap-[clamp(40px,6vw,72px)] md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div>
          <SectionLabel index="06">{t.education.label}</SectionLabel>
          <SectionTitle id="formacion-title">{t.education.title}</SectionTitle>
          <ol className="mt-10 ml-[7px]">
            {t.education.items.map((e, i) => {
              const last = i === t.education.items.length - 1;
              return (
                <li
                  key={e.title}
                  className={`relative border-l-2 pl-10 ${last ? "border-transparent" : "border-line pb-9"}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute top-1 -left-[9px] size-4 rounded-full ${
                      i === 0 ? "bg-brand shadow-[0_0_0_5px_var(--tint)]" : "border-2 border-accent bg-surface"
                    }`}
                  />
                  <p className="font-mono text-[13px] font-semibold text-accent">{e.period}</p>
                  <h3 className="mt-1.5 text-[21px] font-bold leading-snug text-ink-strong">{e.title}</h3>
                  {e.note && <p className="mt-1 text-[15px] text-muted">{e.note}</p>}
                </li>
              );
            })}
          </ol>
        </div>

        <aside aria-labelledby="langs-title" className="rounded-[22px] border border-line bg-ground p-8">
          <h3 id="langs-title" className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {t.education.languagesTitle}
          </h3>
          <dl className="mt-5">
            {t.education.languages.map((l) => (
              <div key={l.name} className="flex items-center justify-between gap-4 border-t border-line py-4">
                <dt className="font-bold text-ink-strong">{l.name}</dt>
                <dd className="rounded-full bg-tint px-3 py-1 text-[13px] font-semibold text-tint-ink">{l.level}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
