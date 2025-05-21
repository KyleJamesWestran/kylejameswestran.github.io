import React, {useState} from "react";
import { FaMobile, FaRobot } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const projects = [
    {
        icon: <FaComputer/>, // Replace with your actual icon if needed (e.g., <SomeIcon /> or "/icon/path.svg")
        title: "DIMS Modules",
        description: "DIMS is a web-based application developed to streamline and modernize the core f" +
                "unctionalities of ERP systems. I have contributed to various aspects of DIMS, wi" +
                "th a focus on enhancing existing modules and developing new ones to improve over" +
                "all efficiency and user experience. Below is a small selection of modules engine" +
                "ered by me.",
        images: [
            {
                path: "/images/DIMS_1.png",
                description: "The Route Optimization module is designed to calculate the most efficient delive" +
                        "ry routes once an order has been picked and loaded onto a truck. By determining " +
                        "the optimal path, this module enhances delivery efficiency, reduces travel time," +
                        " and helps improve overall customer satisfaction."
            }, {
                path: "/images/DIMS_2.png",
                description: "The Customer Specials module enables the creation and management of promotional " +
                        "deals on stock items. Whether it's a store-wide promotion or a targeted offer fo" +
                        "r specific customers, this module supports setting up specials in bulk within a " +
                        "defined date range, ensuring flexibility and streamlined promotional campaigns."
            }, {
                path: "/images/DIMS_3.png",
                description: "The Purchase Order module streamlines stock management by monitoring inventory l" +
                        "evels and enabling the creation of purchase orders directly within DIMS. This en" +
                        "sures that warehouse stock consistently meets current demand, reducing the risk " +
                        "of shortages and maintaining operational efficiency."
            }, {
                path: "/images/DIMS_4.png",
                description: "The Live Bulk Picking Dashboard provides real-time visibility into the picking p" +
                        "rogress for each delivery. Refreshing automatically every minute, it enables bot" +
                        "h pickers and managers to monitor completed and outstanding items with ease. Ful" +
                        "ly integrated with our mobile picking and loading apps, this screen ensures stre" +
                        "amlined coordination and efficient warehouse operations."
            }, {
                path: "/images/DIMS_5.png",
                description: "The Route Planner allows us to organize and sequence delivery routes efficiently" +
                        ". It enables us to assign orders to specific deliveries, update an order’s route" +
                        " and delivery type, and optimize the stop sequence for maximum efficiency. Once " +
                        "planning is complete, our route optimization ensures the most effective delivery" +
                        " order."
            }
        ],
        tags: [
            "PHP",
            "Laravel",
            "SQL",
            "JQuery",
            "Dev Extreme",
            "AI",
            "Automation"
        ]
    }, {
        icon: <FaMobile/>,
        title: "iStoreIt",
        description: "iStoreIt is a mobile application designed to manage and track stock movements wi" +
                "thin a warehouse. Leveraging a fully serialized tracking system, it enables user" +
                "s to move inventory into designated warehouse bins while capturing detailed info" +
                "rmation such as the stock's current position, its location history, the user res" +
                "ponsible for each movement, and more. The system also logs which forklift was us" +
                "ed and how long the transfer took, providing a complete audit trail for every st" +
                "ock movement.",
        images: [
            {
                path: "/images/iStoreIt_1.jpeg",
                description: "Users authenticate using a registered username and password. Account creation an" +
                        "d user management are handled internally by Linx Systems to ensure security and " +
                        "access control."
            }, {
                path: "/images/iStoreIt_2.jpeg",
                description: "The Sync screen pulls data from the central company database, including bin loca" +
                        "tions, user permissions, and other critical configuration details, ensuring the " +
                        "app is always up to date."
            }, {
                path: "/images/iStoreIt_3.jpeg",
                description: "The main hub of the application. From here, users can initiate stock movements, " +
                        "perform pallet breaks, execute reversal actions, and post items to the processin" +
                        "g queue."
            }, {
                path: "/images/iStoreIt_4.jpeg",
                description: "This core screen facilitates stock transfers between locations. Users scan a QR " +
                        "code placed on a forklift, then scan or select the destination bin. The transact" +
                        "ion is queued for upload, allowing for both offline functionality and real-time " +
                        "updates once connected to the network."
            }, {
                path: "/images/iStoreIt_5.gif",
                description: "The app supports QR code scanning via the device’s built-in camera or an externa" +
                        "l Bluetooth scanner. This enables fast and reliable item identification during s" +
                        "tock movements."
            }
        ],
        tags: [
            "Flutter",
            "Dart",
            "SQL",
            "APIs",
            "Mobile",
            "Automation",
            "Tracking"
        ]
    }, {
        icon: <FaRobot/>,
        title: "Forkast",
        description: "Forkast is a machine learning project designed to analyze historical sales data " +
                "and generate predictive insights. The system includes multiple models: one predi" +
                "cts the likelihood of a customer placing an order on a given day; another foreca" +
                "sts the probability of a specific product being ordered by a particular customer" +
                "; and a third estimates the quantity of that product the customer is likely to p" +
                "urchase. These models work together to support demand forecasting and personaliz" +
                "ed sales strategies.",
        images: [
            {
                path: "/images/Forkast_1.jpeg",
                description: "Utilizing historical sales data, this model predicts the likelihood of a specifi" +
                        "c customer placing an order on any given day — achieving a remarkable 99% accura" +
                        "cy rate."
            }, {
                path: "/images/Forkast_1.jpeg",
                description: "This model analyzes historical sales data to estimate the probability that a spe" +
                        "cific customer will order a particular product on a given day, with a predictive" +
                        " accuracy of 97%."
            }, {
                path: "/images/Forkast_1.jpeg",
                description: "Designed to forecast order volumes, this model predicts the quantity of a specif" +
                        "ic product a customer is likely to order on any given day. With an average predi" +
                        "ction error of just 1.17 units, it delivers exceptional accuracy — especially co" +
                        "nsidering typical order volumes range between 5 and 500 units."
            }
        ],
        tags: [
            "Python",
            "Sklearn",
            "AI",
            "Machine Learning",
            "Numpy",
            "Pandas",
            "Predictive Models"
        ]
    }
];

