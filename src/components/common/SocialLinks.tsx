import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'; 

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
    link: "https://www.facebook.com/AstiUAE",
    title: "Facebook",
    icon: <FaFacebookF />, 
  },
  {
    id: 2,
    link: "https://www.linkedin.com/school/astiacademy/",
    title: "Linkedin",
    icon: <FaLinkedinIn />, 
  },
  {
    id: 3,
    link: "https://www.instagram.com/astiacademy/",
    title: "Instagram",
    icon: <FaInstagram />, 
  },
  {
    id: 4,
    link: "https://x.com/astiacademy",
    title: "Twitter",
    icon: <BsTwitterX />,
  },
  {
    id: 5,
    link: "https://www.youtube.com/@astiacademy",
    title: "Youtube",
    icon: <FaYoutube />,
  },
  {
    id: 6,
    link: "https://api.whatsapp.com/send?phone=971562192333",
    title: "Whatsapp",
    icon: <FaWhatsapp />, 
  },
  {
    id: 7,
    link: "https://www.tiktok.com/@astiacademy?lang=en",
    title: "Tiktok",
    icon: <FaTiktok />, 
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
    Copyright {new Date().getFullYear()}, Asti Academy.
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


