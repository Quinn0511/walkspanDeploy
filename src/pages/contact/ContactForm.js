import React, { useEffect, useState } from "react";
import { Form, Button, Input, notification, Row, Col } from "antd";
import { postMessage } from "../../actions/contact";
import { useDispatch, useMappedState } from "redux-react-hook";
import styles from "./Contact.module.less";

const { TextArea } = Input;
const mapStateContact = (state) => state.contact;
const mapStateProfile = (state) => state.user_profile;

const ContactForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [message_text, setMessageText] = useState();
  const { PostContactMessageResult } = useMappedState(mapStateContact);
  const { getProfileResult } = useMappedState(mapStateProfile);

  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (getProfileResult === undefined) return;

    if (getProfileResult.status === "Successfully") {
      const { full_name, phone, email } = getProfileResult.user_profile;
      setFullName(full_name);
      setPhone(phone);
      setEmail(email);
    }
  }, [getProfileResult]);

  const handleFinish = (values) => {
    let params = new URLSearchParams();
    params.append("companyName", values.companyName);
    params.append("email", email);
    params.append("name", fullName);
    params.append("phone", phone);
    params.append("subject", values.subject);
    params.append("message", message_text);
    form
      .validateFields(["email", "name", "phone", "subject", "message_text"])
      .then(() => {
        dispatch(postMessage(params));
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  useEffect(() => {
    if (PostContactMessageResult === undefined) return;

    if (PostContactMessageResult.status === "Successfully") {
      notification["success"]({
        message: "Commit a Message Successfully",
        description:
          "Thank you! We received your message, and we will reply to you in 3-5 workdays.",
      });
    } else {
      notification["error"]({
        message: "Failed",
        description: "Something went wrong, please try again latter.",
      });
    }
  }, [PostContactMessageResult]);

  return (
    <div className={styles.contact_form}>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="name"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input the name",
          //   },
          // ]}
        >
          <Row>
            <Col span={4}>
              <div className={styles.label}>Name:</div>
            </Col>

            <Col span={20}>
              <Input disabled value={fullName} size="large" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="email"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input the email",
          //   },
          // ]}
        >
          <Row>
            <Col span={4}>
              <div className={styles.label}>Email:</div>
            </Col>

            <Col span={20}>
              <Input disabled value={email} size="large" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="phone"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input the phone",
          //   },
          // ]}
        >
          <Row>
            <Col span={4}>
              <div className={styles.label}>Phone:</div>
            </Col>

            <Col span={20}>
              <Input disabled value={phone} size="large" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item name="companyName">
          <Row>
            <Col span={4}>
              <div className={styles.label}>Company:</div>
            </Col>

            <Col span={20}>
              <Input size="large" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="subject"
          rules={[
            {
              required: true,
              message: "Please input the subject",
            },
          ]}
        >
          <Row>
            <Col span={4}>
              <div className={styles.label}>Subject*:</div>
            </Col>

            <Col span={20}>
              <Input size="large" />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
        >
          <div className={styles.label}>Message*:</div>
          <TextArea
            rows={8}
            className={styles.message}
            name="message_text"
            value={message_text}
            onChange={(e) => setMessageText(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input the message",
              },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className={styles.submit}
          >
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
