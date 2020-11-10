/*users.jsx*/
import React, { useEffect, useState } from "react";
import NavigationBar from "../../component/navigationBar";
import "./dataStyles.css";
import Footer from "../../component/footer";
import Prices from "../../component/prices";
import arrowImage from "../../img/data/arrow.png";
import dividerImage from "../../img/data/divider.png";
import backgroundImage from "../../img/homepage/contact-form.png";
import Table from "./Table.jsx";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getData } from "../../actions/data";
import { Select } from "antd";
const { Option } = Select;

/* We simply can use an array and loop and print each user */

const mapStateData = (state) => state.data;

const getTableData = (DATAResult) => {
  if (DATAResult === undefined) {
    //return defaultTableData;
    return;
  } else {
    var tableData = [];
    for (var i = 0; i < 10; i++) {
      var jdata = {
        Score: DATAResult["score"][i],
        "Area Name": DATAResult["areaname"][i],
        Latitude: DATAResult["latitude"][i],
        Longitude: DATAResult["longitude"][i],
      };
      tableData[i] = jdata;
    }
    return tableData;
  }
};
const DataPage = () => {
  const dispatch = useDispatch();

  const { DATAResult } = useMappedState(mapStateData);
  const [cityInput, setCity] = useState("New York");
  const [categoryInput, setCategory] = useState("Nature");
  const [areatypeInput, setAreatype] = useState("Block");
  const [tabledataInput, setTabledata] = useState();
  const [descriptionWords, setDescriptionWords] = useState();
  const cityChange = (props) => {
    setCity(props);
  };
  const categoryChange = (props) => {
    setCategory(props);
  };
  const areatypeChange = (props) => {
    // console.log(props);
    setAreatype(props);
  };

  const tableDataChange = (props) => {
    dispatch(
      getData({
        city: cityInput,
        category: categoryInput,
        areatype: areatypeInput,
      })
    );
  };

  useEffect(() => {
    setTabledata(getTableData(DATAResult));
    setDescriptionWords(
      `The table below is the sample data for ${categoryInput} feature in ${cityInput} with the scope ${areatypeInput}:`
    );
  }, [DATAResult]);

  const hanldeAccessFullDataset = () => {
    window.location.href = "/contact";
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <section
          className="page-section bg-light"
          id="walkspan-data-introduction"
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading-minor text-orange text-left">
                Walkspan Data
              </h2>
              <h3 className="section-subheading">
                Using our widget builder, add Walkspan data to your site
                seamlessly works with property search website, buyers, sellers,
                investors, and developers to gain immediate access to
                walkability data. works with property search website, buyers,
                sellers, investors, and developers gain immediate access to
                walkability data.
              </h3>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section
          className="page-section bg-light"
          id="walkspan-data-infographic"
        >
          <div className="container">
            <div className="infographic">
              <img
                alt="load"
                src={arrowImage}
                style={{ width: "3vw", height: "auto" }}
              />
              <div className="number">100</div>
              <img
                alt="load"
                src={dividerImage}
                style={{ width: "auto", height: "8vw" }}
              />
              <h8>streets and sidewalk data records</h8>
            </div>
            <div className="infographic">
              <img
                alt="load"
                src={arrowImage}
                style={{ width: "3vw", height: "auto" }}
              />
              <div className="number">50</div>
              <img
                alt="load"
                src={dividerImage}
                style={{ width: "auto", height: "8vw" }}
              />
              <h8>major cities across the United States</h8>
            </div>
            <div className="infographic">
              <img
                alt="load"
                src={arrowImage}
                style={{ width: "3vw", height: "auto" }}
              />
              <div className="number">60</div>
              <img
                alt="load"
                src={dividerImage}
                style={{ width: "auto", height: "8vw" }}
              />
              <h8>dimensions to gauge the walkability</h8>
            </div>
          </div>
        </section>
      </div>

      <br />
      <div>
        <section
          className="page-section bg-orange"
          id="walkspan-data-catelog"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading-minor text-light">
                Explore our Walkability Data
              </h2>
            </div>
            <div className="text-md-center">
              <div className="data-found">
                Data Found: <b>7,123,456</b>
              </div>
            </div>
            <br />

            <br />

            <div className="parameter-selector" style={{ textAlign: "center" }}>
              <div className="parameter">
                <div className="form-group">
                  <div
                    style={{
                      color: "white",
                      textAlign: "left",
                      fontFamily: "avenir",
                      fontSize: "1vw",
                    }}
                  >
                    Select City
                  </div>
                  <Select
                    className="selector"
                    placeholder="Select a city"
                    onChange={cityChange}
                    defaultValue="New York"
                  >
                    <Option value="New York">New York City</Option>
                    <Option value="Chicago">Chicago</Option>
                  </Select>
                </div>
              </div>

              <div className="parameter">
                <div className="form-group">
                  <div
                    style={{
                      color: "white",
                      textAlign: "left",
                      fontFamily: "avenir",
                      fontSize: "1vw",
                    }}
                  >
                    Select Walkability Feature
                  </div>
                  <Select
                    className="selector"
                    placeholder="Select a feature"
                    onChange={categoryChange}
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
                  <div
                    style={{
                      color: "white",
                      textAlign: "left",
                      fontFamily: "avenir",
                      fontSize: "1vw",
                    }}
                  >
                    Select Scope
                  </div>
                  <Select
                    className="selector"
                    placeholder="Select a scope"
                    onChange={areatypeChange}
                    defaultValue="Block"
                  >
                    <Option value="Block">Block</Option>
                    <Option value="Quarter-Mile">Quarter Mile</Option>
                    <Option value="Neighborhood">Neighborhood</Option>
                  </Select>
                </div>
              </div>
            </div>

            <br />
            <div className="text-center">
              <button
                type="button"
                className="btn btn-block-light  btn-lg btn-primary"
                style={{
                  marginTop: "15px",
                  backgroundColor: "white",
                  width: "300px",
                }}
                onClick={tableDataChange}
              >
                <span style={{ color: "#db6333" }}>
                  Click to try Sample Record
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {tabledataInput && (
        <div>
          <br></br>
          <br></br>

          <div className="text-md-center">{descriptionWords}</div>

          <br></br>
          <div className="table-center">
            <Table data={tabledataInput} />
          </div>
        </div>
      )}

      <div>
        <div className="text-center">
          <div id="output1"></div>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Access Full Dataset!"
            className="btn btn-primary text-white"
            id="requestbutton"
            onClick={hanldeAccessFullDataset}
          />
        </div>
      </div>
      <br />
      <Prices />

      <Footer />
    </div>
  );
};

export default DataPage;
