import type { ReactNode, SVGProps } from 'react';

export function SectionLabel({ children, night = false, className = '' }: { children: ReactNode; night?: boolean; className?: string }) {
  return (
    <p
      className={`mb-[18px] inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.3em] ${
        night ? 'text-accent-night' : 'text-accent'
      } ${className}`}
    >
      <span aria-hidden="true" className="h-[3px] w-[22px] rounded-sm bg-current" />
      {children}
    </p>
  );
}

export function SectionTitle({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2
      id={id}
      className={`max-w-[18em] text-[clamp(30px,4vw,46px)] font-bold leading-[1.12] tracking-[-0.02em] text-ink-strong ${className}`}
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
