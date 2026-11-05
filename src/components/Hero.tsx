import type { Content } from "../i18n";
import Monogram from "./Monogram";

export default function Hero({ t }: { t: Content }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100dvh-73px)] items-center overflow-hidden bg-night py-[clamp(40px,7vw,96px)] text-paper"
    >
      <div className="wrap grid w-full items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <div>
          <h1
            id="hero-title"
            className="text-[clamp(44px,7.4vw,92px)] font-bold leading-[0.98] tracking-[-0.03em] text-paper"
          >
            Facundo Cabrera
          </h1>
          <p className="mt-[18px] text-[clamp(14px,1.6vw,18px)] font-medium uppercase tracking-[0.32em] text-accent-night">
            {t.hero.eyebrow}
          </p>
          <p className="mt-7 max-w-[34em] text-[clamp(17px,1.7vw,20px)] leading-[1.65] text-paper-muted">
            {t.hero.lead}
          </p>
          <p className="mt-[22px] flex max-w-[34em] items-start gap-3 text-[15px] font-medium text-paper">
            <span
              aria-hidden="true"
              className="mt-2 size-2.5 flex-none rounded-full animate-pulse bg-accent-night shadow-[0_0_0_5px_color-mix(in_srgb,var(--accent-night)_22%,transparent)]"
            />
            {t.hero.status}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-brand px-[26px] font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contacto"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-night-line px-[26px] font-semibold text-paper no-underline transition-colors hover:border-paper-muted hover:text-paper"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex justify-start max-md:-order-1 md:justify-center"
        >
          <div className="flex aspect-square w-28 items-center justify-center rounded-[26px] border border-night-line bg-night-raised md:w-[min(100%,400px)] md:rounded-[23%]">
            <Monogram
              width={260}
              accent="var(--accent-night)"
              ink="var(--paper)"
              className="h-auto w-[66%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
