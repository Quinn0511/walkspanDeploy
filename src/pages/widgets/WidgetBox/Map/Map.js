import React, { useEffect, useState } from "react";
//import { GMap } from "./gmap";
import CustomizeMap from "./customizeMap";
import styles from "./index.module.less";
import { Card, Col, Avatar, Row } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getPlaceResult } from "../../../../actions/map";

const mapStateWidget = (state) => state.widget;
const mapStateMap = (state) => state.map;

const getMapFeature = (featureName) => {
  if (featureName === "nature") {
    return "beauty_n";
  }

  if (featureName === "architecture") {
    return "beauty_m";
  }
  return featureName;
};

const getZoom = (scope) => {
  switch (scope) {
    case "block":
      return 20;

    case "quarterMile":
      return 19;

    default:
    case "neighborhood":
      return 18;
  }
};

function Map(params) {
  const featuresStatus = JSON.parse(JSON.stringify(params.featuresStatus));
  //convert the address into lng/lat
  const dispatch = useDispatch();
  const {
    widgetResult = { address: "574 Hudson St, New York, NY 10014, USA" },
  } = useMappedState(mapStateWidget);
  const { placeResult } = useMappedState(mapStateMap);
  // const { address  } = widgetResult;
  const { addressInput = "" } = params;
  const [address, setAddress] = useState();
  const [features, setFeatures] = useState([]);
  const [checkedFeature, setCheckedFeature] = useState();
  const [center, setCenter] = useState({
    lat: 40.76778789999999,
    lng: -73.99174099999999,
  });
  const selectIcon = (select) => {
    let new_features_info = [...features];
    new_features_info.map((feature) => {
      if (feature.name === select.name) {
        feature.isChecked = !feature.isChecked;
        setCheckedFeature(feature.name.toLowerCase());
      } else {
        feature.isChecked = false;
      }
    });

    setFeatures(new_features_info);
  };

  useEffect(() => {
    if (address === undefined) return;
    dispatch(
      getPlaceResult({
        query: address,
        key: "AIzaSyBOXYeVd2IW4rON6FTyLBesJOG87NE3BJo",
      })
    );
  }, [dispatch, address]);

  useEffect(() => {
    const copyFeatures = featuresStatus.filter((item) => item.isChecked);
    copyFeatures.map((item) => (item.isChecked = false));
    setFeatures(copyFeatures);

    if (addressInput !== "") {
      setAddress(addressInput);
    } else {
      setAddress(widgetResult.address);
    }
  }, []);

  useEffect(() => {
    if (placeResult !== undefined) setCenter(placeResult.geometry.location);
  }, [placeResult]);

  return (
    <div className={styles.map_container}>
      <CustomizeMap
        center={center}
        zoom={getZoom(params.scope)}
        featureName={getMapFeature(checkedFeature)}
        key={checkedFeature}
      />
      {Array.isArray(features) && features.length !== 0 && (
        <Card className={styles.panel}>
          <Row>
            <span>Selected Feature</span>
          </Row>
          <Row>
            {features &&
              features.map((item) => {
                return (
                  item && (
                    <Col key={item.id} span={6}>
                      <div
                        className={styles.featureUnit}
                        onClick={() => selectIcon(item)}
                        description={item.description}
                        id={item.id}
                      >
                        <div className={styles.avatar}>
                          {item.isChecked ? (
                            // <Avatar size={45} src={item.img_new} />
                            <Avatar
                              size={45}
                              src={require("../../../../img/widgets/" +
                                item.name.toLowerCase() +
                                "-new.png")}
                            />
                          ) : (
                            //<Avatar size={45} src={item.img_faded} />
                            <Avatar
                              size={45}
                              src={require("../../../../img/widgets/" +
                                item.name.toLowerCase() +
                                "-faded.png")}
                            />
                          )}
                        </div>
                      </div>
                    </Col>
                  )
                );
              })}
          </Row>
        </Card>
      )}
    </div>
  );
}

export default Map;
