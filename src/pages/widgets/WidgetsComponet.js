import React, { useEffect, useState } from "react";
import { MyContext } from "../../temporary/context-manager";
import styles from "./WidgetsComponet.module.less";
import { Col, Row, Card, Form } from "antd";
import GoogleAddressComplete from "../../temporary/GoogleAddressComplete.js";
import WidgetBox from "../widgets/WidgetBox/widgetBox";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getWidget } from "../../actions/widget";
import DispalyComponent from "./WidgetPanel/DisplayComponent";
import AdvancedFeature from "./WidgetPanel/AdvancedFeature";

const defaultFeatureScore = {
  Nature: "2",
  Access: "2",
  Amenities: "2",
  Architecture: "2",
  Comfort: "2",
  Interest: "2",
  Safety: "2",
  Total: "2",
};

const showOptions = [
  {
    label: "Speedometer View",
    value: "Speedometer View",
    id: 1,
    isChecked: false,
  },
  {
    label: "Show Description",
    value: "Show Description",
    id: 2,
    isChecked: true,
  },
  {
    label: "Show Icons",
    value: "Show Icons",
    id: 3,
    isChecked: false,
  },
  {
    label: "Show Feature Name",
    value: "Show Feature Name",
    id: 4,
    isChecked: true,
  },
];

const mapStateWidget = (state) => state.widget;

const getFeatureScore = (widgetResult, scopeSelect) => {
  if (widgetResult === undefined) {
    return widgetResult;
  }
  switch (scopeSelect) {
    case "quarterMile":
      return widgetResult.scores["Quarter-Mile"];

    case "neighborhood":
      return widgetResult.scores.Neighborhood;

    case "block":
    default:
      return widgetResult.scores.Block;
  }
};

const WidgetsComponet = () => {
  // used for redux
  const dispatch = useDispatch();
  // read data from redux
  const { widgetResult } = useMappedState(mapStateWidget);

  const [addressInput, setAddress] = useState(
    "573 Hudson St, New York, NY 10014, USA"
  );
  const [featuresStatus, setFeaturesStatus] = useState();
  const [checkedViewOption, setCheckedView] = useState(showOptions);
  const [scopeSelect, setScopeSelect] = useState("block");
  const [featureScore, setFeatureScore] = useState(defaultFeatureScore);

  // used for redux
  useEffect(() => {
    dispatch(getWidget({ address: addressInput }));
  }, [dispatch, addressInput]);

  useEffect(() => {
    setFeatureScore(getFeatureScore(widgetResult, scopeSelect));
  }, [widgetResult, scopeSelect]);

  return (
    <div className={styles.container}>
      <Row gutter={10}>
        <Col span={8}>
          <Card>
            <Form className={styles.controlPanel}>
              <Form.Item className={styles.addressContainer}>
                <div className={styles.subTitle}>Enter an address</div>

                <MyContext.Provider value={{ setAddress }}>
                  <GoogleAddressComplete />
                </MyContext.Provider>
              </Form.Item>
              <Form.Item className={styles.featureContainer}>
                <MyContext.Provider value={{ setFeaturesStatus }}>
                  <AdvancedFeature />
                </MyContext.Provider>
              </Form.Item>
              <Form.Item className={styles.displayContainer}>
                <MyContext.Provider value={{ setScopeSelect, setCheckedView }}>
                  <DispalyComponent />
                </MyContext.Provider>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={16} className={styles.displayContent}>
          {featuresStatus && checkedViewOption &&  <WidgetBox
            features={featuresStatus}
            featureScore={featureScore}
            checkedView={checkedViewOption}
            scope={scopeSelect}
            addressInput={addressInput}
          />
          }
         
        </Col>
      </Row>
    </div>
  );
};

export default WidgetsComponet;
