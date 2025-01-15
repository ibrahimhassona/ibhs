import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { socialDataProps } from "../[locale]/type";

const icons = [<FaFacebookF />, <FaLinkedinIn />, <FaWhatsapp />];
// Social Media Component
const social: socialDataProps[] = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/hema.hassona.39/",
    color: "text-[#0b68ff]",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/ibrahim-hassouna-332448285",
    color: "text-[#0161c0]",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/message/CPOSYXOOSFGIF1",
    color: "text-[#0fc144]",
  },
];
const SocialConatct = () => {
  return (
    <div className=" flex flex-col gap-6 justify-between items-center mt-12 ">
      {social.map((link, index) => (
        <Link
          href={link.url}
          target="_blank"
          key={link.title}
          className="bg-white border-2 border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md rounded  w-fit px-3 py-1"
        >
          <h3
            className={`${link.color} max-md:w-[105px] w-[200px] font-semibold font-roboto flex items-center justify-center gap-2`}
          >
            {link.title} {icons[index]}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default SocialConatct;
