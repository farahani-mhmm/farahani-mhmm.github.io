import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BookOpen, FileText, FolderOpen, House, Mail, Menu, Smile, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/ThemeToggle";

// Each icon turns its own color on hover.
const links = [
  { to: "/", label: "Home", icon: House, hover: "hover:text-sky-500" },
  { to: "/know-me-more", label: "Know Me More", icon: Smile, hover: "hover:text-pink-500" },
  { to: "/research", label: "Experiences", icon: FolderOpen, hover: "hover:text-amber-500" },
  { to: "/resume", label: "Curriculum Vitae", icon: FileText, hover: "hover:text-emerald-500" },
  { to: "/failures", label: "Failures", icon: XCircle, hover: "hover:text-red-500" },
  { to: "/reading-group", label: "Reading Group", icon: BookOpen, hover: "hover:text-violet-500" },
  { to: "/contact", label: "Contact", icon: Mail, hover: "hover:text-orange-500" },
];

// A plain string (not NavLink's className callback), because the tooltip trigger merges class names as strings.
const navLinkClass = (hover: string, isActive: boolean) =>
  cn(
    "group relative flex w-full items-center justify-center py-3 transition-colors duration-200",
    "after:absolute after:bottom-2 after:left-0 after:top-2 after:w-[2px] after:origin-top after:scale-y-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-y-100",
    hover,
    isActive ? "text-foreground after:scale-y-100" : "text-muted-foreground"
  );

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-xl font-semibold tracking-tight text-foreground">
          Mohammad Farahani
        </NavLink>

        {/* Desktop nav: a vertical icon rail on the left, under the header */}
        <nav className="fixed bottom-0 left-0 top-16 z-40 hidden w-16 flex-col items-center gap-1 border-r border-border bg-background pt-6 md:flex">
          {links.map((link) => (
            <Tooltip key={link.to}>
              <TooltipTrigger asChild>
                <NavLink
                  to={link.to}
                  className={navLinkClass(link.hover, isActive(link.to))}
                  end={link.to === "/"}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-125 group-hover:stroke-[2.5]" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="right">{link.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>

        <div className="flex items-center gap-1">
        <ThemeToggle />

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetTitle className="text-lg">Navigation</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 text-lg font-medium transition-colors",
                      link.hover,
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )
                  }
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
