import type { SVGProps } from "react";

// Lucide has no racket icon, so this one follows the same style (24px grid, 2px rounded stroke).
export const SquashRacket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <ellipse cx="9" cy="9" rx="4.5" ry="6.5" transform="rotate(-45 9 9)" />
    <path d="M13.6 13.6 20.5 20.5" />
    <path d="M6.6 11.4 11.4 6.6" />
  </svg>
);
