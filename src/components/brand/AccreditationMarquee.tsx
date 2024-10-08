'use client'
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';


type DataType = StaticImageData[];
import brand_img_1 from "@/assets/images/acc-01.png"
import brand_img_2 from "@/assets/images/acc-02.png"
import brand_img_3 from "@/assets/images/acc-03.png"
import brand_img_4 from "@/assets/images/acc-04.png"
import brand_img_5 from "@/assets/images/acc-05.png"
import brand_img_6 from "@/assets/images/acc-06.png"
import brand_img_7 from "@/assets/images/acc-07.png"
import brand_img_8 from "@/assets/images/acc-08.png"
const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,

]

import brand_thumb_1 from "@/assets/img/partner_9.svg"
import brand_thumb_2 from "@/assets/img/partner_10.svg"
import brand_thumb_3 from "@/assets/img/partner_11.svg"
import brand_thumb_4 from "@/assets/img/partner_12.svg"
import brand_thumb_5 from "@/assets/img/partner_13.svg"
import brand_thumb_6 from "@/assets/img/partner_14.svg"
import brand_thumb_7 from "@/assets/img/partner_15.svg"
import brand_thumb_8 from "@/assets/img/partner_1.svg"
import brand_thumb_9 from "@/assets/img/partner_3.svg"


const brand_thumb_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
]


const AccreditationMarquee = ({ style_2 }: any) => {
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if we are on the /about page using the window object
      setIsAboutPage(window.location.pathname === '/about');
    }
  }, []);
  return (
    <> 
      
 

      {/* <div className="cs_height_145 cs_height_lg_60"></div> */}
      {isAboutPage && (
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_heading_title">
              Our Recognition & Accreditation
              </h2>
            </div>
          </div>
        </div>
      )}
      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push custom-tr-bg">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cs_height_45 cs_height_lg_45"></div> */}
      {/* <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) =>
                <div key={i} className="cs_partner_logo">
                  <Image src={item} alt="image-here" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      {/* {style_2 ? null :
        <div className="cs_height_140 cs_height_lg_70"></div>
      } */}
      {/* <div className="cs_height_140 cs_height_lg_70"></div> */}
    </>
  );
};

export default AccreditationMarquee;