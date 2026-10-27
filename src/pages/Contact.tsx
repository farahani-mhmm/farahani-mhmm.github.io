import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/BrandIcons";

const contactLinks = [
  {
    icon: Mail,
    href: "mailto:mohammadfarahani@acm.org",
    label: "E-mail",
    text: "mohammadfarahani@acm.org",
    external: false,
    note: "I check my email regularly, so I will respond as soon as possible.",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/mohammad-farahani/",
    label: "LinkedIn",
    text: "linkedin.com/in/mohammad-farahani",
    external: true,
    note: "You can drop me a direct message on LinkedIn.",
  },
];

const Contact = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
          Contact
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg leading-relaxed text-muted-foreground">
          I'm looking forward to having a cup of tea and a chat about my research, my work, or just to meet new people.
        </p>
        <p className="animate-fade-in-up delay-100 mt-3 text-lg leading-relaxed text-muted-foreground">
          If you need any help with your research, I am more than happy to help. I know lots of great guys and friends around the world that can help you.
        </p>
        <p className="animate-fade-in-up delay-100 mt-3 text-lg leading-relaxed text-muted-foreground">
          If you need help because you are experiencing, or have experienced 😥, academic bullying, you can anonymously contact the{" "}
          <a
            href="https://paritymovement.org/academic-parity-movement-report-an-incidence/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ext"
          >
            Academic Parity Movement
          </a>
          .
        </p>

        <div className="animate-fade-in-up delay-200 mt-10 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full items-center gap-4 rounded-md border border-border px-5 py-4 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              <link.icon className="h-5 w-5 shrink-0 text-brand" />
              <span className="flex flex-col">
                <span className="text-xs font-medium text-muted-foreground">{link.label}</span>
                <span className="text-sm text-foreground">{link.text}</span>
                {link.note && <span className="mt-0.5 text-xs text-muted-foreground">{link.note}</span>}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
