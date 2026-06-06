import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 px-6 py-3 rounded-full border border-gray-300 backdrop-blur-sm"
      style={{ width: "calc(100% - 32px)", maxWidth: 480 }}>
      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-6 items-center">
        {navItems.map(({ href, label }) => {
          const isActive = activeSection === href.replace("#", "");
          return (
            <a key={href} href={href}
              className={`text-lg main-font font-bold transition ${isActive ? "text-emerald-500" : "text-gray-700 hover:text-emerald-600"}`}>
              {label}
            </a>
          );
        })}
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center">
        <span className="main-font font-bold text-gray-700">KW</span>
        <button onClick={() => setMenuOpen(o => !o)} className="text-gray-700 focus:outline-none">
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-3 pb-1">
          {navItems.map(({ href, label }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                className={`text-base main-font font-bold transition text-center py-1 ${isActive ? "text-emerald-500" : "text-gray-700"}`}>
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
