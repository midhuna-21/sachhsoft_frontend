import React, { useState } from "react";
import HarpreetSingh from "../../assets/HarpreetSingh.png";

const teamData = {
    "COMPANY LEADERSHIP": [
        {
            name: "Harpreet Singh",
            role: "Head, Advisor - Europe",
            img: HarpreetSingh,
        },
        {
            name: "Aditya Bilagi",
            role: "Tech Lead - North America",
            img: HarpreetSingh,
        },
        {
            name: "Atankshu Nanda",
            role: "Tech Lead - South Asia",
            img: HarpreetSingh,
        },
        {
            name: "Ashwij Ugrankar",
            role: "QA Lead - North America",
            img: HarpreetSingh,
        },
    ],
    ENGINEERING: [
        { name: "John Doe", role: "Senior Engineer", img: HarpreetSingh },
        { name: "Jane Smith", role: "Backend Engineer", img: HarpreetSingh },
    ],
    DESIGN: [
        { name: "Alice Brown", role: "UI/UX Designer", img: HarpreetSingh },
    ],
};

const CompanyLeadership = () => {
    const [activeTab, setActiveTab] = useState("COMPANY LEADERSHIP");
    const currentMembers = teamData[activeTab] || [];
    const emptySlots = (4 - (currentMembers.length % 4)) % 4;

    return (
        <section className="px-8 md:px-16 lg:px-32 py-12 text-center">
            <h2 className="text-3xl font-bold leading-tight text-customGray">
                Our rockstar team is leading the charge <br /> with the coolest
                solutions around!
            </h2>
            <div className="mt-6 flex justify-center space-x-6">
                {Object.keys(teamData).map((tab) => (
                    <button
                        key={tab}
                        className={`text-lg font-semibold px-4 py-2 transition ${
                            activeTab === tab
                                ? "text-purple-600"
                                : "text-gray-500"
                        }`}
                        onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 justify-center">
                {currentMembers.map((member, index) => (
                    <div key={index} className="relative w-[270px] h-[300px]">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#5F01BD]/90 to-[#B53EB1]/90 p-3 rounded-t-lg">
                            <h3 className="text-lg font-bold text-white">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-200">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
                {Array.from({ length: emptySlots }).map((_, index) => (
                    <div
                        key={`empty-${index}`}
                        className="w-[220px] h-[300px]"></div>
                ))}
            </div>
        </section>
    );
};

export default CompanyLeadership;
