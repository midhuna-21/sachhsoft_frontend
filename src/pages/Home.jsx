import React from "react";
import Header from "../components/Header";
import AboutUsHome from "../components/home/OurPhilosophy";
import Process from "../components/home/OurProcess";
import OurServices from "../components/home/OurServices";
import OurClients from "../components/home/OurClients";
import InnovationPioneers from "../components/home/InnovationPioneers";
import OurTestimonials from "../components/home/OurTestimonials";
import BlogSection from "../components/home/Blog";
import TechnicalToolset from "../components/home/TechnicalToolTest";
import HiringSection from "../components/home/HrigingSection";
import Footer from "../components/Footer";
import AtSachhsoft from "../components/AboutUs/AtSachhsoft";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import OurApproach from "../components/AboutUs/OurApproach";
import OurTeam from "../components/AboutUs/OurTeam";
import AtSachhsoftService from "../components/Services/AtSachhsoft";
// import OurServices from "../components/Services/OurServices";
import MeetTheTeam from "../components/Team/MeetTheTeam";
import CompanyLeaderShip from "../components/Team/CompanyLeadership";
import LandingSection from "../components/home/LandingSection";

const Home = () => {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[#1A0E20] to-[#010013]">
            <Header />
            <LandingSection />
            <AboutUsHome />
            <Process />
            <OurServices />
            <OurClients />
            <InnovationPioneers />
            <OurTestimonials />
            <BlogSection />
            <TechnicalToolset />
            <HiringSection />
            <Footer />
        </div>
    );
};

export default Home;
