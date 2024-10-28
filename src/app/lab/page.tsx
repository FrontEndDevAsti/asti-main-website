"use client";
import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Image from "next/image";
import lab_facilities from "@/data/lab_facilities";
import Link from "next/link";
import { AiOutlineCalendar, AiOutlineTool } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import LabPgmCard from "@/components/cards/LabPgmCard";
import { IoClose } from "react-icons/io5";

// export const metadata = {
//   title: "Team Vixan - Digital  Creative Agency Next js Template",
// };

interface DataType {
  features: {
    id: number;
    title: string;
    des_1: string;
    icon: JSX.Element;
  }[];
}

const feature_data: DataType = {
  features: [
    {
      id: 1,
      title: `Lab Schedules & Reservations`,
      des_1: `Innovative approaches in engineering.`,
      icon: <AiOutlineCalendar />,
    },
    {
      id: 2,
      title: `Safety Protocols`,
      des_1: `Comprehensive business education.`,
      icon: <MdSecurity />,
    },
    {
      id: 3,
      title: `Lab Resources & Materials`,
      des_1: `Understanding society and human behavior.`,
      icon: <AiOutlineTool />,
    },
    {
      id: 4,
      title: `Instructor & Technician Support`,
      des_1: `Mastering financial principles.`,
      icon: <FaChalkboardTeacher />,
    },
  ],
};

interface ProgramsDataType {
  id: number;
  title: string;
  description: string;
  bgImg: string;
  homeImg: string;
}

