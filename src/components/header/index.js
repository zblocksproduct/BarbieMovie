import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[133px]  max-w-[1600px] m-auto xl:px-[90px] px-[25px] flex justify-between items-center">
        <img
          src="/image 34.png"
          alt=""
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="w-[304px] md:flex hidden justify-between items-center ">
          <div className="flex items-center cursor-pointer">
            <p className="text-[#192A3B] text-[18px] font-medium">Shop</p>
            <img src="/Vector.png" alt="" className="ml-[10px]" />
          </div>
          <div className="flex items-center cursor-pointer">
            <p className="text-[#192A3B] text-[18px] font-medium">Brands</p>
            <img src="/Vector.png" alt="" className="ml-[10px]" />
          </div>{" "}
          <div className="flex items-center cursor-pointer">
            <p className="text-[#192A3B] text-[18px] font-medium">New</p>
            <img src="/Vector.png" alt="" className="ml-[10px]" />
          </div>
        </div>
        <div className="lg:max-w-[379px] max-w-[180px] w-[100%] h-[55px] relative md:block hidden">
          <input
            type="text"
            className="h-full w-full rounded-full lg:indent-12 indent-8 lg:text-[16px] text-[12px]"
            placeholder="What are you looking for?"
            style={{ border: "1px solid rgba(0, 0, 0, 0.20)" }}
          />
          <img
            src="/Vector-1.png"
            alt=""
            className="absolute top-[19px] lg:left-6 left-3"
          />
        </div>
        <div className="md:w-[71px] flex justify-between items-center">
          <img
            src="/Frame 4.png"
            alt=""
            className="cursor-pointer w-[22px] h-[27px] "
          />
          <img
            src="/Vector (2).png"
            alt=""
            className="cursor-pointer w-[22px] h-[27px] md:ml-0 ml-[29px]"
          />
          <img
            src="/Frame 166.png"
            alt=""
            className="ml-[29px] md:hidden block"
          />
        </div>
      </div>
    </div>
  );
}
