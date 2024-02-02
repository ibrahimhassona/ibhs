"use client";
import React from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";
import Links from "@/lib/LinksData";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="bg-white fixed top-0 z-[19] w-full shadow-md" id="home">
      <div className="container py-2 px-1 flex justify-between items-center  ">
        {/* Logo */}
        <Logo />
        {/* Links */}
        <div>
          <div className="flex gap-5 xl:gap-10 lg:text-lg  max-md:gap-5 max-sm:hidden h-full items-center">
            {Links.map((link) => (
              <Link
                className="links"
                key={link.title}
                to={link.title}
                smooth
                duration={500}
                offset={link.offset}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Nav */}
          <MobileNav style=" sm:hidden " />
        </div>
      </div>
    </header>
  );
};

export default Header;
