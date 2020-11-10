/*homepage.jsx*/
import React, { useState, useRef } from "react";
import "./homePageStyles.css";
import NavigationBar from "../../component/navigationBar";
import ResearchWalkability from "./ResearchWalkability";
import Contact from "./contact";
import WalkspanBoostBusiness from "./walkspanBoostBusiness";
import GoogleAddressComplete from "../../temporary/GoogleAddressComplete.js";
import { MyContext } from "../../temporary/context-manager";
import Footer from "../../component/footer";
import widgetsHomepageImage from "../../img/homepage/widget-big.png";
import streetImage from "../../img/walkspan-boost-busines/street.png";
import apiHomepageImage from "../../img/apis/api.jpg";
import Prices from "../../component/prices";
import ButtonItem from "../../component/ButtonItem";
import styles from "./homepage.module.less";

//Functional Component
const HomePage = () => {
  const features_ref = useRef(null);
  const lifestyle_ref = useRef(null);
  const handleFeatureClick = () => {
    features_ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleLifestylesClick = () => {
    lifestyle_ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <NavigationBar />
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">
            Find your home in a Neighborhood Made for Walking
          </div>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">Walkspan Real Estate</h1>
            </div>
            <form className="form">
              <div className="input-group">
                <div
                  style={{
                    display: "flex",
                    width: "50%",
                    marginLeft: "50%",
                  }}
                >
                  <ButtonItem
                    onClick={handleFeatureClick}
                    text={"Try Walkability Features"}
                  ></ButtonItem>

                  <ButtonItem
                    onClick={handleLifestylesClick}
                    text={"Try Lifestyle Essentials"}
                  ></ButtonItem>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
      <div className={styles.walkspan_boost_business}>
        <WalkspanBoostBusiness />
      </div>

      <div
        id="divPage4"
        title="Walkbilitiy Features"
        className="features_page"
        ref={features_ref}
        style={{
          minHeight: "1000px",
          top: "64px",
        }}
      >
        <iframe
          id="iFraWalkspanAPI"
          title="Lifestyle Essentials"
          src="http://3.15.149.128/walkspan-api/"
          scrolling="no"
          style={{
            width: "100%",
            height: "1000px",
          }}
        ></iframe>
      </div>

      <div id="divPage4" className="lifestyle_page" ref={lifestyle_ref}>
        <iframe
          id="iFraWalkspanAPI"
          src="http://sensofwalk-demo-assets.s3-website.us-east-2.amazonaws.com/"
          scrolling="no"
          style={{
            width: "100%",
            height: "1000px",
          }}
        ></iframe>
      </div>

      <section
        className="page-section bg-orange"
        id="walkspan-enables-you-get-most"
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-light">
              Walkspan enables you get the most out of where you live
            </h2>
            <h3 className="section-subheading text-light ">
              Walkspan is a data-driven location intelligence technology firm
              dedicated to the experience of walking. Add some introduction here
              to let the customers now better about our service.
            </h3>
          </div>
        </div>
        <div className="text-md-center">
          <img alt="streer_img" src={streetImage} height="239" width="1489" />
        </div>
      </section>
      <section
        className="page-section bg-light"
        id="add-walkspan-to-your-website"
      >
        <div className="row">
          <div className="column">
            <div className="container">
              <img alt="widget_homepage_img" src={widgetsHomepageImage} />

              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: "15px", width: "200px" }}
              >
                <a href="/widgets" style={{ color: "white" }}>
                  View Our Widget
                </a>
              </button>
            </div>
          </div>
          <div className="column">
            <div className="container ">
              <div className="">
                <h2 className="section-heading text-orange text-center">
                  Walkspan in your app
                </h2>
                <h3 className="section-subheading text-black-50 text-left">
                  Using our widget builder, add Walkspan data to your site
                  seamlessly works with property search website, buyers,
                  sellers, investors, and developers to gain immediate access to
                  walkability data. works with property search website, buyers,
                  sellers, investors, and developers gain immediate access to
                  walkability data.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="page-section bg-orange"
        id="create-using-walkspan-apis"
      >
        <div className="row">
          <div className="column">
            <div className="container ">
              <div className="">
                <h2 className="section-heading text-light text-center">
                  ​Create Using Walkspan
                </h2>
                <h3 className="section-subheading text-light text-left">
                  The sense of walk API empowers home buyers and renters to find
                  neighborhoods that meet their walking criteria. works with
                  property search website, buyers, sellers, investors, and
                  developers gain immediate access to walkability data. works
                  with property search website, buyers, sellers, investors, and
                  developers gain immediate access to walkability data.
                </h3>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="container">
              <img src={apiHomepageImage} />

              <button
                type="button"
                className="btn btn-block-light  btn-lg btn-primary"
                style={{
                  marginTop: "15px",
                  backgroundColor: "white",
                  width: "200px",
                }}
              >
                <a href="/api" style={{ color: "#db6333" }}>
                  View Our API Docs
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <ResearchWalkability />
      <Contact />
      <Prices />
      <Footer />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <script src="../src/common/assets/mail/jqBootstrapValidation.js"></script>
      <script src="../src/common/assets/mail/contact_me.js"></script>
      <script src="scripts.js"></script>
      <script src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"
      />
    </div>
  );
};

export default HomePage;
