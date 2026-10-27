import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TermInfo } from "@/components/TermInfo";
import { PersonLink } from "@/components/PersonLink";

const news = [
  {
    date: "Oct 2026",
    name: "Baham event",
    note: "System Group",
    label: null,
    href: "https://landing.systemgroup.net/baham1405/",
  },
  {
    date: "Nov 2026",
    name: "Iran Financial Industry Exhibition",
    label: "F-EX",
    href: "https://www.f-ex.ir",
  },
  {
    date: "Nov 2026",
    name: "deBlock International Blockchain Conference",
    label: null,
    href: "https://www.deblocksummit.org/",
  },
  {
    date: "Nov 2026",
    name: "JetBrains Plugin Developer Conf",
    label: null,
    href: "https://lp.jetbrains.media/plugin-developer-conf-2026/",
  },
];

const Index = () => {
  return (
    <section className="container relative flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center py-4">
      <div className="mx-auto max-w-2xl text-center md:-translate-x-8">
        <img
          src="/profile.jpg"
          alt="Mohammad Farahani"
          className="animate-fade-in-up mx-auto h-28 w-28 rounded-full border border-border object-cover object-[50%_35%]"
        />
        <h1 className="animate-fade-in-up delay-100 mt-4 whitespace-nowrap font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Mohammad Farahani
        </h1>
        <p className="animate-fade-in-up delay-200 mt-3 text-base leading-relaxed text-foreground md:text-lg">
          I build{" "}
          <TermInfo
            name="recommender systems"
            nameClassName="font-semibold"
            description="A kind of information filtering system that suggests the items most relevant to a given user."
            href="https://en.wikipedia.org/wiki/Recommender_system"
            linkLabel="Wikipedia"
          />{" "}
          that try to guess what you'll like! I am also co-founding{" "}
          <strong className="font-semibold">Deripin</strong>, a{" "}
          <TermInfo
            name="cryptocurrency exchange"
            description="A company or platform that lets users convert crypto or digital coins into other assets, such as cash or other digital currencies."
            href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange"
            linkLabel="Wikipedia"
          />{" "}
          for trading real-world assets (RWAs), with a close friend,{" "}
          <PersonLink
            name="Hamid"
            href="https://www.linkedin.com/in/hamidpourmohammad/"
            photo="/hamid.jpg"
            photoAlt="Hamid and me standing in a rice field"
            caption={"Lahijan, Iran\nTaken at Aug 12, 2026 by Parham Jahandideh"}
          />
          .
        </p>
        <p className="animate-fade-in-up delay-200 mt-4 text-base leading-relaxed text-muted-foreground">
          <span className="font-semibold text-brand">fun fact:</span> “We can't overestimate the value of computers. Yes, they are great for playing games and forwarding funny emails. But real business is done on paper, okay? Write that down.”
        </p>
        <p className="animate-fade-in-up delay-300 mt-1 text-xs text-brand-gray">
          Michael Scott in{" "}
          <a
            href="https://www.thedundies.com/id/14086"
            target="_blank"
            rel="noopener noreferrer"
            className="link-ext hover:text-foreground"
          >
            “Business School” · Season 3, episode 16
          </a>
        </p>
        <div className="animate-fade-in-up delay-300 mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="active:scale-[0.98] transition-transform">
            <Link to="/research">
              View Experiences
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="active:scale-[0.98] transition-transform">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      <aside className="mt-8 w-full max-w-xs rounded-lg border border-border p-4 text-left xl:absolute xl:right-4 xl:top-1/2 xl:mt-0 xl:w-60 xl:-translate-y-1/2">
        <h2 className="text-lg font-semibold text-brand">News</h2>
        <p className="mt-1 text-xs text-brand-gray">I will be attending:</p>
        <ul className="mt-3 space-y-3">
          {news.map((item) => (
            <li key={item.name} className="group">
              <p className="text-[11px] font-medium uppercase tracking-wide text-brand">{item.date}</p>
              <p className="mt-0.5 text-sm text-foreground">
                {item.label ? (
                  <>
                    {item.name} (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-ext hover:text-muted-foreground"
                    >
                      {item.label}
                    </a>
                    )
                  </>
                ) : (
                  <>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-ext hover:text-muted-foreground"
                    >
                      {item.name}
                    </a>
                    {item.note && ` (${item.note})`}
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Index;
