import React from "react";

interface QADetails {
  id: number;
  title: string;
  content: string;
}

const qaDetails: QADetails[] = [
  {
    id: 1,
    title: "Study in the heart of Birmingham",
    content:
      "We're committed to developing graduates with the skills employers need. Studying in the heart of the UK's second city means you'll have unique opportunities to get involved with industry.",
  },
  {
    id: 2,
    title: "Over £400 million invested in our campuses",
    content:
      "We've invested over £400 million in industry-standard, state-of-the-art facilities to ensure you have the best possible environment for practice-based learning.",
  },
  {
    id: 3,
    title: "Earn while you learn - jobs on campus",
    content:
      "Our student employment agency allows you to apply for paid roles at the University, gaining experience in crucial aspects of job applications and valuable feedback on your work.",
  },
  {
    id: 4,
    title: "Work experience and placements",
    content:
      "You'll have the chance to gain industry and professional practice experience through work placements and years abroad. We work with companies like Microsoft, Jaguar Land Rover and Sky UK.",
  },
  {
    id: 5,
    title: "Scholarships",
    content:
      "We want all our students to achieve their full potential. With our two scholarship schemes, you could receive extra funding and support to kick start your BCU journey.",
  },
];

const QACoursePage: React.FC = () => {
  return (
    <div className="container">
      <div className="cs_section_heading cs_style_1 cs_type_1">
        <div className="cs_section_heading_text">
          <h2 className="cs_section_title anim_text_writting">
            Is UAE Right For Me ?
          </h2>
        </div>
      </div>
      <p className="text-center">Here's our top reasons to choose UAE.</p>
      <div className="row justify-content-center  anim_div_ShowDowns">
        {qaDetails.map((qa) => (
          <div key={qa.id} className={`col-12 col-md-10 col-lg-8`}>
            <div className="card shadow-sm rounded-0">
              <div
                className={`card-body ${
                  qa.id % 2 === 0 ? "bg-light-grey" : ""
                }`}
              >
                <h5 className="card-title">
                  {qa.id}. {qa.title}
                </h5>
                <p className="card-text">{qa.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button type="submit" className="cs_btn cs_style_1 cs_type_btn">
          <span>More Reasons</span>
        </button>
      </div>
      <div className="cs_height_60 cs_height_lg_20"></div>
    </div>
  );
};

export default QACoursePage;
