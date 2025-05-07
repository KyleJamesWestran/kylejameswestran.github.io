import React, { useState } from "react";
import "./css/Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Noteflow",
      description: "Noteflow is a better way to manage your time. Using drag and drop functionality, you can create lists, and keep track of products. It includes collaberation, allowing users to share flows with others working on the same project. This project is a Work in progress.",
      thumbnail: "/images/NF_Thumb.png",
      images: [
        { src: "/images/NF_1.png", description: "Landing Page" },
        { src: "/images/NF_2.png", description: "Dashboard" },
        { src: "/images/NF_3.png", description: "Project Page" },
        { src: "/images/NF_4.png", description: "User Settings" },
      ],
      tags: ["PHP", "Laravel", "SQL", "Jquery", "Dev Extreme"],
    },
    {
      title: "DIMS Modules",
      description: "DIMS is a web application designed to simplify the processes af any modern day ERP system. I have had involvement in a number of modules in DIMS focusing on, improving exisintg modules, and creating new modules.",
      thumbnail: "/images/DIMS_Thumb.png",
      images: [
        { src: "/images/DIMS_1.png", description: "Route Optimization" },
        { src: "/images/DIMS_2.png", description: "Customer Special" },
        { src: "/images/userManual.pdf", description: "Customer Special" },
      ],
      tags: ["PHP", "Laravel", "SQL", "JQuery", "Dev Extreme", "AI", "Automation"],
    },
  ];

  const [expandedProject, setExpandedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleExpand = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
      setCurrentSlide(0); // Reset slide index when expanding
    }
  };

  const handleNextSlide = (imagesLength) => {
    setCurrentSlide((prev) => (prev + 1) % imagesLength);
  };

  const handlePrevSlide = (imagesLength) => {
    setCurrentSlide((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  // Handle double-click to open image in a new tab
  const handleImageDoubleClick = (src) => {
    window.open(src, "_blank"); // Open the image in a new tab
  };

  return (
    <div id="PROJECTS" className="default-content text-secondary text-base pt-20 pb-20">
      <div className="space-y-8">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col p-4 rounded-lg project-panel">
            {/* Thumbnail, Title, and Description */}
            <div className="flex items-center gap-6">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-32 h-32 object-contain rounded-lg"
                onDoubleClick={() => handleImageDoubleClick(project.thumbnail)} // Handle double-click on thumbnail
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-primary project-title">{project.title}</h2>
                <p className="text-sm text-secondary mb-4">{project.description}</p>
                <button
                  onClick={() => handleExpand(index)}
                  className="text-accent font-medium hover:underline"
                >
                  {expandedProject === index ? "Collapse" : "Expand"}
                </button>
              </div>
            </div>
            {/* Expanded/Collapsed Section */}
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                expandedProject === index ? "max-h-[500px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
              } overflow-hidden`}
            >
              {expandedProject === index && (
                <div className="mt-6">
                  <div className="relative">
                    <div className="relative w-full h-64 overflow-hidden">
                      {project.images.map((image, i) => (
                        <img
                          key={i}
                          src={image.src}
                          alt={`Slide ${i + 1}`}
                          className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out ${
                            i === currentSlide
                              ? "translate-x-0"
                              : i > currentSlide
                              ? "translate-x-full"
                              : "-translate-x-full"
                          }`}
                          onDoubleClick={() => handleImageDoubleClick(image.src)} // Handle double-click on image
                        />
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => handlePrevSlide(project.images.length)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => handleNextSlide(project.images.length)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      ▶
                    </button>
                  </div>

                  {/* Image Description */}
                  <p className="text-sm text-secondary mt-4 text-center">
                    {project.images[currentSlide].description}
                  </p>

                  {/* Tags Below Expanded Section */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 font-semibold text-xs text-accent rounded-full project-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
