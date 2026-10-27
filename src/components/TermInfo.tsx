import { CircleHelp } from "lucide-react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type TermInfoProps = {
  name: string;
  nameClassName?: string;
  description: string;
  href: string;
  linkLabel: string;
  // An optional thumbnail shown above the description, taken from the linked page.
  image?: string;
};

// A term followed by a small "?" icon. Hovering (or focusing) the icon shows a one-sentence
// explanation with a link at the end; the card stays open while the pointer is over it.
export const TermInfo = ({ name, nameClassName, description, href, linkLabel, image }: TermInfoProps) => (
  <>
    <span className={nameClassName}>{name}</span>
    <HoverCard openDelay={80} closeDelay={150}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          aria-label={`About ${name}`}
          className="ml-1 inline-flex align-middle text-brand"
        >
          <CircleHelp className="h-3.5 w-3.5" />
        </button>
      </HoverCardTrigger>
      {/* The portal renders the card at the page level. Without it the card lives inside the
          paragraph, and the paragraphs below paint on top of it. */}
      <HoverCardPrimitive.Portal>
        <HoverCardContent
          className="w-64 text-left text-sm shadow-lg"
          sideOffset={8}
          collisionPadding={16}
        >
          {image && (
            <a href={href} target="_blank" rel="noopener noreferrer" className="mb-2 block">
              <img
                src={image}
                alt={name}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.parentElement?.remove();
                }}
                className="aspect-[3/2] w-full rounded-sm object-cover"
              />
            </a>
          )}
          <p className="leading-relaxed text-muted-foreground">{description}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-ext mt-2 inline-block"
          >
            {linkLabel}
          </a>
        </HoverCardContent>
      </HoverCardPrimitive.Portal>
    </HoverCard>
  </>
);
