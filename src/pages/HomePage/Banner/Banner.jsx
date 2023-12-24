import React from "react";
import heroBanner from "../../../assets/heroBanner.png";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-[70px] text-white">
      <div className="h-[650px] w-[1200px] relative rounded-tl-[100px] rounded-br-[100px] bg-gradient-to-tl from-gray-500 to-[#895531]">
        <img
          src={heroBanner}
          alt=""
          className="h-full w-full object-fill rounded-tl-[100px] rounded-br-[100px] absolute mix-blend-overlay"
        />
        <div className="absolute top-40 left-32">
          <h1 className="text-[65px] font-normal leading-[70px] w-[700px]">
            Let's make your <br /> home beautiful together
          </h1>
          <p className="text-[22px] font-medium w-[447px] mt-3">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <button className="rounded-[14px] px-[40px] lg:px-[40px] py-[20px] lg:py-[20px] flex justify-center items-center gap-1 bg-[#C16828] text-white hover:bg-[#d6763e] hover:text-white mt-8 text-xl mx-auto lg:mx-0 drop-shadow-xl">
            <p className="text-[18px] font-semibold">Get Started</p>{" "}
            <MdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
