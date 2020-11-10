import React from "react";
import { Progress } from "antd";
import styles from "./index.module.less";

const getProgress = (featureScore) => {
  const score = Math.round(featureScore);
  switch (score) {
    case 1:
      return (
        <Progress
          strokeColor={{
            "0%": "#db6333",
            "100%": "#db6333",
          }}
          percent={33}
        />
      );
    case 2:
      return (
        <Progress
          strokeColor={{
            "0%": "#db6333",
            "100%": "#db6333",
          }}
          percent={66}
        />
      );
    case 3:
    default:
      return (
        <Progress
          strokeColor={{
            "0%": "#db6333",
            "100%": "#db6333",
          }}
          percent={99}
        />
      );
  }
};

const IndividualScore = (props) => {
  const { featuresStatus, featureScore } = props;
  return (
    <div className={styles.comparison_container}>
      {featuresStatus.map((item) => {
        const { description, id, isChecked, name, title, score } = item;
        return (
          isChecked && (
            <div className={styles.unit_featuer_score} key={id}>
              <div className={styles.featuer_name}> {name + " Score"} </div>

              <div className={styles.progress_warpper}>
                <div className={styles.feature_icon}>
                  <img
                    style={{ width: "75px", height: "75px" }}
                    src={require("../../../../img/widgets/" +
                      name.toLowerCase() +
                      "-new.png")}
                  />
                </div>

                <div className={styles.progress_bar}>
                  {getProgress(featureScore[`${name}`])}
                  <p style={{ float: "left" }}>Low</p>{" "}
                  <p style={{ float: "right" }}>High</p>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default IndividualScore;
