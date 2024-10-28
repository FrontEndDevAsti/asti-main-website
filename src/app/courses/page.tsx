"use client";
import SearchSection from "@/components/home/SearchSection";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import React from "react";
import banner_img from "@/assets/img/service_details_banner.jpg";
import Image from "next/image";
import CoursePageCard from "@/components/cards/CoursePageCard";
import { BiArrowToRight } from "react-icons/bi";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaLaptopCode,
  FaMoneyBill,
  FaWhatsapp,
} from "react-icons/fa";
import QACoursePage from "@/components/qa-coursepage/QACoursePage";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdArrowOutward, MdOutlineArrowForwardIos } from "react-icons/md";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const cardData = [
  {
    title: "Card 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:
      "https://cphfcrflaa.cloudimg.io/_bcuimages/expert-personal-statement-tips-main-131497911314454642.jpg?w=380&h=213&func=crop&gravity=smart&org_if_sml=1",
    link: "/anc",
  },
  {
    title: "Card 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:
      "https://cphfcrflaa.cloudimg.io/_bcuimages/expert-personal-statement-tips-main-131497911314454642.jpg?w=380&h=213&func=crop&gravity=smart&org_if_sml=1",
    link: "#",
  },
  {
    title: "Card 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image:
      "https://cphfcrflaa.cloudimg.io/_bcuimages/expert-personal-statement-tips-main-131497911314454642.jpg?w=380&h=213&func=crop&gravity=smart&org_if_sml=1",
    link: "#",
  },
];

const FoundationData = [
  {
    title: "Engineering",
    icon: <FaBuilding size={50} />,
    backgroundColor: "#31295B", // Replace with your color
    link: "#",
  },
  {
    title: "Business",
    icon: <FaBriefcase size={50} />,
    backgroundColor: "#ED1E79", // Replace with your color
    link: "#",
  },
  {
    title: "Hospitality & Tourism",
    icon: <FaMoneyBill size={50} />,
    backgroundColor: "#F68B1F", // Replace with your color
    link: "#",
  },
  {
    title: "Accountancy",
    icon: <FaLaptopCode size={50} />,
    backgroundColor: "#F05A24", // Replace with your color
    link: "#",
  },
];

const L4Data = [
  {
    title: "Engineering",
    icon: <FaBuilding size={50} />,
    backgroundColor: "#31295B", // Replace with your color
    link: "#",
  },
  {
    title: "Business",
    icon: <FaBriefcase size={50} />,
    backgroundColor: "#ED1E79", // Replace with your color
    link: "#",
  },
  {
    title: "Hospitality & Tourism",
    icon: <FaMoneyBill size={50} />,
    backgroundColor: "#F68B1F", // Replace with your color
    link: "#",
  },
  {
    title: "Accountancy",
    icon: <FaLaptopCode size={50} />,
    backgroundColor: "#F05A24", // Replace with your color
    link: "#",
  },
];

const ProfessionalCoursesData = [
  {
    title: "Artificial Intelligence",
    icon: <FaBuilding size={50} />,
    backgroundColor: "#31295B", // Replace with your color
    link: "#",
  },
  {
    title: "Digital Marketing",
    icon: <FaBriefcase size={50} />,
    backgroundColor: "#ED1E79", // Replace with your color
    link: "#",
  },
  {
    title: "Computer Networking",
    icon: <FaMoneyBill size={50} />,
    backgroundColor: "#F68B1F", // Replace with your color
    link: "#",
  },
  {
    title: "Safety Engineering",
    icon: <FaLaptopCode size={50} />,
    backgroundColor: "#F05A24", // Replace with your color
    link: "#",
  },
];

