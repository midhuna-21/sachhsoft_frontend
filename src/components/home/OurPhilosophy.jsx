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
        <section className="text-center py-16 mt-12">
            <div>
                <p className="text-sm text-customPurple tracking-[2px]">
                    OUR PHILOSOPHY
                </p>
                <h2 className="text-3xl font-semibold mt-2 text-customGray">
                    Your dreams, our{" "}
                    <span className="text-white">creations!</span>
                </h2>
                <p className="text-lg text-customPurple mt-4">
                    We're all about results - bridging the business-tech gap for{" "}
                    <br />
                    <span className="text-customPurple font-medium">
                        efficient profitability.
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 p-4 max-w-[1150px] mx-auto">
                {philosophyData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start text-left gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <i className="text-mediumPurple text-4xl">
                                {item.icon}
                            </i>
                            <h3 className="text-xl font-bold text-customGray py-3">
                                {item.title}
                            </h3>
                            <p className="text-sm text-customPurple text-left w-full leading-7">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-12 px-6 py-3 bg-purple-600 text-white rounded-3xl">
                About us →
            </button>
        </section>
    );
};

export default AboutUsHome;
