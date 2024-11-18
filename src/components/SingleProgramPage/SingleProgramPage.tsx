"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import protfolio_details_1 from "@/assets/img/protfolio_details_1.jpg";
import banner_img from "@/assets/img/service_details_banner.jpg";
import Link from "next/link";
import ProgramModules from "../program-modules/ProgramModules";
import { FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";
import {
  AccomodationIcon,
  CampusIcon,
  CityIcon,
  ProspectusIcon,
} from "@/svg/CommonSvgs";
import contact_sec_woman from "@/assets/images/contact-woman.png";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial_thumb from "@/assets/img/testimonial_thumb_1.jpg";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function SingleProgramPage({ program }: { program: any }) {
  const [isSticky, setSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const nav = document.querySelector(".section-nav-container") as HTMLElement;
    const stickyPoint = nav ? nav.offsetTop : 0;

    const handleScrollEvent = () => {
      if (window.scrollY > stickyPoint) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    // Define custom offsets for each section
    const offsets: { [key: string]: number } = {
      // Add more custom offsets for other sections as needed
      "program-specifications": -200,
    };

    const yOffset = offsets[sectionId] || -100; // Default offset if not specified

    if (section) {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="cs_height_80 cs_height_lg_80"></div>
      <section>
        <div className="container">
          <div className="reveal">
            <Image src={protfolio_details_1} alt="protfolio_details_1" />
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/asti-academy">ASTI Academy</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/level-4-5-engineering">
                  Level 4 & 5 Engineering
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Higher International Diploma In Dubai Civil Engineering
              </li>
            </ol>
          </nav>
          <div className="pt-4">
            <h1 className="font-size-50">{program.name}</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container border border-dark rounded p-4 my-3">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Mode of Study</p>
                    <h6 className="cs_title_text">
                      Online | On Campus | Blended
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Program Duration</p>
                    <h6 className="cs_title_text">2 Years</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Credits</p>
                    <h6 className="cs_title_text">240 Credits</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Assessments</p>
                    <h6 className="cs_title_text">
                      Assignments Based Assessment No Exams
                    </h6>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Fees</p>
                    <Link href="/">
                      <h6 className="cs_title_text">View Fees</h6>
                    </Link>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Program Recognition</p>
                    <h6 className="cs_title_text">
                      Higher International Diploma In Dubai Civil Engineering
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between py-3">
            <div className="mb-2 mb-md-0">
              <button className="btn btn-dark">How to Apply</button>
            </div>
            <div>
              <button className="btn btn-dark me-3"> View Accreditation</button>
              <button className="btn btn-dark">Know More</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* navbar */}
        <div
          className={`container-fluid section-nav-container ${
            isSticky ? "sticky" : ""
          }`}
        >
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="d-flex flex-wrap text-center">
                {/* Scroll Nav Items */}
                {[
                  "overview",
                  "program-specifications",
                  "program-modules",
                  "course-delivery",
                  "learning-and-facilities",
                  "learning-outcomes",
                  "entry-requirements",
                  "fees-and-scholarship",
                ].map((sectionId) => (
                  <div
                    key={sectionId}
                    className="nav-item"
                    onClick={() => handleScroll(sectionId)}
                  >
                    {sectionId.replace("-", " ").toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* overview */}
        <div className="container" id="overview">
          <div className="cs_portfolio_details">
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Overview</h4>
                {program.overview}
              </div>
            </div>
          </div>
        </div>

        {/* specification */}
        <div className="container" id="program-specifications">
          <h4>Program Specifications</h4>
          {program.specification}
          <div className="table-responsive">
            <table className="table">
              <tbody>
                {program.specifications ? (
                  Object.entries(program.specifications).map(
                    ([label, value]) => (
                      <tr key={label}>
                        <th scope="row" className="bg-light">
                          {label}
                        </th>
                        <td className="bg-white">{value as string}</td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td>No specifications available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* modules */}
        {/* {program.modules ? (
  <ProgramModules id={"program-modules"} data={program.modules} />
        ):(
<p>fff</p>
        )} */}
        <ProgramModules id={"program-modules"} data={program.modules} />

        {/* course-delivery */}
        <div className="container" id="course-delivery">
          <div className="cs_portfolio_details">
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4
                  className="cs_heading_text anim_heading_title"
                  id="overview"
                >
                  Course Delivery
                </h4>
                <p className="cs_text_style_body">{program.delivery}</p>
              </div>
              <div className="container mt">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Criteria</th>
                      <th scope="col">Online Learning</th>
                      <th scope="col">On-campus Study</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Flexibility</td>
                      <td>Offers flexibility in scheduling</td>
                      <td>Fixed schedule with in-person classes</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>Accessible from anywhere with internet</td>
                      <td>Requires physical presence on campus</td>
                    </tr>
                    <tr>
                      <td>Interaction</td>
                      <td>Limited face-to-face interaction</td>
                      <td>More opportunities for in-person interaction</td>
                    </tr>
                    <tr>
                      <td>Resources</td>
                      <td>Access to digital resources</td>
                      <td>Access to physical resources on campus</td>
                    </tr>
                    <tr>
                      <td>Cost</td>
                      <td>Generally lower tuition and fees</td>
                      <td>
                        Potentially higher tuition and additional campus costs
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* learning&facilities*/}
        <div id="learning-and-facilities" className="container">
          <h4 className="cs_heading_text anim_heading_title">
            Learning And Facilities
          </h4>
          {program.facilities}
        </div>
        <div
          className="container rounded-2 p-4"
          style={{ backgroundColor: "#fbf5eb" }}
        >
          <div className="row d-flex align-items-center justify-content-center py-4">
            <h2 className="fw-bold">ASTI Learner Support</h2>
            <p>
              We work with you to identify the best career-oriented programs for
              you with personalized guidance and mentorship
            </p>
            <div className="col-lg-6">
              <div className="course-page-vid-sec rounded-2">
                <ReactPlayer
                  url="../../assets/videos/promo.mp4"
                  width="100%"
                  height="100%"
                  light="https://www.mdx.ac.ae/_next/image?url=https%3A%2F%2Fapi.mdx.ac.ae%2Fuploads%2Fhotpack_news_1_47226bdb1d.jpg&w=640&q=75"
                  controls={true}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="support-box p-4 shadow-sm bg-light">
                <h5>Not sure which course to choose?</h5>
                <p>
                  Talk to our academic advisor, we'll help you find the right
                  course
                </p>
                <button className=" rounded-pill w-100 my-2 py-2">
                  <FaWhatsapp /> +971 562192333
                </button>
                <button className="btn btn-success rounded-pill w-100 py-2">
                  BROWSE ALL PROGRAMS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* learning outcomes */}
        <div className="container py-4" id="learning-outcomes">
          <h4
            className="cs_heading_text anim_heading_title"
            id="course delivery"
          >
            Learning Outcomes
          </h4>
          <div className="cs_service_details">
            <div className="cs_service_details_text">
              {program.outcomes_details}
              {/* <button className="btn btn-dark">Read More</button> */}
            </div>
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
          </div>
          {program.outcomes}
        </div>

        {/* entry requirements */}
        <div className="container mb-3" id="entry-requirements">
          <h4
            className="cs_heading_text anim_heading_title"
            id="course delivery"
          >
            Entry Requirements
          </h4>
          <div className="cs_accordeon anim_div_ShowDowns">
            {program.entry_req_data.map((item: any, i: any) => (
              <div
                key={i}
                onClick={() => toggleAccordion(i)}
                className={`cs_accordion_item cs_color_1 border-bottom border-1 ${
                  i === activeIndex ? "active cs_icon" : ""
                }`}
              >
                <div className="cs_accordion_header">
                  <p
                    className="cs_accordion_title cs_m0"
                    id={`heading${item.id}`}
                  >
                    {item.question}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    width="30"
                    style={{
                      transform: i === activeIndex ? "rotate(-90deg)" : "none",
                    }}
                  >
                    <path
                      style={{ fill: `#000000` }}
                      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                      data-name="Right"
                    />
                  </svg>
                </div>

                <div
                  className={`cs_accordion_body ${
                    i === activeIndex ? "" : "d-none"
                  }`}
                >
                  {item.ans}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* testimonials */}
        <section className={`cs_primary_bg cs_shape_wrap_2`}>
          <>
            <div className="cs_shape_1">
              <svg
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#454545"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545"
                  />
                </g>
              </svg>
            </div>
          </>

          <div className="cs_height_150 cs_height_lg_60"></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div>
                  <Image src={testimonial_thumb} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <div className={`cs_testimonial cs_style_1 cs_color_1`}>
                  <h2 className="cs_testimonial_title">
                    Some Of Our Respected Happy Clients Says
                  </h2>
                  <Swiper
                    loop={true}
                    speed={1000}
                    pagination={{
                      el: ".cs_pagination",
                      clickable: true,
                    }}
                    className="cs_slider cs_slider_4"
                  >
                    {program.testimonial.map((item: any, index: any) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="cs_testimonial_box">
                          <div className="cs_testimonial_quote_icon">
                            <svg
                              width="61"
                              height="44"
                              viewBox="0 0 61 44"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                                fill="#FF6B00"
                              />
                              <path
                                d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                                fill="#FF6B00"
                              />
                            </svg>
                          </div>
                          <blockquote className="cs_testimonial_text">
                            {item.des}
                          </blockquote>
                          <div className="cs_testimonial_meta">
                            <div className="cs_testimonial_avatar">
                              <Image src={item.img} alt="Avatar" />
                            </div>
                            <div className="cs_testimonial_meta_right">
                              <h3 className="cs_testimonial_avatar_name">
                                {item.name}
                              </h3>
                              <div className="cs_testimonial_avatar_designation">
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="cs_pagination cs_style1"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          <div className="cs_height_150 cs_height_lg_60"></div>
        </section>

        {/* faq */}
        <div className="container my-4">
          <h4
            className="cs_heading_text anim_heading_title"
            id="course delivery"
          >
            faq
          </h4>
          <div className="row">
            {/* First column */}
            <div className="col-lg-6">
              <div className="cs_accordeon custom-wdith-faq">
                {program.faq_data.slice(0, 3).map((item: any, i: any) => (
                  <div
                    key={i}
                    onClick={() => toggleAccordion(i)}
                    className={`cs_accordion_item mb-3 ${
                      i === activeIndex ? "active cs_icon" : ""
                    }`}
                  >
                    <div className="cs_accordion_header">
                      <p
                        className="cs_accordion_title cs_m0"
                        id={`heading${item.id}`}
                      >
                        {item.question}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        width="30"
                        style={{
                          transform:
                            i === activeIndex ? "rotate(-90deg)" : "none",
                        }}
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </div>

                    <div
                      className={`cs_accordion_body ${
                        i === activeIndex ? "" : "d-none"
                      }`}
                    >
                      {item.ans}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second column */}
            <div className="col-lg-6">
              <div className="cs_accordeon custom-wdith-faq">
                {program.faq_data.slice(3).map((item: any, i: any) => (
                  <div
                    key={i + 3} // Adjust index for the second column
                    onClick={() => toggleAccordion(i + 3)}
                    className={`cs_accordion_item mb-3 ${
                      i + 3 === activeIndex ? "active cs_icon" : ""
                    }`}
                  >
                    <div className="cs_accordion_header">
                      <p
                        className="cs_accordion_title cs_m0"
                        id={`heading${item.id}`}
                      >
                        {item.question}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        width="30"
                        style={{
                          transform:
                            i + 3 === activeIndex ? "rotate(-90deg)" : "none",
                        }}
                      >
                        <path
                          d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                          data-name="Right"
                        />
                      </svg>
                    </div>

                    <div
                      className={`cs_accordion_body ${
                        i + 3 === activeIndex ? "" : "d-none"
                      }`}
                    >
                      {item.ans}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="common-sec open-day-banner d-flex align-items-center"
          id="fees-and-scholarship"
        >
          <div className="text-center p-4  rounded shadow-lg banner-content">
            <h2 className="banner-title">Upcoming Open Day</h2>
            <p className="banner-date">
              Our next Open Day is on Sunday 10<sup>th</sup> November, 2024,
              from 12pm to 4pm.
            </p>
            <p className="banner-info">
              Join us at our campus and meet our admissions team to learn more
              about our degrees and how you can enroll.
            </p>
            <button className="btn btn-dark">Register</button>
          </div>
        </div>

        <div className="container my-5">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <div
                className="rounded-circle overflow-hidden"
                style={{ width: "350px", height: "350px", margin: "auto" }}
              >
                <Image
                  src={contact_sec_woman}
                  alt="Consultant"
                  layout="responsive"
                  width={250}
                  height={250}
                />
              </div>
            </div>

            {/* Form Section */}
            <div className="col-md-4">
              <h4 className="mb-4">Speak to Our Consultant</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Get a Callback
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row g-3 justify-content-center">
            {/* First Row with 3 Cards */}

            <div className="col-12 col-md-4">
              <div className="card p-3 text-center h-100">
                <h5 className="card-title">International Students</h5>
                <p className="card-text">Contact the enquiries team</p>
                <p className="card-text">T: +44 (0)121 331 6295</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card p-3 text-center h-100">
                <h5 className="card-title">Non-International Students</h5>
                <p className="card-text">E: International enquiry form</p>
                <p className="card-text">T: +44 (0)121 331 5389</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card p-3 text-center h-100">
                <h5 className="card-title">For More Information</h5>
                <p className="card-text">E: Contact the admissions team</p>
                <p className="card-text">T: +44 (0)121 331 6295</p>
              </div>
            </div>

            {/* Second Row with 4 Cards */}
            <div className="col-6 col-md-3">
              <Link href={"/"}>
                <div className="card p-3 text-center h-100 single-course-page-card">
                  <div className="card-icon mb-2">
                    <AccomodationIcon />
                  </div>
                  <h5 className="single-course-page-card-title">
                    Accommodation
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3">
              <Link href={"/"}>
                <div className="card p-3 text-center h-100 single-course-page-card">
                  <div className="card-icon mb-2">
                    <CampusIcon />
                  </div>
                  <h5 className="single-course-page-card-title">Our Campus</h5>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3">
              <Link href={"/"}>
                <div className="card p-3 text-center h-100 single-course-page-card">
                  <div className="card-icon mb-2">
                    <ProspectusIcon />
                  </div>
                  <h5 className="single-course-page-card-title">Prospectus</h5>
                </div>
              </Link>
            </div>
            <div className="col-6 col-md-3">
              <Link href={"/"}>
                <div className="card p-3 text-center h-100 single-course-page-card">
                  <div className="card-icon mb-2">
                    <CityIcon />
                  </div>
                  <h5 className="single-course-page-card-title">Our City</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProgramPage;
