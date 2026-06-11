import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Navbar = () => {
  const iconClass =
    "text-3xl  h-8 w-8 text-gray-500  hover:text-gray-600  cursor-pointer";
  const linkClass =
    "py-2 px-3 text-[14px] text-[#6B788E] font-semibold hover:text-amber-600";
  const navigate = useNavigate();
  return (
    <header className="flex gap-8 justify-around items-center bg-[#FFFFFF] py-4 px-39 h-20 border-[#00000026] shadow sticky z-50 top-0 left-0">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="w-24 h-12 py-4 flex items-center gap-2"
      >
        <img className="w-8 h-8" src="logo.png" alt="logo" />
        <h5 className="font-semibold text-[#0C6967] text-[25px]">momos</h5>
      </div>
      <div className="flex gap-2 w-138 h-12 items-center">
        <NavLink to="/about" className={linkClass}>
          About Us
        </NavLink>
        <NavLink to="/menu" className={linkClass}>
          Our Menu
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Our Services
        </NavLink>
        <NavLink to="/allergy-advice" className={linkClass}>
          Allergy Advice
        </NavLink>
      </div>

      <div className=" flex w-90 h-12 gap-8 items-center">
        <div className="flex gap-4 w-32 h-8 items-center">
          <FaFacebook className={iconClass} />
          <AiFillTikTok className={iconClass} />
          <FaInstagramSquare className={iconClass} />
        </div>
        <button className="px-5.5 py-3 rounded-full text-white bg-[#D95103] text-[14px] flex items-center hover:bg-amber-700 cursor-pointer">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Navbar;
