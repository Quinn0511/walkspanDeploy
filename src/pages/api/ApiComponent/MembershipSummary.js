import React from "react";
import { Table, Tag, Radio, Space } from "antd";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: text => <span style={{fontWeight:"bold"}} >{text}</span>
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Query Times",
    dataIndex: "query_times",
    key: "query_times",
  },
];

const membershipData = [
  {
    key: "1",
    category: "Enconomy",
    product_name: "Walkspan Economy API",
    query_times: "50 times per hour",
  },
  {
    key: "2",
    category: "Deluxe",
    product_name: "Walkspan Deluxe API",
    query_times: "100 times per hour",
  },
  {
    key: "2",
    category: "Ultimate",
    product_name: "Walkspan Ultimate API",
    query_times: "Unlimited times",
  },
];

const MembershipSummary = () => {
  return (
    <div>
      <Table columns={columns} dataSource={membershipData} pagination = {false}  bordered/>
    </div>
  );
};

export default MembershipSummary;
