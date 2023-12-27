import React from "react";
import CommonBanner from "../../components/common/CommonBanner";
import projectBanner from "../../assets/projectbanner.jpg";
const Projects = () => {
  return (
    <div>
      <CommonBanner
        title={"Our Project"}
        bread1={"Home"}
        bread2={"Projects"}
        bannerImage={projectBanner}
      />
      <div className="max-w-[360px] md:max-w-[720px] md:h-[380px] lg:max-w-[1100px] mx-auto mt-[35px] lg:mt-[70px]">
        <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
          <li>
            <a href="#page1" class="flex justify-center py-4">
              Pilot Training
            </a>
          </li>
          <li>
            <a
              href="#page2"
              class="flex justify-center bg-white rounded-full shadow text-indigo-900 py-4">
              Titan maintenance
            </a>
          </li>
          <li>
            <a href="#page3" class="flex justify-center py-4">
              Loadout
            </a>
          </li>
          <li>
            <a href="#page4" class="flex justify-center py-4">
              Server Browser
            </a>
          </li>
          <li>
            <a href="#page5" class="flex justify-center py-4">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
