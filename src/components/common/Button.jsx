/* eslint-disable react/prop-types */

import { MdArrowForward } from "react-icons/md";

const Button = ({ title, aria }) => {
  return (
    <button
      className="i rounded-[10px] lg:rounded-[14px] px-[20px] lg:px-[40px] py-[10px] lg:py-[18px] flex justify-center items-center gap-1 bg-[#C16828] text-white hover:bg-[#d6763e] hover:text-white mt-4 lg:mt-8 text-xl lg:mx-0 drop-shadow-xl absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"
      aria-label={aria}>
      <p className="text-[14px] lg:text-[18px] font-semibold">{title}</p>{" "}
      <MdArrowForward className="arrow1" />
    </button>
  );
};

export default Button;
