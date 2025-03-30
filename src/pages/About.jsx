import React from "react";
import Footer from "../components/Footer";
import AtSachhsoft from "../components/AboutUs/AtSachhsoft";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import OurApproach from "../components/AboutUs/OurApproach";
import OurTeam from "../components/AboutUs/OurTeam";
import Header2 from "../components/Header2";

const About = () => {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[#1A0E20] to-[#010013]">
            <Header2 />
            <AtSachhsoft />
            <WhoWeAre />
            <OurApproach />
            <OurTeam />
            <Footer />
        </div>
    );
};

export default About;
