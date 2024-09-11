import React, { useEffect, useState } from "react";
import IMAGES from "../../assets/IMAGES";
import Navbar from "../../components/AppDrawer/Navbar";
import Footer from "../Dashboard/Footer";
import "./ContactUs.css";
import axios from "axios";
import StandardDropdown from "../../components/CustomDropdown/CustomDropdown";
import Lottie from "react-lottie-player";
import LOTTIE from "../../assets/LOTTIE";


function ContactUs() {
  const [contactUsTransaction, setContactUsTransaction] = useState(false);
  const [contactUsResRecord, setContactUsResRecord] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const NumberInputOnly = (inputString) => {
    let result = inputString.replace(/[^0-9]/g, "");
    return result;
  };
  function isValidEmail(email) {
    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ReqDemoAddFields, setReqDemoAddFields] = useState([
    {
      TITLE: "Full Name",
      DROPDOWN: false,
      INPUT_TYPE: "text",
      KEY: "NAME",
      FIRST_CAPITAL: true,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
      PLACEHOLDER: "Manager Name",
    },
    {
      TITLE: "Work Email",
      DROPDOWN: false,
      INPUT_TYPE: "text",
      KEY: "EMAIL_ID",
      FIRST_CAPITAL: false,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
      PLACEHOLDER: "Email ID",
    },
    {
      TITLE: "Contact",
      DROPDOWN: false,
      INPUT_TYPE: "number",
      KEY: "CONTACT",
      FIRST_CAPITAL: false,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
    },
    {
      TITLE: "Company",
      DROPDOWN: false,
      INPUT_TYPE: "text",
      DROPDOWN_OPTIONS: [],
      KEY: "COMPANY_NAME",
      FIRST_CAPITAL: false,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
      PLACEHOLDER: "Select Company",
    },
    {
      TITLE: "Company SIze",
      DROPDOWN: true,
      INPUT_TYPE: "text",

      DROPDOWN_OPTIONS: [
        {
          label: "0-9 Employee",
          value: "UPTO9",
        },
        {
          label: "10-99 Employee",
          value: "UPTO99",
        },
        {
          label: "100-599 Employee",
          value: "UPTO599",
        },
        {
          label: "600-999 Employees",
          value: "UPTO999",
        },
        {
          label: ">1000 Employees",
          value: "UPTO1000",
        },
      ],
      KEY: "COMPANY_SIZE",
      FIRST_CAPITAL: false,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
      PLACEHOLDER: "Select Company",
    },
    {
      TITLE: "How you got to know about us?",
      DROPDOWN: true,
      INPUT_TYPE: "text",
      DROPDOWN_OPTIONS: [
        {
          label: "Instagram",
          value: "INSTAGRAM",
        },
        {
          label: "Promotions Ad campaign",
          value: "PROMOTIONAL_AD_CAMPAIGN",
        },
        {
          label: "Whatsapp",
          value: "WHATSAPP",
        },
        {
          label: "You Tube",
          value: "YOUTUBE",
        },
        {
          label: "Website",
          value: "WEBSITE",
        },
        {
          label: "Search Engines",
          value: "SEARCH_ENGINES",
        },
      ],
      KEY: "REFERRAL",
      FIRST_CAPITAL: false,
      VALUE: "",
      INFO: "",
      IS_REQUIRED: true,
      ERROR_FLAG: false,
      PLACEHOLDER: "Select Option",
    },
  ]);

  const handleInputChange = (value, index) => {
    let tempReqDemoAddFields = [...ReqDemoAddFields];
    let TempValue;

    if (tempReqDemoAddFields[index]?.INPUT_TYPE == "number") {
      TempValue = NumberInputOnly(value);
    } else if (tempReqDemoAddFields[index]?.FIRST_CAPITAL) {
      TempValue = capitalizeFirstLetter(value);
    } else {
      TempValue = value;
    }
    tempReqDemoAddFields[index].VALUE = TempValue;
    tempReqDemoAddFields[index].ERROR_FLAG = false;
    setReqDemoAddFields(tempReqDemoAddFields);
  };
  const validateData = () => {
    let temp_is_error = false;
    let tempReqDemoAddFields = [...ReqDemoAddFields];
    tempReqDemoAddFields.map((val) => {
      if (val.IS_REQUIRED == true && val.VALUE == "") {
        val.ERROR_FLAG = true;
        temp_is_error = true;
      } else if (val.KEY == "EMAIL_ID") {
        if (isValidEmail(val.VALUE) == false) {
          val.ERROR_FLAG = true;
          temp_is_error = true;
        }
      }
    });
    console.log("Sdasdas", temp_is_error);
    setReqDemoAddFields(tempReqDemoAddFields);

    return temp_is_error;
  };
  const handleReqADemo = () => {
    let IS_ERROR_FOUND = validateData();
    if (IS_ERROR_FOUND == false) {
      setContactUsTransaction(true);
      let tempReqDemoAddFields = [...ReqDemoAddFields];
      let payload = {};
      tempReqDemoAddFields.map((val) => {
        if (val.DROPDOWN == true) {
          payload[val.KEY] = val.VALUE?.value;
        } else {
          payload[val.KEY] = val.VALUE;
        }
      });
      axios
        .post(
          "https://pdhanewala.com:7000/ContactUs/emailSendForContactUs",
          payload
        )
        .then((response) => {
          setContactUsResRecord(true);
          setContactUsTransaction(false);
          let tempReqDemoAddFields = [...ReqDemoAddFields];
          tempReqDemoAddFields.map((val) => {
            val.VALUE = "";
          });
          setReqDemoAddFields(tempReqDemoAddFields);
        })
        .catch((err) => {});
    }
  };
  return (
    <div>
      <Navbar />
      <div className="mx-auto">
        <div className="pb-12 pt-30 md:pb-20 md:pt-40">
          <img
            src={IMAGES.contactUs}
            style={{
              height: 500,
              width: "100%",
            }}
          />
          <div className="grid text-left justify-between lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left md: ;">
            <div className="md:ml-10 mt-32 lg:ml-10 p-3 ">
              <p className="text-4xl font-bold lg:max-w-100 min-w-50  text-4xl mb-5 mt-5 ml-1">
                Get in Touch With Us
              </p>
              <p className="text-xl lg:max-w-100 min-w-50  text-xl mb-5 mt-5 ml-1">
                Want to know more about our services, products, or other
                opportunities? We'll be glad to assist you with the same. Simply
                drop a message and one of our representatives will get back to
                you.
              </p>
              <div
                className="flex"
                style={{
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20,
                    backgroundColor: "#0091cc",
                  }}
                />
                <p className="text-xl md:ml-10 lg:max-w-100 min-w-50 text-xl mb-5 mt-5 ml-1">
                  Connect with our technical expert
                </p>
              </div>
            </div>
            <div className="md:mt-16 lg:mr-10 mb-10 p-2">
              <div className="card p-5  light text-foreground bg-background lg:min-w-full">
                {ReqDemoAddFields.map((val, index) => {
                  return (
                    <div key={index}>
                      <div
                        className="flex"
                        style={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <p className="input-box-title mt-2">{val.TITLE}</p>
                        {val.IS_REQUIRED == true && (
                          <span
                            style={{
                              color: "red",
                              fontSize: 12,
                            }}
                          >
                            *
                          </span>
                        )}
                      </div>

                      {val.DROPDOWN == false && (
                        <input
                          className="input"
                          type="search"
                          placeholder={val.TITLE}
                          labelPlacement="outside"
                          value={val.VALUE}
                          onChange={(e) => {
                            handleInputChange(e.target.value, index);
                          }}
                          errorFlag={val.ERROR_FLAG}
                          errorMessage={
                            val.ERROR_FLAG ? `Please fill ${val.TITLE}` : ""
                          }
                        />
                      )}
                      {val.DROPDOWN == true && (
                        <StandardDropdown
                          type=""
                          label={val.TITLE}
                          size={"sm"}
                          placeholder={val.PLACEHOLDER}
                          options={val.DROPDOWN_OPTIONS}
                          value={val.VALUE}
                          onChange={(e) => {
                            console.log("SAasdasd", e);
                            handleInputChange(e, index);
                          }}
                          errorFlag={val.ERROR_FLAG}
                          errorMessage={
                            val.ERROR_FLAG ? `Please fill ${val.TITLE}` : ""
                          }
                        />
                      )}
                    </div>
                  );
                })}

                <div className="flex flex-row-reverse">
                  {contactUsTransaction == false && (
                    <div>
                      <button
                        className="mt-5  button get-started-btn"
                        onClick={() => {
                          handleReqADemo();
                        }}
                      >
                        Request a Demo
                      </button>
                    </div>
                  )}
                  {contactUsTransaction == true && (
                    <div>
                      <button
                        className="mt-5 "
                        style={{
                          width: 180,
                        }}
                        onClick={() => {}}
                      >
                        {/* <Spinner
                          size="sm"
                          color="default"
                          labelColor="foreground"
                        /> */}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {contactUsResRecord && (
                <div
                  className="card p-2 mt-2 "
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  <div
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 20,
                      backgroundColor: "#0091cc",
                    }}
                  />
                  <p
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Thanks you!
                  </p>
                  <p
                    style={{
                      color: "#000",
                    }}
                  >
                    Our will team will connect you as soon as possible
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <Lottie
                      loop
                      animationData={LOTTIE.confetti}
                      play
                      style={{
                        width: 200,
                        height: 200,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
