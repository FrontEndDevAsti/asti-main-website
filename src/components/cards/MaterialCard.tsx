
'use client'
import Link from "next/link";
import React from 'react';
import { FaBook, FaCog, FaBriefcase, FaCalculator, FaBrain, FaPlus } from 'react-icons/fa';


const MaterialCard = () => {
  const services = [
    {
      id: 1,
      icon: <FaBook />,
      title: 'Foundation Programs',
      description: 'Get a solid start with our comprehensive foundation courses tailored to your future career.',
    },
    {
      id: 2,
      icon: <FaCog />,
      title: 'Engineering',
      description: 'Prepare yourself for the world of engineering with our hands-on and innovative programs.',
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: 'Business',
      description: 'Step into the business world with the right set of skills, knowledge, and connections.',
    },
    {
      id: 4,
      icon: <FaCalculator />,
      title: 'Accounting',
      description: 'Our accounting program will help you master the numbers and secure your future.',
    },
    {
      id: 5,
      icon: <FaBrain />,
      title: 'Psychology',
      description: 'Understand the human mind and develop the skills to help others with our psychology courses.',
    },
    {
      id: 6,
      icon: <FaPlus />,
      title: 'Newly Added',
      isReadMore: true,
      link: '/read-more',
    },
  ];

  return (
    <div className="container materialcard-container">
      <div className="row justify-content-center">
        {services.map((service) => (
          <div key={service.id} className="col-lg-4 col-md-6 d-flex justify-content-center mb-4">
            <div className="card p-4 text-left materialcard-card">
              {service.isReadMore ? (
                <div className="d-flex flex-column justify-content-center align-items-center materialcard-read-more">
                  <h5 className="materialcard-title">
                    <Link href={service.link} className="materialcard-link">
                       <h5>{service.title}</h5>
                    </Link>
                  </h5>
                </div>
              ) : (
                <>
                  <div className="d-flex justify-content-between materialcard-icon-number">
                    <div className="materialcard-icon">{service.icon}</div>
                    <span className="materialcard-number">{service.id.toString().padStart(2, '0')}</span>
                  </div>
                  <h5 className="mt-3">{service.title}</h5>
                  <p className="mt-2">{service.description}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialCard;
