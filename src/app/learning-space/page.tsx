"use client";

import React, { useState } from "react";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Image from "next/image";
import Link from "next/link";
import service_slider_1 from "@/assets/img/service_slider_1.jpg";
import service_slider_2 from "@/assets/img/service_slider_2.jpg";
import blog_data from "@/data/blog_data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// export const metadata = {
//   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// };

interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: `What is the design process for branding?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
  {
    id: "Two",
    question: `What services does your agency offer?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
  {
    id: "Three",
    question: `How do you approach a new project?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
  {
    id: "Four",
    question: `How do you handle revisions or changes to a project?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
  {
    id: "Five",
    question: `How do you determine pricing for your services?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
  {
    id: "Six",
    question: `Do you offer any long-term support or maintenance for your projects?`,
    ans: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse quences lalin karar or one avoids a pain that produces no resultant pleasure.`,
  },
];
interface DataType_2 {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType_2[] = [
  {
    id: "one",
    title: "Interactive Tools",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: "Two",
    title: "Assignment Center",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: "Three",
    title: "Discussion Boards",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
  {
    id: "Four",
    title: "Study Groups",
    description: `Welcome to our digital agency We specialize in helping your business most`,
  },
];

interface DataType3 {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType3 = {
  title: "Virtual Classrooms",
  description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digita`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
};
const { title, description, features } = hero_contact;

const index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
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
                        Learning Space
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* virtual sec */}
            <div className="cs_height_60 cs_height_lg_20"></div>
            <section>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text text-center">
                    <h2 className="cs_section_title anim_text_writting">
                      {title}
                    </h2>
                  </div>
                </div>
                <div className="cs_height_60 cs_height_lg_20"></div>
                <div className="cs_service_details">
                  <div className="cs_service_details_img">
                    <div className="cs_style_img">
                      <video
                        autoPlay
                        muted
                        loop
                        controls={false}
                        style={{ width: "100%", height: "auto" }}
                      >
                        <source
                          src="../../assets/videos/promo.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className="cs_service_details_text">
                    <div className="cs_service_details_p">
                      <p className="anim_text">{description}</p>
                      <ul className="anim_div_ShowDowns">
                        {features.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* space sec */}
            <section>
              <div className="cs_height_60 cs_height_lg_20"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text text-center">
                    <h2 className="cs_section_title anim_text_writting mb-2">
                      What make our Learning Space Distinct
                    </h2>
                    <p className="cs_mp0 anim_text">
                      Welcome to our digital agency! We specialize in helping
                      businesses like yours succeed online. From website design
                      and development to digital marketing and advertising, we
                      have the tools and expertise to elevate your online
                      presence.
                    </p>
                  </div>
                </div>
                <div className="cs_height_60 cs_height_lg_40"></div>
                <div>
                  <div className="cs_work cs_work_1">
                    <div className="cs_card_work cs_style_1 custom-justify-learning-space">
                      {service_data.map((item, i) => (
                        <div
                          key={i}
                          className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide"
                        >
                          <div className="cs_card cs_style_1">
                            <div className="cs_posagation">
                              <div className="cs_work_style_1"></div>
                              <div className="cs_work_style_2"></div>
                            </div>
                            <div className="cs_stroke_number">
                              <span>{item.id}</span>
                            </div>
                          </div>

                          <h6 className="cs_work_title">{item.title}</h6>
                          <p className="cs_work_subtitle">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2 img */}
            <div className="cs_height_60 cs_height_lg_20"></div>
            <div className="container">
              <div className="d-flex gap-2 gap-md-5">
                <div>
                  <Image src={service_slider_1} alt="image-here" />
                </div>
                <div>
                  <Image src={service_slider_2} alt="image-here" />
                </div>
              </div>
            </div>

            {/* announcement */}
            <div className="cs_height_60 cs_height_lg_20"></div>
            <section>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text text-center">
                    <h2 className="cs_section_title anim_text_writting">
                      Announcements
                    </h2>
                  </div>
                </div>
                <div className="cs_height_40 cs_height_lg_20"></div>
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={true}
                  spaceBetween={30}
                  slidesPerView="auto"
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true,
                  }}
                  className="cs_slider cs_slider_3 cs_row_slider cs_vw_none anim_blog"
                >
                  {blog_data.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="cs_post cs_style_1">
                        <Link href="/blog-details" className="cs_post_thumb">
                          <Image src={item.img} alt="Thumb" />
                        </Link>
                        <div className="cs_post_info">
                          <h2 className="cs_post_title">
                            <Link href="/blog-details">{item.title}</Link>
                          </h2>
                          <p className="cs_m0">{item.des}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>

            {/* faq */}
            <div className="cs_height_60 cs_height_lg_20"></div>

            <div className="container">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text text-center">
                  <div className="mb-3 anim_text_writting">FAQ</div>
                  <h2 className="cs_section_title anim_text_writting">
                    Frequently Asked Questions
                  </h2>
                </div>
              </div>
            </div>

            <div className="cs_height_60 cs_height_lg_20"></div>

            <div className="container">
              <div className="cs_accordeon anim_div_ShowDowns">
                {faq_data.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => toggleAccordion(i)}
                    className={`cs_accordion_item cs_color_1 ${
                      i === activeIndex ? "active cs_icon" : ""
                    }`}
                  >
                    <div className="cs_accordion_header">
                      <p
                        className="cs_accordion_title cs_m0"
                        id={`heading${item.id}`}
                      >
                        {item.question}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        width="30"
                        style={{
                          transform:
                            i === activeIndex ? "rotate(-90deg)" : "none",
                        }}
                      >
                        <path
                          style={{ fill: `#ffffff` }}
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </div>

                    <div
                      className={`cs_accordion_body ${
                        i === activeIndex ? "" : "d-none"
                      }`}
                    >
                      {item.ans}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* resource hub */}
            <section>
              <div className="container">
                <div className="cs_learning_project">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_heading_title">
                        Resource Hub
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
  );
};

export default index;
