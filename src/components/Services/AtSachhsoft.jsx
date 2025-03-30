import React from "react";
import atSachhsoftImg from "../../assets/celebration.png";

const AtSachhsoft = () => {
    return (
        <section className="px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
                <p className="text-sm text-customPurple tracking-[2px]">
                    AT SACCHSOFT
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-customGray py-3">
                    Boost your business with <br /> our IT Solutions
                </h2>
                <p className="text-softLavender mt-4 max-w-xl">
                    We’re here to help your business shine with our easy-to-use{" "}
                    <br /> IT services.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={atSachhsoftImg}
                    alt="Sachhsoft IT Solutions"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-xl"
                />
            </div>
        </section>
    );
};

export default AtSachhsoft;
