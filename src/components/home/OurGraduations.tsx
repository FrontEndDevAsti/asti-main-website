'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import team_avatar_1 from "@/assets/img/teamsimg1.jpg";
import team_avatar_2 from "@/assets/img/teamsimg2.jpg";
import { StaticImageData } from "next/image";

type DataType = {
  sub_title: string;
  title: string;
  title_2: string;
}
const team_content: DataType = {
  sub_title: "Our Team",
  title: "ASTI Graduations",

  title_2: " Our Excellence Team That Can Digitalize Your Brand",
}
const { sub_title, title, title_2 } = team_content



interface DataType2 {
	id: number;
	img: StaticImageData;
	avatar_name: string;
	designation: string;
}
const team_data: DataType2[] = [
	{
		id: 1,
		img: team_avatar_1,
		avatar_name: "Bruce Stewart",
		designation: "PHP Developer",
	},
	{
		id: 2,
		img: team_avatar_2,
		avatar_name: "Joseph Whorton",
		designation: "UI/UX Designer",
	},]

const OurGraduations = ({ style_2, style_3 }: any) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              {/* <div className="cs_section_subtitle anim_div_ShowZoom">
                {sub_title}
              </div> */}
              <h2 className="cs_section_title anim_heading_title">
                {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>

          <div className="cs_team_section anim_blog col-lg-7">
            {team_data.slice(0, 2).map((item, i) =>
              <div key={i} className="cs_team_img">
                <Link href="/team-details">
                  <Image src={item.img} alt="Thumb" />
                  <div className="cs_portfolio_overlay"></div>
                </Link>
                <div className="cs_team_text">
                  <Link href="/team-details">
                    <h6 className="cs_team_text_title">{item.avatar_name}</h6>
                  </Link>
                  <p className="cs_team_subtitle">{item.designation}</p>
                </div>
              </div>
            )}

          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_20"></div>
      </section>


    </>
  );
};

export default OurGraduations;