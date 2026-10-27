import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Typewriter } from "@/components/Typewriter";

type FunFactProps = {
  quote: string;
  source: string; // for example: “Business School” · Season 3, episode 16
  href: string; // the page of the quote
};

// A small "fun fact" button in the middle of the page. Clicking it opens a card that types the
// quote out, and shows where the quote comes from once it is typed. The card is a popover, so
// the page layout does not move when it opens. The content is mounted on open, so it types
// again every time.
export const FunFact = ({ quote, source, href }: FunFactProps) => {
  const [done, setDone] = useState(false);

  return (
    <Popover onOpenChange={(open) => !open && setDone(false)}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="animate-fade-in-up delay-200 mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm font-semibold text-brand transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <i className="fa fa-lightbulb-o" aria-hidden="true" />
          fun fact
        </button>
      </PopoverTrigger>
      <PopoverContent side="bottom" sideOffset={10} className="w-[min(30rem,92vw)] p-4 text-left">
        <Typewriter
          className="text-base leading-relaxed text-muted-foreground"
          msPerChar={16}
          startDelayMs={150}
          segments={[{ text: `“${quote}”` }]}
          onDone={() => setDone(true)}
        />
        <p className={`mt-2 text-xs text-brand-gray transition-opacity duration-300 ${done ? "opacity-100" : "opacity-0"}`}>
          Michael Scott in{" "}
          <a href={href} target="_blank" rel="noopener noreferrer" className="link-ext" tabIndex={done ? 0 : -1}>
            {source}
          </a>
        </p>
      </PopoverContent>
    </Popover>
  );
};
