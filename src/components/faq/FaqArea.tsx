"use client";
import React, { useState } from "react";

interface DataType {
  id: string;
  question: string;
  ans: string;
}

interface FaqProps {
  title: string;
  faqData: DataType[];
}

const FaqArea = ({ title, faqData }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_120 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <h2>{title}</h2>
          </div>
        </div>
      </div>



      <div className="container">
        <div className="cs_accordeonn anim_div_ShowDowns">
          {faqData.map((item, i) => (
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
                    transform: i === activeIndex ? "rotate(-90deg)" : "none",
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
 
    </>
  );
};

export default FaqArea;
