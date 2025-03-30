import { FaShoppingCart } from "react-icons/fa";
import { MdCloudDone } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaArrowLeft, FaCode } from "react-icons/fa";

const OurServices = () => {
    const servicesData = [
        {
            icon: <FaShoppingCart />,
            title: "E-Commerce",
            description:
                "We create responsive, user-friendly websites that are SEO-friendly & error-free for better search ranking, visibility, and sales.",
        },
        {
            icon: <MdCloudDone />,
            title: "Cloud Computing",
            description:
                "Cloud migration made easy. Tailored solutions on Azure, AWS, Google Cloud, Zoho, Salesforce, and more. Setup simplified for your goals.",
        },
        {
            icon: <FaTv />,
            title: "Enterprise",
            description:
                "Our developers handle it all: labor management, workflow digitalization, system modernization, and operation enhancement.",
        },
        {
            icon: <PiAirplaneTilt />,
            title: "Mobility",
            description:
                "We offer full app services, from ideation to ongoing support, to enrich user experiences and promote collaboration across various industries.",
        },
        {
            icon: <FaArrowLeft />,
            title: "Digital",
            description:
                "Our specialists ensure top search rankings and web presence throughout your digital marketing journey, fostering passionate social media connections.",
        },
        {
            icon: <FaCode />,
            title: "Modern Web Services",
            description:
                "Our expert web developers offer a range of services, from mobile and e-commerce solutions to enhance your online presence in markets.",
        },
    ];
    return (
        <section className="text-center py-16 max-w-[90%] mx-auto">
            <p className="text-sm text-customPurple tracking-[2px]">
                OUR SERVICES
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-white">
                Tech powered solutions{" "}
                <span className="text-customGray">for empowering</span><br/>
                <span className="text-customGray">your success</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-6 w-[350px] h-[250px] flex flex-col items-start">
                        <i className="text-shadownPurple text-2xl">
                            {service.icon}
                        </i>
                        <h3 className="text-lg font-bold mt-2 text-white py-2">
                            {service.title}
                        </h3>

                        <p className="text-sm text-customPurple text-left w-full leading-7">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default OurServices;
