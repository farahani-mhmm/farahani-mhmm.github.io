import { GitHubIcon, GoogleScholarIcon, LinkedInIcon } from "@/components/BrandIcons";

const socialLinks = [
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/mohammad-farahani/", label: "LinkedIn" },
  { icon: GitHubIcon, href: "https://github.com/farahani-mhmm", label: "GitHub" },
  { icon: GoogleScholarIcon, href: "https://scholar.google.com/citations?user=rJlagNMAAAAJ&hl=en", label: "Google Scholar" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-xs text-muted-foreground/70">
            Design adapted from{" "}
            <a
              href="https://github.com/treinmund/treinmund.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ext hover:text-foreground"
            >
              treinmund.github.io
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-foreground transition-opacity hover:opacity-80"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
