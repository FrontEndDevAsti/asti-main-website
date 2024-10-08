import React from 'react'
import Image from 'next/image';
import service_slider_1 from "@/assets/img/service_slider_1.jpg";
import service_slider_2 from "@/assets/img/service_slider_2.jpg";


interface DataType {
    id: string;
    title: string;
    description: string;
  }
  const service_data: DataType[] = [
    {
      id: 'one',
      title: "Library",
      description: `Welcome to our digital agency We specialize in helping your business most`,
    },
    {
      id: 'Two',
      title: "Labs",
      description: `Welcome to our digital agency We specialize in helping your business most`,
    },
    {
      id: 'Three',
      title: "Learning Space",
      description: `Welcome to our digital agency We specialize in helping your business most`,
    },
    {
      id: 'Four',
      title: "Workshop",
      description: `Welcome to our digital agency We specialize in helping your business most`,
    },
  ]
  

function CampusLife() {
  return (
    <div>
             <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title text-center">
                Campus Life
            </h4>
            <p className="cs_mp0 anim_text">
               We specialize in helping businesses like yours succeed online.
              From website design and development to digital marketing and advertising, we have the tools and
              expertise to elevate your online presence.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      {/* <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div> */}
                      <Image src={service_slider_1} alt="image-here" />
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
            
          </div>
        </div>
      </section>
            
      <div className="cs_height_150 cs_height_lg_60"></div> 
    </div>
  )
}

export default CampusLife