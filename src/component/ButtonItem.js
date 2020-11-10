import React from "react";
import styles from "./button.module.less";
import { Button } from "antd";

const ButtonItem = (props) => {
  const { text, ...rest} = props;
  return (
    <div className={styles.button}>
      <Button className={styles.createButton} {...rest}>{text}</Button>
    </div>
  );
};

export default ButtonItem;
