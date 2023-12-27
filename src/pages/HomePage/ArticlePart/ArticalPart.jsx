import React from "react";
import SectionHeader from "../../../components/common/SectionHeader";
import { articleData } from "../../../components/common/data";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const ArticalPart = () => {
  return (
    <div className="my-[60px] lg:my-[95px] mx-auto max-w-[360px] md:max-w-[720px] lg:max-w-[1150px] text-center">
      <SectionHeader
        title={"Articles & News"}
        paragraph={
          "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3 mt-[100px]">
        {articleData?.slice(0, 4).map((e, i) => {
          return (
            <div className="h-[500px] border p-3">
              <div className=" h-[300px] w-full ">
                <img src={e.img} alt="" className="h-full w-full object-fill" />
              </div>
              <h1 className="text-2xl text-start mt-2">{e.title}</h1>
              <div className="flex justify-between items-center mt-10">
                <p>{e.date}</p>
                <Link to={`/article/${e.id}`}>
                  <div class="box">
                    <div class="studio-button2">
                      <div class="studio-button-icon">
                        <IoIosArrowForward className="text-2xl" />
                      </div>
                      <div class="studio-button-label">View Details</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticalPart;
