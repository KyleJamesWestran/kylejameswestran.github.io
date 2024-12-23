import React, { useState, useEffect } from "react";
import "./App.css";
import Raindrops from "./assets/components/Raindrops";
import CursorGlowEffect from "./assets/components/CursorGlowEffect";
import Navigation from "./assets/components/Navigation";

import { FaLinkedin, FaGithub, FaStackOverflow, FaInstagram, FaFacebook, FaYoutube  } from "react-icons/fa";

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
      <div className="flex h-screen">
        <div className="absolute inset-0 z-0">
          <Raindrops />
          <CursorGlowEffect />
        </div>


        <div className="relative w-1/2 pt-20 pl-40 pl-40 z-10">
          <h1 className="text-5xl font-bold">Kyle Westran</h1>
          <h2 className="text-2xl mt-4 font-semibold">Full Stack Software Developer</h2>
          <p className="text-lg mt-4 text-secondary">
            Developing software that is efficient, neat,
            <br/> scalable, and user friendly.
          </p>

          <div className="mt-28 space-y-4">
            <div className="flex">
              <Navigation />
            </div>
          </div>

          <div className="mt-28 space-y-4">
            <div className="flex space-x-8 text-white">
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://www.linkedin.com/in/kyle-westran-54ab78229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://github.com/KyleJamesWestran" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://stackoverflow.com/users/6311732/kyle-westran" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow />
              </a>
            </span>
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://www.youtube.com/@kyledev557" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </span>
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://www.instagram.com/kylewestran/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </span>
            <span className="cursor-pointer text-2xl icon icon-hover">
              <a href="https://www.facebook.com/people/Kyle-Westran/pfbid0W3W5Cu17JgPFAsrZ3EpkNikPWLcYqw5AAAR7Viypv4RBF25RwqCRvWD2ZPCavBtAl/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pt-20 pr-40 z-10">
          <div className="default-content text-secondary text-base">
            <p className="mb-5">
              Hi, I’m Kyle, a family-oriented, adventurous, and curious individual who thrives on <strong>creativity</strong> and meaningful connections. I value balancing professional growth with personal relationships, always striving to make a <strong>positive impact</strong> on the people and projects I care about.
            </p>

            <p className="mb-5">
              I’m a <strong>passionate</strong> developer specializing in creating efficient, user-friendly applications. Skilled in Python, JavaScript, React, and Laravel, I enjoy solving real-world problems with <strong>innovative</strong> solutions. Whether building algorithms or designing interfaces, I’m <strong>committed</strong> to crafting impactful, seamless experiences.
            </p>

            <p className="mb-5">
              As an employee, I bring reliability, adaptability, and a strong work ethic to every role. I excel in both teamwork and independent tasks, delivering quality results while fostering a <strong>positive</strong> work environment. My commitment to lifelong learning drives me to continuously improve my skills become <strong>adaptable</strong> to new challenges, ensuring I add lasting value to my team and organization.
            </p>

            <p className="mb-5">
              So if you think im a good match to join your team, feel free to <strong>reach out</strong>.
            </p>

            <div style={{ height: "2000px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
