import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 md:pl-16">
        <Outlet />
      </main>
      <div className="md:pl-16">
        <Footer />
      </div>
    </div>
  );
}
