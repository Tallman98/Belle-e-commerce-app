import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneEnabledTwoToneIcon from "@mui/icons-material/PhoneEnabledTwoTone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between text-[12px] py-2 px-10 sticky ">
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
              <button>LOGIN</button>
              <button>CREATE ACCOUNT</button>
              <button>WISHLIST</button>
            </div>
          </div>
          <div className="lg:hidden">
            <PersonOutlineIcon />
          </div>
        </div>
      </div>

      <nav className="flex justify-between px-8 mt-3 items-center bg-transparent">
        <div className="lg:hidden">
          <MenuIcon />
        </div>

        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-4">
            <li className="hover:text-[#17a2b8]">Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Buy Now!</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <SearchIcon />
          <ShoppingBagOutlinedIcon />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
