import React from "react";
import Header from "../components/Header";
import OurServices from "../components/Services/OurServices";
import Footer from "../components/Footer";
import AtSachhsoftService from '../components/Services/AtSachhsoft';
import OurTestimonials from "../components/home/OurTestimonials";

const Services = () => {
   return (
      <div className="flex flex-col bg-gradient-to-b from-[#1A0E20] to-[#010013]">
         <Header />
         <AtSachhsoftService />
         <OurServices />
         <OurTestimonials />
         <Footer />
      </div>
   );
};

export default Services;
