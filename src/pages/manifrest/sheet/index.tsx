import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Space,
  Col,
  Divider,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Title } = Typography;
const style: React.CSSProperties = { padding: "8px 0" };

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Protable = dynamic(() => import("@/components/protable"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const FormDisabledDemo: React.FC = () => {
  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Divider orientation="left"><Title level={3} >Search Sheet</Title> </Divider>
      <Protable />
    </>
  );
};

export default FormDisabledDemo;
