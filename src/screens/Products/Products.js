import React, { useEffect, useState } from "react";
import IMAGES from "../../assets/IMAGES";
import Navbar from "../../components/AppDrawer/Navbar";
import Footer from "../Dashboard/Footer";
import "./Products.css";
import { useLocation, useNavigate } from "react-router-dom";

function GreytSpace(ProductDetails) {
  const location = useLocation();
  const navigate = useNavigate();
  const [ProductDetail, setProductDetails] = useState(location.state.DETAILS);

  useEffect(() => {
    setProductDetails(location.state.PRODUCT_DETAILS);
  }, [location.state]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="relative aspect-video rounded-2xl px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="flex justify-center">
                <img
                  src={ProductDetail?.PROJECT_IMG}
                  style={{
                    borderRadius: 10,
                    ...ProductDetail?.STYLE,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-5xl text-center">{ProductDetail?.TITLE}</p>
          <div className="ml-10 mr-10">
            {ProductDetail?.OVER_VIEW &&
              ProductDetail.OVER_VIEW.map((val) => {
                return (
                  <p className="text-center text-base mt-5 text-gray ">
                    {val.SUB_TITLE}
                  </p>
                );
              })}

            {/* <p className="text-center text-base mt-5 text-gray ">
              GreytSpace streamlines the process of reserving meeting rooms,
              eliminating scheduling conflicts and enhancing workplace
              efficiency. It provides real-time availability updates, allowing
              employees to book rooms instantly.
            </p>
            <p className="text-center text-base mt-5 text-gray">
              The platform integrates with calendar systems, sends automated
              reminders, and offers detailed usage reports to optimize room
              utilization.
            </p>
            <p className="text-center text-base mt-5 text-gray ">
              GreytSpace is ideal for companies looking to enhance
              collaboration, minimize administrative overhead, and ensure that
              their meeting spaces are used to their full potential.
            </p> */}
            <p className="text-3xl  mt-5">Key Benefits</p>
            {ProductDetail?.KEY_BENEFITS &&
              ProductDetail.KEY_BENEFITS.map((val) => {
                return (
                  <div className="">
                    <span className="check-mark" />
                    <span className="text-gray">{val.SUB_BENEFIT}</span>
                  </div>
                );
              })}

            <p className="  mt-5 text-center text-3xl">Explore More</p>

            <p className=" text-xl text-gray">
              Interested in this product? Connect with our technical experts for
              a quick demo or to discover the ideal solution tailored to your
              business needs. You can also visit the Product Website for an
              instant demo. Visit{" "}
              <span
                className="innovation-blue-text cursor-pointer"
                onClick={() => {
                  window.open(ProductDetail?.PROJECT_URL, "_blank");
                }}
                style={{
                  fontSize: 25,
                }}
              >
                {ProductDetail?.PROJECT_NAME}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 mb-10 card navbar-gradient p-10 ">
          <p className="text-5xl font-semibold text-white text-center">
            Need a Trusted technology Expert
          </p>
          <p className="text-xl mt-5 text-white font-normal text-center">
            Take the next step in optimizing your customer experience. Book a
            consultation today and unlock the full potential of personalized,
            efficient engagement for your business.
          </p>
          <div className="flex justify-center">
            <button
              className="mt-5 get-started-btn"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              {" "}
              Book Now
            </button>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default GreytSpace;
