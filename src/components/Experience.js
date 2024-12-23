import React from "react";
import "./css/Experience.css";

const Experience = () => {
  // Declare the data as an array of experience objects
  const experience = [
    {
      timeframe: "2022 - Present",
      company: "Linx Systems",
      title: "Full Stack Software Developer",
      description: "As a full stack software developer at Linx Systems, I developed, implemented, and managed multiple projects. I delat with clients, managed projects, and provided effective, responsive sales and warehouse managements software.",
      tags: ["PHP", "Laravel", "C#", "Python", "Machine Learning", "AI", "Flutter"]
    },
    {
      timeframe: "2018 - 2022",
      company: "Upwork",
      title: "Freelance Software Developer",
      description: "Working with clients, providing various software solutions.",
      tags: ["Python", "Django", "Web-Scraping", "Automation", "React"]
    },
    {
      timeframe: "2017 - 2022",
      company: "CBM Africa",
      title: "Draughtsman",
      description: "Working At CBM Africa, I was responsible for the civil and structural drafting, given engineering specifications. I also helped manage and maintain the companys ICT Related issues.",
      tags: ["Networking", "Excel", "Server Management", "Web-Scraping"]
    }
  ];

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };
  
  const glowColorRGB = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--glow-color'));
  const glowColorDarkRGB = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--glow-color-dark'));
  const accentRGB = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--text-accent'));
  const accentDarkRGB = hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--text-accent-dark'));
  
  // Apply dynamically in styles
  document.documentElement.style.setProperty('--glow-color-rgb', glowColorRGB);
  document.documentElement.style.setProperty('--glow-color-dark-rgb', glowColorDarkRGB);
  document.documentElement.style.setProperty('--accent-rgb', accentRGB);
  document.documentElement.style.setProperty('--accent-dark-rgb', accentDarkRGB);

  return (
    <div id="EXPERIENCE" className="pt-20">
      {experience.map((experience, index) => (
        <div key={index} className="max-w-4xl mx-auto p-6 rounded-lg mb-6 experience-panel">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-primary experience-title">
              {experience.company} - {experience.title}
            </div>
            <div className="text-sm text-secondary mb-4">{experience.timeframe}</div>
            <p className="text-base text-primary mb-4">{experience.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 font-semibold text-xs text-accent rounded-full experience-tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
