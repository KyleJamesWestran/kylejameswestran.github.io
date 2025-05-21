import React, { useState, useEffect } from "react";
import "./App.css";
import Raindrops from "./assets/components/Raindrops";
import TypingText from "./assets/components/TypingText";
import Navigation from "./assets/components/Navigation";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";

import { FaLinkedin, FaGithub, FaStackOverflow, FaInstagram, FaFacebook, FaYoutube  } from "react-icons/fa";
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

    return () => {
      mediaQuery.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Navigation />
        <Socials />

        <div className="flex items-center justify-center flex-col w-screen h-screen text-center">
          <div className="absolute inset-0 z-0">
            <Raindrops />
          </div>
          <p className="text-5xl">
            <span className="outlined-font mr-2">HI, MY NAME IS</span>
            <span className="filled-font mr-2 text-emerald-500">KYLE.</span>
          </p>

          <p className="text-5xl">
            <span className="outlined-font mr-2">IM A FULL STACK</span>
            <span className="filled-font">DEVELOPER.</span>
          </p>

          <TypingText />
        </div>

        <About />

        <Timeline />

        {/* <Skills /> */}

        <Projects />

      </div>
  );
}

export default App;
