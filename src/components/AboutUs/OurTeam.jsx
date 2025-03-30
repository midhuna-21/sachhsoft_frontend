import React from "react";

const OurTeam = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 ml-16">
      <p className="text-sm text-customPurple tracking-[2px]">
      OUR TEAM</p>
      <h2 className="text-3xl font-semibold mt-2 text-customGray">
      Our beliefs are why we are here today
      </h2>
      <p className="text-softLavender mt-4 max-w-2xl">
        We’re a distributed team, all around the world.
      </p>
      <div className="mt-8">
        <img
          alt="Our Team"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default OurTeam;
