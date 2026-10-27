import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BulletList, SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

// This page merges the "Experiences" and "Projects" sections of the CV. It uses the CV's icons
// (Font Awesome: briefcase, laptop, github) and its chevron bullet. CS Reading Group is not
// listed here: it lives on the Reading Group page.

type Item = {
  period: string;
  title: ReactNode;
  // Place or organization, under the title.
  subtitle?: ReactNode;
  points: ReactNode[];
  tags?: string[];
};

const linkClass = "link-ext";

const ExtLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

const GitHubLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="ml-2 inline-block align-middle text-brand transition-opacity hover:opacity-70"
  >
    <i className="fa fa-github text-lg" aria-hidden="true" />
  </a>
);

const experiences: Item[] = [
  {
    period: "Oct 2026 – Present",
    title: "Research Intern (Remote)",
    subtitle: "University of Cagliari (UniCa)",
    points: [
      <>
        Reproduce price-aware recommendation models and papers; consult weekly with supervisors{" "}
        <ExtLink href="https://aibd.unica.it/people/ludovico-boratto">Ludovico Boratto</ExtLink> and{" "}
        <ExtLink href="https://scholar.google.com/citations?hl=es&user=IO_9xB8AAAAJ&view_op=list_works&sortby=pubdate">
          Fernando Alexis Medina Quispe
        </ExtLink>
        .
      </>,
    ],
    tags: ["Recommender Systems", "Price-aware Recommendation", "Reproducibility"],
  },
  {
    period: "Jul 2026 – Present",
    title: (
      <>
        Co-founder, <ExtLink href="https://deripin.com">Deripin Cryptocurrency Exchange</ExtLink>
      </>
    ),
    subtitle: "To be launched soon",
    points: [
      "Co-founded a cryptocurrency exchange for tokenized real-world assets (RWAs); established the roadmap and requirements and decided the tradable assets",
      "Tested 10+ flows (admin panel, user dashboard, deposit/withdrawal); resolved 15+ bugs pre-launch",
    ],
    tags: ["Crypto", "RWA", "Product Strategy", "QA"],
  },
  {
    period: "Nov 2018 – Feb 2019",
    title: (
      <>
        Research Intern, <ExtLink href="https://github.com/IUST-DMLab">Data Mining Laboratory</ExtLink>
      </>
    ),
    subtitle: "Iran University of Science and Technology",
    points: [
      <>
        Investigated sentiment analysis of informal Persian text under the supervision of{" "}
        <ExtLink href="https://its.iust.ac.ir/profile/en/b_minaei">Prof. Behrouz Minaei-Bidgoli</ExtLink>
      </>,
      <>
        Collaborated with the lab's R&amp;D team and four co-authors on an attention-based LSTM with informal-word
        embeddings
      </>,
    ],
    tags: ["Sentiment Analysis", "NLP"],
  },
  {
    period: "Sep 2016 – Jun 2016",
    title: "Research Experience for Undergraduates (REU)",
    subtitle: "Sharif University of Technology",
    points: [
      <>
        Investigated Computational Geometry under the supervision of{" "}
        <ExtLink href="https://sina.sharif.edu/~abam/">Dr. Mohammad Ali Abam</ExtLink>; presented two talks on its
        foundations and GIS applications
      </>,
    ],
    tags: ["Computational Geometry"],
  },
];

const projects: Item[] = [
  {
    period: "2026",
    title: (
      <>
        Cold Start Lab: M.Sc. Thesis Code
        <GitHubLink href="https://github.com/farahani-mhmm/ma-thesis-movie-recsys" label="GitHub repository" />
      </>
    ),
    points: [
      <>
        A ten-step pipeline for new-user and new-film cold start in movie recommendation: profile and history models,
        fuzzification of social-network profiles, and LLM-derived film features, evaluated by per-user AUC on 258,540
        ratings. With the help of{" "}
        <ExtLink href="https://www.linkedin.com/in/javad-toghraee-06616520a/">Javad Toghraee</ExtLink>. See also the{" "}
        <ExtLink href="https://ieeexplore.ieee.org/abstract/document/10496631/">paper</ExtLink>.
      </>,
    ],
    tags: ["Python", "Pandas", "Scikit-Learn", "Fuzzy Logic", "LLMs"],
  },
  {
    period: "Feb 2024",
    title: (
      <>
        UP5: Fairness-aware Recommendation
        <GitHubLink href="https://github.com/farahani-mhmm/UP5" label="UP5 on GitHub" />
      </>
    ),
    points: ["Reproduced UP5, an unbiased foundation model for fairness-aware recommendation, for my research."],
  },
  {
    period: "Apr 2023",
    title: (
      <>
        Persian Text Preprocessing
        <GitHubLink href="https://github.com/farahani-mhmm/hazm" label="hazm on GitHub" />
      </>
    ),
    points: [
      "Used hazm, a Python library for digesting Persian text, for tokenization, lemmatization, and POS tagging in Persian sentiment-analysis preprocessing.",
    ],
  },
  {
    period: "Jul 2026",
    title: "Pixelated Shop",
    subtitle: "To be launched soon",
    points: ["Founded a laptop shop and designed its UI/UX."],
  },
];

// One timeline row, like the Resume page: the date sits in a left column, the details next to the line.
const TimelineRow = ({ item, last }: { item: Item; last: boolean }) => (
  <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <p className="pt-0.5 text-sm font-medium text-muted-foreground sm:text-right">{item.period}</p>
    <div className={cn("relative border-l-2 border-border pl-6", !last && "pb-8")}>
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-background" />
      <h3 className="font-sans text-lg font-semibold text-foreground">{item.title}</h3>
      {item.subtitle && <p className="text-sm font-medium text-foreground">{item.subtitle}</p>}
      <BulletList className="mt-1.5" items={item.points} />
      {item.tags && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-sm px-1.5 py-0 text-xs font-normal text-muted-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Section = ({
  icon,
  title,
  items,
  delay,
}: {
  icon: string;
  title: string;
  items: Item[];
  delay: string;
}) => (
  <div className={`animate-fade-in-up ${delay}`}>
    <SectionTitle icon={icon}>{title}</SectionTitle>
    <div className="mt-6">
      {items.map((item, index) => (
        <TimelineRow key={item.period + index} item={item} last={index === items.length - 1} />
      ))}
    </div>
  </div>
);

const Research = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
          Experiences
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg text-muted-foreground">
          My research lies in <span className="font-medium text-brand">recommender systems</span> (with a focus on making them provide fair and less biased recommendations) and <span className="font-medium text-brand">natural language processing (NLP)</span> (with a focus on sentiment analysis), which comes from my interest in linguistics.
        </p>

        <Separator className="my-10" />
        <Section icon="fa-briefcase" title="Experiences" items={experiences} delay="delay-200" />

        <Separator className="my-10" />
        <Section icon="fa-laptop" title="Projects" items={projects} delay="delay-300" />
      </div>
    </section>
  );
};

export default Research;
