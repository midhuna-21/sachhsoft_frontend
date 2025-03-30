import React from "react";

const content = {
    atCompany: "AT SACCHSOFT",
    mainHeading: "We revolutionize your technological ideas into reality",
    description:
        "Expert IT consulting tailored just for empowering your technical needs",
};

const servicesData = [
    "E-Commerce",
    "Marketing",
    "Enterprise",
    "Development",
    "Digital",
    "Automation",
    "UI/UX Design",
    "Modern Web Services",
    "SEO",
    "Mobility",
    "Project Management",
    "Cloud",
];

const statsData = [
    { value: "10+", label: "Industry years" },
    { value: "$10M", label: "Revenue Generated for clients" },
];

const LandingSection = () => {
    return (
        <section className="flex flex-col items-start px-6 md:px-12 mt-12 w-full">
            <div className="flex flex-col md:flex-row justify-between w-full max-w-[1200px] mx-auto gap-10">
                <div className="w-full md:w-1/2 relative md:pr-8">
                    <p className="text-sm text-customPurple font-raleway tracking-[2px]">
                        {content.atCompany}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-customGray mb-6">
                        {content.mainHeading.split(" ").slice(0, 3).join(" ")}
                        <br />
                        <span className="text-customGray">
                            {content.mainHeading.split(" ").slice(3).join(" ")}
                        </span>
                    </h1>
                    <p className="text-lg md:text-[24px] font-normal leading-7 md:leading-[36px] text-customPurple mt-6 font-avenir">
                        {content.description}
                    </p>
                    <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-3xl">
                        Get in touch →
                    </button>
                </div>
                <div className="flex flex-col w-full md:w-1/2 md:pl-8">
                    <div className="bg-gradient-to-r from-[#5F01BD] to-[#3C0475] p-6 rounded-xl">
                        <p className="text-lg text-white">Our Services</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {servicesData.map((service) => (
                                <button
                                    key={service}
                                    className="border px-4 py-2 rounded-full text-white text-sm">
                                    {service}
                                </button>
                            ))}
                        </div>
                        <p className="mt-2 text-white text-xs md:text-[10px]">
                            + many other IT Services
                        </p>
                    </div>
                    <div className="bg-[#FE720D] p-6 mt-6 md:mt-8 rounded-lg flex flex-col md:flex-row justify-between">
                        {statsData.map((stat, index) => (
                            <div key={index} className="w-full md:w-1/2 py-2">
                                <p className="text-3xl md:text-4xl font-bold uppercase">
                                    {stat.value}
                                </p>
                                <p className="text-white uppercase text-xs md:text-[10px] tracking-[2px]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingSection;
