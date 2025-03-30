import React, { useState, useEffect } from "react";
import shopify from "../../assets/shopify.png";
import wordpress from "../../assets/wordpress.png";
import aws from "../../assets/aws.png";

const tools = [
    { name: "Shopify", logo: shopify },
    { name: "WordPress", logo: wordpress },
    { name: "AWS", logo: aws },
    { name: "React", logo: aws },
    { name: "Node.js", logo: wordpress },
    { name: "Vue.js", logo: shopify },
    { name: "WordPress", logo: wordpress },
];

const TechnicalToolset = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleLogos, setVisibleLogos] = useState(6);

    useEffect(() => {
        const updateVisibleLogos = () => {
            if (window.innerWidth < 640) {
                setVisibleLogos(1);
            } else {
                setVisibleLogos(6);
            }
        };
        updateVisibleLogos();
        window.addEventListener("resize", updateVisibleLogos);
        return () => window.removeEventListener("resize", updateVisibleLogos);
    }, []);

    const handleNext = () => {
        if (currentIndex + visibleLogos < tools.length) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section className="text-white py-16 w-[85%] mx-auto relative">
            <div className="text-left">
                <p className="text-sm text-customPurple tracking-[2px]">
                    TECHNICAL TOOLSET
                </p>
                <h2 className="text-3xl font-semibold mt-2 text-white">
                    We Assure Quality Development
                </h2>
            </div>
            <div className="mt-9 border-t border-gray-500 w-full"></div>
            <div className="relative mt-5 flex items-center justify-center">
                <button
                    onClick={handlePrev}
                    className={`text-3xl font-sans absolute left-0 transform -translate-y-1/2 ${
                        currentIndex === 0
                            ? "opacity-50 cursor-not-allowed text-gray-500"
                            : "text-white"
                    }`}
                    disabled={currentIndex === 0}>
                    {"<"}
                </button>
                <div className="flex justify-center items-center w-full">
                    {tools
                        .slice(currentIndex, currentIndex + visibleLogos)
                        .map((tool, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center px-4">
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-20 h-20 object-contain"
                                    style={{
                                        filter: "brightness(0) saturate(100%) invert(80%) sepia(3%) saturate(0%) hue-rotate(178deg) brightness(90%) contrast(90%)",
                                    }}
                                />
                            </div>
                        ))}
                </div>
                <button
                    onClick={handleNext}
                    className={`text-3xl font-sans absolute right-0 transform -translate-y-1/2 ${
                        currentIndex + visibleLogos >= tools.length
                            ? "opacity-50 cursor-not-allowed text-gray-500"
                            : "text-white"
                    }`}
                    disabled={currentIndex + visibleLogos >= tools.length}>
                    {">"}
                </button>
            </div>
            <div className="border-t border-gray-500 w-full mt-5"></div>
        </section>
    );
};

export default TechnicalToolset;
