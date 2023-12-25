import React from "react";
import { projectData } from "../../../components/common/data";
import ProjectCard from "../../../components/common/ProjectCard";
const ProjectPart = () => {
  return (
    <div className="my-[60px] lg:my-[95px] mx-auto max-w-[360px] md:max-w-[720px] lg:max-w-[1150px] text-center">
      <h1 className="text-[27px] lg:text-[43px] font-normal">
        Follow Our Projects
      </h1>

      <p className="text-[18px] lg:text-[22px] font-normal md:leading-6 lg:leading-[30px] text-[#4D5053] w-[340px] lg:w-[670px] mx-auto">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-2 mt-[100px]">
        {projectData?.slice(0, 4).map((e, i) => {
          return <ProjectCard e={e} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProjectPart;
