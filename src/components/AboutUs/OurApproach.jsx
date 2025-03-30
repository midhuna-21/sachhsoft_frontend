import React from "react";
import { FaTrophy, FaGraduationCap, FaClipboardCheck } from "react-icons/fa";

const approachData = [
    {
        icon: <FaTrophy className="text-4xl text-purple-600" />,
        title: "Pioneers in everything",
        description:
            "We’re obsessed with creating delightful user experiences for our clients every step on the way, and it shows.",
    },
    {
        icon: <FaGraduationCap className="text-4xl text-purple-600" />,
        title: "Empowering Talent",
        description:
            "No hidden fees, deposit requirements, surprise costs, minimums, contract lengths, or exclusivity agreements. Ever.",
    },
    {
        icon: <FaClipboardCheck className="text-4xl text-purple-600" />,
        title: "Strive for excellence",
        description:
            "Secure tech meets remote automation. Everything you need in a beautiful product experience.",
    },
];

const OurApproach = () => {
    return (
        <section className="py-12 text-center px-6 md:px-12 lg:px-20">
            <p className="text-sm text-customPurple tracking-[2px]">
                OUR APPROACH
            </p>
            <h2 className="text-3xl font-semibold mt-2 text-customGray">
                Proudly embracing every challenge
            </h2>
            <p className="text-softLavender mt-4 max-w-2xl mx-auto">
                We take pride at how we solve each problem and build
                relationships that are memorable.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-center ml-20">
                {approachData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-6 w-[350px] h-[250px] flex flex-col items-start">
                        <i className="text-shadownPurple text-2xl">
                            {item.icon}
                        </i>
                        <h3 className="text-lg font-bold mt-2 text-white py-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-customPurple text-left w-full leading-7">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurApproach;
