import React from "react";
import "../pages/homepage/homePageStyles.css";
//import logo from "../img/senofwalk-logo.png";

const twitterIcon = (
  <svg
    t="1599068815890"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2557"
    width="75%"
    height="75%"
  >
    <path
      d="M919.808 298.432c0 277.632-211.328 597.76-597.76 597.76A594.56 594.56 0 0 1 0 801.792a421.504 421.504 0 0 0 311.04-87.04A210.304 210.304 0 0 1 114.816 568.96a210.432 210.432 0 0 0 94.848-3.584 210.176 210.176 0 0 1-168.512-206.08v-2.56a208.64 208.64 0 0 0 95.168 26.24A209.92 209.92 0 0 1 42.88 208.064c0-38.464 10.368-74.56 28.416-105.6a596.608 596.608 0 0 0 433.024 219.52 210.048 210.048 0 0 1 358.016-191.616 421.184 421.184 0 0 0 133.376-50.944 210.688 210.688 0 0 1-92.352 116.16A420.864 420.864 0 0 0 1024 162.56a426.752 426.752 0 0 1-104.832 108.736c0.448 8.96 0.64 18.048 0.64 27.136z"
      fill="#e6e6e6"
      p-id="2558"
    ></path>
  </svg>
);
const facebookIcon = (
  <svg
    t="1599068844268"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3332"
    width="75%"
    height="75%"
  >
    <path
      d="M700.672 153.866V269.17h-68.567c-25.052 0-41.928 5.237-50.668 15.718-8.74 10.48-13.102 26.204-13.102 47.165v82.545H696.3l-17.04 129.28H568.335v331.495H434.693V543.877h-111.37v-129.28h111.37v-95.206c0-54.155 15.14-96.154 45.425-125.998 30.285-29.85 70.605-44.77 120.97-44.77 42.798 0 75.991 1.751 99.584 5.243z"
      fill="#e6e6e6"
      p-id="3333"
    ></path>
  </svg>
);
const linkedinIcon = (
  <svg
    t="1599068708992"
    className="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1151"
    width="75%"
    height="75%"
  >
    <path
      d="M272.571429 357.142857l0 566.285714-188.571429 0 0-566.285714 188.571429 0zm12-174.857143q0.571429 41.714286-28.857143 69.714286t-77.428571 28l-1.142857 0q-46.857143 0-75.428571-28t-28.571429-69.714286q0-42.285714 29.428571-70t76.857143-27.714286 76 27.714286 29.142857 70zm666.285714 416.571429l0 324.571429-188 0 0-302.857143q0-60-23.142857-94t-72.285714-34q-36 0-60.285714 19.714286t-36.285714 48.857143q-6.285714 17.142857-6.285714 46.285714l0 316-188 0q1.142857-228 1.142857-369.714286t-0.571429-169.142857l-0.571429-27.428571 188 0 0 82.285714-1.142857 0q11.428571-18.285714 23.428571-32t32.285714-29.714286 49.714286-24.857143 65.428571-8.857143q97.714286 0 157.142857 64.857143t59.428571 190z"
      p-id="1152"
      fill="#e6e6e6"
    ></path>
  </svg>
);

//Functional Component
const Footer = () => {
  return (
    <>
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left footerLabel">
              New York, NY 10024, info@walkspan.com
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://twitter.com/walkspan_walks"
              >
                {twitterIcon}
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/WalkspanWS/"
              >
                {facebookIcon}
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/accounts/login/?next=/walkspan_nyc/%3Fhl%3Den"
              >
                {linkedinIcon}
              </a>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a className="mr-3 footerLabel" href="#!">
                Privacy Policy
              </a>
              <a className="mr-3 footerLabel" href="#!">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
