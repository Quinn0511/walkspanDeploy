import React, { useContext, useState } from "react";

/* Load feature icons*/
import nature_new from "../../../img/widgets/nature-new.png";
import nature_faded from "../../../img/widgets/nature-faded.png";
import architecture_new from "../../../img/widgets/architecture-new.png";
import architecture_faded from "../../../img/widgets/architecture-faded.png";
import amenities_new from "../../../img/widgets/amenities-new.png";
import amenities_faded from "../../../img/widgets/amenities-faded.png";
import interest_new from "../../../img/widgets/interest-new.png";
import interest_faded from "../../../img/widgets/interest-faded.png";
import comfort_new from "../../../img/widgets/comfort-new.png";
import comfort_faded from "../../../img/widgets/comfort-faded.png";
import safety_new from "../../../img/widgets/safety-new.png";
import safety_faded from "../../../img/widgets/safety-faded.png";
import access_new from "../../../img/widgets/access-new.png";
import access_faded from "../../../img/widgets/access-faded.png";
import total_new from "../../../img/widgets/total-new.png";
import total_faded from "../../../img/widgets/total-faded.png";

import { Col, Row, Collapse, Avatar } from "antd";
import { MyContext } from "../../../temporary/context-manager";
import cloneDeep from "lodash/cloneDeep";
import styles from "./AdvancedFeature.module.less";

const { Panel } = Collapse;

const featuresInfo = [
  {
    name: "Nature",
    id: "0",
    img_new: nature_new,
    img_faded: nature_faded,
    description: "Intended for human delight and celebration of nature.",
    isChecked: false,
    title: "For Nature",
    score: 2,
  },
  {
    name: "Architecture",
    id: "1",
    img_new: architecture_new,
    img_faded: architecture_faded,
    description: "Display of iconic architecture and detail.",
    isChecked: false,
    title: "For Architecture",
    score: 2,
  },
  {
    name: "Amenities",
    id: "2",
    img_new: amenities_new,
    img_faded: amenities_faded,
    description: "Utility of pedestrian corridors.",
    isChecked: false,
    title: "For Amenities",
    score: 1,
  },
  {
    name: "Interest",
    id: "3",
    img_new: interest_new,
    img_faded: interest_faded,
    description: "A pedestrian corridor worth looking at.",
    isChecked: false,
    title: "For Interest",
    score: 2,
  },
  {
    name: "Comfort",
    id: "4",
    img_new: comfort_new,
    img_faded: comfort_faded,
    description: "A balance between mobility and rest.",
    isChecked: false,
    title: "For Comfort",
    score: 3,
  },
  {
    name: "Safety",
    id: "5",
    img_new: safety_new,
    img_faded: safety_faded,
    description: "Free of Injury, traffic and crime incidents.",
    isChecked: false,
    title: "For Safety",
    score: 1,
  },
  {
    name: "Access",
    id: "6",
    img_new: access_new,
    img_faded: access_faded,
    description: "Distance to multimodal transit systems.",
    isChecked: false,
    title: "Transit Option",
    score: 2,
  },
  {
    name: "Total",
    id: "7",
    img_new: total_new,
    img_faded: total_faded,
    description: "Overall evaluation for the place",
    isChecked: false,
    title: "For Total",
    score: 3,
  },
];

const AdvancedFeature = () => {
  const { setFeaturesStatus } = useContext(MyContext);
  const [features, setFeatures] = useState(featuresInfo);
  const selectIcon = (index) => {
    //const new_features_info = JSON.parse(JSON.stringify(featuresStatus));
    const new_features_info = cloneDeep(features);
    new_features_info[index].isChecked = !new_features_info[index].isChecked;
    setFeaturesStatus(new_features_info);
    setFeatures(new_features_info);
  };
  return (
    <>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Advanced Feature" key="1">
          <div className={styles.subTitle}> Select Walkability Features</div>
          <div className={styles.featureBox}>
            <Row>
              {features &&
                features.map((item) => {
                  return (
                    <Col key={item.id} span={6}>
                      <div
                        className={styles.featureUnit}
                        onClick={() => selectIcon(item.id)}
                        description={item.description}
                        id={item.id}
                      >
                        <div className={styles.avatar}>
                          {item.isChecked ? (
                            <Avatar size={40} src={item.img_new} />
                          ) : (
                            <Avatar size={40} src={item.img_faded} />
                          )}
                        </div>
                        <p className={styles.featureName}>{item.name}</p>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default AdvancedFeature;
