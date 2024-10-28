"use client";

import React, { useState } from "react";

interface DataType {
  faq_data: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const service_faq_content: DataType = {
  faq_data: [
    {
      id: "One",
      question: `Scholarships and Financial Aid`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
    {
      id: "Two",
      question: `Student Support Department`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
    {
      id: "Three",
      question: ` Workshops and Training`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
    {
      id: "Four",
      question: `Visa Facilities and Accommodation`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
    {
      id: "Five",
      question: `Placements & Training`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
    {
      id: "Six",
      question: `Internships`,
      answer: `Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which and pain can procure him some great pleasure...`,
    },
  ],
};

const { faq_data } = service_faq_content;

const StudentSupport = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <div className="cs_section_heading_text">
            <h2 className="cs_section_title anim_heading_title">
              Student Support
            </h2>
          </div>
        </div>
        <div className="cs_height_70"></div>

        <div className="cs_service_details cs_type_2">
          <div className="row">
            {/* First column */}
            <div className="col-lg-6">
              <div className="cs_accordeon custom-wdith-faq">
                {faq_data.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    onClick={() => toggleAccordion(i)}
                    className={`cs_accordion_item ${
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
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second column */}
            <div className="col-lg-6">
              <div className="cs_accordeon custom-wdith-faq">
                {faq_data.slice(3).map((item, i) => (
                  <div
                    key={i + 3} // Adjust index for the second column
                    onClick={() => toggleAccordion(i + 3)}
                    className={`cs_accordion_item ${
                      i + 3 === activeIndex ? "active cs_icon" : ""
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
                            i + 3 === activeIndex ? "rotate(-90deg)" : "none",
                        }}
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </div>

                    <div
                      className={`cs_accordion_body ${
                        i + 3 === activeIndex ? "" : "d-none"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_70"></div>
    </>
  );
};

export default StudentSupport;
