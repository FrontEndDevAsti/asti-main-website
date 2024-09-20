import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'; // Importing Font Awesome Icons

// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
  icon: JSX.Element;
}
const hero_link_home_three: HDataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com",
    title: "Facebook",
    icon: <FaFacebookF />, // Facebook Icon
  },
  {
    id: 2,
    link: "https://www.linkedin.com",
    title: "Linkedin",
    icon: <FaLinkedinIn />, // LinkedIn Icon
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    title: "Instagram",
    icon: <FaInstagram />, // Instagram Icon
  },
  {
    id: 4,
    link: "https://www.twitter.com",
    title: "Twitter",
    icon: <BsTwitterX />, // Twitter Icon
  },
  {
    id: 5,
    link: "https://www.dribbble.com",
    title: "Youtube",
    icon: <FaYoutube />, // Dribbble Icon
  },
  {
    id: 6,
    link: "https://www.dribbble.com",
    title: "Whatsapp",
    icon: <FaWhatsapp />, // Dribbble Icon
  },
  {
    id: 7,
    link: "https://www.dribbble.com",
    title: "Tiktok",
    icon: <FaTiktok />, // Dribbble Icon
  }
]
export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          className="cs_center"
          target="_blank"
          aria-label={h_item.title}
          >
          {h_item.icon}
        </Link>
      ))}
    </>
  )

}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    Copyright {new Date().getFullYear()}, All Right reserved
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


