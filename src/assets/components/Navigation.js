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

  const handleScroll = () => {
    const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.toLowerCase());
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setSelected(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
