import React from "react";
import { FaMobile, FaRobot, FaGlobe, FaGithub, FaClock } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const projects = [
    {
        icon: <FaClock />,
        title: "Timeframe",
        description: "Timeframe is a Micro-SaaS project designed to speed up the generation of timetables for schools. Timetable generation can take a school almost up to a month. Timeframe does it in a matter of seconds, saving weeks of time. It was built using pythons FastAPI as a backend hosted on Render, and a react frontend hosted on Vercel",
        links: {
            github: "https://github.com/KyleJamesWestran/Timeframe",
            website: "https://timeframe-beta.vercel.app/"
        },
        tags: ["Python", "Algorithms", "AI", "React", "Render", "Vercel"]
    },
    {
        icon: <FaRobot />,
        title: "Forkast",
        description: "A machine learning platform for sales prediction. Models include purchase likelihood, product forecasting, and quantity prediction for accurate sales strategy planning.",
        links: {
            github: ""
        },
        tags: ["Python", "Sklearn", "AI", "Machine Learning", "Numpy", "Pandas", "Predictive Models"]
    },
    {
        icon: <FaComputer />,
        title: "DIMS",
        description: "DIMS is a web-based ERP integration system. I contributed to improving and creating modules such as Route Optimization, Customer Specials, Purchase Orders, and more, enhancing logistics and warehouse efficiency.",
        links: {
            website: "https://mydimsapp.com/"
        },
        tags: ["PHP", "Laravel", "SQL", "JQuery", "Dev Extreme", "AI", "Automation", "Azure"]
    },
    {
        icon: <FaMobile />,
        title: "iStoreIt",
        description: "A mobile app for warehouse stock tracking with serialized tracking, QR scanning, and audit trails. Built to operate even offline with full syncing capabilities.",
        links: {
        },
        tags: ["Flutter", "Dart", "SQL", "APIs", "Mobile", "Automation", "Tracking"]
    },
];

const Projects = () => {
    return (
        <section id="projects" className="p-8 min-h-screen m-10">
            <h2 className="text-6xl font-bold mb-8 main-font">PROJECTS</h2>
            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white border-4 border-gray-100 p-6 flex flex-col">
                        {/* Icon, Title, Description */}
                        <div className="flex mb-4">
                            <div className="text-4xl text-emerald-500 mr-4">
                                {project.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-1 main-font">{project.title}</h3>
                                <p className="text-gray-700 main-font">{project.description}</p>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-4 mt-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                                    <FaGithub className="text-xl" /> GitHub
                                </a>
                            )}
                            {project.links.website && (
                                <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black">
                                    <FaGlobe className="text-xl" /> Website
                                </a>
                            )}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
