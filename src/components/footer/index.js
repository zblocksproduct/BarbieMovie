import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#333]">
      <div className="py-[100px] px-[25px] max-w-[924px] w-[100%] m-auto md:flex justify-between items-center">
        <img src="/image 38.png" alt="" className="md:block hidden" />
        <div className="lg:w-[447px] md:w-[300px] max-w-[447px] sm:m-0 m-auto">
          <p className="font-bold text-[16px] text-white ">
            Sign up to get the latest from Mattel!
          </p>
          <div className="flex  pl-5  h-[50px] rounded-full bg-white mt-[18px]">
            <input
              placeholder="Enter your email"
              className="w-full rounded-full indent-4 focus-visible:outline-none"
            />
            <div className="w-[119px] h-[50px] rounded-full bg-[#E93FA6] flex justify-center items-center text-white">
              Sign up
            </div>
          </div>
          <div className="flex justify-start items-start mt-[34px]">
            <input type="checkbox" className="rounded-xl" />
            <div className="max-w-[418px] ml-[10px]">
              <p className="text-[12px] text-white">
                By submitting my email, I confirm I want to receive emails from
                Mattel and other trusted Mattel brands and programs. Click to
                read Mattel's Terms & Conditions and Privacy Statement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
