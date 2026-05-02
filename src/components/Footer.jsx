import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-linear-to-t from-black to-black/90">
      <div className="container mx-auto py-3 lg:py-6">
        <div className="flex justify-between flex-wrap px-5 lg:px-2 gap-5 md:gap-0">
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
              <p>hossainanik174@gamil.com</p>
              <p>+880 15189563</p>
              <p></p>
              <p>+1800 SKILL-01</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-gray-300 py-3 mt-3 px-5 lg:px-0">
          <h4 className="text-white">© 2026 SkillSphere</h4>

          <div className="flex items-center gap-2 text-white">
            <Link href={'https://www.facebook.com/anik.hossain.174'}><FaFacebook className="h-6 w-6"></FaFacebook></Link>
            <FaXTwitter className="h-6 w-6"></FaXTwitter>
            <Link href={'https://www.linkedin.com/in/anik-hossain174/'}><FaLinkedin className="h-6 w-6"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
