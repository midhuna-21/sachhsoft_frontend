import React from "react";

const jobs = [
    {
        title: "Software Developer",
        experience: "India · 7-10 years",
        openings: 2,
    },
    { title: "Junior Developer", experience: "India · 1-3 years", openings: 2 },
];

const Hiring = () => {
    return (
        <section className="text-white text-center py-16">
            <p className="text-sm text-customPurple tracking-[2px]">HIRING</p>
            <h2 className="text-3xl font-semibold mt-2 text-customGray">
                Think you’ve got what it takes? <br /> We’re on the hunt for new
                talent
            </h2>
            <div className="mt-8 space-y-6 max-w-[1190px] mx-auto p-3">
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
                            <p className="text-gray-400 text-sm mt-1">
                                {job.experience}
                            </p>
                        </div>
                        <span className="text-2xl text-gray-400">→</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hiring;
