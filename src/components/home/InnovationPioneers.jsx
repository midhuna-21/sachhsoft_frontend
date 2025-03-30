import HarpreetSing from "../../assets/HarpreetSingh.png";
import AdityaBilagi from "../../assets/AdityaBilagi.jpg";
import AtankshuNanda from "../../assets/AtankshuNanda.png";

const InnovationPioneers = () => {
    const teamMembers = [
        {
            name: "Harpreet Singh",
            role: "Head, Advisor - Europe",
            image: HarpreetSing,
        },
        {
            name: "Aditya Bilagi",
            role: "Tech Lead - North America",
            image: AdityaBilagi,
        },
        {
            name: "Atankshu Nanda",
            role: "Tech Lead - South Asia",
            image: AtankshuNanda,
        },
    ];
    return (
        <section className="text-white text-center py-16 flex justify-center">
            <div className="w-[92%] max-w-screen-lg">
                <p className="text-sm text-customPurple tracking-[2px]">
                    INNOVATION PIONEERS
                </p>
                <h2 className="text-3xl font-semibold mt-2 text-customGray py-2">
                    Our <span className="text-white">expert team</span> at the
                    <span className="inline-block"> forefront</span> of <br />
                    <span className="text-customGray">
                        cutting-edge solutions
                    </span>
                </h2>
                <div className="flex justify-center gap-14 mt-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative w-[70%]">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-t-lg w-full h-80 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#5F01BD]/90 to-[#B53EB1]/90 p-4 rounded-t-lg">
                                <h3 className="text-lg font-bold text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationPioneers;
