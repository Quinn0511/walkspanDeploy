import React from "react";
import "../pages/api/apiStyles.css";

//import logo from "../img/senofwalk-logo.png";
//Functional Component
const Prices = () => {
  return (
    <section className="page-section bg-light" id="walkspan-api-pricing">
      <div className="container">
        <h4 className="section-heading-minor text-orange text-md-center">
          Get Started
        </h4>
        <section className="pricing">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-left">Economy</h5>
                    <div className="price-text">
                      Basic resources for starters and small projects.
                    </div>
                    <h7 className="card-price text-left">
                      $5.99<span className="period">/month</span>
                    </h7>
                    <a href="#" className="btn btn-block btn-primary">
                      Subscribe Now!
                    </a>
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Single User
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        5GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-left">Deluxe</h5>
                    <div className="price-text">
                      More features and flexibility for multiple projects,
                      access to moderate.
                    </div>
                    <h7 className="card-price text-center">
                      $7.99<span className="period">/month</span>
                    </h7>
                    <a href="#" className="btn btn-block btn-primary">
                      Subscribe Now!
                    </a>
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>5 Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        50GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-left">Ultimate</h5>
                    <div className="price-text">
                      More support for sites with heavy traffic. Ideal for Real
                      Estate sites.
                    </div>
                    <h7 className="card-price text-center">
                      $12.99<span className="period">/month</span>
                    </h7>
                    <a href="#" className="btn btn-block btn-primary">
                      Subscribe Now!
                    </a>
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        <strong>Unlimited Users</strong>
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        150GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Public Projects
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        Unlimited Private Projects
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Prices;
