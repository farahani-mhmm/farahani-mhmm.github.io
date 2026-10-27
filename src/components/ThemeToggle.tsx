import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// The "dark" class on <html> switches the theme variables in index.css.
// index.html sets it before the first paint, from the saved choice.
export function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={dark ? "hover:text-amber-500" : "text-brand hover:text-brand"}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
