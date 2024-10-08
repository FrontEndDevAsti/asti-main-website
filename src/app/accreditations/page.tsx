"use client";

import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import VocationalEducation from "@/components/about/VocationalEducation";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

// export const metadata = {
//   title: "About Vixan - Digital  Creative Agency Next js Template",
// };

interface DataType {
  id: number;
  title: string;
  description: string;
  link: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: "Engineering Programs",
    description:
      "Welcome to our digital agency We specialize in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
    link: "/engineering-programs",
  },
  {
    id: 2,
    title: "Business Programs",
    description:
      "Welcome to our digital agency We specialize in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
    link: "/business-programs",
  },
];

const accreditationData = [
  {
    id: 1,
    title: "ofqual",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB). This accreditation provides an international seal of approval for business programmes that ensures the educational needs of students are met through high quality, continuous improvement and excellence in education. This globally recognised accreditation has been awarded to only the top five percent of the world’s business schools.",
    logo: "/assets/images/acc-01.png",
  },
  {
    id: 2,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-06.png",
  },
  {
    id: 3,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-08.png",
  },
  {
    id: 4,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-07.png",
  },
  {
    id: 5,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-04.png",
  },
  {
    id: 6,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-03.png",
  },
  {
    id: 7,
    title: "Association to Advance Collegiate Schools of Business",
    description:
      "All business programs of the University of Wollongong are accredited by The Association to Advance Collegiate Schools of Business (AACSB)...",
    logo: "/assets/images/acc-05.png",
  },
];

const index = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id: any) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
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
                          Accreditations
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="cs_height_60 cs_height_lg_60"></div>

              {/* desc sec */}
              <section>
                <div className="container">
                  <div className="cs_portfolio_details">
                    <div className="anim_div_ShowDowns">
                      <div className="cs_img_show_text cs_text_style_1">
                        <p className="cs_text_style_body">
                          Welcome to our digital agency! We specialize in
                          helping businesses like yours succeed online. From
                          website design and development to digital marketing
                          and adver tising, we have the tools and expertise to
                          elevate your online presence. Welcome to our digital
                          agency! We specialize in helping businesses like yours
                          online. From website design and development to digital
                          marketing and advertising, we have the tools and
                          expertise to elevate your online presence. Welcome to
                          our digital agency! We specialize in helping
                          businesses like yours succeed online.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* accrd card sec */}
              <section>
                <div className="container">
                  <div className="row">
                    {accreditationData.map((item, index) => (
                      <div
                        key={item.id}
                        className={`col-lg-${
                          index === 2 || index === 3 || index === 4 ? "4" : "6"
                        } accreditationCard my-2`}
                        onClick={() => openModal(item.id)}
                      >
                        <div className="card text-center p-4">
                          <img
                            src={item.logo}
                            alt={item.title}
                            className="img-fluid mx-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* courses sec */}
              
              <section className="position-relative">
              <div className="cs_height_60 cs_height_lg_60"></div>
                <div className="container">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text text-center">
                      <h2 className="cs_section_title anim_word_writting">
                        Our Courses
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_20 cs_height_lg_60"></div>
                  <div className="cs_card_1_list">
                    {banner_data.map((item, i) => (
                      <div
                        key={i}
                        className="cs_card cs_style_1 anim_div_ShowDowns"
                      >
                        <div className="cs_card_left">
                          <div
                            className="cs_card_number cs_primary_font"
                            style={{
                              backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                            }}
                          >
                            0{i + 1}
                          </div>
                        </div>
                        <div className="cs_card_right">
                          <div className="cs_card_right_in">
                            <h2 className="cs_card_title">
                              <Link href={item.link}>{item.title}</Link>
                            </h2>
                            <div className="cs_card_subtitle">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <div className="cs_card_link_wrap">
                          <Link href={item.link} className="cs_card_link">
                            <span>
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span>
                              <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* cta sec */}
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
                      <div className="cs_section_heading_right cs_btn_anim">
                        <Link href="/contact" className="cs_btn cs_style_1">
                          <span>Contact Us</span>
                          <svg
                            width="19"
                            height="13"
                            viewBox="0 0 19 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038
                    11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <FooterOne />
          </div>
        </div>
      </Wrapper>

      {/* Modal Implementation */}
      {accreditationData.map((item) => (
        <div
          key={item.id}
          className={`modal fade ${
            activeModal === item.id ? "show d-block" : ""
          } custom-top-25 px-md-5`}
          //   tabIndex="-1"
          role="dialog"
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{item.title}</h5>
                <button
                  type="button"
                  className="mod-close-icon"
                  onClick={closeModal}
                >
                  <IoClose className="close-icon-size" />
                </button>
              </div>
              <div className="modal-body d-flex align-items-center flex-column flex-md-row">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="img-fluid mx-4"
                  style={{ width: "150px" }}
                />
                <p className="px-4">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
