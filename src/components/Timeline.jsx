import React, {useState} from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
    FaBaby,
    FaSchool,
    FaBriefcase,
    FaPlane,
    FaFemale,
    FaChild
} from "react-icons/fa";

const events = [
    {
        date: "Sep '98",
        title: "Birth",
        details: "I was born in South Africa, where my lifelong curiosity and love for building things first took root.",
        tags: ["Curiosity", "Roots", "Beginnings"],
        icon: <FaBaby/>,
        personal: 1
    }, {
        date: "Jan '05",
        title: "Started Primary School",
        details: "Began my early education at Queens College Boys Primary, where I first developed a passion for learning—particularly in mathematics, sport, and technology.",
        tags: ["Learning", "Maths", "Technology", "Sport"],
        icon: <FaSchool/>,
        personal: 1
    }, {
        date: "Jan '12",
        title: "High School Foundations",
        details: "Attended Queens College Boys High School, where my love for software and design deepened. Scoring 100% on my first programming test affirmed I was on the right path. My teacher jokingly told the class to use my work as a memo!",
        tags: ["Programming", "Design", "Problem Solving", "Tech"],
        icon: <FaSchool/>,
        personal: 1
    }, {
        date: "Jan '17",
        title: "CBM Africa",
        details: "Started working as a draughtsman at CBM Africa, initially pursuing a career in engineering. Alongside, I developed software solutions to optimize internal processes and assisted with networking and ICT support. I soon realised that I was meant to be coding.",
        tags: [
            "Draughting",
            "Software Development",
            "Networking",
            "Excel",
            "Server Management",
            "Web-Scraping"
        ],
        icon: <FaBriefcase/>,
        personal: 0
    }, {
        date: "Mar '18",
        title: "Freelance Developer on Upwork",
        details: "Began freelancing on Upwork, delivering custom software solutions and automation tools for clients across various industries. Projects included web scrapers, task automations, and applications tailored to specific client needs.",
        tags: [
            "Python",
            "Django",
            "Web-Scraping",
            "Automation",
            "React",
            "Client Communication"
        ],
        icon: <FaBriefcase/>,
        personal: 0
    }, {
        date: "Jan '19",
        title: "UNISA - BSc Computing",
        details: "Started studying part-time for a BSc in Computing at the University of South Africa, focusing on programming, AI, database management, and software development lifecycle (SDLC).",
        tags: [
            "C++", "Python", "AI", "Oracle DB", "SDLC"
        ],
        icon: <FaSchool/>,
        personal: 0
    }, {
        date: "Jun '19",
        title: "Marriage",
        details: "Married my beautiful wife, an experience that taught me about commitment, communication, and shared purpose.",
        tags: ["Commitment", "Growth", "Support"],
        icon: <FaFemale/>,
        personal: 1
    }, {
        date: "Oct '22",
        title: "Full-Stack Developer at Linx Systems",
        details: "Joined Linx Systems as a full-stack developer, creating transformative digital solutions using PHP Laravel and MS SQL databases to help clients improve sales, warehouse management, and stock control. Integrated Python machine learning models for advanced prediction features and developed mobile apps including a serialized stock management system.",
        tags: [
            "PHP",
            "Laravel",
            "C#",
            "Python",
            "Machine Learning",
            "AI",
            "Flutter",
            "Team Leadership"
        ],
        icon: <FaBriefcase/>,
        personal: 0
    }, {
        date: "Jun '23",
        title: "Parenthood",
        details: "Welcomed our first child — an inspiring and transformative moment that redefined my priorities and fueled my drive to build a better future.",
        tags: ["Family", "Parenting", "Growth"],
        icon: <FaChild/>,
        personal: 1
    }, {
        date: "Apr '25",
        title: "Immigration to New Zealand",
        details: "Immigrated with my family to New Zealand, embarking on a new adventure to create a better future and new opportunities for our son.",
        tags: [
            "New Zealand", "Immigration", "Adventure", "Family"
        ],
        icon: <FaPlane/>,
        personal: 1
    }
];

const Timeline = () => {
    const [showPersonal,
        setShowPersonal] = useState(true);
    const filteredEvents = showPersonal
        ? events
        : events.filter(event => !event.personal);

    return (
        <section id="timeline" className="relative bg-slate-100 py-20 overflow-hidden">
            {/* Curvy Top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-40 rotate-180"
                    preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,64 C360,160 1080,-32 1440,64 L1440,320 L0,320 Z"/>
                </svg>
            </div>

            {/* Header with toggle side-by-side */}
            <div className="relative z-10 flex justify-center items-center py-20 gap-6">
                <h2 className="text-6xl font-bold main-font">TIMELINE</h2>

                <div className="flex items-center gap-2">
                    <label htmlFor="toggle" className="font-semibold text-gray-700 select-none">
                        Personal
                    </label>
                    <div className="relative w-14 h-8">
                        <input
                            type="checkbox"
                            id="toggle"
                            checked={showPersonal}
                            onChange={() => setShowPersonal((prev) => !prev)}
                            className="peer appearance-none w-14 h-8 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 ease-in-out checked:bg-emerald-500"/>
                        <span
                            className="pointer-events-none absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
                            aria-hidden="true"/>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 py-10 px-5 md:px-20">
                <VerticalTimeline>
                    {filteredEvents.map((event, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={event.date}
                            contentStyle={{
                            background: "oklch(43.2% 0.095 166.913)",
                            color: "#000"
                        }}
                            iconStyle={{
                            background: "oklch(43.2% 0.095 166.913)",
                            color: "#fff"
                        }}
                            icon={event.icon}>
                            <h3 className="text-2xl main-font font-semibold mb-2 text-white">{event.title}</h3>
                            <p className="mb-4 text-white main-font">{event.details}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {event
                                    .tags
                                    .map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs main-font font-semibold px-3 py-2 rounded-full bg-emerald-500 text-black">
                                            {tag}
                                        </span>
                                    ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>

            {/* Curvy Bottom */}
            <div
                className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,64 C360,160 1080,-32 1440,64 L1440,320 L0,320 Z"/>
                </svg>
            </div>
        </section>
    );
};

export default Timeline;
