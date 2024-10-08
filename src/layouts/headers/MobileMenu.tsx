"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[];
}

const menu_data: DataType[] = [
  {
    id: 1,
    title: "About Us",
    link: "",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "About ASTI",
        link: "/about",
      },
      {
        id: 2,
        title: "History & Facts",
        link: "/history-and-facts",
      },
      {
        id: 3,
        title: "Mission & Vision",
        link: "/mission-and-vision",
      },
      {
        id: 4,
        title: "Why Choose ASTI",
        link: "/why-choose-asti",
      },
      {
        id: 5,
        title: "Careers",
        link: "/careers",
      },
      {
        id: 6,
        title: "Our Team",
        link: "/team",
      },
      {
        id: 7,
        title: "Alumni",
        link: "/alumni",
      },
      {
        id: 8,
        title: "Affiliation and Accreditation",
        link: "/affiliation-and-accreditation",
      },
    ],
  },
  {
    id: 2,
    title: "Academics",
    link: "/about",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Department of Engineering and Built-in Environment",
        link: "/about",
      },
      {
        id: 2,
        title: "Department of Business and Management",
        link: "/team",
      },
      {
        id: 3,
        title: "Department of Social Science",
        link: "/team-details",
      },
      {
        id: 4,
        title: "Department of Accounting and Finance",
        link: "/contact",
      },
      {
        id: 5,
        title: "Department of Computing and IT",
        link: "/faq",
      },
      {
        id: 6,
        title: "Department of Education & Training",
        link: "/error",
      },
      {
        id: 7,
        title: "Department of Advanced Certifications",
        link: "/error",
      },
    ],
  },
  {
    id: 3,
    title: "Admissions",
    link: "/service",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "International Students",
        link: "/about",
      },
      {
        id: 2,
        title: "National Students",
        link: "/team",
      },
      {
        id: 3,
        title: "Working Professionals",
        link: "/team-details",
      },
      {
        id: 4,
        title: "Scholarships & Funding",
        link: "/contact",
      },
      {
        id: 5,
        title: "Level 3 International Programs",
        link: "/faq",
      },
      {
        id: 6,
        title: "Level 4 & 5 International Programs",
        link: "/error",
      },
      {
        id: 7,
        title: "Recognition of Prior Learning (RPL) ",
        link: "/error",
      },
    ],
  },
  {
    id: 4,
    title: "Media",
    link: "/blog",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Blogs",
        link: "/blog",
      },
      {
        id: 2,
        title: "News & Events",
        link: "/blog-details",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Login",
    link: "/blog",
    has_dropdown: true,
    sub_menu: [
      {
        id: 1,
        title: "Student Login",
        link: "/blog",
      },
      {
        id: 2,
        title: "Faculty Login",
        link: "/blog-details",
      },
      {
        id: 3,
        title: "Admin Login",
        link: "/blog-details",
      },
    ],
  },
];

const MobileMenu = ({ active, navTitle, openMobileMenu }: any) => {
  return (
    <>
      <ul
        className="cs_nav_list"
        style={{ display: active ? "block" : "none" }}
      >
        {menu_data.map((menu) => (
          <li
            key={menu.id}
            className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${
              navTitle === menu.title ? "active" : ""
            }`}
          >
            {!menu.has_dropdown ? (
              <Link href={menu.link}>{menu.title}</Link>
            ) : (
              <span className="cs_nav_custom_span">
                {menu.title}{" "}
                <IoChevronDownSharp className="cs_angle_down_icon" />
              </span>
            )}

            {menu.has_dropdown && (
              <>
                <ul
                  className="cs_mega_wrapper"
                  style={{
                    display: navTitle === menu.title ? "block" : "none",
                  }}
                >
                  {menu.sub_menu?.map((subMenu) => (
                    <li key={subMenu.id}>
                      <Link href={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
                <span
                  onClick={() => openMobileMenu(menu.title)}
                  className={`cs_munu_dropdown_toggle ${
                    navTitle === menu.title ? "active" : ""
                  }`}
                ></span>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileMenu;
