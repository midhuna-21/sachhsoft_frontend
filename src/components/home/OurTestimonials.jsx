import React, { useState } from "react";
import John from "../../assets/john.jpg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const OurTestimonials = () => {
    const testimonials = [
        {
            title: "Incredible tech solutions",
            description:
                "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
            name: "John Kegal",
            position: "CEO, RenewRX",
            image: John,
        },
        {
            title: "Game-changer for our company",
            description:
                "Partnering with Sacchsoft was the best decision. Their expert team brought our vision to life, making our digital transformation seamless and effective.",
            name: "Sarah Williams",
            position: "Founder, TechNova",
            image: John,
        },
    ];

    const containerWidth = 400;
    const initialOffset = 100;

    const [offset, setOffset] = useState(initialOffset);

    const handleLeftClick = () => {
        if (
            offset >
            -((testimonials.length - 1) * containerWidth - initialOffset)
        ) {
            setOffset(offset - containerWidth);
        }
    };

    const handleRightClick = () => {
        if (offset < initialOffset) {
            setOffset(offset + containerWidth);
        }
    };

    return (
        <section className="text-white py-16 flex flex-col items-center">
            <div className="w-[85%] ml-16 relative">
                <div className="text-left">
                    <p className="text-sm text-customPurple tracking-[2px] py-1">
                        TESTIMONIALS
                    </p>
                    <h2 className="text-3xl font-bold">
                        Hear from our{" "}
                        <span className="text-white">valued partners</span>
                    </h2>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <button
                        onClick={handleLeftClick}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                            offset <=
                            -(
                                (testimonials.length - 1) * containerWidth -
                                initialOffset
                            )
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-vibrantPurple hover:bg-purple-800"
                        }`}
                        disabled={
                            offset <=
                            -(
                                (testimonials.length - 1) * containerWidth -
                                initialOffset
                            )
                        }>
                        <FiArrowLeft className="text-xl" />
                    </button>
                    <button
                        onClick={handleRightClick}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                            offset >= initialOffset
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-vibrantPurple hover:bg-purple-800"
                        }`}
                        disabled={offset >= initialOffset}>
                        <FiArrowRight className="text-xl" />
                    </button>
                </div>
            </div>

            <div className="w-full mt-8 overflow-hidden">
                <div
                    className="ml-8 flex gap-8 transition-transform duration-300"
                    style={{ transform: `translateX(${offset}px)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl shadow-2xl flex-1 bg-vibrantPurple min-w-[300px]">
                            <h3 className="text-lg font-sans">
                                {testimonial.title}
                            </h3>
                            <p className="text-lg text-softLavender mt-2 italic leading-loose">
                                {testimonial.description}
                            </p>
                            <div className="flex items-center mt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-9 h-9 rounded-md mr-3"
                                />
                                <div>
                                    <p className="font-thin">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-xs text-softLavender">
                                        {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTestimonials;
