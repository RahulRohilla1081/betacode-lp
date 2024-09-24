import React from "react";
import "./Footer.css";
import ICONS from "../../assets/ICONS";
import { ProductArr } from "../../utils";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top flex grid grid-col-1 lg:grid-cols-2">
          <img
            src={ICONS.BetaCodeLogo}
            alt="BetaCode Logo"
            className="footer-logo"
          />
          <div className="flex">
            <a href="mailto:sales@betacode.com" className="email-link flex">
              <img
                src={ICONS.message}
                alt="Email Icon"
                className="icon-image"
              />{" "}
              sales@betacode.com
            </a>
            <a href="#" className="linkedin-link ml-2">
              <img
                src={ICONS.linkedin}
                alt="LinkedIn Icon"
                className="icon-image"
              />
            </a>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <p className="text-3xl ">
              Your Trusted Global Technology Partner Since 2014
            </p>
          </div>
          <div className="footer-column">
            <h4>EXPLORE</h4>
            <ul>
              <li>
                <p
                  onClick={() => {
                    navigate("about-us");
                  }}
                >
                  About Us
                </p>
              </li>
              {/* <li>
                <p href="#">Leadership</p>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li> */}
              <li>
                <p
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Contact Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => {
                    navigate("/privacy-policy");
                  }}
                >
                  Privacy Policy
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>OUR PRODUCTS</h4>
            <ul>
              {ProductArr.map((val) => {
                return (
                  <li
                    onClick={() => {
                      navigate(val.PATH, {
                        state: {
                          PRODUCT_DETAILS: val.DETAILS,
                        },
                      });
                    }}
                  >
                    <p>{val.TITLE2}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li>
                <a href="#">Cloud Services</a>
              </li>
              <li>
                <a href="#">Development Services</a>
              </li>
              <li>
                <a href="#">Integration/Middleware Service</a>
              </li>
              <li>
                <a href="#">SAP Business Transformation Services</a>
              </li>
              <li>
                <a href="#">SAP Technical Services</a>
              </li>
              <li>
                <a href="#">Support &amp; Maintenance Services</a>
              </li>
            </ul>
          </div> */}
          <div className="footer-column subscribe-column">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p>
              Share your email id below to subscribe to latest news and
              information from us.
            </p>
            <input
              type="email"
              className="min-w-full mt-2"
              placeholder="your email address"
            />
            <button type="submit">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024, BetaCode</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
