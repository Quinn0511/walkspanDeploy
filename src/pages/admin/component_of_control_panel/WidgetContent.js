import React, { useEffect, useState } from "react";
import styles from "./WidgetContent.module.less";
import { List, Button, Modal, Row, Col } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
import { getUserWidgetByUserID } from "../../../actions/widget";
import WidgetBox from "../../widgets/WidgetBox/widgetBox";
import WidgetBoxForUser from "./WidgetBoxForUser";
import moment from "moment";
import WidgetDescription from "./WidgetDescription";

const mapStateWidget = (state) => state.widget;

const WidgetContent = () => {
  const dispatch = useDispatch();
  const [user_id, setUserId] = useState();
  const { userWidgetResult = { userWidget: [] } } = useMappedState(
    mapStateWidget
  );
  const [widget_modal_visible, setWidget_modal_visible] = useState(false);
  const [widget_ii_modal_visible, setWidget_ii_modal_visible] = useState(false);
  const [description_modal_visible, setDescription_modal_visible] = useState(
    false
  );
  const [featuresStatus, setFeaturesStatus] = useState();
  const [featureScore, setFeaturesScore] = useState();
  const [checkedViewOption, setCheckedViewOption] = useState();
  const [scopeSelect, setScopeSelect] = useState();
  const [addressInput, setAddressInput] = useState();
  const [modalTitle, setModalTtile] = useState();
  const [widgetItem, setWidgetItem] = useState();

  const { userWidget } = userWidgetResult;

useEffect(()=>{
  if (localStorage.getItem("isLogin") === JSON.stringify(false) ||
    localStorage.getItem("isLogin") === null ) {
      window.location.href="./login"
      return;
    }
  setUserId(JSON.parse(localStorage.getItem("user_info")).user_id);
}, [])

  useEffect(() => {
    if (user_id === undefined)
      return;
    dispatch(getUserWidgetByUserID({ user_id: user_id }));
  }, [dispatch, user_id]);

  const handle_widget_Ok = (e) => {
    setWidget_modal_visible(false);
  };

  const handle_widget_Cancel = (e) => {
    setWidget_modal_visible(false);
  };

  const handle_widget_ii_Ok = (e) => {
    setWidget_ii_modal_visible(false);
  };

  const handle_widget_ii_Cancel = (e) => {
    setWidget_ii_modal_visible(false);
  };

  const handle_view_widget = (item) => {
    setModalTtile(item.widget_name);
    setFeaturesStatus(JSON.parse(item.selected_features));
    setFeaturesScore(JSON.parse(item.features_score));
    setCheckedViewOption(JSON.parse(item.checked_view));
    setScopeSelect(item.scope);
    setAddressInput(item.address);

    setWidget_modal_visible(true);
  };

  const handle_view_widget_ii = (item) => {
    setModalTtile(item.widget_name);
    setFeaturesStatus(JSON.parse(item.selected_features));
    setFeaturesScore(JSON.parse(item.features_score));
    setCheckedViewOption(JSON.parse(item.checked_view));
    setScopeSelect(item.scope);
    setAddressInput(item.address);

    setWidget_ii_modal_visible(true);
  };

  const handle_desription_Ok = (e) => {
    setDescription_modal_visible(false);
  };

  const handle_desription_Cancel = (e) => {
    setDescription_modal_visible(false);
  };

  const handle_view_description = (item) => {
    setModalTtile(item.widget_name);
    setWidgetItem(item);
    setDescription_modal_visible(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>My Customized Widget</div>

        <div className={styles.subTitle}>Active Products</div>

        <div className={styles.widgetList}>
          <List
            bordered
            dataSource={userWidget}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <p
                    key="list-loadmore-edit"
                    style={{
                      color: "#db6333",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => handle_view_description(item)}
                  >
                    View Parameters
                  </p>,
                  <p
                    key="list-viewWidget-more"
                    style={{
                      color: "#db6333",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => handle_view_widget(item)}
                  >
                    View Widget
                  </p>,
                  <p
                    key="list-viewWidget-ii-more"
                    style={{
                      color: "#db6333",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={() => handle_view_widget_ii(item)}
                  >
                    View Widget II
                  </p>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <span style={{ fontWeight: "bold" }}>
                      {item.widget_name}
                    </span>
                  }
                  description={
                    <div>
                      {item.widget_description}{" "}
                      <div
                        styles={{
                          marginTop: "3px",
                        }}
                      >
                        <span>
                          Published at{" "}
                          <em>
                            {moment(item.created_at).format("YYYY-MM-DD HH:mm")}
                          </em>
                        </span>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
        <div className={styles.button}>
          <Button
            className={styles.createButton}
            onClick={() => {
              window.location.href = "/widgets";
            }}
          >
            Create a New Widget
          </Button>
        </div>
      </div>

      <Modal
        title={modalTitle + " Result"}
        visible={widget_modal_visible}
        width={800}
        onOk={handle_widget_Ok}
        onCancel={handle_widget_Cancel}
      >
        {/* <WidgetBoxForUser features={featuresStatus}
          featureScore={featureScore}
          checkedView={checkedViewOption}
          scope={scopeSelect}
          addressInput={addressInput}
          isMyWidget={true}/> */}
        <WidgetBox
          features={featuresStatus}
          featureScore={featureScore}
          checkedView={checkedViewOption}
          scope={scopeSelect}
          addressInput={addressInput}
          isMyWidget={true}
        />
      </Modal>

      <Modal
        title={modalTitle + " Result"}
        visible={widget_ii_modal_visible}
        width={1400}
        onOk={handle_widget_ii_Ok}
        onCancel={handle_widget_ii_Cancel}
      >
        <Row gutter={10}>
          <Col span={12}>
            <br />
            <br />
            <WidgetBox
              features={featuresStatus}
              featureScore={featureScore}
              checkedView={checkedViewOption}
              scope={scopeSelect}
              addressInput={addressInput}
              isMyWidget={true}
            />
          </Col>

          <Col span={12}>
            {" "}
            <WidgetBoxForUser
              features={featuresStatus}
              featureScore={featureScore}
              checkedView={checkedViewOption}
              scope={scopeSelect}
              addressInput={addressInput}
              isMyWidget={true}
            />
          </Col>
        </Row>
      </Modal>

      <Modal
        title={modalTitle + " Description"}
        visible={description_modal_visible}
        width={1000}
        onOk={handle_desription_Ok}
        onCancel={handle_desription_Cancel}
      >
        <WidgetDescription widgetInfo={widgetItem} />
      </Modal>
    </>
  );
};

export default WidgetContent;
