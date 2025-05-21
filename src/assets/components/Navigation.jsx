import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "timeline", "projects"];
      let current = "";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Timeline" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-1/2 bg-white/80 px-8 py-4 rounded-full flex justify-center gap-6 items-center border border-gray-300 backdrop-blur-sm">
      {navItems.map(({ href, label }) => {
        const section = href.replace("#", "");
        const isActive = activeSection === section;

        return (
          <a
            key={href}
            href={href}
            className={`text-lg main-font font-bold transition ${
              isActive
                ? "text-emerald-500"
                : "text-gray-700 hover:text-emerald-600"
            }`}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navigation;
