import React, { useState, useEffect } from "react";
import styles from "./APIContent.module.less";
import APIDocument from "../../api/apiDocument";
import { Input, notification, Button } from "antd";
import {getAPIKEY} from "../../../actions/get_apikey";
import {useDispatch, useMappedState} from "redux-react-hook";


const mapStateApiKey = (state) => state.api_key;
const { Search } = Input;

const openNotification = () => {
  notification.open({
    message: "Successfully Copied",
    description: "The API Key was successfully copied to your clipboard",
    onClick: () => {
      // console.log("Notification Clicked!");
    },
  });
};

const copyAPI = () => {
  var copyText = document.querySelector(".ant-input");
  copyText.select();
  document.execCommand("copy");
  openNotification();
};

const APIContent = () => {
  const dispatch = useDispatch();
  
  const {ApiKeyResult} = useMappedState(mapStateApiKey)
  console.log(ApiKeyResult);
  const currentUserId = "1";
  const currentFirstName = "abcdefg";
  const currentLastName = "1234567";
  const [requestInput, setRequest] = useState("Your request will show here!");
  const [responseInput, setResponse] = useState("Api key response will show here!")


  const getRequestString = () => {
    return (
      "http://127.0.0.1:8080/SenseOfWalkAPI_war/apikey_access?user_id=" +
      "1" +
      "&first_name=" +
      "abcdefg" +
      "&last_name=" +
      "1234567"
    );
  }

  const handleClick = (props) =>{
    setRequest(getRequestString());
    console.log(requestInput);
    setResponse(
      ApiKeyResult["status"] == "Successfully"
      ? JSON.stringify(ApiKeyResult)
      : "Something went wrong!"
    );
  };

  useEffect(() => {
    dispatch(
      getAPIKEY({
        user_id: "1",
        firstname: "test",
        lastname: "1234567",
      })
    );
  },[dispatch, currentUserId, currentFirstName, currentLastName]);


  const [apiKey, setAPIKey] = useState("Your API Key will be here");
  return (
    <div className={styles.container}>
      <div className={styles.title}>API</div>

      <div className={styles.subTitle}>Advanced Access</div>

      <div className={styles.content}>
        walking criteria. Defined from most to least walkable, sidewalk quality
        can be
      </div>

      <div className={styles.subTitle}>Your API</div>

      <div className={styles.input}>
        <Search
          value={apiKey}
          enterButton="Copy"
          size="large"
          onSearch={copyAPI}
          size="middle"
        />
      </div>
      <Button onClick ={handleClick}>Test</Button>
      <div>
        <APIDocument />
      </div>
    </div>
  );
};

export default APIContent;
