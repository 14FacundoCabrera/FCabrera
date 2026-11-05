import { useCallback, useEffect, useState } from 'react';
import { content, type Lang } from './i18n';

const langFromPath = (path: string): Lang => (/^\/en(\/|$)/.test(path) ? 'en' : 'es');

export const pathFor = (lang: Lang) => (lang === 'en' ? '/en/' : '/');

/** Spanish lives at `/`, English at `/en/`. Switching updates the URL without a reload. */
export function useLang() {
  const [lang, setLang] = useState<Lang>(() => langFromPath(window.location.pathname));

  useEffect(() => {
    const onPop = () => setLang(langFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const t = content[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', `https://fcabrera.uy${pathFor(lang)}`);
  }, [lang]);

  const switchTo = useCallback((next: Lang) => {
    window.history.pushState(null, '', pathFor(next));
    setLang(next);
    window.scrollTo({ top: 0 });
  }, []);

  return { lang, switchTo };
}
