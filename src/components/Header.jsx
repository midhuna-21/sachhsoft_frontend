import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import SachhsoftLogo from "../assets/sachhsoftlogo.png";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="flex items-center p-4 text-white relative mb-5">
            <div className="flex-1">
                <img
                    src={SachhsoftLogo}
                    alt="Sachhsoft Logo"
                    className="h-10 w-auto filter invert"
                />
            </div>
            <div className="flex gap-x-12 pl-10 text-lg font-avenir flex-1 relative">
                <div className="relative">
                    <span
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        About <FaChevronDown size={14} />
                    </span>
                    {isDropdownOpen && (
                        <div className="absolute top-8 left-0 w-40  text-customGray rounded-lg shadow-md">
                            <Link
                                to="/about"
                                className="block px-4 py-2  "
                                onClick={() => setIsDropdownOpen(false)}>
                                <span className="text-purple-400 font-bold">
                                    ›
                                </span>{" "}
                                About Us
                            </Link>
                            <Link
                                to="/team"
                                className="block px-4 py-2  "
                                onClick={() => setIsDropdownOpen(false)}>
                                <span className="text-purple-400 font-bold">
                                    ›
                                </span>{" "}
                                Team
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/services">
                    <span>Services</span>
                </Link>
                <span>Blogs</span>
                <span>Careers</span>
            </div>
            <div className="flex gap-x-12 text-lg items-center flex-1 justify-end pr-10">
                <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white mr-16">
                    Let's talk <span className="ml-4">→</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
