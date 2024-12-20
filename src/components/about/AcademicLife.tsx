import React from "react";
import { FaTools, FaBriefcase, FaUserGraduate, FaCalculator, FaLaptop, FaChalkboardTeacher} from "react-icons/fa"; 
import { GiDiploma } from 'react-icons/gi';

interface DataType {
  subtitle: string;
  title: string;
  des: string;
  boxtitle: string;
  box_des_1: string;
  box_des_2: string;
  features: {
    id: number;
    title: string;
    des_1: string;
    des_2: string;
    icon: JSX.Element;
  }[];
  subtitle_2: string;
  title_2: string;
}

const feature_data: DataType = {
  subtitle: `Features`,
  title: `Academic Life`,
  des: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools.`,
  boxtitle: `Unique Design`,
  box_des_1: `Award Winning Quality`,
  box_des_2: `Digital of the day Mobile app excellence`,
  features: [
    {
        id: 1,
        title: `Department of Engineering`,
        des_1: `Innovative approaches in engineering.`,
        des_2: `Preparing future engineers.`,
        icon: <FaTools />,
      },
      {
        id: 2,
        title: `Department of Business Studies`,
        des_1: `Comprehensive business education.`,
        des_2: `Equipping students for success.`,
        icon: <FaBriefcase />,
      },
      {
        id: 3,
        title: `Department of Social Science`,
        des_1: `Understanding society and human behavior.`,
        des_2: `Empowering critical thinkers.`,
        icon: <FaUserGraduate />,
      },
      {
        id: 4,
        title: `Department of Accounting`,
        des_1: `Mastering financial principles.`,
        des_2: `Building future accountants.`,
        icon: <FaCalculator />,
      },
      {
        id: 5,
        title: `Department of IT`,
        des_1: `Advancements in technology.`,
        des_2: `Training IT professionals.`,
        icon: <FaLaptop />,
      },
      {
        id: 6,
        title: `Department of Education & Training`,
        des_1: `Educators for the future.`,
        des_2: `Fostering learning environments.`,
        icon: <FaChalkboardTeacher />,
      },
      {
        id: 7,
        title: `Department of Advanced Certifications`,
        des_1: `Specialized certification programs.`,
        des_2: `Enhancing career prospects.`,
        icon: <GiDiploma />,
      },
  ],
  subtitle_2: `Why Choose Us`,
  title_2: `Maximizing Your Online Presence Digital Marketing Mastery`,
};

const { subtitle, title, des, boxtitle, box_des_1, box_des_2, features, subtitle_2, title_2 } = feature_data;

const AcademicLife = ({ style_2 }: any) => {
  return (
    <>
      <section className={`cs_shape_wrap_3 ${style_2 ? "cs_gray_bg_20" : ""}`}>
        {style_2 ? <div className="cs_height_90 cs_height_lg_60"></div> : null}

        <div className="container">
          <div className={`row ${style_2 ? "flex-column flex-lg-row align-items-center" : ""}`}>
            <div className="col-lg-12 col-12">
              <div className="cs_section_heading cs_style_1 text-center">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">{style_2 ? title_2 : title}</h2>
                </div>
              </div>
              <div className="cs_height_70"></div>

              <div className="row justify-content-center">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center mb-4`}
                  >
                    {/* <div className="icon mb-3" style={{ fontSize: "20px" }}>
                      {feature.icon}
                    </div>
                    <h6>{feature.title}</h6>
                    <div className="d-flex align-items-center">
                      <div className="cs_hr"></div>
                      <p className="cs_font_16 cs_normal cs_mp0 text-nowrap">{feature.des_1}</p>
                    </div>
                    <p className="cs_font_16 cs_mp0">{feature.des_2}</p> */}

                    <div className="cs_startup_agency cs_card cs_mr_left d-flex flex-column align-items-center text-center academic-life-custom-h">
                    <div className="icon mb-3" style={{ fontSize: "40px" }}>
                      {feature.icon}
                    </div>
                  <h6>{feature.title}</h6>
                  <div className="d-flex align-items-center">
                
                    <p className="cs_font_16 cs_normal cs_mp0">
                    {feature.des_1}
                    </p>
                  </div>
        
                </div>


                  </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_60"></div>
     
      </section>
    </>
  );
};

export default AcademicLife;
