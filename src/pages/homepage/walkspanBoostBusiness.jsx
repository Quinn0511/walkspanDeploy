/*homepage.jsx*/
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import "./homePageStyles.css";
import widgetsHomepageImage from "../../img/homepage/widget.png";
import datasHomepageImage from "../../img/homepage/data.png";
import SliderLeftImage from "../../img/homepage/slider-left.png";
import SliderRightImage from "../../img/homepage/slider-right.png";
import apiHomepageImage from "../../img/homepage/API.png";
/* We simply can use an array and loop and print each user */
const WalkspanBoostBusiness = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.knightlab.com/libs/juxtapose/latest/css/juxtapose.css"
      />
      <section className=" page-section" id=" walkspan-boost-business">
        <div className=" container">
          <div className=" text-center">
            <h2 className=" section-heading">Add Walkspan to your Platform</h2>
          </div>
          <div
            id=" map-slider"
            style={{ paddingTop: "50px", paddingBottom: "50px" }}
          >
            <div className="juxtapose" data-startingposition="30%">
              <img alt="before_img"  src={SliderLeftImage} data-label="Before"  />
              <img alt="after_img"  src={SliderRightImage} data-label="After"  />
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "200px" }}
              >
                <a href="/api" style={{ color: "white" }}>
                  API
                </a>
              </button>
              <p className="text-muted">
                Our predefined walkability functions seamlessly interacts with
                any operating system
              </p>
              <div className="boost-parts">
                <img alt="api_homepage_img"  src={apiHomepageImage} />
              </div>
              <p className="text-muted">
                When you request an API key, Sense of Walk provides walkability
                data by block, quarter mile and by neighborhood. Selected
                walkability features are plugged into your platform by our top
                engineers to ensure a seamless integration.
                <mark className="link">
                  <br />
                  <a href="/api" style={{ color: "#db6333" }}>
                    Learn More...
                  </a>
                </mark>
              </p>
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "200px" }}
              >
                <a href="/widgets" style={{ color: "white" }}>
                  {" "}
                  Widget
                </a>
              </button>
              <p className="text-muted">
                Our predefined walkability functions seamlessly interacts with
                any operating system
              </p>
              <div className="boost-parts">
                <img alt="widget_homepage_img"  src={widgetsHomepageImage} />
              </div>
              <p className="text-muted">
                Widget builder allows you to add or remove interactive features
                to your site. Content and color schemes can be modified to meet
                preferred aesthetics and functionalities.
              </p>
              <mark className="link">
                <br />
                <a href="/widgets" style={{ color: "#db6333" }}>
                  Learn More...
                </a>
              </mark>
            </div>
            <div className="col-md-4">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "200px" }}
              >
                <a href="/data" style={{ color: "white" }}>
                  Data
                </a>
              </button>
              <p className="text-muted">
                Use our data to analyze and plan a more walkable future
              </p>
              <div className="boost-parts">
                <img alt="data_homepage_img"  src={datasHomepageImage} />
              </div>
              <p className="text-muted">
                Our constantly growing data on sidewalks and pedestrian
                corridors may be used as needed. We measure 200 microscale
                sidewalk data metrics, 80 macroscale sidewalk data metrics and
                have assessed and scored over 80,000 linear miles of sidewalks
                in 35 US cities.
              </p>
              <mark className="link">
                <br />
                <a href="/data" style={{ color: "#db6333" }}>
                  Learn More...
                </a>
              </mark>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalkspanBoostBusiness;
