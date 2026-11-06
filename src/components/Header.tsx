import type { MouseEvent, ReactNode } from 'react';
import type { Content, Lang } from '../i18n';
import { pathFor } from '../useLang';
import Monogram from './Monogram';

interface Props {
  t: Content;
  lang: Lang;
  onSwitch: (lang: Lang) => void;
}

export function LangLink({
  lang,
  onSwitch,
  className,
  children,
}: {
  lang: Lang;
  onSwitch: (lang: Lang) => void;
  className?: string;
  children: ReactNode;
}) {
  const other: Lang = lang === 'es' ? 'en' : 'es';
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onSwitch(other);
  };
  return (
    <a href={pathFor(other)} hrefLang={other} lang={other} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

export const pillClass =
  'inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-night-line px-3.5 font-mono text-xs font-semibold tracking-[0.04em] text-paper no-underline hover:border-accent-night hover:text-paper';

export function Wordmark({ className = 'text-[22px]' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`font-bold leading-none tracking-[-0.02em] text-paper ${className}`}>
      <span className="text-accent-night">F</span>Cabrera
    </span>
  );
}

export default function Header({ t, lang, onSwitch }: Props) {
  const links = [
    ['#servicios', t.nav.services],
    ['#proceso', t.nav.process],
    ['#proyectos', t.nav.projects],
    ['#clientes', t.nav.clients],
    ['#habilidades', t.nav.skills],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-night-line bg-night/92 [&_a]:shrink-0 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex min-h-[72px] items-center justify-between gap-4">
        <a
          href={pathFor(lang)}
          aria-label={lang === 'es' ? 'FCabrera — inicio' : 'FCabrera — home'}
          className="inline-flex items-center gap-3 no-underline"
        >
          <Monogram width={44} accent="var(--accent-night)" ink="var(--paper)" />
          <Wordmark className="text-[21px] max-[400px]:hidden" />
        </a>
        <nav aria-label={lang === 'es' ? 'Principal' : 'Main'}>
          <ul className="flex items-center gap-1">
            {links.map(([href, label]) => (
              <li key={href} className="max-lg:hidden">
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center rounded-[10px] px-3 text-sm font-medium text-paper-muted no-underline hover:text-paper"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="ml-1">
              <LangLink lang={lang} onSwitch={onSwitch} className={pillClass}>
                <span aria-hidden="true">{t.nav.switchShort}</span>
                <span className="sr-only">{t.nav.switchLabel}</span>
              </LangLink>
            </li>
            <li className="ml-1.5">
              <a
                href="#contacto"
                className="inline-flex min-h-11 items-center rounded-full bg-brand px-[18px] text-sm font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white"
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
