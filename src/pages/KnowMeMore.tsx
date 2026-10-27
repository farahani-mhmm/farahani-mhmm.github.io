import type { ComponentType, ReactNode } from "react";
import { BulletList, SectionTitle } from "@/components/SectionTitle";
import { TermInfo } from "@/components/TermInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SquashRacket } from "@/components/SquashRacket";

type Topic = {
  title: string;
  icon: ComponentType<{ className?: string }> | string; // a component, or a Font Awesome class
  points: ReactNode[];
};

const hobbies: Topic[] = [
  {
    title: "Sport",
    icon: SquashRacket,
    points: [
      <>
        Playing{" "}
        <TermInfo
          name="squash"
          description="A racket sport played by two or four players in a four-walled court with a small, hollow, rubber ball."
          href="https://en.wikipedia.org/wiki/Squash_(sport)"
          linkLabel="Wikipedia"
        />{" "}
        (almost mid-level) twice a week for the past 1.5 years
      </>,
    ],
  },
  {
    title: "TV Series",
    icon: "fa-television",
    points: [
      <>
        Watching The Office for the thousandth time!
      </>,
      "Currently watching: The Sopranos (second time), Ted Lasso, and Big Little Lies",
    ],
  },
  {
    title: "Food",
    icon: "fa-cutlery",
    points: [
      "Cooking Persian meals",
      <>
        Favorite dishes:{" "}
        <TermInfo
          linkLabel="See a recipe"
          name="Khoresh Gheymeh"
          description="A Persian stew of beef and yellow split peas with tomato and dried lime, served over rice and topped with fried potatoes."
          href="https://persianmama.com/khoresh-gheymeh-beef-and-split-pea-stew/"
          image="https://persianmama.com/wp-content/uploads/2015/06/Gheymeh-1-300x200.jpg"
        />
        ,{" "}
        <TermInfo
          linkLabel="See a recipe"
          name="Abdoogh Khiar"
          description="A cold Persian soup of yogurt, cucumber and fresh herbs, often with raisins and walnuts."
          href="https://persianmama.com/abdoogh-khiar-cold-cucumber-and-yogurt-soup/"
          image="https://persianmama.com/wp-content/uploads/2015/06/Abdoogh-Khiar-1-300x225.jpg"
        />
        ,{" "}
        <TermInfo
          linkLabel="See a recipe"
          name="Dizi (Abgoosht)"
          description="A hearty Persian lamb stew with chickpeas, beans and potatoes, traditionally served in a stoneware crock called dizi."
          href="https://persianmama.com/abgoosht-persian-short-ribs-vegetable-stew/"
          image="https://persianmama.com/wp-content/uploads/2015/07/Abgooshte-Dandeh-1-300x200.jpg"
        />
        , and{" "}
        <TermInfo
          linkLabel="See a recipe"
          name="Kabob Koobideh"
          description="Persian skewers of grilled minced meat seasoned with onion, usually served with rice or flatbread."
          href="https://persianmama.com/kabob-koobideh-grilled-minced-meat-kabobs/"
          image="https://persianmama.com/wp-content/uploads/2015/06/Kabob-Koobideh-1-300x200.jpg"
        />
      </>,
    ],
  },
  {
    title: "Theatre",
    icon: "fa-ticket",
    points: [
      <>
        The last three plays I watched, in the past two months:
        <ul className="mt-1 list-[circle] space-y-1 pl-5">
          <li>Bare Hasti</li>
          <li>Dream Land</li>
          <li>Moonwalk</li>
        </ul>
      </>,
    ],
  },
  {
    title: "Painting",
    icon: "fa-paint-brush",
    points: [
      <>
        I recently took part in an experience by VaDoostan, the painting group{" "}
        <a
          href="https://vadoostan.ir/app/experiences/n26UVcZUspEr"
          target="_blank"
          rel="noopener noreferrer"
          className="link-ext"
        >
          “Hamrang”
        </a>
        , and started painting a little: still life of fruit.
      </>,
    ],
  },
];

const TopicCard = ({ topic, className }: { topic: Topic; className?: string }) => (
  <Card className={`group ${className ?? ""}`}>
    <CardHeader>
      <CardTitle className="flex items-start gap-3 text-lg leading-snug">
        {typeof topic.icon === "string" ? (
          <i className={`fa ${topic.icon} mt-0.5 w-5 shrink-0 text-lg text-brand`} aria-hidden="true" />
        ) : (
          <topic.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        )}
        {topic.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <BulletList items={topic.points} />
    </CardContent>
  </Card>
);

const KnowMeMore = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-light tracking-tight text-brand md:text-5xl">
          Know Me More
        </h1>

        <figure className="animate-fade-in-up delay-100 mt-8 border-l-2 border-brand pl-5">
          <figcaption className="text-sm font-semibold text-muted-foreground">My philosophy in life:</figcaption>
          <blockquote className="mt-2 text-base leading-relaxed text-muted-foreground">
            “Don't ever, for any reason, do anything to anyone, for any reason, ever” 😁
          </blockquote>
          <p className="mt-2 text-xs text-brand-gray">
            Michael Scott in{" "}
            <a
              href="https://www.thedundies.com/id/26271"
              target="_blank"
              rel="noopener noreferrer"
              className="link-ext hover:text-foreground"
            >
              “The Duel” · Season 5, episode 11
            </a>
          </p>
        </figure>

        <div className="animate-fade-in-up delay-200 mt-14">
          <SectionTitle icon="fa-heart">My hobbies</SectionTitle>
          <p className="mt-4 text-lg text-muted-foreground">At the intersection of sport, TV series, and food!</p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {hobbies.map((topic) => (
            <TopicCard key={topic.title} topic={topic} className="animate-fade-in-up delay-300" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowMeMore;
