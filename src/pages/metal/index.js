import React, { useState } from "react";
import * as tga from "../../components/tga-verifier.js";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modal";

export default function Metal() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

async function checkTrue() {
    if (await verify()) {
      openModal();
    }
  }

  async function verify() {
    const conf = {
      code: 'Z1701877086578585',
      id: '44e2eea6-0260-4070-a399-07538e67085a',
    };
    const response = await tga.GatedVerifier.verify(conf);
    if (response.status) {
      // response.data.verified true means user has required NFT.
      return response.data.verified;
    } else {
      console.error(response.data.errorMessage);
      return false;
    }
  }
  
  return (
    <div className="max-w-[1600px] w-[100%] m-auto">
      <Header />
      <div className="lg:h-[550px] sm:h-[495px] bg-[#E93FA6]">
        <div className="sm:flex">
          <div className="lg:w-[45%] sm:w-[50%] sm:py-0 py-[40px]">
            <div className="flex justify-center items-center h-full xl:pl-[80px] pl-[25px] sm:pr-[20px] pr-[25px]">
              <div className="xl:max-w-[560px]   sm:w-[100%] w-[90%] text-white ">
                <p className="xl:text-[90px] sm:text-[60px] text-[40px] font-bold xl:leading-[80px] sm:leading-[60px] leading-[40px]">
                  Roll out the pink carpet{" "}
                </p>
                <p className="sm:text-[20px] text-[16px] max-w-[430px] xl:mt-[50px] sm:mt-[40px] mt-[20px]">
                  Celebrate the theatrical event of the year! Treat kids to
                  dolls and playsets inspireds by Barbie The Movie.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[55%] sm:w-[50%]">
            <img
              src="/image-3.png"
              alt=""
              className="h-[550px] lg:block hidden w-[100%]"
            />
            <img
              src="/image-34-2.png"
              alt=""
              className="lg:h-[550px] h-[495px] lg:hidden sm:block hidden w-[100%]"
            />
            <img
              src="/image34.png"
              alt=""
              className="  sm:hidden h-[248px]  w-[100%]"
            />
          </div>
        </div>
      </div>
      <div
        className="lg:py-[120px] sm:py-[104px] py-[61px] sm:px-[90px] px-[25px]"
        style={{ backgroundImage: "url(/fest.png)" }}
      >
        <div className="sm:px-[44px] px-[25px] py-[46px] bg-white rounded-[16px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
            <div>
              <img src="/image 40.png" alt="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="xl:text-[50px] sm:text-[30px] text-[25px] font-bold xl:leading-[60px] sm:leading-[40px] leading-[30px] lg:text-start sm:text-center">
                Get 20% Off All Barbie Merchandise!
              </p>
              <p className="xl:text-[18px] text-[16px] font-medium lg:text-start sm:text-center lg:mt-0 mt-[20px]">
                If you are a Barbie Movie token owner, claim your exclusive 20%
                discount on all Barbie-themed merchandise from our online store!
                Click below the button below to validate your access and
                automatically apply the offer to all Barbie merch in your
                basket.
              </p>
              <div
                onClick={checkTrue}
                className="cursor-pointer sm:w-[274px] w-[100%] lg:m-0 m-auto lg:mt-0 mt-[40px] sm:h-[78px] h-[60px] flex justify-center items-center rounded-full sm:text-[25px] text-[22px] font-bold text-white bg-[#E93FA6]"
              >
                Apply Discount
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={closeModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-center ">
          <img src="/motivation 2.png" alt="" className="h-[80px] w-[80px]" />
        </div>
        <p className="text-[30px] font-bold text-center text-[#E93FA6]">
          Success!
        </p>
        <p className="text-center text-[#333]">
          {" "}
          Your discounts will be{" "}
          <span className="font-bold text-[16px]">
            automatically applied
          </span>{" "}
          to your basket as you shop. To continue shopping, close this tab.
        </p>
        <img src="/image-4.png" alt="" className="mt-[10px] sm:block hidden" />
      </Modal>
    </div>
  );
}
