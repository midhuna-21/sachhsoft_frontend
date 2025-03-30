import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars } from "react-icons/fa";
import SachhsoftLogo from "../assets/sachhsoftlogo.png";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center p-4 text-white relative mb-5">
            <div className="flex-1">
                <img
                    src={SachhsoftLogo}
                    alt="Sachhsoft Logo"
                    className="h-10 w-auto filter invert"
                />
            </div>
            <div className="hidden md:flex gap-x-12 text-lg font-avenir flex-1 relative">
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
            <div className="hidden md:flex gap-x-12 text-lg items-center flex-1 justify-end pr-10">
                <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white mr-16">
                    Let's talk <span className="ml-4">→</span>
                </button>
            </div>
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-white text-2xl">
                    {isMenuOpen ? <FaBars /> : <FaBars />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-16 bg-[#1A0E20] text-white p-6 flex flex-col space-y-4 md:hidden z-50 min-h-fit">
                    <div className="relative">
                        <span
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            About <FaChevronDown size={14} />
                        </span>
                        {isDropdownOpen && (
                            <div className="mt-2  text-customGray rounded-lg">
                                <Link
                                    to="/about"
                                    className="block px-4 py-2"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMenuOpen(false);
                                    }}>
                                    <span className="text-purple-400 font-bold">
                                        ›
                                    </span>{" "}
                                    About Us
                                </Link>
                                <Link
                                    to="/team"
                                    className="block px-4 py-2"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMenuOpen(false);
                                    }}>
                                    <span className="text-purple-400 font-bold">
                                        ›
                                    </span>{" "}
                                    Team
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                        Services
                    </Link>
                    <Link to="#" onClick={() => setIsMenuOpen(false)}>
                        Blogs
                    </Link>
                    <Link to="/careers" onClick={() => setIsMenuOpen(false)}>
                        Careers
                    </Link>
                    <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white">
                        Let's talk <span className="ml-4">→</span>
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
