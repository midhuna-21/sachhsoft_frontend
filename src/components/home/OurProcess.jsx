import Design from "../../assets/design1.jpg";

const Process = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-20 py-12 ml-0 md:ml-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={Design}
                    alt="Process"
                    className="w-full max-w-[550px] rounded-2xl shadow-lg h-auto md:h-[450px]"
                />
            </div>

            <div className="w-full md:w-1/2 md:ml-16 text-center md:text-left">
                <p className="text-sm text-customPurple tracking-[2px]">
                    OUR PROCESS
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray py-3">
                    We bring your ideas to life <br />
                    <span className="text-customGray">
                        through <span className="text-white">discovery</span>
                    </span>
                </h2>
                <div className="border-t border-gray-500 w-full md:w-[80%] mt-2"></div>

                <p className="text-3xl md:text-4xl font-avenir mt-4 text-customPurple">
                    01<span className="text-sm text-customPurple">/4</span>
                </p>
                <p className="text-softLavender mt-2 text-sm md:text-base">
                    We shape and elevate brands with rigorous research,{" "}
                    <br className="hidden md:block" />
                    constantly challenging IT consulting assumptions.
                </p>
                <div className="border-t border-gray-500 w-full md:w-[80%] mt-6"></div>
            </div>
        </section>
    );
};

export default Process;
