import React, { Component } from "react";
import FeatureUnit from "./FeatureUnit";
import { Col, Row, Avatar } from "antd";
import styles from './index.module.less';

const FeaturesBox = (featuresStatus, selectIcon) => {
  return (
    <div>
      <Row>
        {featuresStatus &&
          featuresStatus.map((item) => {
            return (
              <Col span={6}>
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
  );
};


export default FeaturesBox;
