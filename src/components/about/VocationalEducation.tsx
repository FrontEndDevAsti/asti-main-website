import Link from "next/link";
import React from "react";

const questionsAndAnswers = [
  {
    question: "Academic Enrichment Programme (AEP)",
    answers: [
      "A series of sessions arranged by lecturers to inform students about aspects of study skills relevant to their course.",
      "Online drop-in support for any aspect of study skills and non-subject specific academic advice.",
      "Individual virtual appointments to support students with their studies.",
    ],
  },
  {
    question: "Learning Disability Support",
    answers: [
      "Confidential 1:1 appointments with a learning support counsellor in order to develop a plan to enable students with learning differences to manage their studies as independent learners.",
      "Advice about sheltered exam arrangements.",
    ],
  },
  // Add more questions and answers as needed
];

const VocationalEducation = () => {
  return (
    <div className="container mt-5">
      {questionsAndAnswers.map((item, index) => (
        <div
          key={index}
          className="mb-4 border rounded p-4 shadow-sm bg-light"
        >
          <h4>{item.question}</h4>
          <ul className="list-unstyled">
            {item.answers.map((answer, idx) => (
              <li key={idx} className="mb-2">
                <span>&gt;</span> {answer}
              </li>
            ))}
          </ul>
          <div className="cs_section_heading_right cs_btn_anim">
                  <Link href="/portfolio" className="cs_btn cs_style_1 cs_color_1">
                    <span className="black-col-imp">Find Out More</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="#000"></path>
                    </svg>
                  </Link>
                </div>
        </div>
      ))}
    </div>
  );
};

export default VocationalEducation;
