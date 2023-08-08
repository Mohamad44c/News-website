import React from "react";
import "./footer.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi/";

const Footer = () => {
  return (
    <>
      <hr className="section__margin" />
      <div className="news__footer section__padding section__margin">
        <div className="news__footer-links">
          <div className="news__footer-links_div hiddenOnMobile">
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="news__footer-links_div hiddenOnMobile">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="news__footer-links_div hiddenOnMobile">
            <h4>Get in touch</h4>
            <p>Beirut, Lebanon</p>
            <p>+961 03 123123</p>
            <p>info@news.com</p>
          </div>
          <div className="news__social">
            <h4>Follow us</h4>
            <div className="social-icons">
              <BiLogoFacebook className="social" size={30} />
              <BiLogoInstagram className="social" size={30} />
              <BiLogoTwitter className="social" size={30} />
            </div>
          </div>
          <div className="news-letter news__footer-links_div">
            <h4>Join us</h4>
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Subscribe"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="news__footer-copyright">
          <p>© 2023 News. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
