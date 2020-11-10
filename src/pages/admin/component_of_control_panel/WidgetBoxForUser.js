import React, { useEffect, useState } from "react";
import IndividualScore from "../../widgets/WidgetBox/IndividualScore/IndividualScore";
import ComparisonScore from "../../widgets/WidgetBox/ComparisonScore/ComparisonScore";
import Map from "../../widgets/WidgetBox/Map/Map";
import NoResult from "../../widgets/WidgetBox/noResult";
import GoogleAddressComplete from "../../../temporary/GoogleAddressComplete";
import { MyContext } from "../../../temporary/context-manager";
import { getWidget } from "../../../actions/widget";
import { Card } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
const mapStateWidget = (state) => state.widget;

const operationTabList = [
  {
    key: "individual_scores",
    tab: <span>Individual Scores</span>,
  },
  {
    key: "comparison_scores",
    tab: <span>Comparison Scores</span>,
  },
  {
    key: "map",
    tab: <span>Map</span>,
  },
];

const WidgetBoxForUser = (props) => {
  const dispatch = useDispatch();
  const { features, featureScore, checkedView, scope, addressInput } = props;
  const [address, setAddress] = useState(addressInput);
  const [featureScores, setFeatureScore] = useState(featureScore);

  const { widgetResult } = useMappedState(mapStateWidget);
  //   const { address } = widgetResult;
  const [tabKey, setTabKey] = useState("individual_scores");

  const onTabChange = (key) => {
    setTabKey(key);
  };

  const renderChildrenByTabKey = (tabKey) => {
    switch (tabKey) {
      case "map":
        return (
          <div>
            {JSON.stringify(featureScores) === "{}" ? (
              <NoResult />
            ) : (
              <Map
                featuresStatus={features}
                scope={scope}
                addressInput={address}
              />
            )}
          </div>
        );

      case "comparison_scores":
        return (
          <div>
            {JSON.stringify(featureScores) === "{}" ? (
              <NoResult />
            ) : (
              <ComparisonScore
                featuresStatus={features}
                featureScore={featureScores}
                addressInput={address}
              />
            )}
          </div>
        );

      case "individual_scores":
      default:
        return (
          <div>
            {JSON.stringify(featureScores) === "{}" ? (
              <NoResult />
            ) : (
              <IndividualScore
                featuresStatus={features}
                featureScore={featureScores}
                checkedView={checkedView}
                addressInput={address}
              />
            )}
          </div>
        );
    }
  };

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

  useEffect(() => {
    dispatch(getWidget({ address: address }));
  }, [dispatch, address]);

  useEffect(() => {
    setFeatureScore(getFeatureScore(widgetResult, scope));
  }, [widgetResult, scope]);

  // const getFeatureList = (featureList) => {
  //   if (featureList === []) {
  //     return featureList;
  //   }

  //   featureList.map((item) => {
  //     delete item.img_faded;
  //     delete item.img_new;
  //   });
  //   return featureList;
  // };

  return (
    <>
      <div>
        <Card
          title={
            <>
              <div>
                <span>
                  Customized Widget for{" "}
                  <span style={{ fontWeight: "bold" }}>{address}</span>
                </span>
              </div>
              <div>
                <MyContext.Provider value={{ setAddress }}>
                  <GoogleAddressComplete />
                </MyContext.Provider>
              </div>
            </>
          }
          bordered={true}
          tabList={operationTabList}
          activeTabKey={tabKey}
          onTabChange={onTabChange}
          style={{ minHeight: "700px" }}
        >
          {renderChildrenByTabKey(tabKey)}
        </Card>
      </div>
    </>
  );
};

export default WidgetBoxForUser;
