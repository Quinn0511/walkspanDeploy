import React, { useContext, useState } from "react";
import styles from "./DisplayComponent.module.less";
import { MyContext } from "../../../temporary/context-manager";

import { Checkbox, Select } from "antd";

const { Option } = Select;
const showOptions = [
  {
    label: "Speedometer View",
    value: "Speedometer View",
    id: 1,
    isChecked: false,
  },
  {
    label: "Show Description",
    value: "Show Description",
    id: 2,
    isChecked: true,
  },
  {
    label: "Show Icons",
    value: "Show Icons",
    id: 3,
    isChecked: false,
  },
  {
    label: "Show Feature Name",
    value: "Show Feature Name",
    id: 4,
    isChecked: true,
  },
];

const DispalyComponent = () => {
  const { setScopeSelect, setCheckedView } = useContext(MyContext);
  const [viewCheck, setViewCheck] = useState(showOptions);
  const checkedViewChange = (checkedList) => {
    const list = [
      {
        label: "Speedometer View",
        value: "Speedometer View",
        id: 1,
        isChecked: false,
      },
      {
        label: "Show Description",
        value: "Show Description",
        id: 2,
        isChecked: false,
      },
      {
        label: "Show Icons",
        value: "Show Icons",
        id: 3,
        isChecked: false,
      },
      {
        label: "Show Feature Name",
        value: "Show Feature Name",
        id: 4,
        isChecked: false,
      },
    ];

    list.map((item) => {
      for (let checked of checkedList) {
        if (checked === item.value) {
          item.isChecked = true;
        }
      }
      return;
    });
    setCheckedView(list);
    setViewCheck(list);
  };

  return (
    <>
      <div className={styles.subTitle}> Select Scope</div>

      <Select
        placeholder="Select a scopre"
        className={styles.scopeSelect}
        onChange={(e) => setScopeSelect(e)}
        defaultValue="block"
      >
        <Option value="block">Block</Option>
        <Option value="quarterMile">Quarter Mile</Option>
        <Option value="neighborhood">Neighborhood</Option>
      </Select>
      <div style={{ marginTop: "30px" }}>
        <Checkbox.Group
          options={viewCheck}
          className={styles.showGroup}
          onChange={checkedViewChange}
          defaultValue={["Show Feature Name", "Show Description"]}
        />
      </div>
    </>
  );
};

export default DispalyComponent;
