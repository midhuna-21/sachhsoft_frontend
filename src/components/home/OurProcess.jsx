import Design from "../../assets/design1.jpg";

const Process = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-20 px-20 py-12 ml-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={Design}
                    alt="Process"
                    className="w-[550px] rounded-2xl shadow-lg h-[450px]"
                />
            </div>

            <div className="w-full md:w-1/2 ml-16">
                <p className="text-sm text-customPurple tracking-[2px]">
                    OUR PROCESS
                </p>
                <h2 className="text-3xl font-semibold mt-2 text-customGray py-3">
                    We bring your ideas to life <br />
                    <span className="text-customGray">
                        through <span className="text-white">discovery</span>
                    </span>
                </h2>
                <div className="border-t border-gray-500 w-[80%] mt-2"></div>

                <p className="text-4xl font-avenir mt-4 text-customPurple">
                    01<span className="text-sm text-customPurple">/4</span>
                </p>
                <p className="text-softLavender mt-2">
                    We shape and elevate brands with rigorous research, <br />
                    constantly challenging IT consulting assumptions.
                </p>
                <div className="border-t border-gray-500 w-[80%] mt-6"></div>
            </div>
        </section>
    );
};

export default Process;
