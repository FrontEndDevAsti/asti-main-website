import React, { useState } from "react";
import agency_story_1 from "@/assets/img/agency_story_1.jpg";
import agency_story_2 from "@/assets/img/agency_story_2.jpg";
import agency_story_4 from "@/assets/img/agency_story_4.jpg";
import agency_story_3 from "@/assets/img/agency_story_3.jpg";
import Image from "next/image";

interface DataType {
  title: string;
  des: string;
}

const about_content: DataType[] = [
  {
    title: `Our Story`,
    des: `In the vast expanse of the universe, the quest for knowledge has driven humanity to explore the unknown. From the earliest days of civilization, when our ancestors gazed at the night sky, to the modern era of space exploration, the desire to understand our place in the cosmos has been fundamental to our existence. This curiosity has led to remarkable discoveries, from the formulation of the laws of physics to the development of powerful telescopes that allow us to peer deep into space.

The invention of the telescope in the early 17th century marked a turning point, enabling astronomers like Galileo Galilei to observe celestial phenomena with unprecedented clarity. His observations provided compelling evidence for the heliocentric model of the solar system, challenging the long-held geocentric beliefs. The advent of spectroscopy revealed the elements in stars, enhancing our understanding of their life cycles. Edwin Hubble's discovery of the expanding universe led to the Big Bang theory, transforming our perception of the cosmos.

The launch of Sputnik 1 in 1957 marked the beginning of the space age, igniting a race to explore beyond our planet. Human missions to the Moon showcased humanity's ingenuity, while robotic missions unveiled breathtaking landscapes of distant planets. As we venture into space, we recognize our place in the grand tapestry of the universe, pushing the boundaries of exploration and deepening our understanding of the forces that shape our existence. With each discovery, we uncover not just answers but profound questions about the beauty and complexity of the cosmos.`,
  },
  {
    title: `Our Values`,
    des: `In the vast expanse of the universe, the quest for knowledge has driven humanity to explore the unknown. From the earliest days of civilization, when our ancestors gazed at the night sky, to the modern era of space exploration, the desire to understand our place in the cosmos has been fundamental to our existence. This curiosity has led to remarkable discoveries, from the formulation of the laws of physics to the development of powerful telescopes that allow us to peer deep into space.

    The invention of the telescope in the early 17th century marked a turning point, enabling astronomers like Galileo Galilei to observe celestial phenomena with unprecedented clarity. His observations provided compelling evidence for the heliocentric model of the solar system, challenging the long-held geocentric beliefs. The advent of spectroscopy revealed the elements in stars, enhancing our understanding of their life cycles. Edwin Hubble's discovery of the expanding universe led to the Big Bang theory, transforming our perception of the cosmos.
    
    The launch of Sputnik 1 in 1957 marked the beginning of the space age, igniting a race to explore beyond our planet. Human missions to the Moon showcased humanity's ingenuity, while robotic missions unveiled breathtaking landscapes of distant planets. As we venture into space, we recognize our place in the grand tapestry of the universe, pushing the boundaries of exploration and deepening our understanding of the forces that shape our existence. With each discovery, we uncover not just answers but profound questions about the beauty and complexity of the cosmos.`,  },
  {
    
    title: `Our Mission`,
    des: `In the vast expanse of the universe, the quest for knowledge has driven humanity to explore the unknown. From the earliest days of civilization, when our ancestors gazed at the night sky, to the modern era of space exploration, the desire to understand our place in the cosmos has been fundamental to our existence. This curiosity has led to remarkable discoveries, from the formulation of the laws of physics to the development of powerful telescopes that allow us to peer deep into space.

    The invention of the telescope in the early 17th century marked a turning point, enabling astronomers like Galileo Galilei to observe celestial phenomena with unprecedented clarity. His observations provided compelling evidence for the heliocentric model of the solar system, challenging the long-held geocentric beliefs. The advent of spectroscopy revealed the elements in stars, enhancing our understanding of their life cycles. Edwin Hubble's discovery of the expanding universe led to the Big Bang theory, transforming our perception of the cosmos.
    
    The launch of Sputnik 1 in 1957 marked the beginning of the space age, igniting a race to explore beyond our planet. Human missions to the Moon showcased humanity's ingenuity, while robotic missions unveiled breathtaking landscapes of distant planets. As we venture into space, we recognize our place in the grand tapestry of the universe, pushing the boundaries of exploration and deepening our understanding of the forces that shape our existence. With each discovery, we uncover not just answers but profound questions about the beauty and complexity of the cosmos.`,  },
  {
    title: `Our Vision`,
    des: `In the vast expanse of the universe, the quest for knowledge has driven humanity to explore the unknown. From the earliest days of civilization, when our ancestors gazed at the night sky, to the modern era of space exploration, the desire to understand our place in the cosmos has been fundamental to our existence. This curiosity has led to remarkable discoveries, from the formulation of the laws of physics to the development of powerful telescopes that allow us to peer deep into space.

    The invention of the telescope in the early 17th century marked a turning point, enabling astronomers like Galileo Galilei to observe celestial phenomena with unprecedented clarity. His observations provided compelling evidence for the heliocentric model of the solar system, challenging the long-held geocentric beliefs. The advent of spectroscopy revealed the elements in stars, enhancing our understanding of their life cycles. Edwin Hubble's discovery of the expanding universe led to the Big Bang theory, transforming our perception of the cosmos.
    
    The launch of Sputnik 1 in 1957 marked the beginning of the space age, igniting a race to explore beyond our planet. Human missions to the Moon showcased humanity's ingenuity, while robotic missions unveiled breathtaking landscapes of distant planets. As we venture into space, we recognize our place in the grand tapestry of the universe, pushing the boundaries of exploration and deepening our understanding of the forces that shape our existence. With each discovery, we uncover not just answers but profound questions about the beauty and complexity of the cosmos.`,  },
];


