import React from "react";
import styles from "./Profile.module.less";
import { Form, Button, Input, notification } from "antd";

const ProfileUpdateForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    let params = new URLSearchParams();
    params.append("companyName", values.companyName);
    params.append("email", values.email);
    params.append("name", values.name);
    params.append("phone", values.phone);
    params.append("subject", values.subject);
    form
      .validateFields(["email", "name", "phone", "subject"])
      .then(() => {
        //dispatch(postMessage(params));
      })
      .catch((errorInfo) => {
        console.log(errorInfo);
      });
  };

  return (
    <div className={styles.edit_form}>
      <div>
        Update User Profile
      </div>
      <Form form={form} onFinish={handleFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input the name",
            },
          ]}
        >
          <Input
          addonBefore="Name"
            placeholder="Your Name *"
            size="large"
            //className={styles.name_input}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input the phone",
            },
          ]}
        >
          <Input
          addonBefore="Phone"
            placeholder="Your Phone *"
            size="large"
            //className={styles.name_input}
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input the email",
            },
          ]}
        >
          <Input
          addonBefore="Email"
            placeholder="Your email *"
            size="large"
            //className={styles.name_input}
          />
        </Form.Item>

      </Form>
    </div>

    // <div className={styles.edit_form}>
    //   <div className={styles.name_input}>
    //     <Input addonBefore="Full Name" />
    //   </div>
    //   <div className={styles.phone_input}>
    //     <Input addonBefore="Phone Number" />
    //   </div>
    //   <div className={styles.email_input}>
    //     <Input addonBefore="Email Address" defaultValue="" />
    //   </div>
    // </div>
  );
};

export default ProfileUpdateForm;
