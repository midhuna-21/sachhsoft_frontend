import React from "react";
import OurServices from "../components/Services/OurServices";
import Footer from "../components/Footer";
import AtSachhsoftService from '../components/Services/AtSachhsoft';
import OurTestimonials from "../components/home/OurTestimonials";
import Header2 from "../components/Header2";

const Services = () => {
   return (
      <div className="flex flex-col bg-gradient-to-b from-[#1A0E20] to-[#010013]">
         <Header2 />
         <AtSachhsoftService />
         <OurServices />
         <OurTestimonials />
         <Footer />
      </div>
   );
};

export default Services;
