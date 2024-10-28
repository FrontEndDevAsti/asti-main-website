"use client";

import React, { useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import ServiceHomeOne from "@/components/service/ServiceHomeOne";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import Testimonial from "@/components/testimonial/Testimonial";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import BlogHomeOne from "@/components/blog/BlogHomeOne";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/AccreditationMarquee";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import VideoPopup from "@/components/modals/VideoPopup";
import TestimonialSection from "@/components/home/TestimonialSection";
import QuoteSection from "@/components/home/QuoteSection";
import ServiceHomeFive from "@/components/service/ServiceHomeFive";
import ServiceHomeTwo from "@/components/service/ServiceHomeTwo";
import ServiceHomeFour from "@/components/service/ServiceHomeFour";
import BlogHomeTwo from "@/components/blog/BlogHomeTwo";
import PortfolioHomeFive from "@/components/portfolio/PortfolioHomeFive";
import PortfolioHomeFour from "@/components/portfolio/PortfolioHomeFour";
import ProgramSection from "@/components/home/ProgramSection";
import CampusLife from "@/components/home/CampusLife";
import WhyUs from "@/components/about/WhyUs";
import OurGraduations from "@/components/home/OurGraduations";
import PortfolioHomeThree from "@/components/portfolio/PortfolioHomeThree";
import SearchSection from "@/components/home/SearchSection";
import HeroHomeThree from "@/components/hero/HeroHomeThree";
import CoursesSection from "@/components/home/CoursesSection";
import WebStories from "@/components/home/WebStories";
import HeroHome from "@/components/hero/HeroHome";
import KnowledgeSection from "@/components/home/KnowledgeSection";
import VideoSwiper from "@/components/swiper/VideoSwiper"

// export const metadata = {
//   title: "Vixan - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <HeroHomeOne /> */}
            <HeroHome />
            <KnowledgeSection />
            <SearchSection />
            <WebStories />
            {/* numbers */}
            <FunFactHomeOne />
            {/* <SearchSection /> */}
            <MarqueeAreaHomeOne />
            <CoursesSection />
            <VideoSwiper />
            <ProgramSection />
            <AwardsHomeOne />
            <HeroHomeThree />
            <CampusLife />
            <OurGraduations />
            <TestimonialSection />
            {/* <WhyUs /> */}
            {/* <VideoHomeOne setIsVideoOpen={setIsVideoOpen} /> */}
            <BlogHomeTwo />
            {/* <BrandHomeOne style_2={false} /> */}
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"2aEr0X5NHOI"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
