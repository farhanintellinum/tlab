import React from "react";
import { BsYoutube, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="wrapper bg-white py-[17px]">
      <div className="container">
        <div className="w-full flex justify-between items-center">
          <div>
            <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <div className="flex items-center gap-[12px]">
            <BsYoutube />
            <BsWhatsapp />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
