import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const videoData = [
  {
    url: "../../assets/videos/promo.mp4", // Ensure this path is correct
    light: "../../assets/img/teamsimg2.jpg", // Correct light image paths
    title: "Hello",
    id: 1,
  },
  {
    url: "https://www.youtube.com/watch?v=lb2D0-WdY1M",
    light: "../../assets/img/teamsimg2.jpg", // Correct light image paths
    title: "Hello",
    id: 2,
  },
  {
    url: "../../assets/videos/promo.mp4", // Ensure this path is correct
    light: "../../assets/img/teamsimg2.jpg", // Correct light image paths
    title: "Hello",
    id: 3,
  },
  {
    url: "https://www.youtube.com/watch?v=lb2D0-WdY1M",
    light: "../../assets/img/teamsimg2.jpg", // Correct light image paths
    title: "Hello",
    id: 4,
  },
  // Add more video objects...
];

export default function VideoCarousel() {
  const swiperContainerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null); // State to track the playing video index

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayPause = (index: any) => {
    // Toggle play/pause
    setPlayingIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="carousel-wrapper">
      <div className="cs_height_60 cs_height_lg_20"></div>
      {/* Custom navigation buttons outside the Swiper container */}
      <div className="carousel-nav pb-2">
        <div
          style={{ cursor: "pointer", color: "#ff6b00" }}
          className="cs_swiper_button_prev"
        >
          <IoIosArrowBack />
        </div>
        <div
          style={{ cursor: "pointer", color: "#ff6b00" }}
          className="cs_swiper_button_next"
        >
          <IoIosArrowForward />
        </div>
      </div>

      <Swiper
        loop={true}
        speed={1000}
        autoplay={true}
        spaceBetween={30}
        slidesPerView="auto"
        // modules={[Autoplay]}
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        className="cs_slider cs_slider_3 cs_row_slider cs_vw_none anim_blog custm-p"
      >
        {videoData.map((video, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_post cs_style_1">
              <div className="video-container">
                {/* Render ReactPlayer based on playingIndex */}
                {isMounted && (
                  <>
                    <ReactPlayer
                      url={video.url}
                      width="100%"
                      height="100%"
                      light={video.light}
                      controls={true} // Show controls for the video
                      playing={playingIndex === index} // Play if this video is selected
                      onPause={() => setPlayingIndex(null)} // Set playingIndex to null on pause
                    />
                    <button onClick={() => handlePlayPause(index)}>
                      {playingIndex === index ? "Pause" : "Play"}
                    </button>
                  </>
                )}
                <div className="video-title">{video.title}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
