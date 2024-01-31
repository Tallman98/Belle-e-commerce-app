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

const Footer = () => {
  return (
    <footer className=" w-full">
      <div className="bg-[#2d2d2d16] py-5 border">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="flex gap-8 w-[60%]">
            <h2 className="text-sm">
              SIGN UP FOR <br />{" "}
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

          <div className="flex gap-5">
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
      <div className="bg-black text-white py-10">
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between">
          <div className="flex flex-col ">
            <p className="mb-2 font-[600] text-lg">Quick Shop</p>
            <ul className="text-sm font-[200] flex flex-col gap-2">
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Sportswear</li>
              <li>Sale</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="mb-2 font-[600] text-lg">Information</p>
            <ul className="text-sm font-[200] flex flex-col gap-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Privacy policy</li>
              <li>Terms & conditions</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <p className="mb-2 font-[600] text-lg">Customer Services</p>
            <ul className="text-sm font-[200] flex flex-col gap-2">
              <li>Request Personal Data</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li>Orders and Returns</li>
              <li>Support Center</li>
            </ul>
          </div>

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
