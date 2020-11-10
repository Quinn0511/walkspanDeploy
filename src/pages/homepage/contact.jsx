/*homepage.jsx*/
import React, { useEffect, useState } from "react";
import "./homePageStyles.css";
import { Form, Button, Input, notification } from "antd";
import styles from "./contact.module.less";
import InputItem from "../../component/InputItem";
import contactFormImage from "../../img/homepage/contact-form.png";
import { postMessage } from "../../actions/contact";
import { useDispatch, useMappedState } from "redux-react-hook";

const { TextArea } = Input;
const mapStateContact = (state) => state.contact;

const Contact = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [message_text, setMessageText] = useState();
  const { PostContactMessageResult } = useMappedState(mapStateContact);

  const handleFinish = (values) => {
    let params = new URLSearchParams();
    params.append("companyName", values.companyName);
    params.append("email", values.email);
    params.append("name", values.name);
    params.append("phone", values.phone);
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
    <div>
      <section
        className="page-section"
        id="contact"
        style={{
          backgroundImage: `url(${contactFormImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading">Request A Demo</h2>
            <h3 className="section-subheading text-light">
              Please fill the form below.
            </h3>
          </div>

          <div className={styles.contact_form}>
            <Form form={form} onFinish={handleFinish}>
              <InputItem
                name="name"
                placeholder="Your Name *"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input the name",
                  },
                ]}
              />
              <InputItem
                name="email"
                placeholder="Your Email *"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input the email",
                  },
                ]}
              />
              <InputItem
                name="phone"
                placeholder="Your Phone *"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input the phone",
                  },
                ]}
              />
              <InputItem
                name="companyName"
                placeholder="Your Company Name"
                size="large"
              />
              <InputItem
                name="subject"
                placeholder="Subject *"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "Please input the subject",
                  },
                ]}
              />
              <Form.Item>
                <TextArea
                  rows={4}
                  className={styles.message}
                  placeholder="Your Message *"
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
