import React, { useEffect } from "react";
import { Layout } from "antd";
import { Form, Input, Button, Checkbox, Space, notification } from "antd";
import styles from "./LoginPage.module.less";
import NavigationBar from "../../component/navigationBar";
import Footer from "../../component/footer";
import { getLogin } from "../../actions/login";
import { useDispatch, useMappedState } from "redux-react-hook";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const mapStateLogin = (state) => state.login;
const LoginPage = () => {
  // const handleClick = () => {
  //   window.location.herf("/login");
  // };

  const handleSignup = () => {
    window.location.href = "/signup";
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { LoginResult } = useMappedState(mapStateLogin);

  const handleFinish = (values) => {
    let params = new URLSearchParams();
    params.append("username", values.username);
    params.append("password", values.password);
    form
      .validateFields(["username", "password"])
      .then(() => {
        dispatch(getLogin(params));
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  useEffect(() => {
    if (LoginResult === undefined) return;

    if (LoginResult.status === "Successfully") {
      notification["success"]({
        message: "Login Sucessfully",
      });
      localStorage.setItem("isLogin", true);
      localStorage.setItem("user_info", JSON.stringify(LoginResult.userInfo));

      //console.log(LoginResult.userInfo);
      window.location.href = "/admin";
    } else {
      notification["error"]({
        message: "Failed",
        description: "Password or username incorrect!",
      });
    }
  }, [LoginResult]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavigationBar />
      </div>
      <div className={styles.title}>
        <div className={styles.subtitle}> Login </div>
        <Content align="center">
          <Form {...layout} form={form} onFinish={handleFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Space direction="horizontal">
                <div className={styles.button}>
                  <Button
                    className={styles.createButton}
                    onClick={handleSignup}
                  >
                    Sign Up
                  </Button>
                  <Button
                    className={styles.createButton}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Space>
            </Form.Item>
          </Form>
        </Content>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
