'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ImagePopup from '../modals/ImagePopup';
import portfolio_data from '@/data/portfolio_data';

const portfolio_content = {
  sub_title: "Portfolio",
  title: "Some Recent Project We Successfully Done",
}
const { sub_title, title } = portfolio_content

const PortfolioHomeThree = () => {


  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_data.slice(0, 5).map((item) => item.img.src);


  return (
    <>
      <section>
        <div className="cs_height_100 cs_height_lg_60"></div>
        <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Programs
              </div>
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Case Study We Successfully Done
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="project_successfull" id="animated-thumbnails-gallery">
            {portfolio_data.slice(0, 5).map((item, i) => (
              <a key={i}
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className={`cs_portfolio project_successfull_${i + 1} cs_style_1`}>
                <div className="cs_portfolio_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
                <div className="cs_portfolio_overlay"></div>
                <div className="cs_portfolio_info">
                  <h2 className="cs_portfolio_title">{item.title}</h2>
                  <div className="cs_portfolio_subtitle cs_color_1">
                    {item.des}
                  </div>
                </div>
              </a>
            ))}

          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>


      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  );
};

export default PortfolioHomeThree;