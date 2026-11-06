import { tech, type Content } from "../i18n";
import Monogram from "./Monogram";
import { ArrowRight, ChartIcon } from "./ui";

/** Big concentric rings echoing the circle cut in the FC monogram. */
function Rings({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 800 800" className={`pointer-events-none absolute ${className}`}>
      <circle cx="400" cy="400" r="390" fill="none" stroke="var(--night-line)" />
      <circle cx="400" cy="400" r="300" fill="none" stroke="var(--night-line)" />
      <circle cx="400" cy="400" r="210" fill="none" stroke="var(--night-line)" />
      <path
        d="M675.8 124.2 A390 390 0 0 1 790 400"
        fill="none"
        stroke="var(--accent-night)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { Rings };

export default function Hero({ t }: { t: Content }) {
  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="dots relative flex min-h-[calc(100dvh-73px)] items-center overflow-hidden bg-night text-paper"
      >
        <Rings className="-top-44 -right-64 size-[900px] opacity-50 max-md:-right-80 max-md:size-[560px]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[40%] left-1/2 h-[420px] w-[640px] rounded-full bg-accent-night/10 blur-[90px]"
        />

        <div className="wrap relative grid w-full items-center gap-16 py-[clamp(48px,8vw,112px)] md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            {/* Small logo tile on phones only */}
            <div
              aria-hidden="true"
              className="mb-7 flex size-24 items-center justify-center rounded-[26px] border border-night-line bg-night-raised md:hidden"
            >
              <Monogram width={62} accent="var(--accent-night)" ink="var(--paper)" />
            </div>

            <p className="inline-flex items-center gap-2.5 rounded-full border border-tint-line/40 bg-accent-night/8 py-1.5 pr-3.5 pl-3 text-[13px] font-semibold text-[#CFE6DA]">
              <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-accent-night" />
              {t.hero.badge}
            </p>

            <h1
              id="hero-title"
              className="mt-7 text-[clamp(52px,7vw,100px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-paper"
            >
              Facundo
              <br />
              Cabrera<span className="text-accent-night">.</span>
            </h1>
            <p className="mt-[22px] font-mono text-[13px] font-medium uppercase tracking-[0.16em] text-accent-night md:text-sm">
              {t.hero.role}
            </p>
            <p className="mt-[26px] max-w-[33em] text-[clamp(17px,1.6vw,19px)] leading-[1.65] text-paper-muted">
              {t.hero.lead}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brand px-[26px] font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white max-sm:w-full"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border-[1.5px] border-night-line px-[26px] font-semibold text-paper no-underline transition-colors hover:border-paper-muted hover:text-paper max-sm:w-full"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <dl className="mt-[52px] flex flex-wrap gap-x-8 gap-y-5 border-t border-night-line pt-6">
              {t.hero.facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-night-muted">{f.label}</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-paper">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Logo composition with floating cards (desktop) */}
          <div aria-hidden="true" className="relative hidden h-[480px] md:block">
            <div className="absolute inset-10 flex items-center justify-center rounded-[28%] border border-night-line bg-linear-160 from-[#262A28] to-[#1F2221] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.04)]">
              <Monogram width={250} accent="var(--accent-night)" ink="var(--paper)" className="h-auto w-[62%]" />
            </div>
            <div className="float absolute top-16 -left-3 flex items-center gap-3 rounded-[14px] bg-[#F7F6F2] px-4 py-3.5 text-[#2E2F2E] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#E3F1EA] text-[#0F7F55]">
                <ChartIcon className="size-[18px]" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#5E5E5A]">
                  {t.hero.floatLabel}
                </span>
                <span className="block text-sm font-bold">{t.hero.floatValue}</span>
              </span>
            </div>
            <div className="float-slow absolute -right-2 bottom-[70px] rounded-[14px] border border-night-line bg-night-raised px-4 py-3.5 font-mono text-xs leading-[1.7] text-paper-muted shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)]">
              <span className="text-accent-night">const</span> stack = [
              <br />
              {"  "}
              <span className="text-paper">'React'</span>, <span className="text-paper">'Node'</span>,
              <br />
              {"  "}
              <span className="text-paper">'PostgreSQL'</span>, <span className="text-paper">'Docker'</span>
              <br />
              ];
            </div>
            <div className="float absolute top-2 right-7 rounded-full bg-brand px-3.5 py-2.5 text-[13px] font-semibold text-white shadow-[0_18px_36px_-18px_rgba(15,127,85,0.8)]">
              {t.hero.floatPill}
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling technology strip */}
      <div className="overflow-hidden border-y border-night-line bg-night-deep">
        <p className="sr-only">
          {t.techLabel}: {tech.join(", ")}
        </p>
        <div aria-hidden="true" className="marquee flex w-max py-5">
          {[...tech, ...tech].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-7 pr-7 font-mono text-sm font-medium whitespace-nowrap text-night-muted"
            >
              {item}
              <span className="size-[5px] rounded-full bg-accent-night/70" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
