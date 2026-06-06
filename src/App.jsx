import React, { useState, useEffect } from "react";
import "./App.css";
import Raindrops from "./assets/components/Raindrops";
import TypingText from "./assets/components/TypingText";
import Navigation from "./assets/components/Navigation";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Socials from "./assets/components/Socials";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialMode = mediaQuery.matches;
    setIsDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
    const onChange = (e) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <Navigation />
      {/* Hide socials on mobile to avoid overlap */}
      <div className="hidden md:block">
        <Socials />
      </div>

      <div className="flex items-center justify-center flex-col w-screen h-screen text-center px-6">
        <div className="absolute inset-0 z-0">
          <Raindrops />
        </div>
        <p className="text-3xl md:text-5xl">
          <span className="outlined-font mr-2">HI, MY NAME IS</span>
          <span className="filled-font mr-2 text-emerald-500">KYLE.</span>
        </p>
        <p className="text-3xl md:text-5xl mt-1">
          <span className="outlined-font mr-2">IM A FULL STACK</span>
          <span className="filled-font">DEVELOPER.</span>
        </p>
        <TypingText />

        {/* Social icons row on mobile */}
        <div className="flex md:hidden gap-6 mt-8 z-10">
          {[
            { href: "https://www.linkedin.com/in/kyle-westran-54ab78229/", icon: "in" },
            { href: "https://github.com/KyleJamesWestran", icon: "gh" },
          ].map(s => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-emerald-500 transition">{s.icon}</a>
          ))}
        </div>
      </div>

      <About />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
