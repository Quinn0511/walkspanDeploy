import React from "react";
import { Table, Tag, Radio, Space } from "antd";

const columns = [
  {
    title: "Parameter",
    dataIndex: "parameter",
    key: "parameter",
    
  },
  {
    title: "Default",
    dataIndex: "default",
    key: "default",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];

const referenceData = [
  {
    key: "1",
    parameter: "api_key",
    default: "null",
    description: "The key use the assigned key to call for api"
  },

  {
    key: "2",
    parameter: "address",
    default: "null",
    description: "Please input the validate address"
  },
  {
    key: "3",
    parameter: "category",
    default: "null",
    description: "[Nature|Access|Amenities|Architecture|Comfort|Interest|Safety]"
  },

  {
    key: "3",
    parameter: "areatype",
    default: "null",
    description: "[Block|Quarter-Mile|Neighborhood]"
  },
];

const APIReference = () => {
  return (
    <div>
      <div style = {{
        fontSize: "20px",
        fontWeight:"bold"
      }}>Get Scores</div>
      <div>This endpoint retrieve the scores for specific address</div>

      <div style = {{
        fontSize: "20px",
        fontWeight:"bold"
      }}>HTTP Request</div>
        <div> GET wwww.walkspan.com </div>
      <Table columns={columns} dataSource={referenceData} pagination = {false}  bordered/>
    </div>
  );
};

export default APIReference;
