import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
export default function Barbei() {
  const sliderRef = useRef(null);
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  const navigate = useNavigate();
  return (
    <div>
      <img src="/image-37.png" alt="" className="object-contain w-full " />
      <div className="bg-[#FFF5FA]">
        <div className="max-w-[900px] w-[100%] m-auto sm:py-[80px] py-[70px] px-[20px]">
          <p className="text-center text-[#E93FA6] font-bold sm:text-[60px] text-[35px] sm:leading-[63px] leading-[43px]">
            Claim your Barbie token and earn rewards!
          </p>
          <p className="text-[#E93FA6] sm:text-[20px] text-[16px] text-center sm:mt-[50px] mt-[20px]">
            Thank you for watching! Claim your Barbie token below and unlock
            exclusive rewards related to the movie, including offers for
            upcoming films and exciting experiences.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center sm:mt-[60px] mt-[40px]">
            <div
              onClick={() => {
                navigate("/experience");
                window.scrollTo(0, 0);
              }}
              className="max-w-[360px] cursor-pointer w-[100%] h-[74px] bg-[#E93FA6] rounded-full text-white flex justify-center items-center text-[22px] font-medium"
            >
              <img src="/mic.png" alt="" className="mr-[10px]" /> Continue with
              Microsoft
            </div>
            <div
              onClick={() => {
                navigate("/experience");
                window.scrollTo(0, 0);
              }}
              className="max-w-[360px] cursor-pointer w-[100%] sm:ml-[30px] sm:mt-0 mt-[20px] h-[74px] bg-[#E93FA6] rounded-full text-white flex justify-center items-center text-[22px] font-medium"
            >
              <img src="/google.png" alt="" className="mr-[10px]" /> Continue
              with Google
            </div>
          </div>
        </div>
      </div>
      <div
        className="sm:pt-[120px] pt-[70px] pb-[30px] bg-no-repeat  "
        style={{ backgroundImage: "url(/bg.png)" }}
      >
        <div className="max-w-[783px] leading-[44px] px-[25px] flex flex-wrap sm:text-[60px] text-[35px] font-bold items-center justify-center m-auto  sm:mb-[60px] mb-5">
          <p className="text-[#E93FA6]">See the</p>
          <img
            src="/image-19.png"
            alt=""
            className="sm:w-auto w-[66px] sm:h-auto h-[31px] sm:px-[30px] px-2"
          />
          <p className="text-[#E93FA6]">collection...</p>
        </div>
        <div className="sm:flex justify-center mb-[20px] xl:hidden  hidden px-[25px]">
          <div className="w-[50px] h-[50px] cursor-pointer  bg-white rounded-full  flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#E93FA6]"
              onClick={goToPrev}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>

          <div className="w-[50px] cursor-pointer ml-5 h-[50px] bg-white rounded-full  flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#E93FA6]"
              onClick={goToNext}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="xl:max-w-[1220px] lg:max-w-[1020px] max-w-[700px] m-auto px-[20px] relative sm:block hidden">
          <Slider {...settings} ref={sliderRef} className="">
            {["/1.png", "/2.png", "/3.png", "/1.png", "/2.png", "/3.png"]?.map(
              (item) => (
                <div>
                  <section className="relative">
                    <img
                      src={item}
                      alt=""
                      className="xl:w-[367px] xl:h-[398px] w-[283px] h-[307px] m-auto"
                    />
                  </section>
                </div>
              )
            )}
          </Slider>
          <div className="xl:block hidden px-[25px]">
            <div className="w-[50px] h-[50px] cursor-pointer  bg-white rounded-full absolute top-[50%] left-[-30px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#E93FA6]"
                onClick={goToPrev}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </div>
            <div className="w-[50px] cursor-pointer h-[50px] bg-white rounded-full absolute top-[50%] right-[-30px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#E93FA6]"
                onClick={goToNext}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="overflow-scroll myScroll sm:hidden pl-[25px]">
          <div className="flex  w-[725px] ">
            {["/1.png", "/2.png", "/3.png"].map((item) => (
              <div>
                <section className="relative">
                  <img
                    src={item}
                    alt=""
                    className=" w-[217px] h-[235px] mr-5 "
                  />
                </section>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[700px] w-[100%] m-auto mt-[30px] px-[25px]">
          <p className="text-[#000] font-medium text-center sm:text-[16px] text-[8px]">
            By continuing, you accept the zblocks Platform{" "}
            <span className="text-[#FF7337] ">Terms and Conditions </span>
            and agree to be contacted via email.
          </p>
        </div>
      </div>
    </div>
  );
}
