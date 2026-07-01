import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ["about", "timeline", "projects"];
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { current = section; break; }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#" className="flex items-center gap-2 main-font font-bold text-lg text-gray-800">
          <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-sm">KW</span>
          <span className="hidden sm:inline">Kyle Westran</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a key={href} href={href}
                className={`main-font font-semibold text-sm transition ${isActive ? "text-emerald-500" : "text-gray-700 hover:text-emerald-600"}`}>
                {label}
              </a>
            );
          })}
          <a href="https://www.linkedin.com/in/kyle-westran-54ab78229/" target="_blank" rel="noopener noreferrer"
            className="main-font font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full transition-colors">
            Get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(o => !o)} className="md:hidden text-gray-700 focus:outline-none" aria-label="Toggle menu">
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-white/95 backdrop-blur-md border-b border-gray-200">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                className={`main-font font-semibold py-2 transition ${isActive ? "text-emerald-500" : "text-gray-700"}`}>
                {label}
              </a>
            );
          })}
          <a href="https://www.linkedin.com/in/kyle-westran-54ab78229/" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="main-font font-semibold text-center bg-emerald-500 text-white px-5 py-2 rounded-full mt-2">
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
