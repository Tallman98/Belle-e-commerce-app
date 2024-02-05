import Button from "./Button";
import facebook from "../assets/socials/facebook.svg";
import twitter from "../assets/socials/twitter.svg";
import pintrest from "../assets/socials/pinterest.svg";
import instagram from "../assets/socials/instagram.svg";
import youtube from "../assets/socials/youtube.svg";
import vimeo from "../assets/socials/vimeo.svg";
import location from "../assets/socials/location.svg";
import phone from "../assets/socials/phone.svg";
import mail from "../assets/socials/mail.svg";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { footerLinks } from "../constants";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    console.log("You opened option" + id);
    setIsOpen(!isOpen);
  };
  return (
    <footer className=" w-full">
      <div className="bg-[#2d2d2d16] py-5 border">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row gap-8 w-full px-4 lg:px-0 lg:w-[60%]">
            <h2 className="text-sm text-center">
              SIGN UP FOR <br className="hidden" />{" "}
              <span className="text-xl font-semibold">NEWSLETTER</span>
            </h2>

            <div className="flex w-full">
              <input
                type="text"
                placeholder="Email address"
                className="border px-2 w-full py-2"
              />
              <Button text="subscribe" />
            </div>
          </div>

          <div className="flex gap-5 mt-7">
            <div className="w-[20px]">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="w-[20px]">
              <img src={twitter} alt="facebootwitter" />
            </div>
            <div className="w-[20px]">
              <img src={pintrest} alt="pintrest" />
            </div>
            <div className="w-[20px]">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="w-[20px]">
              <img src={youtube} alt="youtube" />
            </div>
            <div className="w-[20px]">
              <img src={vimeo} alt="vimeo" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-10 px-5">
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between">
          {footerLinks.map((links, i) => (
            <div className="flex flex-col" key={i}>
              <div className="flex justify-between border-b border-[#f4f4f482] md:border-none">
                <p className="mb-2 font-[600] text-lg">{links.title}</p>
                <div className="md:hidden">
                  <ExpandMoreOutlinedIcon
                    fontSize="small"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(i);
                    }}
                  />
                </div>
              </div>
              <ul className="text-sm font-[200] flex flex-col gap-2 my-3">
                {links.links.map((link, i) => (
                  <li
                    key={i}
                    className={`${!isOpen ? "hidden" : "block"} md:block`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col">
            <p className="mb-2 font-[600] text-lg">Contact Us</p>
            <ul className="text-sm font-[200] flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <img src={location} alt="location" className="w-[20px]" />
                <p>
                  55 Gallaxy Enque, <br /> 2568 street, 23568 NY
                </p>
              </li>
              <li className="flex items-center gap-2">
                <img src={phone} alt="phone" className="w-[20px]" />
                <p>(440) 000 000 0000</p>
              </li>
              <li className="flex items-center gap-2">
                <img src={mail} alt="mail" className="w-[20px]" />
                <p>sales@yousite.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-10 pt-5 w-full max-w-[1200px] mx-auto border-t border-[#f4f4f482] text-sm font-[200]">
          <p>Tallmantek 🚀</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
