/*users.jsx*/
import React, { useState, lazy, useEffect } from "react";
import NavigationBar from "../../component/navigationBar";
import "../data/dataStyles.css";
import profileIcon from "../../img/menu_icons/profile.png";
import apiIcon from "../../img/menu_icons/api.png";
import dataIcon from "../../img/menu_icons/data.png";
import helpIcon from "../../img/menu_icons/help.png";
import upgradeIcon from "../../img/menu_icons/upgrade.png";
import widgetIcon from "../../img/menu_icons/widget.png";
import Footer from "../../component/footer";
import { Row, Col, Card, Menu, Avatar } from "antd";
import styles from "./AdminPage.module.less";

const APIContent = lazy(() =>
  import("./component_of_control_panel/APIContent")
);

const ProfileContent = lazy(() =>
  import("./component_of_control_panel/ProfileContent")
);

const DataContent = lazy(() =>
  import("./component_of_control_panel/DataContent")
);

const HelpContent = lazy(() =>
  import("./component_of_control_panel/HelpContent")
);

const UpgradeContent = lazy(() =>
  import("./component_of_control_panel/UpgradeContent")
);

const WidgetContent = lazy(() =>
  import("./component_of_control_panel/WidgetContent")
);

const renderChildrenByMenuKey = (menuKey) => {
  switch (menuKey) {
    case "widget":
      return <WidgetContent />;

    case "api":
      return <APIContent />;

    case "data":
      return <DataContent />;

    case "help":
      return <HelpContent />;

    case "upgrade":
      return <UpgradeContent />;

    case "profile":
    default:
      return <ProfileContent />;
  }
};

const AdminPage = () => {

  useEffect(()=> {
    var loginStatus = localStorage.getItem("isLogin");
    if (loginStatus === null || loginStatus === JSON.stringify(false)) {
      window.location.href = "./login";
    }
  }, [])

  const [menuKey, setMenuKey] = useState("profile");
  const menuKeyChange = (item) => {
    setMenuKey(item.key);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavigationBar />
      </div>

      <div className={styles.mainContainer}>
        <Row gutter={24}>
          <Col lg={4} md={24}>
            <div className={styles.menuList}>
              <Menu
                defaultSelectedKeys={menuKey}
                mode="inline"
                theme="light"
                onSelect={menuKeyChange}
              >
                <Menu.Item key="profile">
                  <Avatar size={30} src={profileIcon} />
                  <span>Profile</span>
                </Menu.Item>
                <Menu.Item key="widget">
                  <Avatar size={30} src={widgetIcon} shape="square" />
                  <span>Widget</span>
                </Menu.Item>
                <Menu.Item key="api">
                  <Avatar size={30} src={apiIcon} />
                  <span>API</span>
                </Menu.Item>
                <Menu.Item key="data">
                  <Avatar size={30} src={dataIcon} />
                  <span>Data</span>
                </Menu.Item>
                <Menu.Item key="help">
                  <Avatar size={30} src={helpIcon} />
                  <span>Help</span>
                </Menu.Item>
                <Menu.Item key="upgrade">
                  <Avatar size={30} src={upgradeIcon} />
                  <span>Upgrade</span>
                </Menu.Item>
              </Menu>
            </div>
          </Col>

          <Col lg={20} md={24}>
            <Card bordered={false}>{renderChildrenByMenuKey(menuKey)}</Card>
          </Col>
        </Row>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;
