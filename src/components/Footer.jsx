import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-linear-to-t from-black to-gray-950">
      <div className="container mx-auto py-3 lg:py-6">
        <div className="flex justify-between flex-wrap px-5 lg:px-0">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">SkillSphere</h3>
            <div className="space-y-1 text-olive-300 font-bold text-sm">
              <p>About us</p>
              <p>Careers</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Support</h3>
            <div className="space-y-1 text-olive-300 font-bold text-sm">
              <p>Contact</p>
              <p>Terms & conditions</p>
              <p>Privacy policy</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-1 text-olive-300 font-bold text-sm">
              <p>skillsphere@gmail.com</p>
              <p>+1800 SKILL-01</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-300 py-3 mt-3 px-5 lg:px-0">
          <h4 className="text-white">© 2026 SkillSphere</h4>

          <div className="flex items-center gap-2 text-white">
            <FaFacebook></FaFacebook>
            <FaXTwitter></FaXTwitter>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
