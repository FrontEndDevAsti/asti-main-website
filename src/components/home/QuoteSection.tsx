import React from "react";
import Image from "next/image";
import banner_img from "@/assets/images/chr.webp";
import sign_img from "@/assets/images/chairman-sign.jpeg";

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Message From The Chairman",
  description: `The institution holds firm to the belief that each of us makes an astonishing difference!   Indeed, astonishing differences are just what institutions are about; we bring richness and value to the communities we serve by providing access to higher education to a diverse student body and Al Shabaka Technical Institutional Academy is no exception. Deeply rooted in a commitment to student success, equity, and life-long learning, Al Shabaka Technical Institutional Academy is an institution in which our students thrive because we are intentional and purposeful in creating a learning environment focused on their evolution as learners and citizens of the Human Community. This   institution believes deeply that every student who comes here is entitled to an  educational experience grounded in excellence, and that is what you will find  in  our  classrooms, in our offices, in   our services, in   our  programs, and in the way we treat our students and community. We continue to be grateful to the UAE Government, Ministry of Education, Government of Dubai, and Knowledge and Human Development Authority, who supported the guidance of Al Shabaka Technical  Institutional Academy.  We hope to make a difference in your life, and I challenge them to make a difference at Al Shabaka Technical Institutional Academy, community, region, and thus the planet we live on while they are here with us.`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
};
const { title, description, features } = hero_contact;

const QuoteSection = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text text-center">
              <h2 className="cs_section_title anim_heading_title">{title}</h2>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image
                  src={banner_img}
                  alt="service_details_banner"
                  height={"700"}
                />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <Image src={sign_img} alt="alt" width={"150"} height={"63"} />
                {/* <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteSection;
