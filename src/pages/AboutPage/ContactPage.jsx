import React from "react";
import Button from "../../components/common/Button";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-[1200px] flex flex-col justify-center items-center">
      <h1 className="text-[50px] w-[634px] text-center">
        Creative project? Let's have a productive talk.
      </h1>
      <div className="mt-[20px]">
        hello{" "}
        <div className="pt-[50px]">
          <Button title={"Send Now"} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
