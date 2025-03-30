import RLogo from "../../assets/rlogo.png";
import RizzarLogo from "../../assets/rizzar_logo.jpg";

const OurClients = () => {
    const clientLogos = [
        { src: RLogo, alt: "Brand 1" },
        { src: RLogo, alt: "Brand 2" },
        { src: RizzarLogo, alt: "Brand 3" },
    ];
    return (
        <section className="flex flex-col items-center p-6 md:p-12 mt-12">
            <div className="w-[90%] text-center">
                <p className="text-sm text-customPurple tracking-[2px]">
                    OUR CLIENTS
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray">
                    Partners who have{" "}
                    <span className="text-white">thrived with us</span>
                </h2>
            </div>
            <div className="w-full max-w-[1200px] border border-mutedBlueGray rounded-lg mt-12 p-6 md:p-10 relative">
                <div className="flex flex-col md:flex-row flex-wrap items-center md:justify-between w-[90%] mx-auto space-y-6 md:space-y-0 md:gap-x-12 md:gap-y-8">
                    {clientLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="w-[70px] filter grayscale invert-[20%] sepia-[10%] opacity-90"
                        />
                    ))}
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-transparent text-[#C4C7CE] px-6 py-2 text-xs md:text-sm backdrop-blur-sm">
                    + trusted by other brands
                </div>
            </div>
        </section>
    );
};
export default OurClients;
