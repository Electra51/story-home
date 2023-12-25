import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectCard = ({ e }) => {
  console.log(e, e);
  return (
    <div className="">
      <div className="h-[500px] rounded-tr-[100%]">
        <img
          src={e.img}
          className="h-full w-full object-fill rounded-tr-[50%]"
        />
      </div>
      <h1 className="text-[25px] mt-[15px] text-start px-1">{e?.title}</h1>
      <p className="text-[22px] text-normal text-start mt-[-5px] text-[#4D5053] px-1">
        {e?.Category}
      </p>

      <Link to={`/projects/${e.id}`}>
        <div class="box">
          <div class="studio-button">
            <div class="studio-button-icon">
              <IoIosArrowForward className="text-2xl" />
            </div>
            <div class="studio-button-label">View Details</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
