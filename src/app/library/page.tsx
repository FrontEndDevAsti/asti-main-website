"use client";
import React, { useState } from "react";
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";
import Image, { StaticImageData } from "next/image";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import image from "@/assets/img/modern_digital_need.jpg";
import MaterialCard from "@/components/cards/MaterialCard";

interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}
[];

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: `Dribbbble`,
    title: `Academic textbook collection`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: `Envato`,
    title: `Electronic journals`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: `Awwward`,
    title: `Resource guides`,
    des: `Welcome to our digital agency We specialize in helping business most like yours succeed online. From website design.`,
  },
];

interface DataType2 {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType2[] = [
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

interface DataType3 {
  title_1: string;
  des_1: string;
  title_2: string;
  des_2: string;
  features: {
    id: number;
    title: string;
    des: string;
  }[];
}

const innovative_data: DataType3 = {
  title_1: `Innovative Solutions for Modern Digital Needs`,
  des_1: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising,`,
  title_2: `Creating a Strong Brand Identity`,
  des_2: `Welcome to our digital agency! We spec ialize in helping businesses like yours succeed Well come to our digital agency`,
  features: [
    {
      id: 1,
      title: `Video Lectures & Tutorials`,
      des: `Digital of the day Mobile app excellence`,
    },
    {
      id: 2,
      title: `Webinars & Workshops`,
      des: `Digital of the day Mobile app excellence`,
    },
    {
      id: 3,
      title: `Career Guides`,
      des: `Digital of the day Mobile app excellence`,
    },
  ],
};

const { title_1, des_1, title_2, des_2, features } = innovative_data;

const index = ({ style_2 }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

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
                        Library
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>

         
              <MaterialCard />
      

            {/* facilites sec */}
            <div className="cs_height_60 cs_height_lg_20"></div>
            <section>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title anim_heading_title">
                      Our Facilities
                    </h2>
                  </div>
                </div>
                <div className="cs_height_100 cs_height_lg_60"></div>
                <div className="cs_card_2_list">
                  {award_data.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => handleMouseEnter(i)}
                      className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${
                        activeTab === i ? "active" : ""
                      }`}
                    >
                      <div className="cs_card_left">
                        <div className="cs_card_logo">
                          <Image src={item.ward_img} alt="Award" />
                        </div>
                        <div>
                          <h2 className="cs_card_title">{item.title}</h2>
                          <div className="cs_card_subtitle">{item.des}</div>
                        </div>
                      </div>
                      <div className="cs_card_right">
                        <h2 className="cs_card_brand">{item.brand}</h2>
                      </div>
                      <div className="cs_card_hover_img">
                        <Image src={item.img} alt="Thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="cs_height_145 cs_height_lg_60"></div>

            {/* 4 section together */}
            <div className="cs_height_150 cs_height_lg_60"></div>
            <section>
              <div className="container">
                <div className="cs_modern_needs cs_style">
                  <div className="cs_col_md_778">
                    <div className="cs_text">
                      <div className="cs_section_heading cs_style_1">
                        <div className="cs_section_heading_text">
                          <h2 className="cs_section_title anim_heading_title">
                            {title_1}
                          </h2>
                        </div>
                      </div>
                      <div className="cs_height_65"></div>
                      <p className="anim_text">{des_1}</p>
                    </div>
                    <div className="cs_height_85"></div>
                    <div className="row anim_div_ShowLeftSide">
                      {features.map((item, i) => (
                        <div className="col-md-4 col-12" key={i}>
                          <div className="cs_stroke_text">
                            <span>{item.id}</span>
                          </div>
                          <div className="text-section">
                            <h6>{item.title}</h6>
                            <p>{item.des}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="cs_col_md_672">
                    <div className="cs_img_section">
                      <Image src={image} alt="modern_digital_need" />
                      <div className="cs_img_card_text anim_div_ShowZoom">
                        <h6 className="cs_color_style">{title_2}</h6>
                        <p>{des_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="cs_height_60 cs_height_lg_20"></div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
