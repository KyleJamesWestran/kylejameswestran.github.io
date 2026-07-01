import React, { useState } from "react";
import { FaMobile, FaRobot, FaGlobe, FaGithub, FaClock, FaServer, FaPrint } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import Reveal from "../assets/components/Reveal";

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
    <section id="projects" className="relative w-full px-6 md:px-20 py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-dots" />      <Reveal>
        <p className="main-font text-emerald-500 font-semibold tracking-widest uppercase text-sm mb-3">
          Selected work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4 main-font text-primary">Projects</h2>
        <p className="main-font text-gray-500 text-base md:text-lg max-w-2xl mb-14">
          A mix of client work, freelance builds, and personal projects spanning
          machine learning, automation, and full-stack apps.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={index} delay={index * 80}>
            <div className="group h-full bg-white border border-gray-100 rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 flex flex-col">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-2xl text-emerald-500 bg-emerald-50 rounded-xl p-3 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-xl font-semibold main-font text-primary">{project.title}</h3>
                </div>
              </div>

              <p className={`text-gray-600 main-font text-sm md:text-base leading-relaxed ${expanded === index ? "" : "line-clamp-3"}`}>
                {project.description}
              </p>
              {project.description.length > 120 && (
                <button onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-emerald-600 text-sm mt-2 main-font font-semibold self-start hover:text-emerald-700">
                  {expanded === index ? "Show less" : "Read more"}
                </button>
              )}

              <div className="flex-1" />

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="border border-gray-200 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full main-font">
                    {tag}
                  </span>
                ))}
              </div>

              {(project.links.github || project.links.website) && (
                <div className="flex gap-5 mt-5 pt-5 border-t border-gray-100">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 main-font font-medium transition-colors">
                      <FaGithub className="text-lg" /> GitHub
                    </a>
                  )}
                  {project.links.website && (
                    <a href={project.links.website} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 main-font font-medium transition-colors">
                      <FaGlobe className="text-lg" /> Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
