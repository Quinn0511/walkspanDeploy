import React from "react";
import FeatureImageAndScoreAndDescription from "./FeatureImageAndScoreAndDescription";
import TitleAndDescription from "./TitleAndDescription";
import styles from "./index.module.less";

const IndividualScore = (props) => {
  const { featuresStatus, featureScore, checkedView } = props;
  //console.log(props);
  return (
    <div className={styles.individual_wrapper}>
      {featureScore &&
        featuresStatus &&
        featuresStatus.map((item) => {
          const { description, id, isChecked, name, title } = item;
          return (
            isChecked && (
              <div className={styles.unit_feature_container} key={id}>
                {checkedView[3].isChecked && (
                  <div className={styles.featuer_name}> {name + " Score"} </div>
                )}
                <div className={styles.featuer_descript}>
                  <FeatureImageAndScoreAndDescription
                    featureName={name}
                    featureScore={featureScore[`${name}`]}
                    checkedView={checkedView}
                  />
                  <TitleAndDescription
                    featureScore={featureScore[`${name}`]}
                    featureTitle={title}
                    featureDescript={description}
                    checkedView={checkedView}
                  />
                </div>
              </div>
            )
          );
        })}
    </div>
  );
};

export default IndividualScore;
