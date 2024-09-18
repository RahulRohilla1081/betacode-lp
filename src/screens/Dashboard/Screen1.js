import React from "react";
import IMAGES from "../../assets/IMAGES";
import "./Screen1.css";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { ProductArr } from "../../utils";


function Screen1() {
  const navigate = useNavigate();
  
  const ServicesArr = [
    {
      TITLE: "Cloud Services",

      CLASS_NAME: "innovation-blue-text ",
      IMAGE_CLASS: "mt-8",
      IMAGE: IMAGES.cloud_technology,
      DESCRIPTION:
        "Our cloud services revolutionize the way organizations manage and deploy there IT infrastructure, application, and data. By leveraging cloud technology, scale your business rapidly, innovate efficiently and adapt to changing market dynamics with ease",
    },
    {
      TITLE: "Development Services",
      CLASS_NAME: "innovation-blue-text ",
      IMAGE_CLASS: "mt-8",

      IMAGE: IMAGES.development,
      DESCRIPTION:
        "Our development services in Android, iOS apps, websites, and SEO empower your business to build cutting-edge digital solutions. By leveraging the latest technologies, enhance your online presence, reach your audience effectively, and stay ahead in a competitive market with ease!",
    },
    {
      TITLE: "Integration/Middleware  Services",
      CLASS_NAME: "innovation-blue-text ",
      IMAGE_CLASS: "mt-1",

      IMAGE: IMAGES.technology,
      DESCRIPTION:
        "Integration and middleware solutions play a crucial role in modern business operation, facilitating seamless communication and data exchange between disparate system and platform. These solutions streamline process, enhance efficiency and enable organizations to adapt quickly to changing business requirements,",
    },
    {
      TITLE: "AI/ML Services",
      CLASS_NAME: "innovation-blue-text",
      IMAGE: IMAGES.AI_ML,
      IMAGE_CLASS: "mt-8",

      DESCRIPTION:
        "Our cloud services revolutionize the way organizations manage and deploy there IT infrastructure, application, and data. By leveraging cloud technology, scale your business rapidly, innovate efficiently and adapt to changing market dynamics with ease",
    },
    {
      TITLE: "Support & Maintenance",
      CLASS_NAME: "innovation-blue-text",
      IMAGE: IMAGES.support_maintenance,
      IMAGE_CLASS: "mt-8",

      DESCRIPTION:
        "Support and maintenance services are the backbone of IT operations, ensuring the stability, reliability and security of systems and applications, At BetaCode, we offer a comprehensive suite of support and maintenance services designed to meet the evolving needs of our clients and help them maximize the value of their IT investments",
    },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              YOUR TECHNOLOGY PARTNER FOR <br className="max-lg:hidden" />
              <span className="innovation-blue-text">INNOVATION</span>
              <br />
              AND
              <br />
              <span className="innovation-orange-text"> GROWTH</span>
              <br />
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                At BetaCode, we specialize in driving business growth through
                innovative software automation. Our expert team combines
                hands-on experience with deep technical knowledge to deliver
                solutions tailored for your success.
              </p>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Betacode
                </span>
              </div>
              <div className="font-mono text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  --check our new products
                </span>{" "}
                <br />
                <span className="animate-[code-2_8s_infinite]">GreytSpace</span>
                <br />
                <span className="animate-[code-2_10s_infinite]">
                  Support Help desk
                </span>
                <br />
                <span className="animate-[code-2_12s_infinite]">
                  Accountant
                </span>
                <br />
                <span className="animate-[code-2_14s_infinite]">
                  Payment Dashboard
                </span>
                <br />
                <span className="animate-[code-2_16s_infinite]">
                  Contact Management
                </span>
                <br />
                <span className="animate-[code-2_18s_infinite]">
                  Vendor Management
                </span>
                <br />
                <span className="animate-[code-2_20s_infinite]">Timesheet</span>
                <br />
                <span className="animate-[code-2_22s_infinite]">Chatbots</span>
                <br />
                <span className="animate-[code-2_24s_infinite]">
                  WhatsApp Services
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  Connect with Us
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  sales@betacode.com
                </span>
              </div>
            </div>
          </div>
          <div
            className="mx-auto w-full"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <p className="text-4xl mt-5 font-medium flex justify-center">
                Our Services
              </p>

              <div className="grid grid-cols-1 flex items-center lg:grid-cols-2">
                <div>
                  <p className="text-xl">
                    Our personalized services are designed to address your
                    unique needs, from business transformation to technical
                    expertise, development, support, and beyond. We offer a
                    holistic suite of solutions to propel your business towards
                    unprecedented success.
                  </p>
                </div>
                <img
                  src={IMAGES.GoalAchievement}
                  style={{
                    width: "100%",
                    height: 450,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="flex services-container">
                {ServicesArr.map((val) => {
                  return (
                    <div className="card p-5 m-2 min-w-[330px]">
                      <p
                        className={val.CLASS_NAME}
                        style={{
                          fontSize: 20,
                        }}
                      >
                        {val.TITLE}
                      </p>
                      <img
                        src={val.IMAGE}
                        className={val.IMAGE_CLASS}
                        style={{
                          width: 300,
                          height: 200,
                        }}
                      />
                      <br className="max-lg:hidden" />
                      <p className="text-base font-normal text-gray">
                        {val.DESCRIPTION}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 card navbar-gradient p-10">
                <p className="text-5xl font-semibold text-white">
                  Need a Trusted technology Expert
                </p>
                <p className="text-xl text-white font-normal">
                  Get free consultant from our leading experts and
                </p>
                <button
                  className="mt-5 get-started-btn"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className=" mt-5 flex p-2 bg-white card ">
              <div>
                <div className="flex justify-center">
                  <div>
                    <p className="text-5xl text-center">Our Products</p>
                    <p className="mt-2 text-base font-medium  text-center text-gray">
                      Built to serve the best interests of our clients. Catering
                      to global clientele, our solutions are focused on
                      facilitating operations, enhancing better integration
                      across systems and make way for accurate insights that
                      multiply revenue.
                    </p>
                  </div>
                </div>

                <div className="flex grid grid-cols-1 lg:grid-cols-3">
                  {ProductArr.map((val) => {
                    return (
                      <>
                        <div className="product-card">
                          <p
                            onClick={() => {
                              navigate(val.PATH, {
                                state: {
                                  PRODUCT_DETAILS: val.DETAILS,
                                },
                              });
                            }}
                            className="card1"
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            <p className="text-5xl ">{val.TITLE}</p>
                            <p className="small mt-3">{val.DESCRIPTION}</p>
                            <div className="go-corner" href="#">
                              <div className="go-arrow">*</div>
                            </div>
                            <p className="small mt-3"> + Read More</p>
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Screen1;
