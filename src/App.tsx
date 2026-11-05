import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header, { LangLink, Wordmark, pillClass } from "./components/Header";
import Hero from "./components/Hero";
import Monogram from "./components/Monogram";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { content } from "./i18n";
import { useLang } from "./useLang";

export default function App() {
  const { lang, switchTo } = useLang();
  const t = content[lang];

  return (
    <>
      <a
        href="#main"
        className="absolute -top-16 left-4 z-100 rounded-[10px] bg-brand px-4 py-2.5 font-semibold text-white no-underline focus:top-3"
      >
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <Header t={t} lang={lang} onSwitch={switchTo} />

      <main id="main">
        <Hero t={t} />
        <Profile t={t} />
        <Projects t={t} />
        <Clients t={t} lang={lang} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <footer className="border-t border-night-line bg-night py-7 text-sm text-paper-muted">
        <div className="wrap flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5">
            <Monogram
              width={36}
              accent="var(--accent-night)"
              ink="var(--paper)"
            />
            <Wordmark className="text-lg" />
          </div>
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <LangLink
            lang={lang}
            onSwitch={switchTo}
            className={`${pillClass} text-[13px]! tracking-[0.02em]!`}
          >
            {t.nav.switchLabel}
          </LangLink>
        </div>
      </footer>
    </>
  );
}
