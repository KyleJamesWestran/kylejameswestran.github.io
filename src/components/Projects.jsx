import React from "react";
import { FaMobile, FaRobot, FaGlobe, FaGithub, FaClock } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const projects = [
    {
        icon: <FaClock />,
        title: "Timeframe",
        description:
            "Timeframe is a Micro-SaaS application designed to streamline the creation of school timetables. Traditionally, this process can take up to a month for a single institution. Timeframe leverages algorithmic logic and automation to generate conflict-free timetables in seconds. The backend is built with Python's FastAPI and hosted on Render, while the frontend is developed with React and deployed via Vercel.",
        links: {
            github: "https://github.com/KyleJamesWestran/Timeframe",
            website: "https://timeframe-beta.vercel.app/"
        },
        tags: ["Python", "Algorithms", "AI", "React", "Render", "Vercel"]
    },
    {
        icon: <FaRobot />,
        title: "Forkast",
        description:
            "Forkast is a machine learning platform tailored for predictive analytics in sales environments. It delivers actionable insights through advanced models that forecast customer purchasing behavior, product demand, and optimal stock levels. Developed in Python using Scikit-learn and a robust suite of data science tools, Forkast empowers businesses to make smarter inventory decisions and drive strategic growth. The platform features two core models. A classification model that predicts the probability of a customer placing an order on a given day, achieving an impressive 91% accuracy. Secondly a regression model that forecasts the expected order quantity, delivering a high level of precision with a mean absolute error of just 0.2 units.Together, these models support more accurate demand planning, reduce stockouts and overstocking, and help optimize the entire supply chain.",
        links: {
            github: "https://github.com/KyleJamesWestran/Forkast"
        },
        tags: ["Python", "Sklearn", "AI", "Machine Learning", "Numpy", "Pandas", "Predictive Models"]
    },
    {
        icon: <FaComputer />,
        title: "DIMS",
        description:
            "DIMS (Designed Integrated Management System) is a web-based ERP integration platform tailored for logistics and warehouse operations. My contributions included the development and enhancement of key modules such as Route Optimization, Customer Specials, and Purchase Order Management. The system improves operational efficiency and provides robust automation across departments. Technologies used include PHP, Laravel, and SQL, with frontend enhancements through jQuery and DevExtreme, and cloud integration via Azure.",
        links: {
            website: "https://mydimsapp.com/"
        },
        tags: ["PHP", "Laravel", "SQL", "JQuery", "Dev Extreme", "AI", "Automation", "Azure"]
    },
    {
        icon: <FaMobile />,
        title: "iStoreIt",
        description:
            "iStoreIt is a mobile inventory management application built for warehouse environments. It supports real-time tracking of serialized stock, QR code scanning, and audit trail functionality. The app is designed to function offline and synchronize with central systems once reconnected, ensuring reliability in low-connectivity settings. Developed using Flutter and Dart, it interfaces seamlessly with backend APIs for robust data integrity and automation.",
        links: {
        },
        tags: ["Flutter", "Dart", "SQL", "APIs", "Mobile", "Automation", "Tracking"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="p-8 min-h-screen m-10">
            <h2 className="text-6xl font-bold mb-8 main-font">PROJECTS</h2>
            <div className="flex flex-col gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white border-2 border-gray-100 p-6 flex flex-col transition-all duration-300 ease-in-out hover:border-emerald-300">
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
