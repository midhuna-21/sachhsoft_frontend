import React from "react";
import SachhsoftLogo from "../assets/sachhsoftlogo.png";

const Footer = () => {
    return (
        <footer className="text-white py-10 px-6 bg-gradient-to-r from-[#5F01BD] to-[#3C0475] relative mt-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <img
                        src={SachhsoftLogo}
                        alt="Sachhsoft Logo"
                        className="w-32 mx-auto lg:mx-0 filter invert brightness-200"
                    />
                    <div className="mt-8 px-4 text-gray-300 text-sm space-y-2">
                        <p className="text-gray-400 text-sm">GET IN TOUCH</p>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Have a project? <br className="hidden md:block" />{" "}
                            We would love to help
                        </h2>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                    <p className="text-sm text-[#030114] ml-3">
                        I'm interested in...
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
                        {[
                            "Development",
                            "Web/Product Design",
                            "E-Commerce",
                        ].map((item, index) => (
                            <button
                                key={index}
                                className="px-3 py-1 border border-gray-300 rounded-full text-sm text-[#030114] hover:bg-gray-200">
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 space-y-2">
                        <label className="block text-[#030114] text-xs py-2">
                            Name
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label className="block text-[#030114] text-xs py-2">
                                    Work-email
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-[#030114] text-xs py-2">
                                    Contact
                                </label>
                                <input
                                    type="tel"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>
                        <label className="block text-[#030114] text-xs py-2">
                            Tell us about your project
                        </label>
                        <textarea className="w-full p-2 border rounded h-20"></textarea>
                        <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                            <span className="text-purple-600">📎</span>
                            <span className="text-black">Add Attachment</span>
                        </div>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-5 text-sm rounded-full hover:bg-purple-700 w-full md:w-auto">
                            Submit <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center ml-0 md:ml-20 lg:text-left  text-sm text-gray-300 space-y-1">
                <p>Chicago, USA</p>
                <p>+1 (805) 427-3883</p>
                <p>ceo@sachhsoft.com</p>
            </div>
        </footer>
    );
};

export default Footer;
