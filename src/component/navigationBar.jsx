import React from "react";
import { Link, useParams } from "react-router-dom";
import "../pages/homepage/homePageStyles.css";
import logo from "../img/senofwalk-logo.png";
import { Affix, Col, Menu } from "antd";
import styles from "./navigationBar.module.less";
import { useState, useEffect } from "react";

//Functional Component
const NavigationBar = () => {
  const [loginStatus, setLoginStatus] = useState();

  useEffect(() => {
    if (localStorage.getItem("isLogin") === null) {
      setLoginStatus(false);
    }

    if (localStorage.getItem("isLogin") === JSON.stringify(true)) {
      setLoginStatus(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("user");
    localStorage.removeItem("user_info");
    setLoginStatus(false);
  };

  return (
    <>
      <Affix offsetTop={0}>
        <div className={styles.container}>
          <Col span={8}>
            <div className={styles.logoContainer} href="#page-top">
              <img src={logo} alt="" className={styles.img} />
              <div className={styles.companyName}>Walkspan Real Estate</div>
            </div>
          </Col>

          <Col span={16}>
            <div className={styles.menuContainer}>
              <Menu mode="horizontal" theme="dark">
                <Menu.Item key="home">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="widgets">
                  <Link to="/widgets">Widgets</Link>
                </Menu.Item>

                <Menu.Item key="api">
                  <Link to="/api">API</Link>
                </Menu.Item>

                <Menu.Item key="data">
                  <Link to="/data">Data</Link>
                </Menu.Item>
                {loginStatus ? (
                  <Menu.Item key="admin">
                    <Link to="/admin">Admin</Link>
                  </Menu.Item>
                ) : (
                  <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                )}

                {loginStatus && (
                  <Menu.Item key="logout">
                    <Link to="/" onClick={handleLogout}>
                      Log out
                    </Link>
                  </Menu.Item>
                )}

                <Menu.Item key="contact">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </div>
      </Affix>
    </>
  );
};

export default NavigationBar;
