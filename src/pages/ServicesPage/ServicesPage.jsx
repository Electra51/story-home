import React from "react";
import servicesBanner from "../../assets/serviceBanner.png";
import CommonBanner from "../../components/common/CommonBanner";
import LastPart from "../HomePage/LastPart/LastPart";
import { MdArrowForward } from "react-icons/md";
import SectionHeader from "../../components/common/SectionHeader";
import img1 from "../../assets/serviceImage/1.png";
import img2 from "../../assets/serviceImage/2.png";
import img3 from "../../assets/serviceImage/3.png";
import img4 from "../../assets/serviceImage/4.png";
const ServicesPage = () => {
  return (
    <div>
      <CommonBanner
        title={"Services"}
        bannerImage={servicesBanner}
        bread1={"Home"}
        bread2={"Services"}
      />
      <div className="my-[60px] lg:my-[95px] mx-auto max-w-[360px] md:max-w-[720px] lg:max-w-[1150px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center gap-4 lg:gap-11">
        <div className="text-center px-2 lg:px-4 py-4 lg:py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Project Plan</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold ">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>
        <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Interior Work</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>
        <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Realization</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] md:mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>{" "}
        <div className="text-center px-2 lg:px-4 py-4 lg:py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Project Plan</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold ">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>
        <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Interior Work</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>
        <div className="text-center px-4 py-6 hover:bg-[#f5e3d88a] hover:rounded-[15px]">
          <h1 className="text-2xl tracking-[0.03rem]">Realization</h1>
          <p className="md:text-[18px] text-xl text-[#4D5053] md:mt-1 lg:mt-[15px]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="rounded-[10px] py-[10px] px-[20px] lg:py-[10px] lg:px-[20px] flex justify-center items-center gap-1 text-[#4D5053] hover:bg-[#d6763e] hover:text-white mt-2 lg:mt-8 text-xl mx-auto drop-shadow-xl bg-transparent tracking-wide border-b-2 border-[#d6763e] hover:border-[#d6763e] shadow-md">
            <p className="text-[18px] font-semibold">Read More</p>{" "}
            <MdArrowForward />
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        {" "}
        <SectionHeader
          title={"How We Work"}
          paragraph={
            "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
      </div>
      <div className="mx-auto max-w-[1200px] mt-[130px]">
        <div className="grid grid-cols-2 gap-[104px] items-end">
          <div className="h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-0 right-[-600px]">
              01
            </h1>
            <img
              src={img1}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
          <div className="mb-[60px] w-[456px]">
            <h1 className="text-[35px]">Concept & Details</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[104px] items-end mt-[120px]">
          <div className="mb-[60px] w-[456px]">
            <h1 className="text-[35px]">Idea for Work</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.
            </p>
          </div>{" "}
          <div className="h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-0 left-[-650px]">
              02
            </h1>
            <img
              src={img2}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[104px] items-end mt-[120px]">
          <div className="h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-0 right-[-600px]">
              03
            </h1>
            <img
              src={img3}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
          <div className="mb-[50px] w-[456px]">
            <h1 className="text-[35px]">Design</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[104px] items-end mt-[120px] mb-[150px]">
          <div className="mb-[60px] w-[456px]">
            <h1 className="text-[35px]">Perfection</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
          <div className="h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-0 left-[-650px]">
              04
            </h1>
            <img
              src={img4}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
        </div>
      </div>
      <LastPart />
    </div>
  );
};

export default ServicesPage;
