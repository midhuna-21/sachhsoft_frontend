import React from "react";
import aboutus from "../../assets/aboutus.png";

const AtSachhsoft = () => {
    return (
        <section className="text-center py-16 px-6 mb-5">
            <p className="text-sm text-customPurple tracking-[2px]">
                AT SACCHSOFT
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-customGray">
                We fear no challenge, <br /> we conquer them
            </h2>
            <p className="text-softLavender text-md md:text-lg mt-4 max-w-2xl mx-auto">
                We aim to be the game-changers in our industry. <br />
                Our values guide us to be one.
            </p>

            <div className=" flex justify-center">
                <img
                    src={aboutus}
                    alt="Sachhsoft Team"
                    className="w-[50%] max-w-2xl rounded-lg shadow-lg filter brightness-75 hue-rotate-60 md:w-[80%] sm:w-full"
                />
            </div>
        </section>
    );
};

export default AtSachhsoft;
