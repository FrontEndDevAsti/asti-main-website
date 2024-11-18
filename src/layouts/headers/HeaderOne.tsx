
'use client'
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import UseSticky from "@/hooks/UseSticky";
import React, { useEffect, useState } from "react";


import Image from "next/image";
import logo from "@/assets/logos/logo.png";
import Logo_white from "@/assets/logos/logo-2.png";

interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown: boolean;
	sub_menu?: {
		id: number;
		title: string;
		link: string;
	}[]
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
				link: "/accreditations",
			},
		]
	},
	{
		id: 2,
		title: "About",
		link: '/about',
		has_dropdown: false
	},
	{
		id: 3,
		title: "Academics",
		link: "/about",
		has_dropdown: true,
		sub_menu: [
			{
				id: 1,
				title: "About",
				link: "/about",
			},
			{
				id: 2,
				title: "Team",
				link: "/team",
			},
			{
				id: 3,
				title: "Team Details",
				link: "/team-details",
			},
			{
				id: 4,
				title: "Contact",
				link: "/contact",
			},
			{
				id: 5,
				title: "Faq",
				link: "/faq",
			},
			{
				id: 6,
				title: "Error",
				link: "/error",
			}
		]
	},
	{
		id: 4,
		title: "Services",
		link: "/service",
		has_dropdown: true,
		sub_menu: [
			{
				id: 1,
				title: "Services",
				link: "/service",
			},
			{
				id: 2,
				title: "Services Details",
				link: "/service-details",
			}
		]
	},
	{
		id: 5,
		title: "Portfolio",
		link: "/portfolio",
		has_dropdown: true,
		sub_menu: [
			{
				id: 1,
				title: "Portfolio",
				link: "/portfolio",
			},
			{
				id: 2,
				title: "Portfolio Details",
				link: "/portfolio-details",
			}
		]
	},
	{
		id: 6,
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
			}
		]
	},
	{
		id: 7,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	}


]


const HeaderOne = () => {
	const { sticky } = UseSticky()



	const [active, setActive] = useState<Boolean>(false);
	const handleActive = () => {
		setActive(!active)
	}

	const [navTitle, setNavTitle] = useState("");
	//openMobileMenu
	const openMobileMenu = (menu: string) => {
		if (navTitle === menu) {
			setNavTitle("");
		} else {
			setNavTitle(menu);
		}
	};


	const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".cs_sticky_header") as HTMLElement | null;

      if (!header) {
        console.error("Sticky header element not found");
        return;
      }

      const headerHeight = header.offsetHeight + 30;
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowTop >= headerHeight) {
        header.classList.add("cs_gescout_sticky");
      } else {
        header.classList.remove("cs_gescout_sticky");
        header.classList.remove("cs_gescout_show");
      }

      if (header.classList.contains("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          header.classList.add("cs_gescout_show");
        } else {
          header.classList.remove("cs_gescout_show");
        }
      }

      setLastScrollTop(windowTop);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


	return (
		<>

			<header className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${sticky ? 'cs_gescout_sticky' : ''}`}>
				<div className="cs_main_header">
					<div className="container">
						<div className="cs_main_header_in">
							<div className="cs_main_header_left">
								<Link className="cs_site_branding logo-dark" href="/">
									<Image src={logo} alt="Logo" />
								</Link>
								<Link className="cs_site_branding logo-white" href="/">
									<Image src={Logo_white} alt="Logo" />
								</Link>
							</div>
							<div className="cs_main_header_right">
								<div className="cs_nav cs_medium">
									<MobileMenu active={active} navTitle={navTitle} openMobileMenu={openMobileMenu} />
									<span className={`cs_munu_toggle ${active ? "cs_toggle_active" : ""}`} onClick={handleActive}><span></span></span>
								</div>
		
							</div>
						</div>
					</div>
				</div>
			</header>




		</>
	);
};

export default HeaderOne;
