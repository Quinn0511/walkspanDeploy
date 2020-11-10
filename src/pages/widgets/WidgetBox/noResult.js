import React, { useEffect } from 'react';
import { notification, Empty  } from "antd";


const openNotification = () => {
    notification.open({
      message: "Invalid Address",
      description: "Please input a valid address, we cannot get a score for this one.",
      onClick: () => {
        console.log("Invalid address!");
      },
    });
  };

const NoResult = () => {
    useEffect(()=> {
        openNotification();
    }, [])
    return (
        <Empty description='Sorry, we cannot fetch the information for this place. ' />
    );
};

export default NoResult;