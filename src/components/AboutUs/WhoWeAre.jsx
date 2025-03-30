import React from "react";

const whoWeAreData = [
    {
        left: "Our defining traits: What sets us apart from other companies",
        right: `At Sachhsoft, our seasoned and diligent team is dedicated to delivering solutions that propel businesses toward optimal profitability. Our philosophy centers around bridging the gap between technology and business, recognizing that true success lies in their seamless integration.

Offering a comprehensive range of services, including software development, cybersecurity, cloud computing, network design, project management, and various other IT solutions, our aim is to enhance and elevate your business. Your vision becomes our mission, and together, we turn your dreams into reality.`,
    },
    {
        left: "Our Mission",
        right: "Empowering businesses with innovative software solutions, we aim to drive digital transformation and shape the future of technology.",
    },
    {
        left: "Our Vision",
        right: "Deliver cutting-edge software solutions that solve complex challenges, drive efficiency, and inspire innovation, empowering our clients to succeed in a digital world.",
    },
];

const WhoWeAre = () => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <p className="text-sm text-customPurple tracking-[2px]">
                    WHO WE ARE
                </p>

                <div className="w-full">
                    {whoWeAreData.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 py-6 items-start">
                            <div className="text-lg font-semibold text-customGray leading-loose md:max-w-[300px]">
                                {item.left}
                            </div>
                            <div className="text-customPurple whitespace-pre-line border-b border-gray-300 pb-4 leading-relaxed">
                                {item.right}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
