import { useId } from 'react';

interface Props {
  width?: number;
  /** CSS color for the F. */
  accent?: string;
  /** CSS color for the C. */
  ink?: string;
  /** Accessible name. Leave empty for a decorative mark. */
  label?: string;
  className?: string;
}

/**
 * FC monogram from the FCabrera brand canvas (Logo FCabrera).
 * The F is cut by a circle; the C is an open arc sitting in that cut.
 */
export default function Monogram({
  width = 120,
  accent = 'var(--accent)',
  ink = 'var(--ink)',
  label = '',
  className,
}: Props) {
  const maskId = `fc-cut-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const height = Math.round((width * 140) / 200);

  return (
    <svg
      viewBox="0 0 200 140"
      width={width}
      height={height}
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="200" height="140" fill="#fff" />
          <circle cx="135" cy="70" r="66" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} style={{ fill: accent }}>
        <rect x="10" y="10" width="31" height="120" />
        <rect x="10" y="10" width="130" height="28" />
        <rect x="10" y="64" width="100" height="27" />
      </g>
      <path
        d="M170.2 40.4 A46 46 0 1 0 170.2 99.6"
        fill="none"
        style={{ stroke: ink }}
        strokeWidth="28"
      />
    </svg>
  );
}
