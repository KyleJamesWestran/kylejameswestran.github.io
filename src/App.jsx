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

        <div className="flex gap-4 mt-8 z-10">
          <a href="#projects"
            className="main-font font-semibold bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-colors shadow-lg shadow-emerald-500/20">
            View my work
          </a>
          <a href="#about"
            className="main-font font-semibold bg-white/80 hover:bg-white text-gray-800 px-6 py-3 rounded-full border border-gray-300 backdrop-blur-sm transition-colors">
            About me
          </a>
        </div>

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

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <About />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
