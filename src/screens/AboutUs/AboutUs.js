import React from "react";
import Navbar from "../../components/AppDrawer/Navbar";
import IMAGES from "../../assets/IMAGES";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <div className="md:pb-20 md:pt-40">
          <img
            src={IMAGES.aboutUs}
            style={{
            //   height: 500,
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
