'use client';
import React, { useState } from 'react';

import portfolio_img_1 from '@/assets/images/Automobile-Engineering-in-UAE.png';
import portfolio_img_2 from '@/assets/images/Business-Management-in-UAE.png';
import portfolio_img_3 from '@/assets/images/Civil-Engineering-in-UAE.png';
import portfolio_img_4 from '@/assets/images/EV-Engineering-in-UAE.png';
import portfolio_img_5 from '@/assets/images/Education&Training-in-UAE.png';
import portfolio_img_6 from '@/assets/images/Electrical&Electronics-Engineering-in-UAE.png';
import portfolio_img_7 from '@/assets/images/Hospitality&Tourism-Management-in-UAE.png';
import portfolio_img_8 from '@/assets/images/IT-Engineering-in-UAE.png';
import portfolio_img_9 from '@/assets/images/L3-Engineering-in-UAE.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  subtitle: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "UI Design",
    img: portfolio_img_1,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 2,
    category: "UX Design",
    img: portfolio_img_2,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 3,
    category: "Development",
    img: portfolio_img_3,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 4,
    category: "Finance",
    img: portfolio_img_4,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 5,
    category: "Finance",
    img: portfolio_img_5,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 6,
    category: "Development",
    img: portfolio_img_6,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 7,
    category: "UX Design",
    img: portfolio_img_7,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 8,
    category: "UI Design",
    img: portfolio_img_8,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
  {
    id: 9,
    category: "Development",
    img: portfolio_img_9,
    title: "Project Task Management",
    subtitle: "Digital Services / App Design",
  },
]



// data
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))]; 

const ProgramSection = () => {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data); 

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem); 
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };



  return (
    <>
    <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Programs
              </div>
              <h2 className="cs_section_title anim_heading_title">
              Trending Online Programs in ASTI Academy
              </h2>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_30"></div>
          <div className="row overflow-hidden">
            <div className="col-md-12">
              <div className="cs_creative_protfolio_menu anim_div_ShowZoom">
                <ul>
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>  {' '}
                    </React.Fragment>
                  ))}

                </ul>
              </div>
            </div>

            <div>
              <div className="cs_creative_protfolio_details row">
                {items.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="col-md-4 mb-5 cs_project_card cs_ui_design cs_development anim_div_ShowDowns">
                    <Link key={i} href="/portfolio-details" className="cs_portfolio cs_style_2">
                <div className="cs_portfolio_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
                <div className="cs_portfolio_info">
                  <div className="cs_text cs_style_1">
                    <h6 className="cs_portfolio_title">
                      {item.title}
                    </h6>
                    <div className="cs_portfolio_subtitle">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
                    </div> 
                  </React.Fragment>
                ))}

              </div> 

            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ProgramSection;