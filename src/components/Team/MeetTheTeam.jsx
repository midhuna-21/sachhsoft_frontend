import React from "react";

const MeetTheTeam = () => {
    return (
        <section className="px-8 md:px-16 lg:px-32 py-12 mt-12">
            <div className="flex flex-col md:flex-row items-start justify-between">
                <h2 className="text-4xl font-bold leading-tight max-w-lg text-customGray">
                    Meet the dream team <br /> behind the scenes
                </h2>
                <p className="text-softLavender max-w-lg text-lg">
                    From creative minds to problem solvers, <br />
                    get to know the team that turns great ideas <br />
                    into reality!
                </p>
            </div>
            <div className="mt-8">
                <img
                    src="/your-team-banner.jpg"
                    alt="Team"
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default MeetTheTeam;
