/*homepage.jsx*/
import React from "react";
//import { Link } from "react-router-dom";
import "./homePageStyles.css";
import dataIMG from "../../img/researchWalkability/data.png";

/* We simply can use an array and loop and print each user */
const ResearchWalkability = () => {
  return (
    <div>
      <section className="page-section bg-light" id="research-walkability">
        <div className="row">
          <div className="column">
            <div className="container">
              <img src={dataIMG} alt="" />
              {/* <Link to="/data" className="btn btn-block btn-lg">Use Our Data</Link> */}
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginTop: "15px", width: "200px" }}
              >
                <a href="/data" style={{ color: "white" }}>
                  View Our data
                </a>
              </button>
            </div>
          </div>
          <div className="column">
            <div className="container ">
              <div className="text-center">
                <h2 className="section-heading text-orange text-center">
                  Research Walkability
                </h2>
                <h3 className="section-subheading text-black-50 text-left">
                  Contribute to promoting walkability! Use our data to research,
                  analyze, and plan a more walkable future. works with property
                  search websites, buyers, sellers, investors, and developers to
                  gain immediate access to walkability data.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchWalkability;
