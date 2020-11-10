import React, { useEffect, useState } from "react";
import { Layout, Card, Col, Row } from "antd";
import {
  Form,
  Input,
  Button,
  Popover,
  Progress,
  Space,
  notification,
} from "antd";
import styles from "./LoginPage.module.less";
import NavigationBar from "../../component/navigationBar";
import Footer from "../../component/footer";
import { postRegister } from "../../actions/register";
import { useDispatch, useMappedState } from "redux-react-hook";
//import styles from "./SignupPage.module.less";

const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const getUserId = () => {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = "4";
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  const uuid = s.join("");
  return uuid;
};

const passwordStatusMap = {
  ok: <div className={styles.success}>Level: Strong</div>,
  pass: <div className={styles.warning}>Level: Medium</div>,
  poor: <div className={styles.error}>Level: Weak</div>,
};

const passwordProgressMap = {
  ok: "success",
  pass: "normal",
  poor: "exception",
};

const mapStateRegister = (state) => state.register;
const SignupPage = () => {
  const user_id = getUserId();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { PostRegisterResult } = useMappedState(mapStateRegister);

  const [visible, setVisible] = useState(false);
  const [popover, setPopover] = useState(false);

  const checkConfirm = (_, value) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue("password")) {
      return promise.reject("The passwords are not matched");
    }
    return promise.resolve();
  };

  const checkPassword = (_, value) => {
    const promise = Promise;
    if (!value) {
      setVisible(!!value);
      return promise.reject("Please input the password");
    }

    if (!visible) {
      setVisible(!!value);
    }
    setPopover(!popover);
    if (value && form.getFieldValue("confirm")) {
      // using preious wriiten validator checkConfirm
      form.validateFields(["confirm"]);
    }

    return promise.resolve();
  };

  const getPasswordStatus = () => {
    const value = form.getFieldValue("password");
    if (value && value.length > 9) {
      return "ok";
    }
    if (value && value.length > 5) {
      return "pass";
    }

    return "poor";
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue("password");
    const passwordStatus = getPasswordStatus();
    return (
      value &&
      value.length && (
        <div className={styles[`progress-${passwordStatus}`]}>
          <Progress
            className={styles.progress}
            status={passwordProgressMap[passwordStatus]}
            strokeWidth={6}
            percent={value.length * 10 > 100 ? 100 : value.length * 10}
            showInfo={false}
          />
        </div>
      )
    );
  };

  const handleFinish = (values) => {
    console.log(values);
    let params = new URLSearchParams();
    params.append("first_name", values.first_name);
    params.append("last_name", values.last_name);
    params.append("phone", values.phone);
    params.append("email_address", values.email_address);
    params.append("username", values.username);
    params.append("password", values.password);
    params.append("user_id", user_id);
    form
      .validateFields([
        "first_name",
        "last_name",
        "phone",
        "email_adress",
        "username",
        "password",
      ])
      .then(() => {
        dispatch(postRegister(params));
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  useEffect(() => {
    if (PostRegisterResult === undefined) return;
    if (PostRegisterResult.status === "Successfully") {
      window.location.href = "/login";
      notification["success"]({
        message: "Sign up successfully",
        description: "Thank you! Sign up sucessfully!",
      });
    } 
    if (PostRegisterResult.status === "Failed")  {
      notification["error"]({
        message: "Failed",
        description: `${PostRegisterResult.result.errorInfo}`,
      });
    }
  }, [PostRegisterResult]);

  const handleSubmit = () => {
    window.location.href = "/admin";
    //this.props.history.push("/admin");
  };

  const handleCancel = () => {
    window.location.href = "/login";
    //this.props.history.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavigationBar />
      </div>
      <div className={styles.title}>
        <div className={styles.subtitle}> Sign Up </div>
        <div className={styles.text}>
          Please fill out the form below, state how you would use
        </div>
        <div className={styles.text}>
          Sense of Walk data, which plan you would like and
        </div>
        <div className={styles.text}>will reply within 3-5 business days!</div>
        <div className={styles.listitem}>
          <Content align="center">
            <Form form={form} {...layout} onFinish={handleFinish}>
              <Form.Item
                label="First Name"
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: false,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email_address"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
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
                <Input size="large" />
              </Form.Item>

              <Popover
                content={
                  visible && (
                    <div>
                      {passwordStatusMap[getPasswordStatus()]}
                      {renderPasswordProgress()}
                      <div>Please input at least 6 digits</div>
                    </div>
                  )
                }
                overlayStyle={{ width: 240, left: 1100 }}
                placement="right"
                visible={visible}
              >
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      validator: checkPassword,
                    },
                  ]}
                >
                  {/* <Input  type="password"/> */}

                  <Input size="large" type="password" />
                </Form.Item>
              </Popover>

              <Form.Item
                label="Confirm Password"
                name="confirm"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  {
                    validator: checkConfirm,
                  },
                ]}
              >
                <Input size="large" type="password" />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Space direction="horizontal">
                  <div className={styles.button}>
                    <Button
                      className={styles.createButton}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button className={styles.createButton} htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Space>
              </Form.Item>
            </Form>
          </Content>
        </div>
      </div>
      <div className={styles.carditem}>
        <Row gutter={16}>
          <Col span={7}>
            <Card title="Starter" bordered={true}>
              Basic resources for starters and small projects.
            </Card>
          </Col>
          <Col span={7}>
            <Card title="Advanced" bordered={true}>
              More features and flexibility for multiple projects, access to
              moderate.
            </Card>
          </Col>
          <Col span={7}>
            <Card title="Pro" bordered={true}>
              More support for sites with heavy traffic. Ideal for Real Estate
              sites.
            </Card>
          </Col>
        </Row>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default SignupPage;