const programsData: ProgramsDataType[] = [
  {
    id: 1,
    title: "Automotive Engineering Lab",
    description:
      "The Automotive Engineering Lab is equipped with cutting-edge technology to research and develop advancements in automotive design and mechanics.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 2,
    title: "Electrical Engineering Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 3,
    title: "Computer Science Lab",
    description:
      "The Computer Science Lab focuses on software development, data science, and AI research with modern workstations.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 4,
    title: "Mechanical Engineering Lab",
    description:
      "Students explore thermodynamics, fluid mechanics, and materials science using advanced simulation tools in this lab.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 5,
    title: "Civil Engineering & Architectural Lab",
    description:
      "Focused on structural analysis and architectural design, this lab helps students bridge the gap between theory and practice.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 6,
    title: "Welding Technology Lab",
    description:
      "The Welding Technology Lab provides practical training in welding processes, metallurgical principles, and fabrication techniques.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 7,
    title: "HVAC Engineering Lab",
    description:
      "This lab offers students an understanding of heating, ventilation, and air conditioning systems through hands-on projects.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 8,
    title: "Safety Engineering Lab",
    description:
      "The Safety Engineering Lab focuses on occupational safety and hazard prevention, ensuring a safer industrial environment.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 9,
    title: "Electrical Vehicle Engineering Lab",
    description:
      "This lab explores electric vehicle technology, including battery management systems and power electronics.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
  {
    id: 10,
    title: "Piping and Plumbing Engineering Lab",
    description:
      "Hands-on experience in fluid dynamics and plumbing systems design is gained in this well-equipped engineering lab.",
    bgImg: "/assets/images/lab.jpg",
    homeImg: "/assets/images/lab.jpg",
  },
];

const { features } = feature_data;

const index = ({ style_2 }: any) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (id: number) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Wrapper>
        <HeaderOne />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              {/* hero sec */}
              <section>
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
                        <h1 className="cs_hero_title cs_hero_title_lg">
                          Library
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* advanced labs */}
              <div className="container">
                {/* Card Layout */}
                <div className="cs_height_150 cs_height_lg_60"></div>

                <div className="row justify-content-center">
                  {programsData.map((program) => (
                    <>
                      <div className="col-md-4" key={program.id}>
                        <div
                          className="card mb-4 text-center"
                          style={{
                            backgroundImage: `url(${program.bgImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "300px",
                            cursor: "pointer",
                          }}
                          onClick={() => openModal(program.id)}
                        >
                          <div className="card-body d-flex align-items-center justify-content-center">
                            <h5 className="text-white">{program.title}</h5>
                          </div>
                        </div>
                      </div>

                      {/* <div key={program.id} className="cs_team_img col-md-4">
                       
                          <Image src={program.bgImg} width={100} height={200} alt="teamsimg5" />
                          <div className="cs_portfolio_overlay"></div>
                       
                        <div className="cs_team_text">
                        <div className="card-body d-flex align-items-center justify-content-center">
                            <h5 className="text-white">{program.title}</h5>
                          </div>
                        </div>
                      </div> */}
                    </>
                  ))}
                </div>
              </div>
              {/* facilities sec */}
              <div className="cs_height_60 cs_height_lg_20"></div>

              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_text_writting">
                      Our Facilities
                    </h2>
                  </div>
                </div>
              </div>

              <div className="cs_height_100 cs_height_lg_60"></div>
              <section>
                <div className="container">
                  <div className="cs_team_section anim_div_ShowDowns">
                    {lab_facilities.slice(0, 3).map((item, i) => (
                      <div key={i} className="cs_team_img">
                        <Link href="/team-details">
                          <Image src={item.img} alt="teamsimg1" />
                          <div className="cs_portfolio_overlay"></div>
                        </Link>

                        <div className="cs_team_text">
                          <Link href="/team-details">
                            <h6 className="cs_team_text_title">{item.title}</h6>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_team_section anim_div_ShowDowns">
                    {lab_facilities.slice(3, 7).map((item, i) => (
                      <div key={i} className="cs_team_img">
                        <Link href="/team-details">
                          <Image src={item.img} alt="teamsimg5" />
                          <div className="cs_portfolio_overlay"></div>
                        </Link>
                        <div className="cs_team_text">
                          <Link href="/team-details">
                            <h6 className="cs_team_text_title">{item.title}</h6>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* button sec */}
              <section>
                <div className="container">
                  <div className="cs_learning_project">
                    <div className="cs_section_heading cs_style_1">
                      <div className="cs_section_heading_text">
                        <h3 className="cs_section_title_3 anim_heading_title">
                          We'd be interested in learning more about your
                          project.
                        </h3>
                      </div>
                      <div className="row">
                        <div className="cs_section_heading_right cs_btn_anim col-lg-6 col-md-12 mb-3 mb-lg-0">
                          <Link href="/contact" className="cs_btn cs_style_1">
                            <span>Talk with our Expert</span>
                          </Link>
                        </div>
                        <div className="cs_section_heading_right cs_btn_anim col-lg-6 col-md-12">
                          <Link href="/contact" className="cs_btn cs_style_1">
                            <span>Chat with our Alumni</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* lab shedules */}
              <section
                className={`cs_shape_wrap_3 ${style_2 ? "cs_gray_bg_20" : ""}`}
              >
                {style_2 ? (
                  <div className="cs_height_90 cs_height_lg_60"></div>
                ) : null}

                <div className="container">
                  <div
                    className={`row ${
                      style_2
                        ? "flex-column flex-lg-row align-items-center"
                        : ""
                    }`}
                  >
                    <div className="col-lg-12 col-12">
                      {/* <div className="cs_section_heading cs_style_1 text-center">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">fas</h2>
                </div>
              </div> */}
                      <div className="cs_height_70"></div>

                      <div className="row justify-content-center">
                        {features.map((feature, index) => (
                          <div
                            key={feature.id}
                            className={`col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center mb-4`}
                          >
                            <div className="cs_startup_agency cs_card cs_mr_left d-flex flex-column align-items-center text-center lab-shedule-custom-h">
                              <div
                                className="icon mb-3"
                                style={{ fontSize: "40px" }}
                              >
                                {feature.icon}
                              </div>
                              <h6>{feature.title}</h6>
                              {/* <div className="d-flex align-items-center">
                              <p className="cs_font_16 cs_normal cs_mp0">
                                {feature.des_1}
                              </p>
                            </div> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cs_height_150 cs_height_lg_60"></div>
              </section>
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>
      {/* Modals */}
      {programsData.map((program) => (
        <div
          key={program.id}
          className={`modal fade ${
            activeModal === program.id ? "show d-block" : ""
          } custom-top-25 px-md-5`}
          tabIndex={-1}
          role="dialog"
          // style={{
          //   display: activeModal === program.id ? "block" : "none",
          //   backgroundColor: "rgba(0,0,0,0.5)",
          // }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{program.title}</h5>
                <button
                  type="button"
                  className="mod-close-icon"
                  onClick={closeModal}
                >
                  <IoClose className="close-icon-size" />
                </button>
              </div>
              <div className="modal-body">
                <div className="row justify-content-center align-items-center">
                  <div className="row justify-content-center align-items-center">
                    <img
                      src={program.homeImg}
                      alt={program.title}
                      className="img-fluid w-50 h-50 mb-4"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-3">{program.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
