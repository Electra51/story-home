import React from "react";
import { MdArrowForward } from "react-icons/md";

const FeaturedServicePart = () => {
  return (
    <div className="my-[60px] lg:my-[140px] mx-auto max-w-[360px] md:max-w-[720px] lg:max-w-[1150px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center gap-4 lg:gap-11">
      <div className="text-center px-2 lg:px-4 py-4 lg:py-6 group hover:bg-[#f5e3d88a] hover:rounded-[15px] hover:text-[#d6763e]">
        <h1 className="text-2xl tracking-[0.03rem]">Project Plan</h1>
        <p className="md:text-[18px] text-xl text-[#4D5053] group-hover:text-[#d6763e] mt-1 lg:mt-[15px]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
      <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px] group hover:text-[#d6763e]">
        <h1 className="text-2xl tracking-[0.03rem]">Interior Work</h1>
        <p className="md:text-[18px] text-xl text-[#4D5053] mt-1 lg:mt-[15px] group-hover:text-[#d6763e]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
      <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px] group hover:text-[#d6763e]">
        <h1 className="text-2xl tracking-[0.03rem]">Realization</h1>
        <p className="md:text-[18px] text-xl text-[#4D5053] md:mt-1 lg:mt-[15px] group-hover:text-[#d6763e]">
          There are many variations of the passages of lorem Ipsum from
          available, majority.
        </p>
        <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
          <p className="text-[18px] font-semibold">Read More</p>{" "}
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default FeaturedServicePart;