const images = [
  { src: agency_story_1, title: "Our Story", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." },
  { src: agency_story_2, title: "Our Values", description: "Description 2" },
  { src: agency_story_3, title: "Our Mission", description: "Description 3" },
  { src: agency_story_3, title: "Our Vision", description: "Description 4" },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      <section>
        {/* <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    About Asti Academy
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            {about_content.map((item, index) => (
              <div className="row mb-4" key={index}>
            
                <div
                  className={`col-md-4 col-sm-12 d-flex align-items-center justify-content-center ${
                    index % 2 === 0 ? "order-md-1" : "order-md-2"
                  } mb-3`}
                >
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              
                <div
                  className={`col-md-8 col-sm-12 ${
                    index % 2 === 0 ? "order-md-2" : "order-md-1"
                  }`}
                >
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color text-justify">{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div> */}
         {/* hero sec */}
         <section>
                <div className="cs_hero cs_style2 custom-h-accrdtn">
                  <div
                    className="cs_hero_bg cs_bg cs_parallax_bg"
                    style={{
                      backgroundImage: "url(/assets/img/design_banner.jpg)",
                    }}
                  ></div>

                  <div className="container">
                    <div className="cs_hero_text">
                      <div className="anim_banner_text_left">
                        <h1 className="cs_hero_title cs_hero_title_lg">
                          About Us
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="cs_height_60 cs_height_lg_20"></div>
        <div className="container">
      <div className="cs_agency agency_about_images_posation">
        <div className="cs_img_section_1">
          <div
            className="cs_img_wrapper"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`cs_overlay ${hoveredIndex === 0 ? 'active' : ''}`}>
              <p>{images[0].description}</p>
            </div>
            <div className="cs_img_title">
              <h3 className="cs_title_head_3">{images[0].title}</h3>
            </div>
            <Image src={images[0].src} alt="image-here" className="w-100" />
          </div>
        </div>
        <div className="cs_img_section_2">
          <div
            className="cs_img_wrapper"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`cs_overlay ${hoveredIndex === 1 ? 'active' : ''}`}>
              <p>{images[1].description}</p>
            </div>
            <div className="cs_img_title">
              <h3 className="cs_title_head_3">{images[1].title}</h3>
            </div>
            <Image src={images[1].src} alt="image-here" className="w-100" />
          </div>
        </div>
        <div className="cs_img_section_3">
          <div
            className="cs_img_wrapper"
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`cs_overlay ${hoveredIndex === 2 ? 'active' : ''}`}>
              <p>{images[2].description}</p>
            </div>
            <div className="cs_img_title">
              <h3 className="cs_title_head_3">{images[2].title}</h3>
            </div>
            <Image src={images[2].src} alt="image-here" className="w-100"  />
          </div>
          <div
            className="cs_img_wrapper"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`cs_overlay ${hoveredIndex === 3 ? 'active' : ''}`}>
              <p>{images[3].description}</p>
            </div>
            <div className="cs_img_title">
              <h3 className="cs_title_head_3">{images[3].title}</h3>
            </div>
            <Image src={images[3].src} alt="image-here" className="w-100" />
          </div>
        </div>
      </div>
    </div>

      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default About;
