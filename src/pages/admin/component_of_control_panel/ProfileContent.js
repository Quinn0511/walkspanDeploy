import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, Button, Space, Modal, notification, Avatar } from "antd";
import styles from "./Profile.module.less";
import { getUserProfile } from "../../../actions/user_profile";
import { useDispatch, useMappedState } from "redux-react-hook";
import ProfileUpdateForm from "./ProfileUpdateForm";

const mapStateProfile = (state) => state.user_profile;

const ProfileContent = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { getProfileResult } = useMappedState(mapStateProfile);
  const [fullName, setFullName] = useState();
  const [validStart, setValidStart] = useState();
  const [validEnd, setValidEnd] = useState();
  const [membershipLevel, setMembershipLevel] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [register, setRegisterTime] = useState();
  const handleClick = () => {
    setVisible(true);
  };

  const handleOK = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getUserProfile({ user_id: 10 }));
  }, [dispatch]);

  const getMemberShipLevel = (level) => {
    switch (level) {
      case "1":
        return "Economy";
      case "2":
        return "Deluxe";
      case "3":
        return "Ultimate";
    }
  };

  useEffect(() => {
    if (getProfileResult === undefined)  return;

    if (getProfileResult.status === "Successfully") {
      const {
        valid_end,
        valid_start,
        full_name,
        membership_level,
        phone,
        email,
        register_time,
      } = getProfileResult.user_profile;

      setFullName(full_name);
      setValidStart(valid_start);
      setValidEnd(valid_end);
      setMembershipLevel(membership_level);
      setPhone(phone);
      setEmail(email);
      setRegisterTime(register_time);
    } else {
      notification["error"]({
        message: "Failed",
        description: "Failed to access the user profile!",
      });
    }
  }, [getProfileResult]);

  return (
    <div className={styles.cotainer}>
      <div className={styles.avatar_title}>
        {/* <Avatar size={64} icon={<UserOutlined />} />{" "} */}
        <p
          style={{
            fontSize: "34px",
            fontWeight: "bolder",
          }}
        >
          Welcome back, {fullName}!
        </p>
      </div>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
        <Descriptions.Item label="Sexaulity">Men</Descriptions.Item>
        <Descriptions.Item label="Register Time">{register}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">{phone}</Descriptions.Item>
        <Descriptions.Item label="Email Address" span={2}>
          {email}
        </Descriptions.Item>
        <Descriptions.Item label="Member Start">{validStart}</Descriptions.Item>
        <Descriptions.Item label="Member End">{validEnd}</Descriptions.Item>
        <Descriptions.Item label="Member Level">
          {getMemberShipLevel(membershipLevel)}
        </Descriptions.Item>
      </Descriptions>
      <div className={styles.edit_button}>
        <Space align="center">
          <Button type="primary" onClick={handleClick}>
            Edit
          </Button>
        </Space>
      </div>
      <Modal visible={visible} onCancel={handleCancel} onOk={handleOK}>
        <ProfileUpdateForm />
      </Modal>
    </div>
  );
};

export default ProfileContent;
