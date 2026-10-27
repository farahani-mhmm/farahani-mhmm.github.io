import type { ReactNode } from "react";
import { BulletList } from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Group = {
  id: string;
  title: ReactNode;
  subtitle: ReactNode;
  icon: string; // Font Awesome class
  points: ReactNode[];
};

const linkClass = "link-ext";

const groups: Group[] = [
  {
    id: "csrg",
    title: (
      <a
        href="https://sites.google.com/view/cs-reading-group/home"
        target="_blank"
        rel="noopener noreferrer"
        className="link-ext hover:text-muted-foreground"
      >
        CS Reading Group (CSRG)
      </a>
    ),
    subtitle: (
      <>
        <span className="block font-medium text-muted-foreground">Founder and Organizer</span>
        <span className="block">Jul 2022 – Present</span>
      </>
    ),
    icon: "fa-users",
    points: [
      "A supportive and friendly community of students from diverse backgrounds who share an interest in AI.",
      "More than 60 graduate students have been invited to present their research.",
      <>
        Want to join?{" "}
        <a
          href="https://forms.gle/UdtdGynuV7ocx45K7"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Here is the link to join
        </a>
        .
      </>,
    ],
  },
  {
    id: "saif",
    title: "SAiF Reading Group",
    subtitle: (
      <>
        <span className="block">Oct 2026</span>
        <span className="block">
          Established by my mentor{" "}
          <a
            href="https://malikeh97.github.io/group.html"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Malikeh Ehghaghi
          </a>{" "}
          (UofT'26)
        </span>
      </>
    ),
    icon: "fa-handshake-o",
    points: [
      <>
        Interested in joining the mentorship program?{" "}
        <a
          href="https://forms.gle/yfdeBPWYdga3PB9o7"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Fill out this form
        </a>
        .
      </>,
      <>
        Want to join the reading group?{" "}
        <a href="mailto:malikeh.ehghaghi@mail.utoronto.ca" className={linkClass}>
          Email her
        </a>
        .
      </>,
    ],
  },
];

const ReadingGroup = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
          Reading Groups
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg text-muted-foreground">
          I am involved in two reading groups:
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {groups.map((group, i) => (
            <Card key={group.id} className={`group animate-fade-in-up ${i === 0 ? "delay-200" : "delay-300"}`}>
              <CardHeader>
                <CardTitle className="flex items-start gap-3 text-lg leading-snug">
                  <i className={`fa ${group.icon} mt-0.5 w-5 shrink-0 text-lg text-brand`} aria-hidden="true" />
                  <span>{group.title}</span>
                </CardTitle>
                <div className="pl-8 text-sm text-muted-foreground">{group.subtitle}</div>
              </CardHeader>
              <CardContent>
                <BulletList items={group.points} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadingGroup;
