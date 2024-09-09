import React from 'react'
import "./Footer.css"
import ICONS from '../../assets/ICONS';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top flex justify-between">
          <img src={ICONS.BetaCodeLogo} alt="BetaCode Logo" className="footer-logo" />
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
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Leadership</a>
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
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>OUR PRODUCTS</h4>
            <ul>
              <li>
                <a href="#">Fleetmax</a>
              </li>
              <li>
                <a href="#">Payment Dashboard</a>
              </li>
              <li>
                <a href="#">SuprSales</a>
              </li>
              <li>
                <a href="#">TimeSheet</a>
              </li>
              <li>
                <a href="#">Vendor Connect</a>
              </li>
              <li>
                <a href="#">WhatsApp Services</a>
              </li>
              <li>
                <a href="#">Ask Tina</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
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
          </div>
          <div className="footer-column subscribe-column">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p>
              Share your email id below to subscribe to latest news and
              information from us.
            </p>
            <input type="email" className='min-w-full mt-2' placeholder="your email address" />
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

export default Footer