import React, {useState} from "react";
import "./css/Projects.css";
import {RiExpandDiagonalLine} from "react-icons/ri";

const Projects = () => {
    const projectData = [
        {
            title: "DIMS Modules",
            description: "DIMS is a web-based application developed to streamline and modernize the core functionalities of ERP systems. I have contributed to various aspects of DIMS, with a focus on enhancing existing modules and developing new ones to improve overall efficiency and user experience. Below is a small selection of modules engineered by me.",
            thumbnail: "/images/DIMS_Thumb.png",
            images: [
                {
                    src: "/images/DIMS_1.png",
                    title: "Route Optimization",
                    description: "The Route Optimization module is designed to calculate the most efficient delivery routes once an order has been picked and loaded onto a truck. By determining the optimal path, this module enhances delivery efficiency, reduces travel time, and helps improve overall customer satisfaction."
                }, {
                    src: "/images/DIMS_2.png",
                    title: "Customer Specials",
                    description: "The Customer Specials module enables the creation and management of promotional deals on stock items. Whether it's a store-wide promotion or a targeted offer for specific customers, this module supports setting up specials in bulk within a defined date range, ensuring flexibility and streamlined promotional campaigns."
                }, {
                    src: "/images/DIMS_3.png",
                    title: "Purchase Order Module",
                    description: "The Purchase Order module streamlines stock management by monitoring inventory levels and enabling the creation of purchase orders directly within DIMS. This ensures that warehouse stock consistently meets current demand, reducing the risk of shortages and maintaining operational efficiency."
                }, {
                    src: "/images/DIMS_4.png",
                    title: "Live Bulk Picking Screen",
                    description: "The Live Bulk Picking Dashboard provides real-time visibility into the picking progress for each delivery. Refreshing automatically every minute, it enables both pickers and managers to monitor completed and outstanding items with ease. Fully integrated with our mobile picking and loading apps, this screen ensures streamlined coordination and efficient warehouse operations."
                }, {
                    src: "/images/DIMS_5.png",
                    title: "Route Planner",
                    description: "The Route Planner allows us to organize and sequence delivery routes efficiently. It enables us to assign orders to specific deliveries, update an order’s route and delivery type, and optimize the stop sequence for maximum efficiency. Once planning is complete, our route optimization ensures the most effective delivery order."
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
        }
        , {
            title: "iStoreIt",
            description: "iStoreIt is a mobile application designed to manage and track stock movements within a warehouse. Leveraging a fully serialized tracking system, it enables users to move inventory into designated warehouse bins while capturing detailed information such as the stock's current position, its location history, the user responsible for each movement, and more. The system also logs which forklift was used and how long the transfer took, providing a complete audit trail for every stock movement.",
            thumbnail: "/images/iStoreIt_Thumb.png",
            images: [
                {
                    src: "/images/iStoreIt_1.jpeg",
                    title: "Login Screen",
                    description: "Users authenticate using a registered username and password. Account creation and user management are handled internally by Linx Systems to ensure security and access control."
                },
                {
                    src: "/images/iStoreIt_2.jpeg",
                    title: "Sync Screen",
                    description: "The Sync screen pulls data from the central company database, including bin locations, user permissions, and other critical configuration details, ensuring the app is always up to date."
                },
                {
                    src: "/images/iStoreIt_3.jpeg",
                    title: "Dashboard Screen",
                    description: "The main hub of the application. From here, users can initiate stock movements, perform pallet breaks, execute reversal actions, and post items to the processing queue."
                },
                {
                    src: "/images/iStoreIt_4.jpeg",
                    title: "Movement Screen",
                    description: "This core screen facilitates stock transfers between locations. Users scan a QR code placed on a forklift, then scan or select the destination bin. The transaction is queued for upload, allowing for both offline functionality and real-time updates once connected to the network."
                },
                {
                    src: "/images/iStoreIt_5.gif",
                    title: "QR Code Scanning",
                    description: "The app supports QR code scanning via the device’s built-in camera or an external Bluetooth scanner. This enables fast and reliable item identification during stock movements."
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
        }
    ];

    const [expandedProject,
        setExpandedProject] = useState(null);
    const [currentSlide,
        setCurrentSlide] = useState(0);
    const [isFullscreen,
        setIsFullscreen] = useState(false);

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

    // Handle image click to enter fullscreen
    const handleImageClick = () => {
        setIsFullscreen(true);
    };

    // Handle close fullscreen mode
    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
    };

    return (
        <div
            id="PROJECTS"
            className="default-content text-base pt-20 pb-20">
            
            <h2 className="text-2xl mb-4 font-semibold px-6">What Ive Done</h2>
            <div className="space-y-8">
                {projectData.map((project, index) => (
                    <div key={index} className="flex flex-col p-4 rounded-lg project-panel">
                        {/* Thumbnail, Title, and Description */}
                        <div className="flex items-center gap-6">
                        <img 
                            src={project.thumbnail} 
                            alt={project.title} 
                            className="w-32 h-auto object-cover rounded-2xl cursor-pointer" 
                            onClick={() => handleExpand(index)} 
                        />

                            <div className="flex-1">
                                <h2 className="text-lg font-bold text-primary project-title">{project.title}</h2>
                                <p className="text-sm text-primary mb-4 text-left">{project.description}</p>
                                <button
                                    onClick={() => handleExpand(index)}
                                    className="text-accent font-medium hover:underline">
                                    {expandedProject === index
                                        ? "Collapse"
                                        : "Expand"}
                                </button>
                            </div>
                        </div>
                        {/* Expanded/Collapsed Section */}
                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedProject === index
                            ? "max-h-[1000px] opacity-100 scale-100"
                            : "max-h-0 opacity-0 scale-95"}`}>
                            {expandedProject === index && (
                                <div className="mt-6">
                                    {/* Image Title */}
                                    <h6 className="text-md font-bold text-primary project-title mb-3">
                                        {project.images[currentSlide].title}
                                    </h6>
                                    <div className="relative">
                                        <div className="relative w-full h-64 overflow-hidden">
                                            {project
                                                .images
                                                .map((image, i) => (
                                                    <div
                                                        key={i}
                                                        className={`relative w-full h-full cursor-pointer group ${i === currentSlide
                                                        ? "block"
                                                        : "hidden"}`}
                                                        onClick={handleImageClick}>
                                                        <img
                                                            src={image.src}
                                                            alt={`Slide ${i + 1}`}
                                                            className="h-full mx-auto object-contain"
                                                        />
                                                        <div
                                                            className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                                            <span className="text-white text-4xl"><RiExpandDiagonalLine/></span>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={() => handlePrevSlide(project.images.length)}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600">
                                            ◀
                                        </button>

                                        <button
                                            onClick={() => handleNextSlide(project.images.length)}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-md hover:bg-gray-400 dark:hover:bg-gray-600">
                                            ▶
                                        </button>
                                    </div>

                                    {/* Image Description */}
                                    <p className="text-sm text-secondary my-3 text-left">
                                        {project.images[currentSlide].description}
                                    </p>

                                    {/* Tags Below Expanded Section */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project
                                            .tags
                                            .map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 font-semibold text-xs text-accent rounded-full project-tag">
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

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div
                        className="relative w-3/4 max-h-[90vh] flex flex-col items-center justify-center">
                        {/* Image Title */}
                        <h6 className="text-xl font-bold text-white mb-3 text-center">
                            {projectData[expandedProject].images[currentSlide].title}
                        </h6>

                        <img
                            src={projectData[expandedProject].images[currentSlide].src}
                            alt="Fullscreen Image"
                            className="max-w-full max-h-[70vh] object-contain"/> {/* Image Description */}
                        <h6 className="text-md text-white my-3 text-center px-6">
                            {projectData[expandedProject].images[currentSlide].description}
                        </h6>

                        {/* Close Button */}
                        <button
                            onClick={handleCloseFullscreen}
                            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-300">
                            ✖
                        </button>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => handlePrevSlide(projectData[expandedProject].images.length)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full">
                            ◀
                        </button>
                        <button
                            onClick={() => handleNextSlide(projectData[expandedProject].images.length)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full">
                            ▶
                        </button>
                    </div>
                </div>
            )}

            
            <h2 className="text-xl mb-4 font-semibold px-6">MORE PROJECTS WILL BE ADDED BY 2025-05-09</h2>

        </div>

    );
};

export default Projects;
