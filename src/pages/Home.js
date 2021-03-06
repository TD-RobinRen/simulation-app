import { Button, PageHeader, Table } from "antd";
import { Link } from "react-router-dom";
import { HistoryOutlined } from "@ant-design/icons";
import { Image } from "antd";
import SearchBar from "./search-bar.png";
import { updateAppPath } from "../config/routeAtlas";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <Link to="/dashboard">{text}</Link>,
  },
  {
    title: "Creator",
    dataIndex: "creator",
    key: "creator",
  },
  {
    title: "History",
    dataIndex: "history",
    key: "history",
    render: () => <HistoryOutlined style={{ fontSize: 18 }} />,
  },
];
const data = [
  {
    key: "1",
    name: "Inbound Handling Simulation",
    creator: "Enming Hu",
  },
  {
    key: "2",
    name: "Dedicated RingGroup simulation ",
    creator: "Stan Zhang",
  },
  {
    key: "3",
    name: "Phone drop threshold simulation ",
    creator: "Chris Wu",
  },
  {
    key: "4",
    name: "Workload Forecasting",
    creator: "Winnie He",
  },
];

export default function Home() {
  const handleCreate = () => {
    updateAppPath({ path: "/dashboard" });
  };
  return (
    <>
      <PageHeader
        title="Simulation"
        extra={[
          <Button key="1" type="primary" onClick={handleCreate}>
            Create
          </Button>,
        ]}
      />
      <Image src={SearchBar} preview={false} />
      <Table columns={columns} dataSource={data} />
    </>
  );
}
