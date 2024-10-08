import React, { useState } from "react";
import VideoHomeOne from "../video/VideoHomeOne";
import VideoPopup from "../modals/VideoPopup";

function ChairmanQuotes({ setIsVideoOpen }: any) {
  //   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading cs_style_1">
              <div className="cs_section_heading_text text-center">
                <h2 className="cs_section_title anim_heading_title">
                  Message From Chairman
                </h2>
              </div>
            </div>
            <div className="cs_height_70"></div>
            <VideoHomeOne setIsVideoOpen={setIsVideoOpen} />
            <div className="cs_height_70"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1 text-justify px-3">
                <p className="cs_text_style_body">
                The institution holds firm to the belief that each of us makes an astonishing difference!   Indeed, astonishing differences are just what institutions are about; we bring richness and value to the communities we serve by providing access to higher education to a diverse student body and Al Shabaka Technical Institutional Academy is no exception. Deeply rooted in a commitment to student success, equity, and life-long learning, Al Shabaka Technical Institutional Academy is an institution in which our students thrive because we are intentional and purposeful in creating a learning environment focused on their evolution as learners and citizens of the Human Community. This   institution believes deeply that every student who comes here is entitled to an  educational experience grounded in excellence, and that is what you will find  in  our  classrooms, in our offices, in   our services, in   our  programs, and in the way we treat our students and community. We continue to be grateful to the UAE Government, Ministry of Education, Government of Dubai, and Knowledge and Human Development Authority, who supported the guidance of Al Shabaka Technical  Institutional Academy.  We hope to make a difference in your life, and I challenge them to make a difference at Al Shabaka Technical Institutional Academy, community, region, and thus the planet we live on while they are here with us.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* video modal start */}
        {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"iQjeI_S0H9s"}
      /> */}
        {/* video modal end */}
      </section>
    </>
  );
}

export default ChairmanQuotes;
