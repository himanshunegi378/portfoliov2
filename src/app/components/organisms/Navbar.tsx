import React from "react";
import NavbarItem from "../molecules/NavbarItem";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="fixed  top-0 w-full backdrop-blur-md bg-white/60 shadow-md z-50 px-6 py-4 flex justify-between items-center"
      style={{
        backgroundColor: "#f9f1e5",
      }}
    >
      <Image src={"/himanshu.png"} alt="Himanshu" className="h-12 w-auto" width={996} height={367}/>

      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
        <li>  
          <NavbarItem label="Home" href="#home" />
        </li>
        <li>
          <NavbarItem label="Projects" href="#projects" />
        </li>
        <li>
          <NavbarItem label="Experience" href="#experience" />
        </li>
        <li>
          <NavbarItem label="Contact" href="#contact" />
        </li>
      </ul>

      <div className="md:hidden"></div>
    </nav>
  );
};

export default Navbar;
