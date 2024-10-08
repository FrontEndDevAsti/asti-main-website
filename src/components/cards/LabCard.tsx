import React, { useState } from "react";

interface LabData {
  title: string;
  description: string;
  path: string;
  bgImage: string;
}

const labs: LabData[] = [
  {
    title: "Automotive Engineering Lab",
    description:
      "The Automotive Engineering Lab focuses on cutting-edge technologies for vehicle systems.",
    path: "/automotive-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    title: "Electrical Engineering Lab",
    description:
      "The Electrical Engineering Lab is equipped with the latest technologies for power systems.",
    path: "/electrical-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
  {
    title: "Computer Science Lab",
    description:
      "The Computer Science Lab offers resources for software development and AI research.",
    path: "/computer-science-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    title: "Mechanical Engineering Lab",
    description:
      "This lab provides state-of-the-art equipment for mechanics and fluid dynamics.",
    path: "/mechanical-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
  {
    title: "Civil Engineering & Architectural Lab",
    description:
      "Focuses on construction and architectural design technologies.",
    path: "/civil-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    title: "Welding Technology Lab",
    description:
      "Offers specialized equipment for welding techniques and safety.",
    path: "/welding-technology-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
  {
    title: "HVAC Engineering Lab",
    description:
      "Provides comprehensive resources for HVAC systems training and research.",
    path: "/hvac-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    title: "Safety Engineering Lab",
    description:
      "Dedicated to safety protocols and risk management in engineering.",
    path: "/safety-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
  {
    title: "Electrical Vehicle Engineering Lab",
    description:
      "Specializes in electric vehicle systems and renewable energy technologies.",
    path: "/ev-engineering-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031162.jpg",
  },
  {
    title: "Piping and Plumbing Engineering Lab",
    description:
      "Offers insights into piping and plumbing engineering for residential and commercial properties.",
    path: "/piping-plumbing-lab",
    bgImage: "https://pagedone.io/asset/uploads/1688031375.jpg",
  },
];

const LabCard = () => {
  return (
    <div className="container">
      <div className="cs_section_heading cs_style_1 text-center">
        <div className="cs_section_heading_text">
          <h2 className="cs_section_title anim_heading_title">Advanced Labs</h2>
        </div>
      </div>
      <div className="cs_height_70"></div>
      <div className="row">
        {/* First row with 3 cards */}
        {labs.slice(0, 3).map((lab, index) => (
          <div key={index} className="col-md-4 mb-4">
            <CardComponent lab={lab} />
          </div>
        ))}
      </div>

      <div className="row">
        {/* Second row with 2 cards */}
        {labs.slice(3, 5).map((lab, index) => (
          <div key={index} className="col-md-6 mb-4">
            <CardComponent lab={lab} />
          </div>
        ))}
      </div>

      <div className="row">
        {/* Third row with 3 cards */}
        {labs.slice(5, 8).map((lab, index) => (
          <div key={index} className="col-md-4 mb-4">
            <CardComponent lab={lab} />
          </div>
        ))}
      </div>

      <div className="row">
        {/* Fourth row with 2 cards */}
        {labs.slice(8, 10).map((lab, index) => (
          <div key={index} className="col-md-6 mb-4">
            <CardComponent lab={lab} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface CardComponentProps {
  lab: LabData;
}

const CardComponent: React.FC<CardComponentProps> = ({ lab }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="card text-white overflow-hidden"
        style={{
          backgroundImage: `url(${lab.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="card-img-overlay d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <h5 className="text-center text-white">{lab.title}</h5>

          {/* Button visibility controlled by hover state */}
          <div
            className={`transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              className="btn btn-outline-light"
              style={{ width: "150px" }}
              onClick={() => (window.location.href = lab.path)}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabCard;
