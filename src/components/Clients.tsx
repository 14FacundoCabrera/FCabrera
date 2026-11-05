import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react';
import { clients, type Content, type Lang } from '../i18n';
import { ArrowUpRight, SectionLabel } from './ui';

const AUTOPLAY_MS = 6500;
const RING_R = 21;
const RING_C = 2 * Math.PI * RING_R;
const VIEWPORT_RATIO = 10 / 16; // height / width of the browser viewport

const hostOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

/** Shortest signed distance from the active slide, so the carousel loops. */
const offsetOf = (i: number, active: number, n: number) => {
  let d = i - active;
  if (d > n / 2) d -= n;
  if (d < -n / 2) d += n;
  return d;
};

function slideStyle(d: number): CSSProperties {
  const abs = Math.abs(d);
  const sign = Math.sign(d);
  if (abs === 0) return { transform: 'translateX(-50%)', opacity: 1, zIndex: 30 };
  if (abs === 1)
    return {
      transform: `translateX(-50%) translateX(calc(var(--spread) * ${sign})) scale(0.78) rotateY(${-sign * 32}deg)`,
      opacity: 0.6,
      zIndex: 20,
    };
  return {
    transform: `translateX(-50%) translateX(calc(var(--spread) * ${sign * 1.55})) scale(0.6) rotateY(${-sign * 40}deg)`,
    opacity: 0,
    zIndex: 10,
  };
}

