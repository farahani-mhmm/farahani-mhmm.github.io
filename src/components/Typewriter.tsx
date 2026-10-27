import { useEffect, useState } from "react";

export type TypewriterSegment = {
  text: string;
  href?: string; // makes this part a link
  className?: string; // e.g. a color for a label
};

type TypewriterProps = {
  segments: TypewriterSegment[];
  className?: string;
  msPerChar?: number;
  startDelayMs?: number;
  onDone?: () => void; // called once, when all the text is typed
};

const linkClass = "link-ext";

// Types the text character by character. The finished text is rendered invisibly in the same
// grid cell, so the layout does not jump while typing, and screen readers read the full text
// at once. With "reduce motion" turned on, the full text is shown immediately.
export const Typewriter = ({ segments, className, msPerChar = 22, startDelayMs = 500, onDone }: TypewriterProps) => {
  const total = segments.reduce((sum, segment) => sum + segment.text.length, 0);
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [typed, setTyped] = useState(reduceMotion ? total : 0);

  useEffect(() => {
    if (typed >= total) {
      onDone?.();
      return;
    }
    const timer = setTimeout(() => setTyped((value) => value + 1), typed === 0 ? startDelayMs : msPerChar);
    return () => clearTimeout(timer);
  }, [typed, total, msPerChar, startDelayMs, onDone]);

  // The parts of the text typed so far, keeping each part's link or color. The invisible copy has no links, so there are no hidden tab stops.
  const render = (limit: number, withLinks: boolean) => {
    let left = limit;
    return segments.map((segment, index) => {
      const text = segment.text.slice(0, Math.max(0, left));
      left -= segment.text.length;
      if (!text) return null;
      return segment.href && withLinks ? (
        <a key={index} href={segment.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {text}
        </a>
      ) : (
        <span key={index} className={segment.className}>
          {text}
        </span>
      );
    });
  };

  return (
    <p className={className}>
      <span className="grid">
        <span className="invisible [grid-area:1/1]" aria-hidden="true">
          {render(total, false)}
        </span>
        <span className="[grid-area:1/1]" aria-hidden="true">
          {render(typed, true)}
          {typed < total && <span className="ml-px inline-block w-[2px] animate-pulse bg-brand align-middle">&nbsp;</span>}
        </span>
        <span className="sr-only">{segments.map((segment) => segment.text).join("")}</span>
      </span>
    </p>
  );
};
