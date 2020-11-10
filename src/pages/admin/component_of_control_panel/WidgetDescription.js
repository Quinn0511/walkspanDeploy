import React from "react";
import { Descriptions, Badge } from "antd";
import styles from "./WidgetDescription.module.less";
import moment from "moment";

const WidgetDescription = (widgetInfo) => {
  console.log(widgetInfo);
  const widget = widgetInfo.widgetInfo;
  let features = [];
  const selectedFeatures = JSON.parse(widget.selected_features);
  selectedFeatures.map((item) => {
    if (item.isChecked) {
      features.push(item.name);
    }
  });
  const featuresString = features.join(", ");
  return (
    <Descriptions
      className={styles.description_container}
      bordered
      title={widget.widget_name + " Infomation"}
    >
      <Descriptions.Item label="Widget Name">
        {widget.widget_name}
      </Descriptions.Item>

      <Descriptions.Item label="Default Address" span={2}>
        {widget.address}
      </Descriptions.Item>
      <Descriptions.Item label="Widget Scope">{widget.scope}</Descriptions.Item>
      <Descriptions.Item label="Creation Time">
        {moment(widget.created_at).format("YYYY-MM-DD HH:mm")}
      </Descriptions.Item>
      <Descriptions.Item label="Widget Status">
        <Badge status="processing" text="Running" />
      </Descriptions.Item>
      <Descriptions.Item label="Selected Features" span={3}>
        {featuresString}
      </Descriptions.Item>
      <Descriptions.Item label="Widget Desscription">
        {widget.widget_description}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Descriptions.Item>
    </Descriptions>
  );
};

export default WidgetDescription;