function BrowserFrame({
  url,
  image,
  name,
  active,
  duration,
  onImageLoad,
}: {
  url: string;
  image: string;
  name: string;
  active: boolean;
  duration: number;
  onImageLoad: (ratio: number) => void;
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-night-line bg-night-raised shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)]">
      {/* Browser chrome */}
      <div className="flex h-11 items-center gap-3 border-b border-night-line px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-night-line" />
          <span className="size-2.5 rounded-full bg-night-line" />
          <span className="size-2.5 rounded-full bg-night-line" />
        </span>
        <span className="mx-auto flex h-7 min-w-0 max-w-[60%] flex-1 items-center justify-center gap-1.5 rounded-full bg-night px-3 text-xs font-medium text-paper-muted">
          <svg viewBox="0 0 24 24" className="size-3 flex-none" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <span className="truncate">{hostOf(url)}</span>
        </span>
        <ArrowUpRight
          className={`size-4 flex-none transition-colors ${active ? 'text-accent-night' : 'text-night-line'}`}
        />
      </div>

      {/* Viewport: the screenshot scrolls inside it on hover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-white [container-type:size]">
        <img
          src={image}
          alt={`${name} — ${hostOf(url)}`}
          draggable={false}
          loading="lazy"
          decoding="async"
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth) onImageLoad(img.naturalHeight / img.naturalWidth);
          }}
          style={{ '--dur': `${duration}s`, '--dur-loop': `${duration * 2 + 3}s` } as CSSProperties}
          className={`client-shot block h-auto w-full select-none [transition:translate_700ms_cubic-bezier(.4,0,.2,1)] ${
            active
              ? 'group-hover/slide:translate-y-[calc(-100%+100cqh)] group-hover/slide:[transition-duration:var(--dur)] group-focus-visible/slide:translate-y-[calc(-100%+100cqh)] group-focus-visible/slide:[transition-duration:var(--dur)] motion-reduce:transition-none'
              : ''
          }`}
        />
        {/* Fade at the bottom hints there is more page below */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/12 to-transparent transition-opacity duration-500 ${
            active ? 'group-hover/slide:opacity-0' : ''
          }`}
        />
      </div>
    </div>
  );
}

export default function Clients({ t, lang }: { t: Content; lang: Lang }) {
  const n = clients.length;
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ratios, setRatios] = useState<Record<number, number>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const elapsed = useRef(0);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  const paused = userPaused || hovering || focusWithin || !inView || reducedMotion;
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const goTo = useCallback(
    (i: number) => {
      elapsed.current = 0;
      setActive(((i % n) + n) % n);
    },
    [n],
  );
  const next = useCallback(() => setActive((a) => (elapsed.current = 0, (a + 1) % n)), [n]);
  const prev = useCallback(() => setActive((a) => (elapsed.current = 0, (a - 1 + n) % n)), [n]);

  // The focused slide link is swapped out when the slide changes, which fires no blur event.
  // Re-check where focus really is after each change.
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const el = document.activeElement;
      setFocusWithin(!!el && !!regionRef.current?.contains(el) && el.matches(':focus-visible'));
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  // Respect "reduce motion": no autoplay, no auto-scroll.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Only autoplay while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Autoplay clock: advances only while not paused, and drives the progress ring.
  useEffect(() => {
    if (n < 2) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (!pausedRef.current) elapsed.current += now - last;
      last = now;
      const p = Math.min(elapsed.current / AUTOPLAY_MS, 1);
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(RING_C * (1 - p));
      if (elapsed.current >= AUTOPLAY_MS) next();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [n, next]);

  // Swipe / drag on the stage.
  const onPointerDown = (e: PointerEvent) => {
    drag.current = { x: e.clientX, moved: false };
  };
  const onPointerMove = (e: PointerEvent) => {
    if (drag.current && Math.abs(e.clientX - drag.current.x) > 8) drag.current.moved = true;
  };
  const onPointerUp = (e: PointerEvent) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    suppressClick.current = drag.current.moved;
    drag.current = null;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
  };

  if (n === 0) return null;
  const current = clients[active];
  const durationOf = (i: number) => {
    const ratio = ratios[i];
    if (!ratio) return 6;
    return Math.min(14, Math.max(2.5, (ratio - VIEWPORT_RATIO) * 3.2));
  };
  const pad = (i: number) => String(i + 1).padStart(2, '0');
  const ctrl =
    'inline-flex size-12 items-center justify-center rounded-full border border-night-line text-paper transition-colors hover:border-paper-muted';

  return (
    <section
      id="clientes"
      ref={sectionRef}
      aria-labelledby="clientes-title"
      className="overflow-hidden bg-night py-[clamp(72px,10vw,128px)] text-paper"
    >
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel night>{t.clients.label}</SectionLabel>
            <h2
              id="clientes-title"
              className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.02em] text-paper"
            >
              {t.clients.title}
            </h2>
          </div>
          <p className="max-w-[24em] text-[15px] text-paper-muted">
            <span className="[@media(hover:none)]:hidden">{t.clients.hint}</span>
            <span className="hidden [@media(hover:none)]:inline">{t.clients.hintTouch}</span>
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t.clients.region}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          ref={regionRef}
          onFocus={(e) => setFocusWithin(e.target.matches(':focus-visible'))}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocusWithin(false);
          }}
          className="mt-14"
        >
          {/* Stage */}
          <div
            className="relative [--spread:68%] [perspective:1800px] [touch-action:pan-y] max-md:[--spread:84%]"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => (drag.current = null)}
            onDragStart={(e) => e.preventDefault()}
            onClickCapture={(e) => {
              if (suppressClick.current) {
                e.preventDefault();
                e.stopPropagation();
                suppressClick.current = false;
              }
            }}
          >
            {/* Glow under the active site */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[20%] -bottom-10 h-28 rounded-[50%] bg-accent-night/25 blur-3xl"
            />

            {/* Spacer: gives the stage the height of one slide */}
            <div aria-hidden="true" className="invisible mx-auto w-[min(780px,80%)] max-md:w-[86%]">
              <div className="h-11" />
              <div className="aspect-[16/10]" />
            </div>

            {clients.map((c, i) => {
              const d = offsetOf(i, active, n);
              const isActive = d === 0;
              const visible = Math.abs(d) <= 1;
              return (
                <div
                  key={c.name + i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${pad(i)} ${t.clients.of} ${pad(n - 1)}: ${c.name}`}
                  aria-hidden={!isActive}
                  inert={!visible}
                  className={`absolute top-0 left-1/2 w-[min(780px,80%)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] [transform-style:preserve-3d] max-md:w-[86%] motion-reduce:duration-0 ${
                    isActive ? 'is-active' : ''
                  }`}
                  style={slideStyle(d)}
                >
                  {isActive ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener"
                      draggable={false}
                      aria-label={`${t.clients.visitAria} ${c.name} (${hostOf(c.url)})`}
                      className="group/slide block rounded-[14px] no-underline outline-offset-4"
                    >
                      <BrowserFrame
                        url={c.url}
                        image={c.image}
                        name={c.name}
                        active
                        duration={durationOf(i)}
                        onImageLoad={(r) => setRatios((s) => (s[i] === r ? s : { ...s, [i]: r }))}
                      />
                    </a>
                  ) : (
                    <button
                      type="button"
                      tabIndex={-1}
                      onClick={() => goTo(i)}
                      className={`relative block w-full cursor-pointer rounded-[14px] text-left ${visible ? '' : 'pointer-events-none'}`}
                    >
                      <BrowserFrame
                        url={c.url}
                        image={c.image}
                        name={c.name}
                        active={false}
                        duration={durationOf(i)}
                        onImageLoad={(r) => setRatios((s) => (s[i] === r ? s : { ...s, [i]: r }))}
                      />
                      <span aria-hidden="true" className="absolute inset-0 rounded-[14px] bg-night/45" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Caption + controls */}
          <div className="mt-16 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
            <div aria-live={userPaused || reducedMotion ? 'polite' : 'off'} aria-atomic="true">
              <p className="text-sm font-bold tracking-[0.1em] text-accent-night tabular-nums">
                {pad(active)} <span className="text-paper-muted">/ {pad(n - 1)}</span>
              </p>
              <h3 className="mt-3 text-[clamp(22px,2.6vw,30px)] font-bold leading-tight tracking-[-0.01em] text-paper">
                {current.name}
              </h3>
              <p className="mt-2 text-[15px] text-paper-muted">
                {current.industry[lang]} · {current.work[lang]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={prev} aria-label={t.clients.prev} className={ctrl}>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 6-6 6 6 6" />
                </svg>
              </button>

              {/* Play / pause wrapped in the progress ring (the circle from the FC mark) */}
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? t.clients.play : t.clients.pause}
                aria-pressed={userPaused}
                disabled={reducedMotion || n < 2}
                className="relative inline-flex size-12 items-center justify-center rounded-full text-paper disabled:opacity-40"
              >
                <svg viewBox="0 0 48 48" className="absolute inset-0 size-12 -rotate-90" aria-hidden="true">
                  <circle cx="24" cy="24" r={RING_R} fill="none" stroke="var(--night-line)" strokeWidth="3" />
                  <circle
                    ref={ringRef}
                    cx="24"
                    cy="24"
                    r={RING_R}
                    fill="none"
                    stroke="var(--accent-night)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={RING_C}
                    strokeDashoffset={RING_C}
                  />
                </svg>
                {userPaused || reducedMotion ? (
                  <svg viewBox="0 0 24 24" className="size-4 translate-x-px" fill="currentColor" aria-hidden="true">
                    <path d="M7 4.5v15l12-7.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </svg>
                )}
              </button>

              <button type="button" onClick={next} aria-label={t.clients.next} className={ctrl}>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>

              <a
                href={current.url}
                target="_blank"
                rel="noopener"
                className="ml-1 inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white"
              >
                {t.clients.visit}
                <ArrowUpRight className="size-4" />
                <span className="sr-only"> — {current.name}</span>
              </a>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2 md:justify-start">
            {clients.map((c, i) => (
              <button
                key={c.name + i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${t.clients.show} ${c.name}`}
                aria-current={i === active}
                className="group inline-flex h-11 items-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-accent-night' : 'w-1.5 bg-night-line group-hover:bg-paper-muted'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
