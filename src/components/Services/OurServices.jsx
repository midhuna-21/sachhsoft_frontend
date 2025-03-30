import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
    {
        title: "Awesome E-Commerce Websites",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
    {
        title: "Easy Cloud Solutions",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
    {
        title: "Custom Business Solutions",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
    {
        title: "Mobile Apps that Work",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
    {
        title: "Smart Digital Marketing",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
    {
        title: "Great Web Design",
        description:
            "Want to stand out online? We build sleek, user-friendly eCommerce sites that make shopping easy and fun. Our sites look great on any device and help you attract more customers with smart design and SEO-friendly features.",
    },
];

const OurServices = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" text-white py-12 px-8 md:px-16 lg:px-32">
            <p className="text-sm text-customPurple  text-center tracking-[2px]">
                OUR SERVICES
            </p>
            <h2 className="text-3xl font-semibold text-center mt-2 text-customGray">
                Harnessing talent in every step
            </h2>
            <p className="text-center text-softLavender mt-4 max-w-2xl mx-auto">
                We infuse every project with top-notch expertise and creativity.
                <br />
                Let’s achieve greatness together!
            </p>

            <div className="mt-6 space-y-6 py-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border-t border-mutedBlueGray pt-4">
                        <div
                            className="flex justify-between items-center cursor-pointer py-3 "
                            onClick={() => toggleService(index)}>
                            <h3 className="text-xl font-sans text-customGray">
                                {service.title}
                            </h3>
                            <FaArrowRight
                                className={`text-xl text-softLavender transition-transform duration-300 ${
                                    openIndex === index
                                        ? "rotate-[-45deg]"
                                        : "rotate-0"
                                }`}
                            />
                        </div>
                        {openIndex === index && (
                            <p className="text-gray-400 mt-2 leading-relaxed">
                                {service.description
                                    .split(". ")
                                    .map((line, i) => (
                                        <div key={i}>{line}.</div>
                                    ))}
                            </p>
                        )}
                        <div className="mt-4 w-full border-t border-mutedBlueGray"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
