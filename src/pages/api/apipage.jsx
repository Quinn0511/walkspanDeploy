/*users.jsx*/
import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/navigationBar";
import "./apiStyles.css";
import Prices from "../../component/prices";
import Footer from "../../component/footer";
import GoogleAddressComplete from "../../temporary/GoogleAddressComplete";
import { MyContext } from "../../temporary/context-manager";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getAPI } from "../../actions/api";
import { notification, Select } from "antd";
import { Input } from "antd";
import APIDocument from "./apiDocument";
const { TextArea } = Input;

const { Option } = Select;

const mapStateApi = (state) => state.api;
/* We simply can use an array and loop and print each user */
const APIPage = () => {
  const dispatch = useDispatch();
  const { APIResult } = useMappedState(mapStateApi);

  const [addressInput, setAddress] = useState();

  const [scopeInput, setScopeSelect] = useState("Block");
  const [featureInput, setFeaturesSelect] = useState("Safety");
  const [requestInput, setRequest] = useState("Your request will show here!");
  const [responseInput, setResponse] = useState(
    "Score of your request will display here!"
  );
  const scopeChange = (props) => {
    setScopeSelect(props);
  };
  const featureChange = (props) => {
    setFeaturesSelect(props);
  };

  const getRequestString = () => {
    return (
      "http://34.227.93.214:8080/SenseOfWalkAPI_war/data?address=" +
      addressInput +
      "&category=" +
      featureInput +
      "&areatype=" +
      scopeInput
    );
  };

  const handleClick = (props) => {
    if (addressInput === undefined || addressInput === "") {
      notification["info"]({
        message: "Empty Address",
        description: "Please input a validate address!",
      });
      return;
    }

    setRequest(getRequestString());
    setResponse(
      APIResult["scores"]
        ? JSON.stringify(APIResult)
        : "Not available for this address"
    );
  };

  useEffect(() => {
    dispatch(
      getAPI({
        address: addressInput,
        category: featureInput,
        areatype: scopeInput,
      })
    );
  }, [dispatch, addressInput, featureInput, scopeInput]);

  const hanldeRequestAPI = () => {
    window.location.href = "/contact";
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <section
          className="page-section bg-light"
          id="walkspan-api-introduction"
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading-minor text-orange text-left">
                Walkspan API
              </h2>
              <h3 className="section-subheading">
                The Sense of Wlak API empowers home buyers and renters to find
                neighborhoods that meet their walking criteria. Defined from
                most to least walkable, sidewalk quality can be viewed at block,
                quarter mile and neighborhood scales. We measured seven
                walkability features - Nature, Architecture, Amenities, Comfort,
                Safety, Interest and Access.{" "}
              </h3>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="page-section bg-light" id="walkspan-api-explorer">
          <div className="text-center">
            <div className="container">
              <h4 className="section-heading-minor text-orange text-md-center">
                API Explorer
              </h4>
              <div className="parameter-selector">
                <div className="parameter">
                  <div className="form-group">
                    <div id="address">Enter an Address</div>
                    <MyContext.Provider value={{ setAddress }}>
                      <GoogleAddressComplete />
                    </MyContext.Provider>
                  </div>
                </div>

                <div className="parameter">
                  <div className="form-group">
                    <div id="category">Select Walkability Feature</div>
                    <Select
                      className="selector"
                      placeholder="Select a feature"
                      onChange={featureChange}
                      defaultValue="Safety"
                    >
                      <Option value="Nature">Nature</Option>
                      <Option value="Access">Access</Option>
                      <Option value="Amenities">Amenities</Option>
                      <Option value="Architecture">Architecture</Option>
                      <Option value="Comfort">Comfort</Option>
                      <Option value="Interest">Interest</Option>
                      <Option value="Safety">Safety</Option>
                    </Select>
                  </div>
                </div>

                <div className="parameter">
                  <div className="form-group">
                    <div id="area-type">Select Scope</div>
                    <Select
                      className="selector"
                      placeholder="Select a scope"
                      onChange={scopeChange}
                      defaultValue="Block"
                    >
                      <Option value="Block">Block</Option>
                      <Option value="Quarter-Mile">Quarter Mile</Option>
                      <Option value="Neighborhood">Neighborhood</Option>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="text-center">
                {/*<input
                  type="submit"
                  value="Try API"
                  className="btn btn-primary text-white"
                  id="apibutton"
                  onClick={handleClick}
                />*/}
                <button className="btn-primary" onClick={handleClick}>
                  Try API
                </button>
              </div>

              <div className="inline-div" id="request">
                <div className="api-explorer-function">Request</div>
                <TextArea
                  className="form-control"
                  id="inputarea"
                  name="message"
                  rows="15"
                  defaultValue="Your request will show here!"
                  value={requestInput}
                ></TextArea>
              </div>
              <div className="inline-div" id="response">
                <div className="api-explorer-function">Response</div>
                <TextArea
                  className="form-control"
                  id="outputarea"
                  name="message"
                  rows="15"
                  defaultValue="Score of your request will display here!"
                  value={responseInput}
                ></TextArea>
              </div>
              <div className="text-center"></div>
              {/*<div className="text-center">
                <input
                  type="submit"
                  value="Request an API key!"
                  className="btn btn-primary text-white"
                  id="requestbutton"
                />
                </div>*/}
              <button className="btn-primary" onClick={hanldeRequestAPI}>
                Request an API key
              </button>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          className="page-section bg-light"
          id="walkspan-api-documentation"
        >
          <div className="container">
            <APIDocument />
          </div>
        </section>
      </div>

      <Prices />
      <Footer></Footer>
    </div>
  );
};

export default APIPage;
