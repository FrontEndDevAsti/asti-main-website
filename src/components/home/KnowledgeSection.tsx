import React from "react";
// Adjust the path as needed

const ProgramsComponent: React.FC = () => {
  // Define your program data
  const programs = [
    {
      id: 1,
      title: "Middle Manager",
      description:
        "A middle-level professional looking to move up to senior management positions.",
    },
    {
      id: 2,
      title: "Senior Manager",
      description:
        "A seasoned professional who wishes to update their skills and knowledge to remain competitive in the evolving business world.",
    },
    {
      id: 3,
      title: "Career Switcher",
      description:
        "Professionals seeking a new industry or function, ready for a fresh challenge.",
    },
    {
      id: 4,
      title: "Working Parent",
      description:
        "A working parent aiming to climb the corporate ladder while managing their family commitments.",
    },
    {
      id: 5,
      title: "Future Entrepreneur",
      description:
        "An individual aiming to acquire the necessary business acumen to start their own venture.",
    },
    {
      id: 6,
      title: "Aspiring Graduate",
      description:
        "College dropouts ready to complete their degree and accelerate their career.",
    },
  ];

  return (
    <>
      <div className="cs_height_60 cs_height_lg_20"></div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cs_section_heading cs_style_1 cs_type_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_text_writting">
                    Career Advancements
                  </h2>
                </div>
              </div>
              <div className="cs_height_60 cs_height_lg_20"></div>
            </div>

            <div className="col-lg-4 no-tab anim_text">
              {programs.slice(0, 3).map((program) => (
                <div className="sec-wrap" key={program.id}>
                  <div className="circle">{program.id}</div>
                  <div className="sub">
                    <h4>{program.title}</h4>
                    <p>{program.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4 order no-tab">
              <div className="img-wrap">
                <img
                  src="https://www.learnersuae.com/wp-content/uploads/2024/03/hero-4cf15eb5.png"
                  alt="Hero Image"
                />
              </div>
            </div>

            <div className="col-lg-4 no-tab anim_text">
              {programs.slice(3).map((program) => (
                <div className="sec-wrap" key={program.id}>
                  <div className="circle">{program.id}</div>
                  <div className="sub">
                    <h4>{program.title}</h4>
                    <p className="">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsComponent;
