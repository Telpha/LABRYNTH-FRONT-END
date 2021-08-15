import React from "react";
import { FaHandsHelping, FaTruck, FaPlusSquare } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiOpenTreasureChest } from "react-icons/gi";
import customer from "../../assets/images/customer.png";
import delivery from "../../assets/images/delivery.png";
import chef from "../../assets/images/chef.png";
const Body = () => {
  return (
    <div className="mt-16 bg-gray-200 sm:pb-16 pb-12 md:mt-20 mb-24 pt-4 lg:pt-16">
      <div className="">
        {" "}
        <h2
          style={{
            fontFamily: "Arial",
          }}
          className="justify-center text-2xl lg:text-4xl sm:mb-12 md:mb-12 pb-12 text-center font-bold ml-auto mr-auto"
        >
          Why Us ?
        </h2>
      </div>
      <div className="grid grid-col sm:grid-cols-1 md:grid-cols-3 gap-4 content-between">
        {/* <div className="flex-felx-col text-center h-28 content-center md:h-52 lg:h-60 items-center self-center">
          <FaHandsHelping className="w-40 md:h-8 h-5 ml-auto mr-auto" /> <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold ">
            Diverse and delightful
          </h2>
        </div>
        <div className="flex-felx-col text-center h-28 content-center md:h-52 lg:h-60 items-center self-center">
          <FaTruck className="w-40 md:h-8 h-5 ml-auto mr-auto" /> <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold ">
            Instant Delivery
          </h2>
        </div> */}
        <div className="flex-felx-col text-center  content-center md:h-52 lg:h-60 items-center self-center">
          <img src={delivery} className="h-52 ml-auto mr-auto" /> <br />
          <h2
            style={{
              fontFamily: "Roboto-bold",
            }}
            className="text-xl md:text-xl lg:text-2xl text-gray-700 font-bold "
          >
            Instant Delivery
          </h2>
        </div>
        <div className="flex-felx-col text-center  content-center md:h-52 lg:h-60 items-center self-center">
          <img src={customer} className="h-52 ml-auto mr-auto" /> <br />
          <h2
            style={{
              fontFamily: "Roboto-bold",
            }}
            className="text-xl md:text-xl lg:text-2xl text-gray-700 font-bold "
          >
            Great Customer Support !
          </h2>
        </div>
        <div className="flex-felx-col text-center  content-center md:h-52 lg:h-60 items-center self-center">
          <img src={chef} className="h-52 ml-auto mr-auto" /> <br />
          <h2
            style={{
              fontFamily: "Roboto-bold",
            }}
            className="text-xl md:text-xl lg:text-2xl text-gray-700 font-bold "
          >
            Home Made By Home-Chefs
          </h2>
        </div>
        {/* <div className="flex-felx-col text-center h-28 content-center md:h-52 lg:h-60 items-center self-center">
          <SiCodechef className="w-40 md:h-8 h-5 ml-auto mr-auto" /> <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold ">
            Home made by home chefs
          </h2>
        </div>
        <div className="flex-felx-col text-center h-28 content-center md:h-52 lg:h-60 items-center self-center">
          <FaPlusSquare className="w-40 md:h-8 h-5 ml-auto mr-auto" /> <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold ">
            Wholesome and healthy
          </h2>
        </div>
        <div className="flex-felx-col text-center h-28 content-center md:h-52 lg:h-60 items-center self-center">
          <GiOpenTreasureChest className="w-40 h-5 md:h-8  ml-auto mr-auto" />{" "}
          <br />
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-bold ">
            Unlock a Treasure of new local flavor
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Body;
