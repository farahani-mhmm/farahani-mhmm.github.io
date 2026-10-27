import type { ReactNode } from "react";
import { GitHubIcon } from "@/components/BrandIcons";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SectionTitle } from "@/components/SectionTitle";

type Entry = {
  role: string;
  // Only the place name is turned into a link, e.g. "Data Mining Laboratory".
  place?: { text: string; href: string };
  org: ReactNode;
  period: string | null;
  description: ReactNode;
};

const workExperience: Entry[] = [
  {
    role: "Co-founder",
    org: (
      <>
        <a
          href="https://deripin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          Deripin Centralized Exchange
        </a>{" "}
        (to be launched soon)
      </>
    ),
    period: null,
    description:
      "Co-founding a centralized cryptocurrency exchange for trading real-world assets (RWAs).",
  },
  {
    role: "Founder and UI/UX Designer",
    org: "Pixelated Shop (to be launched soon)",
    period: "Jul 2026 – Present",
    description: "Founded a laptop shop and designed its UI/UX.",
  },
];

const researchExperience: Entry[] = [
  {
    role: "Research Intern (Remote)",
    org: "University of Cagliari (UniCa), Cagliari, Italy",
    period: "Feb 2026 – Present",
    description: (
      <>
        Conducting research on price-aware recommendation, currently in the initial phase of reproducibility.
        <span className="mt-1 block">
        <span className="font-semibold text-foreground/70">Supervisors:</span>{" "}
        <a
          href="https://aibd.unica.it/people/ludovico-boratto"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          Ludovico Boratto
        </a>{" "}
        and{" "}
        <a
          href="https://scholar.google.com/citations?hl=es&user=IO_9xB8AAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          Fernando Alexis Medina Quispe
        </a>
        .
        </span>
      </>
    ),
  },
  {
    role: "Research Intern",
    place: {
      text: "Data Mining Laboratory",
      href: "https://github.com/IUST-DMLab",
    },
    org: "Iran University of Science and Technology, Tehran, Iran",
    period: "Nov 2018 – Feb 2019",
    description: (
      <>
        Researched sentiment analysis of informal Persian text.
        <span className="mt-1 block">
        <span className="font-semibold text-foreground/70">Supervisor:</span>{" "}
        <a
          href="https://its.iust.ac.ir/profile/en/b_minaei"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          Behrouz Minaei-Bidgoli
        </a>
        .
        </span>
      </>
    ),
  },
];

const education = [
  {
    degree: "M.Sc. in AI",
    school: "Qazvin Islamic Azad University (QIAU)",
    period: "Oct 2020 – Present",
    detail: (
      <>
        <span className="font-semibold text-foreground/70">Thesis:</span> Mitigation of the cold start problem in movie recommender systems using fuzzification of users' social network information and LLMs.
        <span className="mt-1 block">
        <span className="font-semibold text-foreground/70">Supervisor:</span>{" "}
        <a
          href="https://scholar.google.com/citations?user=Xjl4ABkAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          Behrooz Shahrokhzadeh
        </a>
        .
        </span>
        <span className="mt-1 block">
          <a
            href="https://github.com/farahani-mhmm/ma-thesis-movie-recsys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 link-ext"
          >
            <GitHubIcon className="h-4 w-4 text-foreground" />
            Repository
          </a>
        </span>
      </>
    ),
  },
  {
    degree: "B.Sc. in IT Engineering",
    school: "Islamic Azad University, Arak Branch",
    period: "Sep 2014 – Jul 2019",
    detail: null,
  },
];

const publications = [
  {
    href: "https://ieeexplore.ieee.org/abstract/document/10496631/",
    authors: "Zokaei, Z., Shahrokhzadeh, B., Farahani, M., and Alizadeh, S. H.",
    title: "Mitigation of the cold start problem in movie recommender systems using fuzzification of users' social network information",
    period: "Feb 2024",
  },
  {
    href: "https://ieeexplore.ieee.org/abstract/document/9238699/",
    authors: "Karrabi, M., Oskooie, L., Bakhtiar, M., Farahani, M., and Monsefi, R.",
    title: "Sentiment Analysis of Informal Persian Texts Using Embedding Informal words and Attention-Based LSTM Network",
    period: "Sep 2020",
  },
];

// One timeline row: the date sits in a left column, the details sit next to the line.
const TimelineRow = ({
  period,
  last,
  children,
}: {
  period: string | null;
  last: boolean;
  children: ReactNode;
}) => (
  <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
    {period ? (
      <p className="pt-0.5 text-sm font-medium text-muted-foreground sm:text-right">{period}</p>
    ) : (
      <span className="hidden sm:block" />
    )}
    <div className={cn("relative border-l-2 border-border pl-6", !last && "pb-8")}>
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-background" />
      {children}
    </div>
  </div>
);

const ExperienceList = ({ items }: { items: Entry[] }) => (
  <div className="mt-6">
    {items.map((item, index) => (
      <TimelineRow key={item.role + index} period={item.period} last={index === items.length - 1}>
        <h3 className="font-sans text-lg font-semibold text-foreground">
          {item.role}
          {item.place && (
            <>
              ,{" "}
              <a
                href={item.place.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-ext hover:text-muted-foreground"
              >
                {item.place.text}
              </a>
            </>
          )}
        </h3>
        <p className="text-sm font-medium text-foreground">{item.org}</p>
        {item.description && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        )}
      </TimelineRow>
    ))}
  </div>
);

const Resume = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
              Curriculum Vitae
            </h1>
            <p className="animate-fade-in-up delay-100 mt-2 text-lg text-muted-foreground">
              Mohammad Farahani
            </p>
          </div>
        </div>

        <Separator className="my-10" />

        {/* Work experience */}
        <div className="animate-fade-in-up delay-200">
          <SectionTitle icon="fa-briefcase">Work Experience</SectionTitle>
          <ExperienceList items={workExperience} />
        </div>

        <Separator className="my-10" />

        {/* Research experience */}
        <div className="animate-fade-in-up delay-200">
          <SectionTitle icon="fa-flask">Research Experience</SectionTitle>
          <ExperienceList items={researchExperience} />
        </div>

        <Separator className="my-10" />

        {/* Education */}
        <div className="animate-fade-in-up delay-300">
          <SectionTitle icon="fa-graduation-cap">Education</SectionTitle>
          <div className="mt-6">
            {education.map((item, index) => (
              <TimelineRow key={item.degree} period={item.period} last={index === education.length - 1}>
                <h3 className="font-sans text-lg font-semibold text-foreground">{item.degree}</h3>
                <p className="text-sm font-medium text-foreground">{item.school}</p>
                {item.detail && (
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                )}
              </TimelineRow>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* Publications */}
        <div className="animate-fade-in-up delay-400">
          <SectionTitle icon="fa-book">Publications</SectionTitle>
          <div className="mt-6">
            {publications.map((pub, index) => (
              <TimelineRow key={pub.href} period={pub.period} last={index === publications.length - 1}>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pub.authors},{" "}
                  <span className="font-semibold text-foreground">“{pub.title}”</span>{" "}
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-ext"
                  >
                    IEEE Xplore
                  </a>
                </p>
              </TimelineRow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
