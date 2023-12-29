import React from "react";
import CommonBanner from "../../components/common/CommonBanner";
import projectBanner from "../../assets/projectbanner.jpg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { projectData } from "../../components/common/data";
const Projects = () => {
  const Bedroom = projectData?.filter((item) => item.type === "Bedroom");
  const Kitchen = projectData?.filter((item) => item.type === "Kitchen");
  const Living = projectData?.filter((item) => item.type === "Living");
  const BathRoom = projectData?.filter((item) => item.type === "Bathroom");
  const Wall = projectData?.filter((item) => item.type === "Wall");
  return (
    <div>
      <CommonBanner
        title={"Our Project"}
        bread1={"Home"}
        bread2={"Projects"}
        bannerImage={projectBanner}
      />
      <div className="max-w-[360px] md:max-w-[720px] md:h-[380px] lg:max-w-[1100px] mx-auto mt-[35px] lg:mt-[70px]">
        <Tabs value="html">
          <TabsHeader>
            <Tab>Bedroom</Tab>
            <Tab>Kitchen</Tab>
            <Tab>Living</Tab>
            <Tab>BathRoom</Tab>
            <Tab>Wall</Tab>
          </TabsHeader>
          {/* <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;
