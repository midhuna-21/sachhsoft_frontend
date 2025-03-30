import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MeetTheTeam from "../components/Team/MeetTheTeam";
import CompanyLeaderShip from "../components/Team/CompanyLeadership";
import OurTestimonials from "../components/home/OurTestimonials";
import Hiring from "../components/Team/Hiring";

const Team = () => {
   return (
      <div className="flex flex-col bg-gradient-to-b from-[#1A0E20] to-[#010013]">
         <Header />
         <MeetTheTeam />
         <CompanyLeaderShip />
         <OurTestimonials/>
         <Hiring/>
         <Footer />
      </div>
   );
};

export default Team;