const Projects = () => {
    const [carouselIndex,
        setCarouselIndex] = useState({});

    const nextImage = (projectIndex) => {
        setCarouselIndex((prev) => ({
            ...prev,
            [projectIndex]: (prev[projectIndex] + 1) % projects[projectIndex].images.length || 0
        }));
    };

    const prevImage = (projectIndex) => {
        setCarouselIndex((prev) => ({
            ...prev,
            [projectIndex]: (prev[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length || 0
        }));
    };

    return (
        <section id="projects" className="p-8 min-h-screen m-10">
            <h2 className="text-6xl font-bold mb-8 main-font">PROJECTS</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => {
                    const currentImage = project.images[carouselIndex[index] || 0] || project.images[0];
                    return (
                        <div key={index} className="bg-white rounded-2xl shadow-md p-6 flex flex-col">
                            {/* Icon and Title */}
                            <div className="flex items-center text-emerald-500 text-xl font-semibold mb-2">
                                <span className="text-2xl mr-2 main-font">{project.icon}</span>
                                {project.title}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 mb-4 main-font">{project.description}</p>

                            {/* Image Carousel */}
                            <div className="relative mb-2">
                                <img
                                    src={currentImage.path}
                                    alt="Project Screenshot"
                                    className="w-full h-56 object-cover rounded-lg"/>
                                <button
                                    onClick={() => prevImage(index)}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-1 rounded-full">
                                    ◀
                                </button>
                                <button
                                    onClick={() => nextImage(index)}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow p-1 rounded-full">
                                    ▶
                                </button>
                            </div>

                            {/* Image Description */}
                            <div className="text-sm text-gray-500 text-center italic mb-4">
                                {currentImage.description}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project
                                    .tags
                                    .map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
