import React, { useEffect } from "react";
import Navbar from "../../components/AppDrawer/Navbar";
import IMAGES from "../../assets/IMAGES";
import "./AboutUs.css";
import Footer from "../Dashboard/Footer";

function AboutUs() {
  
  const PotentialArr = [
    {
      TITLE: "Commitment to Excellence",
      SUB_TITLE:
        " At the core of our services lies an unwavering commitment to high quality. From meticulous planning to rigorous testing, we uphold the highest standards at every stage of project delivery. With a relentless focus on excellence, we ensure that our solutions not only meet but exceed your expectations, empowering your business with the finest quality services available",
    },
    {
      TITLE: "Adaptability and Innovation",
      SUB_TITLE:
        "Our technology solutions are tailored to seamlessly integrate with your evolving business dynamics. From scalability to flexibility, we ensure your systems grow alongside your vision, empowering you to navigate change with confidence and efficiency. Samishti is committed to assisting clients in leveraging IT investments to gain a competitive edge by offering intelligent, innovative, and effective solutions to their intricate business challenges.",
    },
    {
      TITLE: "Collaborative Spirit",
      SUB_TITLE:
        "Foster innovation and drive results with our collaborative spirit ingrained in every project. Together, we co-create solutions, harnessing collective expertise and insights to propel your business forward. Experience the power of collaboration as we work hand-in-hand towards your success.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <div className="md:pb-20 md:pt-30">
          <div className="about-us-sub-container">
            <img
              src={IMAGES.aboutUs}
              style={{
                height: 700,
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div
              className="text-white max-w-[700px]"
              style={{
                position: "absolute",
                top: 150,
                padding: 10,
                fontSize: 22,
              }}
            >
              <p>
                <span className="text-2xl font-semibold">BetaCode</span> stands
                as a dynamic organisation, forged by a team of seasoned
                technology professionals deeply committed to excellence. Beyond
                mere IT enablement, we invest wholeheartedly in our people and
                immerse ourselves in understanding our clients’ businesses.
              </p>
              {/* <p>
                Operating from strategic hubs in Noida, New Delhi, Kolkata, and
                Pune, our global footprint spans over 200 clients across diverse
                industrial sectors, such as FMCG, Hi -Tech, Chemicals, Pharma
                etc. Since our inception in 2014, our journey has been nothing
                short of unwavering growth and dedication.
              </p> */}
              <p>
                At our core lies a steadfast commitment to resolving business
                challenges and delivering top-tier, sustainable solutions. We
                take immense pride in empowering businesses to elevate their
                value proposition, fostering enduring partnerships and mutual
                success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 flex items-center lg:grid-cols-2">
            <div className="p-10">
              <p className="text-4xl font-semibold">What we Do</p>
              <p className="text-gray text-normal mt-3">
                BetaCode aims to provide cost-effective services by using our
                enhanced global delivery model and industry expertise which
                enable our clients to use IT to enhance business performance,
                increase productivity, implement custom solutions, and
                accelerate time-to-market.
              </p>
              <br />
              <p className="text-gray text-normal">
                We have honed our knowledge management, training, and transition
                practices to ensure seamless deliveries to our esteemed
                customers. Remaining at the forefront of technological
                advancements, we continuously update our expertise to encompass
                emerging technologies, including SAP S4 HANA, Data Center
                Migrations, Cloud Migration, Security Optimization and more.
              </p>
              <br />

              <p className="text-gray text-normal">
                Our understanding of technology extends to identifying the
                evolving needs of business users and providing comprehensive
                support, including facilitating practice testing and delivering
                relevant solutions.
              </p>
            </div>
            <img src={IMAGES.connectPeople} />
          </div>
          <div className="grid grid-cols-1 flex items-center lg:grid-cols-2">
            <img
              src={IMAGES.connectBots}
              style={{
                height: 450,
                width: "100%",
                objectFit: "cover",
              }}
            />

            <div className="p-10">
              <p className="text-gray text-normal mt-3">
                Touted for our proficiency, our knowledge base transcends SAP
                solutions, with a significant number of business users trained
                by us testifying to our expertise. We have curated pre-packaged
                solutions tailored to diverse industry requirements, comprising
                templates, software components, configurations, project
                documentation, and training manuals. These solutions expedite
                project implementations and ensure efficiency and predictability
                across technology landscapes. We also engage our expertise in
                custom solutions as per your requirements.
              </p>
              <br />
              <p className="text-gray text-normal">
                Through our strategic partnership with leading technology
                providers, we enhance our commitment and support for our
                clients. Our portfolio includes numerous cross-platform
                integrations, assisting companies in optimising their IT
                operations and leveraging technology for business growth.
              </p>
              <br />

              <p className="text-gray text-normal">
                Our overarching objective is to deliver significant ROI on our
                clients’ technology investments while fostering well-managed and
                predictable business environments in the ever-evolving
                technological landscape.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-5">
              <p className="text-4xl ">Our Core Values</p>
              <p className="text-5xl text-green-400 mt-5">
                <span className="text-gray-400 mr-2">01</span> Vision
              </p>
              <p className="mt-5 text-gray ">
                We proudly serve as the preferred partner for all our esteemed
                clients, offering world-class Information & Technology solutions
                distinguished by their premium quality and excellence.
              </p>
              <p className="text-5xl text-green-400 mt-5">
                <span className="text-gray-400 mr-2">02</span>Mission
              </p>
              <p className="mt-5 text-gray ">
                We proudly serve as the preferred partner for all our esteemed
                clients, offering world-class Information & Technology soluOur
                mission is to elevate our clients’ businesses and drive their
                success through seamlessly integrated IT solutions that add
                tangible value and foster growth.
              </p>
              <p className="text-5xl text-green-400 mt-5">
                <span className="text-gray-400 mr-2">03</span>Core Values
              </p>
              <p className="mt-5 text-gray ">
                We are committed to cultivating an enjoyable working environment
                for our partners while diligently identifying and addressing our
                clients’ real needs for transformative change with honesty and
                integrity.
              </p>
            </div>

            <div className="col-span-2 p-10">
              <div className="potential-container">
                <p className="text-4xl font-semibold">
                  Unlock Your Full Potential with BetaCode
                </p>

                <p className="text-gray text-normal mt-3">
                  We’re always at the helm of crafting innovative products and
                  solutions tailored to meet the unique needs of industries that
                  are yet to benefit from our products and services. As your
                  trusted technology advisor, this is how we help you bring your
                  vision to fruition.
                </p>
                <br />
                {PotentialArr.map((val) => {
                  return (
                    <div
                      className="card p-10 m-2"
                      style={{
                        backgroundColor: "#fff",
                      }}
                    >
                      <p className="text-2xl font-semibold mb-5 mt-5">
                        {val.TITLE}
                      </p>
                      <p className="text-gray text-xl">{val.SUB_TITLE}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
