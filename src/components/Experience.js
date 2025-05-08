import React from "react";
import "./css/Experience.css";

const Experience = () => {
  // Declare the data as an array of experience objects
  const experience = [
    {
      "timeframe": "2022 - Present",
      "company": "Linx Systems",
      "title": "Full Stack Software Developer",
      "description": "Designing, developing, and managing end-to-end software solutions for diverse clients, including sales and warehouse management systems. Collaborated with clients to understand their needs and deliver responsive, user-focused applications. Spearheaded multiple projects, integrating advanced technologies such as machine learning and AI, while maintaining high standards of performance and scalability.",
      "tags": ["PHP", "Laravel", "C#", "Python", "Machine Learning", "AI", "Flutter"]
    },    
    {
      "timeframe": "2018 - 2022",
      "company": "Upwork",
      "title": "Freelance Software Developer",
      "description": "Collaborated with diverse clients to design and deliver custom software solutions, focusing on efficiency and scalability. Successfully developed web applications, automated workflows, and created robust web scraping tools. Built user-friendly interfaces and backend systems tailored to client needs, ensuring high-quality results and timely delivery.",
      "tags": ["Python", "Django", "Web-Scraping", "Automation", "React"]
    },
    {
      "timeframe": "2017 - 2022",
      "company": "CBM Africa",
      "title": "Draughtsman",
      "description": "Oversaw civil and structural drafting projects, translating engineering specifications into accurate and detailed technical drawings. Played a key role in managing and maintaining the company’s ICT infrastructure, resolving technical issues, optimizing network performance, and ensuring seamless server operations.",
      "tags": ["Networking", "Excel", "Server Management", "Web-Scraping"]
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
      <h2 className="text-2xl mb-4 font-semibold px-6">Where Ive Worked</h2>
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
