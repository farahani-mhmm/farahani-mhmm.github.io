import { useEffect } from "react"; // Added useEffect
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"; // Added useNavigate
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Resume from "./pages/Resume";
import Failures from "./pages/Failures";
import KnowMeMore from "./pages/KnowMeMore";
import ReadingGroup from "./pages/ReadingGroup";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// This component handles the "handshake" from your 404.html redirect
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Look for the '?p=/path' we created in 404.html
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');

    if (redirectPath) {
      console.log("Redirecting to:", redirectPath);
      // Clean the URL and tell React Router to go there
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null; // This component doesn't render anything
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* We place it here so it has access to the Router context */}
        <RedirectHandler />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/failures" element={<Failures />} />
            <Route path="/know-me-more" element={<KnowMeMore />} />
            <Route path="/reading-group" element={<ReadingGroup />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;