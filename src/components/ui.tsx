import type { ReactNode, SVGProps } from 'react';

/** Numbered section label, e.g. "01 — SERVICIOS". */
export function SectionLabel({
  children,
  index,
  night = false,
  className = '',
}: {
  children: ReactNode;
  index?: string;
  night?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[13px] font-semibold uppercase tracking-[0.12em] ${
        night ? 'text-accent-night' : 'text-accent'
      } ${className}`}
    >
      {index && <span>{index} — </span>}
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
  night = false,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  night?: boolean;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`mt-[18px] max-w-[18em] text-[clamp(32px,4vw,48px)] font-bold leading-[1.1] tracking-[-0.025em] ${
        night ? 'text-paper' : 'text-ink-strong'
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function MiniTitle({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h3 id={id} className={`mb-3.5 text-[13px] font-semibold uppercase tracking-[0.24em] text-muted ${className}`}>
      {children}
    </h3>
  );
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`grid gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckIcon className="mt-[0.3em] size-4 flex-none text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items, label, className = '' }: { items: string[]; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="rounded-full bg-chip px-[13px] py-1.5 text-sm font-medium leading-snug text-ink-strong">
          {item}
        </li>
      ))}
    </ul>
  );
}

export const pad = (n: number) => String(n + 1).padStart(2, '0');

/* ---------- Icons (inline stroke SVG) ---------- */

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const CheckIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="M4 12.5 9.5 18 20 6.5" />
  </svg>
);

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M3 6l9 7 9-7" />
  </svg>
);

export const CodeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ChartIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 5-6" />
  </svg>
);

export const DatabaseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
);

export const CloudIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M17.5 19a4.5 4.5 0 1 0-1.2-8.8A6 6 0 0 0 4.5 12.5 3.5 3.5 0 0 0 6 19z" />
  </svg>
);

export const ChipIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
);

/** A browser window frame with an address bar, used for screenshots. */
export function BrowserBar({ domain, tone = 'light' }: { domain: string; tone?: 'light' | 'night' }) {
  const night = tone === 'night';
  return (
    <div
      className={`flex h-10 items-center gap-2 border-b px-4 ${
        night ? 'border-night-line bg-night-raised' : 'border-line bg-ground'
      }`}
    >
      {[0, 1, 2].map((i) => (
        <span key={i} aria-hidden="true" className={`size-2.5 rounded-full ${night ? 'bg-night-line' : 'bg-line'}`} />
      ))}
      <span
        className={`ml-4 truncate rounded-full px-3.5 py-1 font-mono text-[11px] ${
          night ? 'bg-night text-paper-muted' : 'bg-chip text-muted'
        }`}
      >
        {domain}
      </span>
    </div>
  );
}
