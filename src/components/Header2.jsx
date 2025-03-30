import React from "react";
import SachhsoftLogo from "../assets/sachhsoftlogo.png";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header2 = () => {
    return (
        <header className="flex items-center p-4 text-white relative  ml-20">
            <div className="flex-1">
                <img
                    src={SachhsoftLogo}
                    alt="Sachhsoft Logo"
                    className="h-10 w-auto filter invert"
                />
            </div>
            <div className="flex gap-x-12 pl-10 text-lg font-avenir flex-1">
                <span className="flex items-center gap-1 cursor-pointer">
                    About Us
                </span>
                <Link to="/services">
                    <span>Services</span>
                </Link>
                <Link to="/team">
                    <span>Team</span>
                </Link>
            </div>
            <div className="flex gap-x-12 text-lg items-center flex-1 justify-end pr-10">
                <button className="bg-purple-600 px-4 py-2 rounded-3xl text-white mr-16">
                    Let's talk <span className="ml-4">→</span>
                </button>
            </div>
        </header>
    );
};

export default Header2;
