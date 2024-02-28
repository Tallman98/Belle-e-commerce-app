import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneEnabledTwoToneIcon from "@mui/icons-material/PhoneEnabledTwoTone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../features/cartSlice";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" bg-black text-white flex justify-between text-[12px] py-2  px-5 md:px-10">
        <div className="flex gap-2">
          <div className="flex items-end">
            <p>USD</p>
            <ExpandMoreIcon fontSize="small" />
          </div>
          <div className="flex items-end">
            <p>English</p>
            <ExpandMoreIcon fontSize="small" />
          </div>
          <div className="flex items-end">
            <PhoneEnabledTwoToneIcon fontSize="small" />
            <p>+440 0(111) 044 833</p>
          </div>
        </div>

        <div className="hidden md:block">
          <p>WORLDWIDE EXPRESS SHIPPING</p>
        </div>

        <div>
          <div className="  hidden lg:block">
            <div className="flex gap-2">
              <Link to="login">
                <button className="hover:underline">LOGIN</button>
              </Link>
              <Link to="create-account">
                <button className="hover:underline">CREATE ACCOUNT</button>
              </Link>
              <Link to="wishlist">
                <button className="hover:underline">WISHLIST</button>
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            <PersonOutlineIcon />
          </div>
        </div>
      </div>

      <nav
        className={`flex-grow flex justify-between px-4 lg:px-8 mt-3 items-center bg-transparent mb-1 md:absolute z-[50] w-full `}
      >
        <div className="block md:hidden">
          <MenuIcon onClick={handleClick} />
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-[-10px] left-0 h-screen bg-white w-[270px] z-10 shadow-xl text-sm font-[300]">
            <div className="bg-[#2d2d2d16]">
              <div
                className="flex justify-between items-center py-2 px-2"
                onClick={handleClick}
              >
                <p>Close Menu</p>
                <CloseIcon fontSize="small" />
              </div>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b">
              <p>HOME</p>
              <p className="text-xl">+</p>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b">
              <p>SHOP</p>
              <p className="text-xl">+</p>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b">
              <p>PRODUCT</p>
              <p className="text-xl">+</p>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b">
              <p>PAGES</p>
              <p className="text-xl">+</p>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b">
              <p>BLOG</p>
              <p className="text-xl">+</p>
            </div>
            <div className="py-2 px-2">
              <p className="font-bold">BUY NOW!</p>
            </div>
          </div>
        )}

        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-10 font-semibold">
            <li className="hover:text-[#17a2b8]">HOME</li>
            <li className="hover:text-[#17a2b8]">SHOP</li>
            <li className="hover:text-[#17a2b8]">PRODUCT</li>
            <li className="hover:text-[#17a2b8]">PAGES</li>
            <li className="hover:text-[#17a2b8]">BLOG</li>
            <li className="hover:text-[#17a2b8]">BUY NOW!</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <div className="hidden md:block">
            <SearchIcon fontSize="large" />
          </div>
          <div className="block">
            <div className="relative z-10">
              <ShoppingBagOutlinedIcon
                fontSize="large"
                onClick={() => dispatch(toggleModal())}
              />
              <div className="flex absolute bottom-[-0.2rem] right-[-0.2rem] bg-[#000] text-white rounded-full justify-center ites-center w-4 px-2">
                <p className="text-[12px]">{amount}</p>
              </div>
            </div>
            <div className="absolute  top-2 right-10 max-w-[320px] w-full">
              <CartModal />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
