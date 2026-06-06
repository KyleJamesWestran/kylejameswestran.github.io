import React, { useState } from "react";
import { FaMobile, FaRobot, FaGlobe, FaGithub, FaClock, FaServer, FaPrint } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const projects = [
  { icon: <FaRobot />, title: "Forkast", description: "A machine learning platform for predictive analytics in sales environments. Delivers actionable insights through advanced models forecasting customer purchasing behaviour, product demand, and optimal stock levels. Built in Python using Scikit-learn — a classification model achieving 91% accuracy and a regression model with a mean absolute error of just 0.2 units.", links: { github: "https://github.com/KyleJamesWestran/Forkast" }, tags: ["Python", "Sklearn", "AI", "Machine Learning", "Numpy", "Pandas"] },
  { icon: <FaClock />, title: "Timeframe", description: "A Micro-SaaS application that streamlines school timetable creation. What traditionally takes up to a month is reduced to seconds using algorithmic logic. Built with FastAPI and React.", links: { github: "https://github.com/KyleJamesWestran/Timeframe", website: "https://timeframe-beta.vercel.app/" }, tags: ["Python", "Algorithms", "React", "FastAPI"] },
  { icon: <FaServer />, title: "Slinky", description: "A platform for creating simple, secure, and scalable APIs from local machine data. Turning local data into secure accessible APIs for developers of all skill levels.", links: { github: "https://github.com/KyleJamesWestran/Slinky" }, tags: ["Python", "FastAPI", "React", "Websockets", "APIs"] },
  { icon: <FaComputer />, title: "DIMS", description: "A web-based ERP integration platform for logistics and warehouse operations. Contributed key modules including Route Optimisation, Customer Specials, and Purchase Order Management using PHP Laravel and Azure.", links: { website: "https://mydimsapp.com/" }, tags: ["PHP", "Laravel", "SQL", "jQuery", "Azure"] },
  { icon: <FaMobile />, title: "iStoreIt", description: "A mobile inventory management app for warehouse environments supporting real-time serialised stock tracking, QR scanning, and offline sync. Built with Flutter and Dart.", links: {}, tags: ["Flutter", "Dart", "SQL", "Mobile"] },
  { icon: <FaPrint />, title: "Report Print Engine", description: "A tool automating PDF report generation from SQL stored procedures using DevExtreme XtraReports. Runs as a Windows service for scheduled reporting.", links: { github: "https://github.com/KyleJamesWestran/ReportPrintEngine" }, tags: ["C#", "DevExtreme", "SQL", "Automation"] },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="projects" className="px-4 md:px-10 py-16 min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 main-font">PROJECTS</h2>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border-2 border-gray-100 p-5 flex flex-col transition-all duration-300 hover:border-emerald-300">
            <div className="flex gap-4">
              <div className="text-3xl text-emerald-500 flex-shrink-0 mt-1">{project.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold mb-1 main-font">{project.title}</h3>
                <p className={`text-gray-700 main-font text-sm md:text-base ${expanded === index ? "" : "line-clamp-3"}`}>
                  {project.description}
                </p>
                {project.description.length > 120 && (
                  <button onClick={() => setExpanded(expanded === index ? null : index)}
                    className="text-emerald-500 text-sm mt-1 main-font font-semibold">
                    {expanded === index ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
            </div>
            <div className="flex gap-4 mt-4 ml-10 md:ml-12">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                  <FaGithub className="text-lg" /> GitHub
                </a>
              )}
              {project.links.website && (
                <a href={project.links.website} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                  <FaGlobe className="text-lg" /> Website
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-4 ml-10 md:ml-12">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
