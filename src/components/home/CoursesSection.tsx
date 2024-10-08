import React from "react";
import {
  FaUser,
  FaComments,
  FaMoneyBill,
  FaGraduationCap,
  FaGlobe,
  FaLaptop,
} from "react-icons/fa";
import Link from "next/link";

const cardData = [
  {
    title: "Become an Agent",
    path: "/",
    description: "Get the skills to become an agent.",
    bgColor: "#D32F2F",
    icon: <FaUser />,
  },
  {
    title: "Chat with Student",
    path: "/",
    description: "Connect with current students.",
    bgColor: "#FF9800",
    icon: <FaComments />,
  },
  {
    title: "Scholarship & Benefits",
    path: "/dd",
    description: "Explore various scholarships available.",
    bgColor: "#FF5722",
    icon: <FaMoneyBill />,
  },
  {
    title: "Student Activities",
    path: "/",
    description: "Engage in various student activities.",
    bgColor: "#3F51B5",
    icon: <FaGraduationCap />,
  },
  {
    title: "Study in Dubai",
    path: "/",
    description: "Learn more about studying in Dubai.",
    bgColor: "#9C27B0",
    icon: <FaGlobe />,
  },
  {
    title: "International Foundation Programme",
    path: "/",
    description: "24-week Foundation degree preparing you for university.",
    bgColor: "#009688",
    icon: <FaLaptop />,
  },
  {
    title: "Online Programs for Working Professionals",
    path: "/",
    description: "Flexible online courses for professionals.",
    bgColor: "#795548",
    icon: <FaLaptop />,
  },
];
const CoursesSection: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div
            className={`col-12 col-md-${
              index < 2 ? "6" : index < 5 ? "4" : "6"
            } specific-card-wrapper`}
            key={index}
          >
            <Link href={card.path} passHref>
              <div
                className="specific-card-content"
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="specific-card-icon">{card.icon}</div>
                <h4 className="specific-card-title">{card.title}</h4>
                <p className="">{card.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
