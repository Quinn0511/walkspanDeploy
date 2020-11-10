import React from "react";
import { Collapse } from "antd";
import styles from "./index.module.less";
import MembershipSummary from './ApiComponent/MembershipSummary';
import APIReference from './ApiComponent/APIReference';
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `Anim pariatur cliche reprehenderit, enim eiusmod high life
accusamus terry richardson ad squid. 3 wolf moon officia
aute, non cupidatat skateboard dolor brunch. Food truck
quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
sunt aliqua put a bird on it squid single-origin coffee
nulla assumenda shoreditch et. Nihil anim keffiyeh
helvetica, craft beer labore wes anderson cred nesciunt
sapiente ea proident. Ad vegan excepteur butcher vice lomo.
Leggings occaecat craft beer farm-to-table, raw denim
aesthetic synth nesciunt you probably haven't heard of them
accusamus labore sustainable VHS.`;

const APIDocument = () => {
  return (
    <div className={styles.collpase}>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header="Membership Summary" key="1" showArrow={false}>
          <MembershipSummary/>
        </Panel>
        <Panel header="API Reference" key="2" showArrow={false}>
          <APIReference/>
        </Panel>
        <Panel header="Result Codes" key="3" showArrow={false}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default APIDocument;
