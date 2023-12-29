import React from "react";
import img1 from "../../assets/aboutImage/banner1.png";
import img2 from "../../assets/aboutImage/banner2.png";
import Button from "../../components/common/Button";

const AboutSecondPart = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col justify-center items-center mt-[120px]">
        <h1 className="w-[751px] text-[35px] text-center leading-[43px]">
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it
        </h1>
        <p className="text-[23px] text-[#4D5053] mt-9">BUNNY WILLIAMS</p>
      </div>
      <div className="grid grid-cols-2 justify-normal items-center gap-7 mt-[130px]">
        <div className="mb-[30px] w-[452px]">
          <h1 className="text-[50px]">What We Do</h1>
          <p className="text-[22px] text-[#4D5053]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button title={"Our Concept"} />
        </div>
        <div className="h-[500px] rounded-tl-[130px]">
          <img
            src={img1}
            alt=""
            className="h-full w-full object-fill rounded-tl-[130px]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-normal items-center gap-10 mt-[130px]">
        <div className="h-[500px] rounded-tr-[130px]">
          <img
            src={img2}
            alt=""
            className="h-full w-full object-fill rounded-tr-[130px]"
          />
        </div>
        <div className="mb-[30px] w-[452px]">
          <h1 className="text-[50px]">The End Result</h1>
          <p className="text-[22px] text-[#4D5053]">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button title={"Our Portfolio"} />
        </div>
      </div>
    </div>
  );
};

export default AboutSecondPart;
