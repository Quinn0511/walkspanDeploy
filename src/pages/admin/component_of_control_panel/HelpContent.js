import React, { Component } from "react";
import { Input, Button } from "antd";
import styles from "./HelpContent.module.less";
import ContactForm from "../../contact/ContactForm";
const { TextArea } = Input;

class HelpContent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Help</div>
        <div className={styles.subTitle}>Contect Us</div>

        <div className={styles.content}>
          If there exists any concerns, or any imporvements we could make,
          please don't hesitate to contact us! We will respond within 3-5
          business days.
        </div>
        <br />
        <div>
          <ContactForm />
        </div>

        {/* <div className = {styles.input}><Input placeholder = "Name" style={{width:400}}></Input></div>
                <br/>
                <div className = {styles.input}><Input placeholder = "Email Address" style={{width:400}}></Input></div>
                <br/>
                <div className = {styles.input}><Input placeholder = "Subject" style={{width:400}}></Input></div>
                <br/>
                <div className = {styles.input}><TextArea rows = {4} placeholder = "Message" style={{width:400}}></TextArea></div>
                <br/>
                <div><Button type = "primary" shape = "round">Send</Button></div> */}
      </div>
    );
  }
}

export default HelpContent;