// Course Explore Card data
const courseExploreCardData = [
  {
    title: "School Of Engineering",
    letter: "E",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "School Of Business",
    letter: "B",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "School Of Social Science",
    letter: "S",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "School Of Accounting & Finance",
    letter: "A",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "School Of Education & Training",
    letter: "T",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "School Of Computing & IT",
    letter: "C",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
  {
    title: "Professional Specialized Programs",
    letter: "P",
    imgUrl: "/assets/images/lib-demo.jpeg",
    link: "/engineering",
  },
];

function page() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* HERO SEC */}
            <div className="cs_hero cs_style2 custom-h-accrdtn">
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{
                  backgroundImage: "url(/assets/img/design_banner.jpg)",
                }}
              ></div>

              <div className="container">
                <div className="cs_hero_text">
                  <div className="anim_banner_text_left">
                    <h1 className="cs_hero_title cs_hero_title_lg">Courses</h1>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH SEC */}
            <SearchSection />

            {/* FIND YOUR COURSE CARD SEC */}
            <div className="cs_height_60 cs_height_lg_20"></div>
            <div className="container">
              <h4 className="anim_heading_title text-center">
                Find your course and next steps
              </h4>
              <div className="row justify-content-center">
                {cardData.map((card, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
                    key={index}
                  >
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={card.image}
                        alt={`Card ${index + 1} image`}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.text}</p>
                        <button
                          onClick={() => (window.location.href = card.link)}
                          className="course-page-custom-card"
                        >
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs_height_60 cs_height_lg_20"></div>

            {/* ENTIRE COURSE SEC */}
            <section>
              <div className="cs_section_heading cs_style_1 cs_type_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_text_writting">
                    Our Programs
                  </h2>
                </div>
              </div>
              <div className="container">
                <div className="cs_height_100 cs_height_lg_60"></div>
                <div className="cs_service_details">
                  <div className="cs_service_details_img">
                    <div className="cs_style_img">
                      <Image src={banner_img} alt="service_details_banner" />
                    </div>
                  </div>
                  <div className="cs_service_details_text">
                    <h4 className="anim_heading_title">Undergraduate Study</h4>
                    <div className="cs_service_details_p">
                      <p className="anim_text">
                        Welcome to our digital agency! We specialize in helping
                        businesses like yours succeed online. From website
                        design and development to digital marketing and
                        advertising, we have the tools and expertise to elevate
                        your online presence. Let us help you lione evolving
                        world of digita
                      </p>
                    </div>
                    <div>
                      <a href="">
                        <u>Explore Undergraduate Study</u>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <h5 className="anim_heading_title">
                        Explore Level 3 Programs
                      </h5>
                    </div>
                    <div>
                      <div className="arrow arrw-right">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <CoursePageCard cardData={FoundationData} />
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="cs_height_60 cs_height_lg_20"></div>
                <div className="cs_service_details">
                  <div className="cs_service_details_text">
                    <h4 className="anim_heading_title">
                      Higher International Diploma Programs
                    </h4>
                    <div className="cs_service_details_p">
                      <p className="anim_text">
                        Welcome to our digital agency! We specialize in helping
                        businesses like yours succeed online. From website
                        design and development to digital marketing and
                        advertising, we have the tools and expertise to elevate
                        your online presence. Let us help you lione evolving
                        world of digita
                      </p>
                    </div>
                    <div>
                      <a href="">
                        <u>Explore Diploma Programs</u>
                      </a>
                    </div>
                  </div>
                  <div className="cs_service_details_img">
                    <div className="cs_style_img">
                      <Image src={banner_img} alt="service_details_banner" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-sm-12">
                    <CoursePageCard cardData={FoundationData} />
                  </div>
                  <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="pb-2">
                      <h5 className="anim_heading_title">
                        Explore Level 4 & 5 Programs
                      </h5>
                    </div>
                    <div>
                      <div className="arrow arrw-left">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="cs_height_60 cs_height_lg_20"></div>
                <div className="cs_service_details">
                  <div className="cs_service_details_img">
                    <div className="cs_style_img">
                      <Image src={banner_img} alt="service_details_banner" />
                    </div>
                  </div>
                  <div className="cs_service_details_text">
                    <h4 className="anim_heading_title">
                      Skill up your Career with Professional Qualifications
                    </h4>
                    <div className="cs_service_details_p">
                      <p className="anim_text">
                        Welcome to our digital agency! We specialize in helping
                        businesses like yours succeed online. From website
                        design and development to digital marketing and
                        advertising, we have the tools and expertise to elevate
                        your online presence. Let us help you lione evolving
                        world of digita
                      </p>
                    </div>
                    <div>
                      <a href="">
                        <u>Explore Professional Qualifications</u>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <h5 className="anim_heading_title">
                        Explore Professional Qualifications
                      </h5>
                    </div>
                    <div>
                      <div className="arrow arrw-right">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <CoursePageCard cardData={ProfessionalCoursesData} />
                  </div>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20"></div>
            </section>

            {/* HOVER CARD SEC */}
            <div className="container">
              <div className="row">
                {courseExploreCardData.map((card, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4 p-0">
                    <Link href={card.link}>
                      <div className="coursesExploreCardWrapper">
                        <div
                          className="coursesExploreCard coursesExploreHoverCard"
                          style={{ backgroundImage: `url(${card.imgUrl})` }}
                        >
                          <div className="coursesExploreTitleWrapper">
                            <h6 className="coursesExploreTitle">
                              {card.title}
                            </h6>
                          </div>
                        
                          <div className="coursesExploreHoverEffect">
                            <span className="coursesExploreLetter">
                              {card.letter}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="cs_height_60 cs_height_lg_20"></div>

            {/* QA SEC */}
            <QACoursePage />

            {/* VIDEO SEC */}
            <div className="container" style={{ backgroundColor: "#fbf5eb" }}>
              <div className="row d-flex align-items-center justify-content-center py-4">
                <h2 className="fw-bold">ASTI Learner Support</h2>
                <p>
                  We work with you to identify the best career-oriented programs
                  for you with personalized guidance and mentorship
                </p>
                <div className="col-lg-6">
                  <div className="course-page-vid-sec rounded-2">
                    {/* <ReactPlayer
              url="https://www.example.com/video.mp4" // Replace with actual video URL
              controls
              width="100%"
              height="100%"
            /> */}
                    <ReactPlayer
                      url="../../assets/videos/promo.mp4"
                      width="100%"
                      height="100%"
                      light="https://www.mdx.ac.ae/_next/image?url=https%3A%2F%2Fapi.mdx.ac.ae%2Fuploads%2Fhotpack_news_1_47226bdb1d.jpg&w=640&q=75"
                      controls={true} 
                    />
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="support-box p-4 shadow-sm bg-light">
                    <h5>Not sure which course to choose?</h5>
                    <p>
                      Talk to our academic advisor, we'll help you find the
                      right course
                    </p>
                    <button className=" rounded-pill w-100 my-2 py-2">
                      <FaWhatsapp /> +971 562192333
                    </button>
                    <button className="btn btn-success rounded-pill w-100 py-2">
                      BROWSE ALL PROGRAMS
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_60 cs_height_lg_20"></div>

            {/* HOW IT WORK SEC */}
            <section className="bg-black">
              <div className="container text-center py-5">
                <div className="cs_section_heading cs_style_1 cs_type_1 pb-4">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_text_writting text-white">
                      How it Works?
                    </h2>
                  </div>
                </div>

                <div className="pgm-works">
                  <div className="pgm-circles d-flex justify-content-center align-items-center">
                    <div className="pgmcircle text-white">1</div>
                    <div className="pgm-straight-line mx-2">
                      <MdOutlineArrowForwardIos />
                      <div className="dashed-line"></div>
                    </div>
                    <div className="pgmcircle text-white">2</div>
                    <div className="pgm-straight-line mx-2">
                      <MdOutlineArrowForwardIos />
                      <div className="dashed-line"></div>
                    </div>
                    <div className="pgmcircle text-white">3</div>
                  </div>

                  <div className="pgm-lne-text row justify-content-center mt-4 text-white">
                    <div className="col-md-3 text-center">
                      <p>Fill Application Electronically</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <p>Save Application Word Document</p>
                    </div>
                    <div className="col-md-3 text-center">
                      <p>Send to info@astiacademy.ac.ae</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="cs_height_60 cs_height_lg_20"></div>

            {/* BROCHURE SEC */}
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                {/* Left Column: Image */}
                <div className="col-md-2">
                  <img
                    src="https://cphfcrflaa.cloudimg.io/_bcuimages/csu2023314-ug-prospectus-2025-26v24web130224sophiemini-210x270-133600637966346612.jpg"
                    alt="Prospectus"
                    className="img-fluid"
                    style={{ borderRadius: "5px" }}
                  />
                </div>

                {/* Right Column: Content */}
                <div className="col-md-8">
                  <h5 className="mt-3 mt-md-0">Grab a Prospectus</h5>
                  <p className="anim_text">
                    If you want information on all of our courses - as well as
                    getting a feel for the wider University, our teaching and
                    facilities, and our fabulous home city - then take a look at
                    our prospectus. We have different versions for
                    undergraduates and postgraduates courses.
                  </p>
                  <button
                    type="submit"
                    className="cs_btn cs_style_1 cs_type_btn"
                  >
                    <span>Prospetus</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="cs_height_60 cs_height_lg_20"></div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

export default page;
