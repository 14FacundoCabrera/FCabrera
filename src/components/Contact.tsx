import { contact, type Content } from "../i18n";
import { Rings } from "./Hero";
import { ArrowUpRight, CodeIcon, SectionLabel } from "./ui";

export default function Contact({ t }: { t: Content }) {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="dots relative overflow-hidden bg-night py-[clamp(80px,10vw,128px)] text-paper"
    >
      <Rings className="-bottom-80 -left-56 size-[640px] rotate-[-90deg] opacity-60" />
      <div className="wrap relative text-center">
        <SectionLabel index="07" night>
          {t.contact.label}
        </SectionLabel>
        <h2
          id="contacto-title"
          className="mx-auto mt-5 max-w-[12em] text-[clamp(40px,6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-paper"
        >
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[34em] text-lg text-paper-muted">{t.contact.body}</p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-10 inline-flex items-center gap-3.5 border-b-2 border-accent-night pb-1.5 text-[clamp(20px,3vw,36px)] font-bold tracking-[-0.01em] text-paper no-underline transition-colors [overflow-wrap:anywhere] hover:text-accent-night-strong"
        >
          <span className="sr-only">{t.contact.emailLabel}: </span>
          {contact.email}
          <ArrowUpRight className="size-7 flex-none text-accent-night" />
        </a>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex min-h-[52px] items-center rounded-full bg-brand px-[26px] font-semibold text-white no-underline transition-colors hover:bg-brand-strong hover:text-white"
          >
            {t.contact.cta}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-[52px] items-center gap-2.5 rounded-full border-[1.5px] border-night-line px-[26px] font-semibold text-paper no-underline transition-colors hover:border-paper-muted hover:text-paper"
          >
            <CodeIcon className="size-[18px]" />
            <span className="sr-only">{t.contact.githubLabel}: </span>
            github.com/{contact.githubHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
