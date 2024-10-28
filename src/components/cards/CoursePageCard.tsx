import React from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaLaptopCode,
  FaMoneyBill,
} from "react-icons/fa"; // Use FontAwesome icons

interface CardData {
  title: string;
  icon: JSX.Element;
  backgroundColor: string;
  link: string;
}

interface CoursePageCardProps {
  cardData: CardData[]; // Expect an array of CardData
}

const CoursePageCard: React.FC<CoursePageCardProps> = ({ cardData }) => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <a href={card.link}>
              <div
                className="card h-100 d-flex flex-column justify-content-between gap-course-card"
                style={{
                  backgroundColor: card.backgroundColor,
                  color: "#fff",
                  padding: "20px",
                }}
              >
                <div>{card.icon}</div>
                <div className="d-flex justify-content-between align-items-end">
                  <p className="mb-0">{card.title}</p>
                  <div style={{ color: "#fff" }}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePageCard;
