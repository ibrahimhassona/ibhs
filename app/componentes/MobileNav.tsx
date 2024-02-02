"use client";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Logo from "./Logo";
import { IoCloseSharp } from "react-icons/io5";
import Links from "@/lib/LinksData";
import { Link } from "react-scroll";
import CustomBtn from "./CustomBtn";

interface styleProp {
  style: string;
}

const MobileNav = ({ style }: styleProp) => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="relative overflow-hidden ">
      <div
        onClick={() => setIsopen(!isOpen)}
        className={`${style} links text-3xl  `}
      >
        <RiMenu2Fill />
      </div>
      {/* Side menu */}
      <div
        className={`${
          isOpen ? "right-0" : "right-[-100%]"
        } fixed w-full sm:hidden bg-white h-[100vh] z-20 top-0  duration-300 transition-all flex flex-col justify-start py-5 items-center`}
      >
        {/* close menu */}
        <div
          onClick={() => setIsopen(false)}
          className="absolute right-5 text-4xl top-6 links"
        >
          <IoCloseSharp />
        </div>
        {/* logo */}
        <div className="shadow-md w-[50%] flex justify-center ">
          <Logo />
        </div>
        {/* Links */}
        <div className="flex flex-col gap-7 mt-10">
          {Links.map((link) => (
            <Link
              className="links text-lg text-center"
              to={link.title}
              smooth
              duration={500}
              key={link.title}
              offset={link.offset}
            >
              {link.title}
            </Link>
          ))}
          <CustomBtn to="/skills" content="My Skills" style="border border-black px-3 py-1 rounded-sm capitalize hover:bg-black/70 hover:text-white"/>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
