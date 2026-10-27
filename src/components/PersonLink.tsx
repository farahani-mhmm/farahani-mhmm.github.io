import { useState } from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type PersonLinkProps = {
  name: string;
  href: string; // the LinkedIn profile
  photo: string; // a photo of us, shown as a thumbnail when hovering the name
  photoAlt: string;
  caption?: string; // shown under the photo
};

// A person's name that links to their profile. Hovering (or focusing) the name also shows a
// small thumbnail of a photo of us; the card stays open while the pointer is over it.
// Clicking the thumbnail opens the photo large in the middle of the page, with a close button
// (Esc and a click outside the photo close it too).
export const PersonLink = ({ name, href, photo, photoAlt, caption }: PersonLinkProps) => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HoverCard openDelay={80} closeDelay={150}>
        <HoverCardTrigger asChild>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-ext hover:text-muted-foreground"
          >
            {name}
          </a>
        </HoverCardTrigger>
        {/* Rendered at the page level, so the paragraphs below do not paint on top of the card. */}
        {!photoFailed && (
          <HoverCardPrimitive.Portal>
            <HoverCardContent className="w-44 overflow-hidden p-1.5 shadow-lg" sideOffset={8} collisionPadding={16}>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Enlarge the photo"
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={photo}
                  alt={photoAlt}
                  loading="lazy"
                  onError={() => setPhotoFailed(true)}
                  className="aspect-[3/4] w-full rounded-sm object-cover object-[50%_30%]"
                />
              </button>
              {caption && (
                <p className="mt-1.5 whitespace-pre-line px-0.5 text-center text-[11px] leading-snug text-muted-foreground">{caption}</p>
              )}
            </HoverCardContent>
          </HoverCardPrimitive.Portal>
        )}
      </HoverCard>

      {/* The large photo is a dialog of its own, outside the hover card, so it stays open when the card closes. */}
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
          >
            <DialogPrimitive.Title className="sr-only">{photoAlt}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">{caption ?? photoAlt}</DialogPrimitive.Description>
            {/* The close button sits outside the scrolling area, so it stays visible when the photo is taller than the screen. */}
            <DialogPrimitive.Close
              aria-label="Close the photo"
              className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>
            {/* The photo is shown at its original size (on small screens, fitted to the width). If it is bigger than the screen, this area scrolls. */}
            <div className="flex max-h-[96vh] max-w-[96vw] flex-col items-center gap-3 overflow-auto rounded-md">
              <img src={photo} alt={photoAlt} className="h-auto w-auto max-w-[96vw] shrink-0 shadow-2xl sm:max-w-none" />
              {caption && <p className="whitespace-pre-line pb-1 text-center text-sm text-white/90">{caption}</p>}
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};
