import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Mobility from "../../assets/mobility.jpg";

const blogs = [
    {
        title: "Navigating the future with mobility services",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
    {
        title: "Maximizing business success: The Power of SEO",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
    {
        title: "The Impact of IT Industry on E-Commerce",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
    {
        title: "Tech Trends Shaping the Future",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
    {
        title: "Why AI is Transforming Businesses",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
    {
        title: "Cybersecurity in the Digital Age",
        date: "March 20, 2023 • 2 min read",
        image: Mobility,
    },
];

const BlogSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageWidth = 370;
    const imagesPerRow = window.innerWidth < 768 ? 1 : 3;
    const maxIndex = blogs.length - imagesPerRow;

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="text-white py-16 text-center relative">
            <div className="relative w-[85%] mx-auto">
                <p className="text-sm text-customPurple tracking-[2px]">BLOG</p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray py-3">
                    Explore insights through our <br />
                    <span className="text-white">knowledge-share blogs</span>
                </h2>
            </div>
            <div className="hidden md:flex absolute top-1/2 left-4 right-4 justify-between transform -translate-y-1/2">
                <button
                    onClick={handlePrev}
                    className={`bg-gray-700 text-white rounded-full p-3 hover:bg-gray-600 ${
                        currentIndex === 0
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    disabled={currentIndex === 0}>
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className={`bg-gray-700 text-white rounded-full p-3 hover:bg-gray-600 ${
                        currentIndex >= maxIndex
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                    }`}
                    disabled={currentIndex >= maxIndex}>
                    <FaArrowRight />
                </button>
            </div>
            <div className="overflow-hidden w-[82%] mx-auto mt-8">
                <div
                    className="flex gap-8 transition-transform duration-300"
                    style={{
                        transform: `translateX(${
                            -currentIndex * imageWidth
                        }px)`,
                    }}>
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="relative w-[350px] flex-shrink-0">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-[500px] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3D007A]/80 rounded-lg"></div>
                            <div className="absolute bottom-4 left-4 text-left text-white z-10 w-[60%] py-10">
                                <h3 className="text-lg">{blog.title}</h3>
                                <p className="text-sm text-gray-300">
                                    {blog.date}
                                </p>
                            </div>
                            <div className="absolute bottom-4 right-4 text-lg font-bold text-white z-10">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:hidden justify-center space-x-2 mt-4">
                {blogs.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
