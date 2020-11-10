import React, { Component } from "react";
import styles from "./index.module.less";

class TitleAndDescription extends Component {
  constructor(props) {
    super(props);
  }

  getTitle(featureScore) {
    const score = Math.round(featureScore);
    switch (score) {
      case 1:
        return "Poor";
      case 2:
        return "Moderate";
      case 3:
        return "Amazing";
    }
  }

  render() {
    const {
      featureScore,
      featureTitle,
      featureDescript,
      checkedView,
    } = this.props;
    return (
      <div className={styles.descript_container}>
        {checkedView[1].isChecked && (
          <div>
            <div className={styles.feature_score}>
              {this.getTitle(featureScore) + " " + featureTitle}
            </div>
            <div className={styles.feature_descript}>{featureDescript}</div>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default TitleAndDescription;
