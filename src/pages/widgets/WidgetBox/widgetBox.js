import React, { useEffect, useState } from "react";
import IndividualScore from "./IndividualScore/IndividualScore";
import ComparisonScore from "./ComparisonScore/ComparisonScore";
import Map from "./Map/Map";
import NoResult from "./noResult";
//import styles from "./widgetBox.module.less";
import { Card, Button, Modal, notification, Input } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
import { addUserWidget } from "../../../actions/widget";
const { TextArea } = Input;
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

const WidgetBox = (props) => {
  const dispatch = useDispatch();
  const {
    features,
    featureScore,
    checkedView,
    scope,
    addressInput,
    isMyWidget = false,
  } = props;
  const {
    widgetResult = { address: "574 Hudson St, New York, NY 10014, USA" },
    addUserWidgetResult,
  } = useMappedState(mapStateWidget);
  const { address } = widgetResult;
  const [tabKey, setTabKey] = useState("individual_scores");
  const [modal_visible, setModalVisible] = useState(false);
  const [name_modal_visible, setName_modal_visible] = useState(false);
  const [widgetName, setWidgetName] = useState();
  const [description_text, setDescriptionText] = useState();

  const onTabChange = (key) => {
    setTabKey(key);
  };

  useEffect(() => {
    if (isMyWidget === true) {
      return;
    }

    if (addUserWidgetResult === undefined) return;

    if (addUserWidgetResult.status === "Successfully") {
      notification["success"]({
        message: "Add to myWidget Successfully",
        description:
          "Add to myWidget Successfully! Please check out in user module.",
      });
      return;
    } else {
      notification["error"]({
        message: "Failed",
        description: "Something went wrong, please try again latter.",
      });
      return;
    }
  }, [addUserWidgetResult]);

  const renderChildrenByTabKey = (tabKey) => {
    switch (tabKey) {
      case "map":
        return (
          <div>
            {JSON.stringify(featureScore) === "{}" ? (
              <NoResult />
            ) : (
              <Map
                featuresStatus={features}
                scope={scope}
                addressInput={addressInput}
              />
            )}
          </div>
        );

      case "comparison_scores":
        return (
          <div>
            {JSON.stringify(featureScore) === "{}" ? (
              <NoResult />
            ) : (
              <ComparisonScore
                featuresStatus={features}
                featureScore={featureScore}
              />
            )}
          </div>
        );

      case "individual_scores":
      default:
        return (
          <div>
            {JSON.stringify(featureScore) === "{}" ? (
              <NoResult />
            ) : (
              <IndividualScore
                featuresStatus={features}
                featureScore={featureScore}
                checkedView={checkedView}
              />
            )}
          </div>
        );
    }
  };

  const getFeatureList = (featureList) => {
    if (featureList === []) {
      return featureList;
    }

    featureList.map((item) => {
      delete item.img_faded;
      delete item.img_new;
    });
    return featureList;
  };

  const handleAddWidget = () => {
    if (localStorage.getItem("isLogin") === JSON.stringify(false) ||
    localStorage.getItem("isLogin") === null ) {
      setModalVisible(true);
      return;
    }

    let featureStatus = getFeatureList(
      JSON.parse(JSON.stringify(features)).filter((e) => e.isChecked)
    );

    if (featureStatus.length === 0) {
      notification["info"]({
        message: "Please Select features",
        description:
          "Please select at lease one feature as your customized widget.",
      });
      return;
    }

    setName_modal_visible(true);
  };

  const handleOk = (e) => {
    window.location.href = "/login";
    setModalVisible(false);
  };

  const handleCancel = (e) => {
    setModalVisible(false);
  };

  const handle_name_Ok = (e) => {
    let params = new URLSearchParams();
    let featureStatus = getFeatureList(
      JSON.parse(JSON.stringify(features)).filter((e) => e.isChecked)
    );
    let user_id = JSON.parse(localStorage.getItem("user_info")).user_id;
    params.append("selected_features", "" + JSON.stringify(featureStatus));
    params.append("features_score", "" + JSON.stringify(featureScore));
    params.append("checked_view", "" + JSON.stringify(checkedView));
    params.append("scope", scope);
    params.append("address", address);
    params.append("user_id", user_id);
    params.append("widget_name", widgetName);
    params.append("widget_description", description_text);
    dispatch(addUserWidget(params));
    setName_modal_visible(false);
  };

  const handle_name_Cancel = (e) => {
    setName_modal_visible(false);
  };

  return (
    <>
      <div>
        <Card
          title={
            !isMyWidget && (
              <div>
                <span>
                  Customized Widget for{" "}
                  <span style={{ fontWeight: "bold" }}>{address}</span>
                </span>
                <Button
                  style={{ float: "right", borderRadius: "10px" }}
                  onClick={handleAddWidget}
                >
                  Add to my Widget
                </Button>
              </div>
            )
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

      <Modal
        title="Login to access the widget"
        visible={modal_visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Sorry, you need to login to add customized widget!</p>
        <p></p>
        <p></p>
      </Modal>

      <Modal
        title="Add to myWidget"
        visible={name_modal_visible}
        onOk={handle_name_Ok}
        onCancel={handle_name_Cancel}
      >
        <div>Please input a name for the widget:</div>
        <div>
          <Input
            size="large"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
        </div>

        <div>Widget Description:</div>
        <div>
          <TextArea
            rows={4}
            value={description_text}
            onChange={(e) => setDescriptionText(e.target.value)}
          />
        </div>
      </Modal>
      
    </>
  );
};

export default WidgetBox;
