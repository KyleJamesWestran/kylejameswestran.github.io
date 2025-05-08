import React, { useState, useEffect } from "react";
import "./css/Navigation.css";

const Navigation = ({ scrollToSection }) => {
  const [selected, setSelected] = useState("ABOUT");
  const [hovered, setHovered] = useState(null);
  const menuItems = ["ABOUT", "EXPERIENCE", "PROJECTS"];

  const handleClick = (item) => {
    setSelected(item); // Set selected on click
    scrollToSection(item); // Scroll to the corresponding section
  };

  useEffect(() => {
    const scrollingContainer = document.querySelector('.flex-1.overflow-y-auto.pr-40.z-10');
    const handleScroll = () => {
      const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];
      let currentSection = null;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const containerRect = scrollingContainer.getBoundingClientRect();
          if (rect.top < containerRect.height / 2 && rect.bottom > 0) {
            currentSection = section;
          }
        }
      });

      // If a new section is in view, update the selected section
      if (currentSection && currentSection !== selected) {
        setSelected(currentSection); // Update selected to the new section
      }
    };

    scrollingContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollingContainer.removeEventListener('scroll', handleScroll);
    };
  }, [selected]); // Add selected as a dependency so it updates when selected changes

  return (
    <div className="flex items-start">
      {/* Menu Items */}
      <div className="flex flex-col space-y-5 ml-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)} // Set selected on click
            onMouseEnter={() => setHovered(item)} // Set hovered on hover
            onMouseLeave={() => setHovered(null)} // Clear hovered on mouse leave
            className={`flex items-center space-x-4 cursor-pointer transition-all duration-300 ${
              selected === item
                ? "nav-selected" // Styling for selected state
                : hovered === item
                ? "nav-hovered" // Styling for hovered state
                : "nav-deselected" // Default styling
            }`}
          >
            {/* Line next to text */}
            <div
              className={`h-0.5 transition-all duration-300 ${
                selected === item || hovered === item
                  ? "w-16 nav-line-selected"
                  : "w-10 nav-line-deselected"
              }`}
            ></div>
            <span
              className={`transition-all duration-300 text-xs ${
                selected === item
                  ? "font-bold"
                  : hovered === item
                  ? "font-medium" // Optional: Different font weight for hover
                  : "font-normal"
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
