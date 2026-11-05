import { contact, type Content } from "../i18n";
import { CodeIcon, MailIcon, SectionLabel } from "./ui";

const linkClass =
  "text-paper no-underline [overflow-wrap:anywhere] hover:text-accent-night-strong hover:underline";
const rowClass =
  "flex items-start gap-4 border-b border-night-line py-4 text-[clamp(16px,1.8vw,20px)] font-medium";
const iconClass = "mt-0.5 size-6 flex-none text-accent-night";

export default function Contact({ t }: { t: Content }) {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="bg-night py-[clamp(72px,10vw,128px)] text-paper"
    >
      <div className="wrap grid items-end gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
        <div>
          <SectionLabel night>{t.contact.label}</SectionLabel>
          <h2
            id="contacto-title"
            className="text-[clamp(36px,5vw,60px)] font-bold leading-[1.12] tracking-[-0.02em] text-paper"
          >
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-[30em] text-paper-muted">{t.contact.body}</p>
        </div>

        <ul className="grid gap-1.5">
          <li className={rowClass}>
            <MailIcon className={iconClass} />
            <a href={`mailto:${contact.email}`} className={linkClass}>
              <span className="sr-only">{t.contact.emailLabel}: </span>
              {contact.email}
            </a>
          </li>
          <li className={rowClass}>
            <CodeIcon className={iconClass} />
            <a
              href={contact.github}
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              <span className="sr-only">{t.contact.githubLabel}: </span>
              github.com/{contact.githubHandle}
            </a>
          </li>
          {/* <li className={rowClass}>
            <PinIcon className={iconClass} />
            <span>
              {t.contact.location}
              <span className="mt-0.5 block text-[15px] text-paper-muted">{t.contact.availability}</span>
            </span>
          </li> */}
        </ul>
      </div>
    </section>
  );
}
