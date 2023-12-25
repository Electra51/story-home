import React from "react";
import contactImage from "../../assets/contact.jpg";
import CommonBanner from "../../components/common/CommonBanner";
const Contact = () => {
  return (
    <div>
      <CommonBanner
        title={"Contact Us"}
        bannerImage={contactImage}
        bread1={"Home"}
        bread2={"Contact"}
      />
    </div>
  );
};

export default Contact;
