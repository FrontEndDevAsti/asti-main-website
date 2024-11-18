import React from "react";
import Story from "@/components/story/Story";
import Image from "next/image";

interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Web Stories",
  description: `Welcome to our digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you lione evolving world of digita`,
  features: [
    `Design Welcome to our digital agency!`,
    `Dev online. From website design`,
    `Implementation evolving world of digital to driv`,
    `Launch growth and reach your goals.`,
  ],
};
const { title, description, features } = hero_contact;

const WebStories = () => {
  return (
    <>
      <div className="cs_height_60 cs_height_lg_20"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_20"></div>
          <div className="cs_service_details custom-gap">
            {/* <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div> */}
            <Story />
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
              </div>
           
                <div className="row">
                  <div className="column col-6">
                    <div className="image-wrapper">
                      <Image
                        src="/assets/images/dummy.webp" 
                        alt="Image 1"
                        width={200}
                        height={200}
                        layout="responsive"
                        className="image"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src="/assets/images/dummy.webp"
                        alt="Image 2"
                        width={200}
                        height={200}
                        layout="responsive"
                        className="image"
                      />
                    </div>
                  </div>
                  {/* <div className="row col-6 justify-content-center align-items-center">
                    <div className="image-wrapper">
                      <Image
                        src="/assets/images/dummy.webp"
                        alt="Image 3"
                        width={200}
                        height={200}
                        layout="responsive"
                        className="image"
                      />
                    </div>
                  </div> */}
                </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebStories;
