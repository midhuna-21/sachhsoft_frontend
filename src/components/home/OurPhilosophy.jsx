import { FaBullseye, FaCrown } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";

const AboutUsHome = () => {
    const philosophyData = [
        {
            icon: <FaBullseye className=" text-4xl" />,
            title: "Skillset is our superpower",
            description:
                "We ensure quality by working with developers who meet industry standards without upfront costs for tools or technology.",
        },
        {
            icon: <MdBarChart className=" text-4xl" />,
            title: "Constantly Evolving",
            description:
                "Our dedicated team continually explores new technologies to enhance business efficiency, often creating custom IT solutions.",
        },
        {
            icon: <FaCrown className="text-4xl" />,
            title: "Honesty & Integrity",
            description:
                "Our success is built on business honesty and integrity. Transparency with clients sets us apart from the competition.",
        },
    ];
    return (
        <section className="py-16 mt-12 px-6 md:px-12 w-full">
            <div className="text-center max-w-[900px] mx-auto">
                <p className="text-sm text-customPurple tracking-[2px]">
                    OUR PHILOSOPHY
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray">
                    Your dreams, our{" "}
                    <span className="text-white">creations!</span>
                </h2>
                <p className="text-sm md:text-md lg:text-lg text-customPurple mt-4">
                    We're all about results - bridging the business-tech gap{" "}
                    <br />
                    <span className="font-medium">
                        efficient profitability.
                    </span>
                </p>
            </div>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-12 max-w-[1150px] mx-auto">
                {philosophyData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 max-w-sm">
                        <div className="flex flex-col w-full">
                            <i className="text-mediumPurple text-4xl">
                                {item.icon}
                            </i>
                            <h3 className="text-xl font-bold text-customGray py-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-customPurple leading-7">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="px-6 py-3 bg-purple-600 text-white rounded-3xl">
                    About us →
                </button>
            </div>
        </section>
    );
};

export default AboutUsHome;
