import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../../components/common/data";
import detailsBanner from "../../assets/projectImage/banner.jpg";
import CommonBanner from "../../components/common/CommonBanner";
const ProjectDetails = () => {
  const { id } = useParams();
  const [idData, setIdData] = useState();
  useEffect(() => {
    setIdData(projectData?.filter((e) => e.id == id));
  }, []);

  return (
    <div>
      <CommonBanner title={"Projects Details"} bannerImage={detailsBanner} />
      <div className="mt-[100px] mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Client: </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.client}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Catagory: </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.Category}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Date: </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.date}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Price: </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.price}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Rating : </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.rating}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Review : </h1>
              <p className="ml-2 text-[22px]">{idData[0]?.cient_reviews}</p>
            </div>
            <div className="flex justify-center">
              <h1 className="text-[22px]"> Tags : </h1>
              {idData[0]?.tags?.map((i) => {
                return <p className="ml-2 text-[22px]">{i.name}</p>;
              })}
            </div>
          </div>
          <div>
            <h1 className="text-[40px]">{idData[0]?.title}</h1>
            <p className="mt-2 text-justify text-[#4D5053] text-[22px]">
              {idData[0]?.passage}
            </p>
          </div>
        </div>
        {/* <div className="w-[1200px] h-[541px]">
          <img
            src={idData[0]?.img}
            alt=""
            className="h-full w-full object-fill"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetails;
