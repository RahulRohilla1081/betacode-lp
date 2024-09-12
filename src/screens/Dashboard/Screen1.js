import React from "react";
import IMAGES from "../../assets/IMAGES";
import "./Screen1.css";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

function Screen1() {
  const navigate = useNavigate();
  const ProductArr = [
    {
      TITLE: "GREYT SPACE",

      PATH: "/product?name=greyt-space",
      DETAILS: {
        TITLE: "The Future is Here: An Overview on Greyt Space",
        PROJECT_NAME: "GREYTSPACE",
        PROJECT_IMG: IMAGES.GreytSpace_IMG,
        PROJECT_URL: "https://greytspace.com/",
        OVER_VIEW: [
          {
            SUB_TITLE:
              "Greyt Space meeting room booking application is designed to simplify the entire booking process for companies, ensuring seamless coordination and efficient use of meeting spaces.",
          },
          {
            SUB_TITLE:
              "GreytSpace streamlines the process of reserving meeting rooms, eliminating scheduling conflicts and enhancing workplace efficiency. It provides real-time availability updates, allowing employees to book rooms instantly.",
          },
          {
            SUB_TITLE:
              "The platform integrates with calendar systems, sends automated reminders, and offers detailed usage reports to optimize room utilization.",
          },
          {
            SUB_TITLE:
              "GreytSpace is ideal for companies looking to enhance collaboration, minimize administrative overhead, and ensure that their meeting spaces are used to their full potential.",
          },
        ],
        KEY_BENEFITS: [
          {
            SUB_BENEFIT:
              "Effortless booking: users can quickly login and book meeting rooms in just a few clicks",
          },
          {
            SUB_BENEFIT:
              "Multi Level Approval System: Bookings follow a streamlined approval process, ensuring oversight from Admin to Building Manager.",
          },
          {
            SUB_BENEFIT:
              "Automated Billing : Generate automated invoices every month",
          },
          {
            SUB_BENEFIT:
              "Transparent Billing Details : View billing information, including hours booked by company employees, to maintain transparency and accuracy",
          },
          {
            SUB_BENEFIT:
              "Quick Setup : Easy integration with your existing systems and tools",
          },
          {
            SUB_BENEFIT: "Booking Platforms: Book in MS Teams, Web & Mobile",
          },
        ],
      },
      DESCRIPTION:
        "Greyt Space meeting room booking application is designed to simplify the entire booking process for companies, ensuring seamless coordination and efficient use of meeting spaces.",
    },
    {
      TITLE: "CHATBOT",
      PATH: "/product?name=chat-bots",
      DETAILS: {
        TITLE: "Automate manual work with ChatBots",
        PROJECT_NAME: "CHATBOTS",
        PROJECT_IMG: IMAGES.chatbots,
        PROJECT_URL: "https://greytspace.com/",
        OVER_VIEW: [
          {
            SUB_TITLE:
              "Chatbots have emerged as transformative tools reshaping the way businesses interact with customers and streamline internal processes. These virtual assistants are revolutionizing customer service, sales, and operational efficiency across industries. ",
          },
          {
            SUB_TITLE:
              "By providing instant responses to inquiries, personalized recommendations, and automating tasks, chatbots offer a seamless and efficient way to engage with users. ",
          },
          {
            SUB_TITLE:
              "From enhancing customer engagement to boosting productivity, chatbots are leading the way towards a more streamlined future in business operations. ",
          },
          {
            SUB_TITLE:
              "GreytSpace is ideal for companies looking to enhance collaboration, minimize administrative overhead, and ensure that their meeting spaces are used to their full potential.",
          },
        ],
        KEY_BENEFITS: [
          {
            SUB_BENEFIT:
              "Enhances sales efficiency by simplifying access to SAP S/4HANA processes.",
          },
          {
            SUB_BENEFIT:
              "Allows sales teams to concentrate on customer interactions without distractions.",
          },
          {
            SUB_BENEFIT:
              "Speeds up access to production and process information.",
          },
          {
            SUB_BENEFIT:
              "Reduces the effort involved in routine data retrieval tasks.",
          },
          {
            SUB_BENEFIT:
              "Enhances overall productivity by streamlining information flow.",
          },
          {
            SUB_BENEFIT:
              "Provides real-time access to financial data from SAP or other systems.",
          },
          {
            SUB_BENEFIT:
              "Simplifies financial planning and decision-making processes.",
          },
          {
            SUB_BENEFIT:
              "Offers a quick, user-friendly way to retrieve crucial financial information.",
          },
        ],
      },
      DESCRIPTION:
        "Discover our revolutionary chatbot and their profound impact on your production, sales and finance operations.",
    },
    {
      TITLE: "PAYMENT DASHBOARD",
      PATH: "/product?name=payment-dashboard",
      DETAILS: {
        TITLE: "Gateway to Streamlined Financial Operations",
        PROJECT_NAME: "PAYMENT DASHBOARD",
        PROJECT_IMG: IMAGES.PaymentDashboardImg,
        STYLE: {
          width: 500,
          height: 500,
        },
        PROJECT_URL: "https://greytspace.com/",
        OVER_VIEW: [
          {
            SUB_TITLE:
              "Introducing the Payment Dashboard: A cutting-edge financial application meticulously crafted to revolutionize payment scheduling for businesses across all scales. This innovative platform offers a seamless solution, simplifying the intricate task of managing vendor payments through an intuitive drag-and-drop interface seamlessly integrated with calendar systems.",
          },
          {
            SUB_TITLE:
              "By empowering users to visually organize and schedule payments, the Payment Dashboard ensures timely transactions, optimizes cash flow management, and elevates financial planning to new heights of efficiency and effectiveness.",
          },
          {
            SUB_TITLE:
              "From enhancing customer engagement to boosting productivity, chatbots are leading the way towards a more streamlined future in business operations. ",
          },
          {
            SUB_TITLE:
              "Users can effortlessly schedule payments by dragging them into the desired dates on an interactive calendar. This visual approach to payment management makes planning and rescheduling payments straightforward and error-free.",
          },
        ],
        KEY_BENEFITS: [
          {
            SUB_BENEFIT: "Simplified Payment Scheduling",
          },
          {
            SUB_BENEFIT: "Seamless Vendor Management",
          },
          {
            SUB_BENEFIT: "Timely Payment Reminders",
          },
          {
            SUB_BENEFIT: "Insightful Financial Reporting",
          },
          {
            SUB_BENEFIT: "Enhanced Security",
          },
        ],
      },
      DESCRIPTION:
        "Say goodbye to payment scheduling hassles. Discover our advanced payment dashboard solution for your business",
    },
    {
      TITLE: "TIMESHEET",
      PATH: "/product?name=timesheet",
      DETAILS: {
        TITLE: "Your Ultimate Resource Management Solution",
        PROJECT_NAME: "TIMESHEET",
        PROJECT_IMG: IMAGES.PaymentDashboardImg,
        STYLE: {
          width: 500,
          height: 500,
        },
        PROJECT_URL: "https://timesheet.samishti.com:4000",
        OVER_VIEW: [
          {
            SUB_TITLE:
              "Timesheet revolutionizes resource management by offering precise project and task time tracking, effortless time management, and insightful data analytics. ",
          },
          {
            SUB_TITLE:
              "With Timesheet, businesses can make informed decisions, foster employee development, and enhance productivity, ultimately maximizing the impact of their workforce on project success and business growth.",
          },
          {
            SUB_TITLE:
              "Timesheet stands as an invaluable asset for high-level management and employees alike, offering a clear overview of time allocation and contributing to informed decision-making and individual growth.",
          },
          {
            SUB_TITLE:
              "Accurately track time for every project and task, facilitating precise resource allocation and billing.",
          },
        ],
        KEY_BENEFITS: [
          {
            SUB_BENEFIT: "Project & Task Time Tracking",
          },
          {
            SUB_BENEFIT: "Effortless Time Management",
          },
          {
            SUB_BENEFIT: "Insightful Data Analytics",
          },
          {
            SUB_BENEFIT:
              "Timesheet Enhances Productivity, Efficiency & Resource Management",
          },
          {
            SUB_BENEFIT: "Enhanced Security",
          },
        ],
      },
      DESCRIPTION:
        "Unlock your team's potential with Timesheet, a cutting edge resource management app leveraging time tracking for projects and tasks.",
    },

    {
      TITLE: "WHATSAPP SERVICES",
      PATH: "/product?name=timesheet",
      DETAILS: {
        TITLE: "Take Your Business to Uncharted Heights",
        PROJECT_NAME: "WhatsApp Services",
        PROJECT_IMG: IMAGES.WhatsappServices,
        STYLE: {
          // width: 500,
          // height: 500,
        },
        PROJECT_URL: "https://timesheet.samishti.com:4000",
        OVER_VIEW: [
          {
            SUB_TITLE:
              "WhatsApp has become a widely-used social network, captivating users worldwide with its diverse features and user-friendly interface. ",
          },
          {
            SUB_TITLE:
              "Recognizing its immense potential, businesses are harnessing its power to transform their communication strategies and engage with customers more effectively.",
          },
          {
            SUB_TITLE:
              "This brings us to WhatsApp webhooks and business verification, that can lead to seamless integration and verified security whilst ensuring peace of mind.",
          },
          {
            SUB_TITLE:
              "Our WhatsApp services are all about enabling our business to connect with customers on the world’s most popular messaging platform, providing a secure and interactive communication experience that drives engagement and fosters trust.",
          },
        ],
        KEY_BENEFITS: [
          {
            SUB_BENEFIT: "Real-time Updates",
          },
          {
            SUB_BENEFIT: "Automated Efficiency",
          },
          {
            SUB_BENEFIT: "Personalized Communication",
          },
          {
            SUB_BENEFIT: "Secure Communication",
          },
          {
            SUB_BENEFIT: "Build Trust",
          },
          {
            SUB_BENEFIT: "Direct Customer Engagement",
          },
          {
            SUB_BENEFIT: "Streamlined Automation",
          },
          {
            SUB_BENEFIT: "Enhanced Customer Loyalty",
          },
        ],
      },
      DESCRIPTION:
        "Leverage our tailored Whatsapp Services for instant engagement and cost efficiency.",
    },
  ];
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
      {/* <PageIllustration /> */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            {/* <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            > */}
            {/* <div className="-mx-0.5 flex justify-center -space-x-3">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={IMAGES.GreytSpaceLogo}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div> */}
            {/* </div> */}
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              YOUR TECHNOLOGY PARTNER FOR <br className="max-lg:hidden" />
              <span className="innovation-blue-text">INNOVATION</span>
              <br className="max-lg:hidden" />
              AND
              <br className="max-lg:hidden" />
              <span className="innovation-orange-text"> GROWTH</span>
              <br className="max-lg:hidden" />
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
              {/* <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* Hero image */}
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
                  Accountant
                </span>
                <br />
                <span className="animate-[code-2_12s_infinite]">
                  Support Help desk
                </span>
                <br />
                <span className="animate-[code-2_14s_infinite]">
                  Payment Dashboard
                </span>
                <br />
                <span className="animate-[code-2_16s_infinite]">
                  Chatbots
                </span>
                <br />
                <span className="animate-[code-2_18s_infinite]">
                  WhatsApp Services
                </span>
                {/* <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span> */}
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
                    objectFit:"cover"
                  }}
                />
              </div>
              <div className="flex services-container">
                {ServicesArr.map((val) => {
                  return (
                    <div
                      className="card p-5 m-2 min-w-[330px]"

                      // className="w-[330px] aspect-video rounded-2xl px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]"
                    >
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
                <button className="mt-5 get-started-btn"> Get Started</button>
              </div>
            </div>
            <div className=" mt-5 flex p-2 bg-white card min-w-full">
              <div>
                <div className="flex justify-center">
                  <div>
                    <p className="text-5xl text-center">Our Products</p>
                    <p className="mt-2 text-base font-medium w-[700px] text-center text-gray">
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
                            to={val.PATH}
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
