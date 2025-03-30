import React from "react";

const whoWeAreData = [
    {
        left: "Our defining traits: What sets us apart from other companies",
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
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-xl font-bold text-center text-customPurple tracking-wide uppercase">
                    Who We Are
                </h2>
                <div className="mt-10 space-y-8">
                    {whoWeAreData.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-b border-gray-300 pb-6">
                            <div className="text-lg font-semibold text-gray-800 md:max-w-[300px]">
                                {item.left}
                            </div>
                            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
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
