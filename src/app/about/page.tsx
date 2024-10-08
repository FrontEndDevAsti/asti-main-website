"use client";

import React, { useState } from "react";
import About from "@/components/about/About";
import AccreditationMarquee from "@/components/brand/AccreditationMarquee";

import Gellary from "@/components/gellary/Gellary";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import VideoPopup from "@/components/modals/VideoPopup";
import WhyUs from "@/components/about/WhyUs";
import AcademicLife from "@/components/about/AcademicLife";
import LabCard from "@/components/cards/LabCard";
import ChairmanQuotes from "@/components/about/ChairmanQuotes";
import StudentSupport from "@/components/about/StudentSupport";
import VocationalEducation from "@/components/about/VocationalEducation";

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <About />
            <WhyUs />
            <AccreditationMarquee style_2={false} />
            <ChairmanQuotes setIsVideoOpen={setIsVideoOpen}  />
            <AcademicLife />
            <LabCard />
            <StudentSupport />
            <VocationalEducation />
          </main>
          <FooterOne />
        </div>
      </div>
       {/* video modal start */}
       <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"iQjeI_S0H9s"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
