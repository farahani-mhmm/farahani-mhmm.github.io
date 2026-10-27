import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { BulletList, SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";

// A CV of failures, in the spirit of the "CV of failures" / "shadow CV" pages of other academics.
// Every entry has a date, a title, a small table of numbers, an outcome, and a lesson.
// The numbers for the emails to professors, the RecSys grants, and the reading group (Feb 2025)
// come from my 2024 Talk Master slides.

type Entry = {
  period: string;
  title: string;
  stats: [label: string, value: string][];
  outcome: ReactNode;
  lesson: ReactNode;
};

type Category = {
  icon: string; // Font Awesome class
  title: string;
  entries: Entry[];
};

const categories: Category[] = [
  {
    icon: "fa-envelope-o",
    title: "Rejected applications",
    entries: [
      {
        period: "Summer – Autumn 2024",
        title: "Spamming professors, professionally",
        stats: [
          ["Emails sent", "120+"],
          ["Interview invitations", "2"],
          ["Offers", "1"],
          ["Follow-ups to the final professor", "5+ (10 emails in total)"],
        ],
        outcome:
          "120+ emails to professors across Europe, 2 interviews, and 1 offer: a remote research internship. That is a success rate below 1%, and I still count it as a success.",
        lesson: "Follow up like it is a hobby, and make friends along the way. A silent professor is just a reply in progress.",
      },
    ],
  },
  {
    icon: "fa-trophy",
    title: "Rejected grants & scholarships",
    entries: [
      {
        period: "2024",
        title: "Collecting rejection letters, ACM RecSys edition",
        stats: [
          ["Rejections", "9"],
          ["Final discount", "75%"],
          ["Price paid (virtual)", "€75"],
        ],
        outcome:
          "Nine rejections later, I politely protested and got 75% off: I attended virtually for €75. Best discount of my life.",
        lesson: "“No” is just the opening bid of a negotiation.",
      },
    ],
  },
  {
    icon: "fa-book",
    title: "Failed courses & exams",
    entries: [
      {
        period: "Oct 2020",
        title: "Crashing in the first semester, like an autonomous vehicle",
        stats: [
          ["Course", "Autonomous Vehicle Robots"],
          ["Status", "Academic probation"],
        ],
        outcome:
          "I failed Autonomous Vehicle Robots, so my own academic vehicle went straight to probation in semester one.",
        lesson: "Sometimes you just fail!",
      },
    ],
  },
  {
    icon: "fa-bolt",
    title: "Hardships, delays & worries",
    entries: [
      {
        period: "Oct 2020 – Present",
        title: "A thesis defense that is still loading…",
        stats: [
          ["Supervisors changed", "2"],
          ["Years since enrolment", "6"],
          ["Defense", "Still loading"],
        ],
        outcome:
          "COVID-19 and internal changes within the faculty delayed my M.Sc. defense and made me change my supervisors twice. The defense is still on its way.",
        lesson: "A long road is still a road. I used the extra time to publish and to build things on the side.",
      },
      {
        period: "Feb 2026",
        title: "A project paused because the internet said goodbye",
        stats: [
          ["Cause", "Internet outages and war"],
          ["Work", "Paused, then resumed"],
        ],
        outcome: "Work stopped for a while because of internet outages and the war. It resumed, a bit wiser and a lot more patient.",
        lesson: "Plans are provisional. Always keep a plan B, and a plan C for the connection.",
      },
      {
        period: "Aug 2022",
        title: "Betting that the reading group would last a few months",
        stats: [
          ["My prediction", "A few months"],
          ["Sessions held (Feb 2025)", "49"],
          ["Scholars in the network (Feb 2025)", "45+"],
        ],
        outcome:
          "When I founded the CS Reading Group, I was not sure it would survive more than a few months. 49 sessions later, it is the worst prediction I have ever made.",
        lesson: "Predict less, host more.",
      },
    ],
  },
  {
    icon: "fa-language",
    title: "Things I am bad at",
    entries: [
      {
        period: "Since Sep 2011",
        title: "Learning French, a long-term relationship",
        stats: [
          ["1st class", "2 terms"],
          ["2nd class (a year later)", "2 terms"],
          ["3rd class (a few months later), at CLF-Téhéran", "3 terms"],
          ["4th class (almost ten years later)", "1 term, then I left"],
          ["Total terms", "8"],
          ["A1 classes, each with a different tutor", "4"],
          ["Classes failed", "0"],
        ],
        outcome:
          "I took the A1 course four times, with four different tutors, and I did not fail any of them! So why the same course again and again? Because between classes I took long gaps and forgot everything I had learned, so I started from the beginning. The last time, I could not find the time and left the class.",
        lesson: "I am still interested in learning French one day, from the very beginning. Again. Je ne suis pas fini! :)",
      },
    ],
  },
];

const scoreboard: [string, string][] = [
  ["Emails to strangers (professors)", "120+"],
  ["Grant rejections", "9"],
  ["Supervisor changes", "2"],
  ["French terms (all A1)", "8"],
];

const StatsTable = ({ stats }: { stats: Entry["stats"] }) => (
  <table className="mt-2 w-full max-w-md border-collapse text-sm">
    <tbody>
      {stats.map(([label, value]) => (
        <tr key={label} className="border-y border-border">
          <th scope="row" className="py-1 pr-4 text-left font-normal text-muted-foreground">
            {label}
          </th>
          <td className="py-1 text-right font-semibold text-foreground">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TimelineRow = ({ entry, last }: { entry: Entry; last: boolean }) => (
  <div className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <p className="pt-0.5 text-sm font-medium text-muted-foreground sm:text-right">{entry.period}</p>
    <div className={cn("relative border-l-2 border-border pl-6", !last && "pb-8")}>
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-brand bg-background" />
      <h3 className="font-sans text-lg font-semibold text-foreground">{entry.title}</h3>
      <StatsTable stats={entry.stats} />
      <BulletList
        className="mt-3"
        items={[
          <>
            <span className="font-semibold text-foreground">Outcome:</span> {entry.outcome}
          </>,
          <>
            <span className="font-semibold text-foreground">Lesson:</span> {entry.lesson}
          </>,
        ]}
      />
    </div>
  </div>
);

const Failures = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
          Successfully Failed Tasks :)
        </h1>

        <figure className="animate-fade-in-up delay-100 mt-6 border-l-2 border-border pl-4">
          <blockquote className="space-y-2 text-base leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">MICHAEL:</span> Why don't I tell you what my greatest weaknesses are? I work too hard. I care too much. And sometimes I can be too invested in my job.
            </p>
            <p>
              <span className="font-semibold text-foreground">DAVID:</span> Okay. And your strengths?
            </p>
            <p>
              <span className="font-semibold text-foreground">MICHAEL:</span> Well, my weaknesses are actually... strengths. 😁
            </p>
          </blockquote>
          <figcaption className="mt-2 text-xs text-brand-gray">
            Michael Scott in{" "}
            <a
              href="https://www.thedundies.com/id/16747"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ext"
            >
              “The Job” · Season 3, episode 23
            </a>
          </figcaption>
        </figure>
        <p className="animate-fade-in-up delay-200 mt-6 text-lg text-muted-foreground">
          Here is a list of successfully failed tasks. Most CVs only brag about the wins, so this one is for the losses: failing is part of the job, and so is admitting it. The idea comes from{" "}
          <a
            href="https://www.nature.com/articles/nj7322-467a"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ext"
          >
            A CV of failures
          </a>{" "}
          (an article published on Nature).
        </p>

        <dl className="animate-fade-in-up delay-200 mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {scoreboard.map(([label, value]) => (
            <div key={label} className="rounded-md border border-border p-3">
              <dd className="text-2xl font-semibold text-brand">{value}</dd>
              <dt className="text-xs text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>

        {categories.map((category) => (
          <div key={category.title}>
            <Separator className="my-10" />
            <div className="animate-fade-in-up delay-300">
              <SectionTitle icon={category.icon}>{category.title}</SectionTitle>
              <div className="mt-6">
                {category.entries.map((entry, i) => (
                  <TimelineRow key={entry.title} entry={entry} last={i === category.entries.length - 1} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Failures;
