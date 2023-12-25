import React from "react";

const SectionHeader = ({ title, paragraph }) => {
  return (
    <div>
      {" "}
      <h1 className="text-[27px] lg:text-[43px] font-normal">{title}</h1>
      <p className="text-[18px] lg:text-[22px] font-normal md:leading-6 lg:leading-[30px] text-[#4D5053] w-[340px] lg:w-[670px] mx-auto">
        {paragraph}
      </p>
    </div>
  );
};

export default SectionHeader;
