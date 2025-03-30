import React from "react";

const jobs = [
    {
        title: "Software Developer",
        experience: "India · 7-10 years",
        openings: 2,
    },
    { title: "Junior Developer", experience: "India · 1-3 years", openings: 2 },
];

const HiringSection = () => {
    return (
        <section className="text-white text-center py-16">
            <p className="text-sm text-customPurple tracking-[2px]">HIRING</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray py-">
                Let's Build Something Great Together!
            </h2>
            <div className="mt-8 space-y-6 w-[1190px] mx-auto p-3">
                {jobs.map((job, index) => (
                    <div
                        key={index}
                        className="border-l-4 border-purple-900 bg-gray-800 p-6 flex justify-between items-center w-full rounded-md shadow-lg">
                        <div className="text-left">
                            <div className="flex items-center gap-4">
                                <h3 className="text-xl font-sans text-[#D9D6DF] leading-none">
                                    {job.title}
                                </h3>
                                <div className="w-8 h-8 flex items-center justify-center text-sm font-bold bg-gray-700 rounded-full">
                                    {job.openings}
                                </div>
                            </div>
                            <p className="text-softLavender text-sm mt-1">
                                {job.experience}
                            </p>
                        </div>
                        <span className="text-2xl text-softLavender">→</span>
                    </div>
                ))}
            </div>
            <button className="mt-8 px-6 py-2 border-2 border-purple-500 rounded-full text-white hover:bg-purple-500 transition">
                VIEW ALL{" "}
                <span className="text-xl text-softLavender ml-3">→</span>
            </button>
        </section>
    );
};

export default HiringSection;
