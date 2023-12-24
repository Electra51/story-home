import React from "react";
import { MdArrowForward } from "react-icons/md";

const FeaturedServicePart = () => {
  return (
    <div className="my-[95px] mx-auto max-w-[1150px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center gap-11">
      <div className="text-center">
        <h1 className="text-2xl">Project Plan</h1>
        <p className="text-xl text-[#4D5053] mt-[15px]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-8 text-xl mx-auto drop-shadow-xl">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
      <div className="text-center">
        <h1 className="text-2xl">Interior Work</h1>
        <p className="text-xl text-[#4D5053] mt-[15px]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[20px] lg:py-[20px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-8 text-xl mx-auto drop-shadow-xl">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
      <div className="text-center">
        <h1 className="text-2xl">Realization</h1>
        <p className="text-xl text-[#4D5053] mt-[15px]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[20px] lg:py-[20px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-8 text-xl mx-auto drop-shadow-xl">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default FeaturedServicePart;
