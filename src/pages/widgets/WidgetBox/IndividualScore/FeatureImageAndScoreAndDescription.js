import React, { useEffect, useState } from "react";
const getImg = (checkedView, imageUrl) => {
  // sppedometer
  if (checkedView[0].isChecked) {
    return (
      <img
        alt="speedometer"
        src={imageUrl}
        style={{
          height: "15%",
          width: "15%",
        }}
      />
    );
  }
  // with icon
  else if (checkedView[2].isChecked) {
    return (
      <img
        alt="with_icon"
        src={imageUrl}
        style={{
          height: "15%",
          width: "15%",
        }}
      />
    );
  }
  // pure score
  else {
    return (
      <img
        alt="pure_score"
        src={imageUrl}
        style={{
          height: "8%",
          width: "8%",
        }}
      />
    );
  }
};
const FeatureImageAndScoreAndDescription = (props) => {
  const { featureName, featureScore, checkedView } = props;
  const [imageUrl, setImageUrl] = useState();
  var name = featureName.toLowerCase();
  let score;
  if (featureName === "Total") {
    score = Math.round((featureScore / 100) * 3);
  } else {
    score = Math.round(featureScore);
  }

  useEffect(() => {
    if (checkedView[0].isChecked) {
      score &&
        setImageUrl(require(`../../../../img/widgets/meter-${score}.png`));
    } else if (checkedView[2].isChecked) {
      score &&
        setImageUrl(
          require(`../../../../img/widgets/${name}-score-${score}.png`)
        );
    } else {
      score && setImageUrl(require(`../../../../img/widgets/${score}.png`));
    }
  }, [imageUrl, checkedView]);

  return getImg(checkedView, imageUrl);
};

export default FeatureImageAndScoreAndDescription;
