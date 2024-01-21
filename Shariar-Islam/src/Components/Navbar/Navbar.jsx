import { Link, NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="bg-black text-white w-10/12 py-3  flex mx-auto justify-star  items-center justify-between">
          <p className="w-1/2 flex items-center gap-3">
            <CiLocationOn className="ml-20 text-red-700" /> 1161. Alberta
          </p>
          <div className=" w-1/2 flex gap-3 justify-end mr-2">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="ml-20 text-red-700" />
              +8801850893033
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="ml-20 text-red-700" /> Email Us
            </div>
          </div>
        </div>
        <div className=" bg-red-700 text-white w-2/12 py-3 flex items-center gap-3 px-2">
          <FaFacebookF></FaFacebookF>
          <FaSquareInstagram></FaSquareInstagram>
          <CiLinkedin></CiLinkedin>
        </div>
      </div>

      {/* sticky navbar  */}
      <div className="flex flex-col md:flex-row justify-between w-full bg-black bg-opacity-30 p-5 fixed z-50">
        <div className=" font-bold text-xl">Shariar</div>
        <div>
          <NavLink className={activeLinkStyle} to={"/"}>
            <button className=" btn">Home</button>
          </NavLink>
          <NavLink className={activeLinkStyle} to={"/about"}>
            <button className=" btn">About</button>
          </NavLink>
          <NavLink className={activeLinkStyle} to={"/products"}>
            <button className=" btn">products</button>
          </NavLink>
          <NavLink className={activeLinkStyle} to={"/rentals"}>
            <button className=" btn">Rentals</button>
          </NavLink>
          <NavLink className={activeLinkStyle} to={"/Services"}>
            <button className=" btn">Services</button>
          </NavLink>
          <NavLink className={activeLinkStyle} to={"/contact"}>
            <button className=" btn">Contact</button>
                  </NavLink>
                  
        </div>
      </div>
    </nav>
  );
};

const activeLinkStyle = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "bg-black text-white rounded p-2 mr-2"
    : " hover:bg-red-700 hover:text-white rounded p-2";

export default Navbar;
