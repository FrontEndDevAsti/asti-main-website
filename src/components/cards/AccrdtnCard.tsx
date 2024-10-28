import React from 'react';
import Link from 'next/link';
import { FaUniversity, FaLaptop, FaGraduationCap, FaGift, FaNewspaper, FaUserFriends } from 'react-icons/fa';

const cardData = [
  { title: 'Core Values', icon: <FaUniversity />, link: '/core-values' },
  { title: 'Study in Dubai', icon: <FaLaptop />, link: '/study-in-dubai' },
  { title: 'Online Programs', icon: <FaGraduationCap />, link: '/online-programs' },
  { title: 'Scholarships', icon: <FaGift />, link: '/scholarships' },
  { title: 'News & Events', icon: <FaNewspaper />, link: '/news-events' },
  { title: 'Life at ASTI', icon: <FaUserFriends />, link: '/life-at-asti' },
];

const AccrdtnCard = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link href={card.link} passHref>
              <div className={`accrdtn-card`}>
                <div className={`accrdtn-card-body text-center`}>
                  <div className={`accrdtn-icon`}>{card.icon}</div>
                  <h5 className={`accrdtn-title mt-3`}>{card.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccrdtnCard;
