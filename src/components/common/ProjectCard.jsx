/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProjectCard = ({ e }) => {
  console.log(e, e);
  return (
    <div className="md:h-[400px] lg:h-[600px]">
      <div className="md:h-[323px] lg:h-[470px] overflow-hidden">
        <img
          src={e.img}
          alt={`Comfortable ${e?.title} in contemporary home setting`}
          className="h-full w-full object-fill rounded-tr-[80%] hover:scale-125 transition-all duration-500 cursor-pointer hover:rounded-none"
        />
      </div>
      <h1 className="text-[25px] md:text-[22px] lg:text-[25px] mt-[15px] text-start px-1">
        {e?.title}
      </h1>
      <p className="md:text-xl lg:text-[22px] text-normal text-start mt-[-5px] text-[#4D5053] px-1">
        {e?.Category}
      </p>

      <Link to={`/projects/${e.id}`}>
        <div className="box">
          <div className="studio-button">
            <div className="studio-button-icon">
              <IoIosArrowForward className="text-2xl" />
            </div>
            <div className="studio-button-label">View Details</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
