import React, { Component } from "react";
import styles from "./UpgradeContent.module.less";
import { Card, Col, Row, Input, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import ContactForm from "../../contact/ContactForm";
import Prices from "../../../component/prices";

const { TextArea } = Input;

class UpgradeContent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Upgrade</div>
        <br />
        <div className={styles.subTitle}>Contact Us</div>
        <br />
        <div className={styles.content}>
          Thank you for your appreciation of Walkspan.Please fill out the from
          below, state how you would use Sense of Walk data, which plan you
          would like and we will reply within 3-5 business days!
        </div>
        <br />

        <div>
          <ContactForm />
        </div>
        <br />
        <div>
          <Prices />
        </div>
        {/* <div className={styles.card}>
                    <Row gutter={16} style={{width:2000}}>
                        <Col span = {4}>
                            <Card title = "Starter"  bordered = {true} style={{width:300}}>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Basic resources for starters and small projects.</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> 1 website</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> 100 GB storage</div>
                                <div calssName={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Standard Performance</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> 10 databases</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unmetered bandwidth</div>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card title="Advance" bordered={true} style={{width:300}}>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> More features and flexibility for multiple projects, access to moderate.</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unlimited website</div>
                                <div className={styles.ontext}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unlimited storage</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Standard Performance</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> 25 databases</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unmetered bandwidth</div>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card title="Pro" bordered={true} style={{width:300}}>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> More support for sites with heavy traffic. Ideal for Real Estate sites. </div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unlimited website</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unlimited storage</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> 2x Processing Power</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unlimited databases</div>
                                <div className={styles.context}><CheckOutlined style={{fontSize:'10px',color:'#db6333'}}></CheckOutlined> Unmetered bandwidth</div>
                            </Card>
                        </Col>
                    </Row>
                </div> */}
        {/* <br />
        <div className={styles.subTitle}>Contact Us</div>
        <br />
        <div className={styles.content}>
          Thank you for your appreciation of Walkspan.Please fill out the from
          below, state how you would use Sense of Walk data, which plan you
          would like and we will reply within 3-5 business days!
        </div>
        <br />
        <div className={styles.input}>
          <Input placeholder="Name" style={{ width: 400 }}></Input>
        </div>
        <br />
        <div className={styles.input}>
          <Input placeholder="Email Address" style={{ width: 400 }}></Input>
        </div>
        <br />
        <div className={styles.input}>
          <Input placeholder="Subject" style={{ width: 400 }}></Input>
        </div>
        <br />
        <div className={styles.input}>
          <TextArea
            rows={4}
            placeholder="Message"
            style={{ width: 400 }}
          ></TextArea>
        </div>
        <br />
        <div>
          <Button type="primary" shape="round">
            Send
          </Button>
        </div> */}
      </div>
    );
  }
}

export default UpgradeContent;
