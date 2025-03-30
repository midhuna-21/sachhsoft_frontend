import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SachhsoftLogo from "../assets/sachhsoftlogo.png";

const Header2 = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center p-4 text-white relative w-full md:ml-10 ml-0">
            <div className="flex-1">
                <img
                    src={SachhsoftLogo}
                    alt="Sachhsoft Logo"
                    className="h-10 w-auto filter invert"
                />
            </div>
            <div className="hidden md:flex gap-x-16 text-lg font-avenir relative">
            <Link to="/about">
    <span className="flex items-center gap-1 cursor-pointer">
        About Us
    </span>
    </Link>
    <Link to="/services">
        <span>Services</span>
    </Link>
    <Link to="/team">
        <span>Team</span>
    </Link>
</div>

            <div className="hidden md:flex gap-x-12 text-lg items-center flex-1 justify-end pr-10">
                <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white">
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
                            About Us
                        </span>
                    </div>
                    <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                        Services
                    </Link>
                    <Link to="/team" onClick={() => setIsMenuOpen(false)}>
                        Team
                    </Link>
                    <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white">
                        Let's talk <span className="ml-4">→</span>
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header2;
