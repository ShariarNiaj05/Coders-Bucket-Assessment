import { FaHandHoldingUsd } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";


const QuickLinks = () => {
  return (
    <div className=" mt-20 flex flex-col md:flex-row">
      <div
        className="  text-white text-center my-auto p-20 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://github.com/ShariarNiaj05/Coders-Bucket-Assessment/blob/main/Shariar-Islam/src/assets/desktop-wallpaper-health-and-safety-overview-business-law-donut-construction-tools.jpg?raw=true)",
        }}
      >
        <div className=" bg-red-500 opacity-15 absolute inset-0"></div>
        <FaHandHoldingUsd className=" text-white text-4xl text-center mx-auto"></FaHandHoldingUsd>
        <h2 className="text-2xl font-bold mb-4">Sales</h2>
        <p className="text-lg">
          Introducing our Sales Extravaganza! 🌟 Unlock unbeatable deals and
          exclusive offers that will leave you in awe. From must-have gadgets to
          stylish apparel, our Sales Section is your ticket to savings paradise!
          🛍️💰 Don't miss out – shop now and elevate your shopping experience
          with discounts that speak volumes! #SalesSpectacular #ShopSmart
          #IrresistibleDeals
        </p>
      </div>

      <div
        className="  text-white text-center my-auto p-20 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://github.com/ShariarNiaj05/Coders-Bucket-Assessment/blob/main/Shariar-Islam/src/assets/desktop-wallpaper-updated-list-of-health-and-safety-blogs-and-websites-that.jpg?raw=true)",
        }}
      >
        <div className=" bg-black opacity-15 absolute inset-0"></div>
        <MdAttachMoney className=" text-white text-4xl text-center mx-auto"></MdAttachMoney>
        <h2 className="text-2xl font-bold mb-4">Rental</h2>
        <p className="text-lg">
          Introducing our Sales Extravaganza! 🌟 Unlock unbeatable deals and
          exclusive offers that will leave you in awe. From must-have gadgets to
          stylish apparel, our Sales Section is your ticket to savings paradise!
          🛍️💰 Don't miss out – shop now and elevate your shopping experience
          with discounts that speak volumes! #SalesSpectacular #ShopSmart
          #IrresistibleDeals
        </p>
          </div>
          

      <div
        className="  text-white text-center my-auto p-20 w-full bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://github.com/ShariarNiaj05/Coders-Bucket-Assessment/blob/main/Shariar-Islam/src/assets/pngtree-two-yellow-hard-hats-are-sitting-around-a-table-picture-image_3165720.png?raw=true)",
        }}
      >
        <div className=" bg-gray-500 opacity-15 absolute inset-0"></div>
        <MdDesignServices className=" text-white text-4xl text-center mx-auto"></MdDesignServices>
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p className="text-lg">
          Introducing our Sales Extravaganza! 🌟 Unlock unbeatable deals and
          exclusive offers that will leave you in awe. From must-have gadgets to
          stylish apparel, our Sales Section is your ticket to savings paradise!
          🛍️💰 Don't miss out – shop now and elevate your shopping experience
          with discounts that speak volumes! #SalesSpectacular #ShopSmart
          #IrresistibleDeals
        </p>
      </div>
    </div>
  );
};

export default QuickLinks;
