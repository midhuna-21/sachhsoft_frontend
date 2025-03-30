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
        <section className="flex flex-col items-center p-12 mt-12">
            <div className="flex justify-between w-[90%] ">
                <div className="w-[55%] relative pr-16 ml-auto">
                    <p className="text-sm text-customPurple font-raleway tracking-[2px]">
                        {content.atCompany}
                    </p>
                    <h1 className="text-4xl font-bold text-customGray mb-8">
                        {content.mainHeading.split(" ").slice(0, 3).join(" ")}
                        <br />
                        <span className="text-customGray">
                            {content.mainHeading.split(" ").slice(3).join(" ")}
                        </span>
                    </h1>
                    <p className="text-[24px] font-normal leading-[36px] text-customPurple mt-8 font-avenir">
                        {content.description}
                    </p>

                    <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-3xl">
                        Get in touch →
                    </button>
                </div>
                <div className="flex flex-col w-[35%] ml-20">
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
                            <p className="mt-2 text-white text-[10px]">
                                + many other IT Services
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#FE720D] p-6 mt-8 rounded-lg flex justify-between">
                        {statsData.map((stat, index) => (
                            <div key={index} className="text-left w-1/2">
                                <p className="text-4xl font-bold uppercase">
                                    {stat.value}
                                </p>
                                <p className="text-white uppercase text-[10px] p-1 tracking-[2px]">
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
