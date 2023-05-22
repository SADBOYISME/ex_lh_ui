import dynamic from "next/dynamic";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import {
  Input,
  Space,
  Statistic,
  Button,
  Form,
  Radio,
  Tag,
  Card,
  Typography,
  Divider as AntDivider,
} from "antd";
import { InfoCircleOutlined, ArrowDownOutlined } from "@ant-design/icons";
import RcResizeObserver from "rc-resize-observer";
import { useState } from "react";

const PTable = dynamic(() => import("../../../components/protable_scan_out"), {
  ssr: false,
  // add loading
  loading: () => <p>loading...</p>,
});

const { Divider } = ProCard;
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function PageScanOut() {
  const [responsive, setResponsive] = useState(false);
  const [form] = Form.useForm();
  const { Title } = Typography;
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard>
        {/* <Title level={5}>{"PLK > PLK"}</Title> */}
        <Search
          placeholder="Scan Manifest ID"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </ProCard>

      <AntDivider />

      <ProCard
        // bordered
        // headerBordered
        split={responsive ? "horizontal" : "vertical"}
        gutter={[8, 8]}
      >
        <ProCard title="">
          <Form
            form={form}
            layout="vertical"
            // initialValues={{ requiredMarkValue: requiredMark }}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
          >
            <Form.Item
              label="Scan Tracking Number"
              required
              tooltip={{
                title: "Tooltip with customize icon",
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input placeholder="input placeholder" style={{ width: 200 }} />
              <Button type="primary" style={{ marginLeft: 10 }}>
                Finish Scan In
              </Button>
            </Form.Item>
          </Form>
        </ProCard>

        <ProCard title="Information">
          <Space size={[0, 8]} wrap>
            <Tag color="magenta">
              <span style={{ fontSize: 14 }}>Sheet barcode : 661007</span>
            </Tag>
            <Tag color="gold">
              <span style={{ fontSize: 14 }}>
                Date created : 2022-01-31 07:39:22
              </span>
            </Tag>
            <Tag color="cyan">
              <span style={{ fontSize: 14 }}>
                Driver : SD Somchai B.0953708493
              </span>{" "}
            </Tag>
            <Tag color="purple">
              <span style={{ fontSize: 14 }}>Vehicle : 2ฒฌ9381</span>
            </Tag>
          </Space>
        </ProCard>

        <ProCard title="">
          <ProCard>
            <Title level={4}>{"PLK > PLK"}</Title>
          </ProCard>
          <Divider type={responsive ? "horizontal" : "vertical"} />
          <ProCard>
            <Title level={4}>{"21 > 21"}</Title>
          </ProCard>
        </ProCard>

        {/* <ProCard title="Information"></ProCard> */}
      </ProCard>

      <ProCard split={responsive ? "horizontal" : "vertical"} gutter={[8, 8]} bordered>
        <ProCard title="Out">
        no items.
        </ProCard>

        <ProCard title="Received" >
          <PTable />
        </ProCard>
      </ProCard>
      {/* hide below line */}

      {/* <PageContainer>
        <ProCard
          direction={responsive ? "column" : "row"}
          ghost
          gutter={[8, 8]}
          wrap
        >
          <ProCard style={{ background: "whitesmoke" }}>
            <Search
              placeholder="Scan Manifest ID"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </ProCard>

          <ProCard gutter={[8, 8]} direction={responsive ? "column" : "row"}>
            <ProCard layout="default" style={{ background: "whitesmoke" }}>
              <Form
                form={form}
                layout="vertical"
                // initialValues={{ requiredMarkValue: requiredMark }}
                // onValuesChange={onRequiredTypeChange}
                // requiredMark={requiredMark}
              >
                <Form.Item
                  label="Stack ID"
                  required
                  tooltip="*กรุณากรอก Stack ID เป็นภาษาอังกฤษหรือตัวเลขเท่านั้น"
                >
                  <Input
                    placeholder="eng or number only"
                    style={{ width: 200 }}
                  />
                  <Button type="primary" style={{ marginLeft: 10 }}>
                    Clear Stack ID
                  </Button>
                </Form.Item>
                <Form.Item
                  label="Scan Tracking Number"
                  required
                  tooltip={{
                    title: "Tooltip with customize icon",
                    icon: <InfoCircleOutlined />,
                  }}
                >
                  <Input
                    placeholder="input placeholder"
                    style={{ width: 200 }}
                  />
                  <Button type="primary" style={{ marginLeft: 10 }}>
                    Finish Scan Out
                  </Button>
                </Form.Item>
              </Form>
            </ProCard>

            <ProCard
              style={{ background: "whitesmoke" }}
              direction={responsive ? "column" : "row"}
            >
              <Space size={[0, 8]} wrap>
                <Tag color="magenta">Sheet barcode : 661007</Tag>
                <Tag color="gold">Date created : 2022-01-31 07:39:22</Tag>
                <Tag color="cyan">Driver : SD Somchai B.0953708493</Tag>
                <Tag color="purple">Vehicle : 2ฒฌ9381</Tag>
              </Space>

              <Card bordered={false} style={{ marginTop: 15 }}>
                <Title level={4}>{"PLK > PLK"}</Title>
                <AntDivider />
                <Title level={3}>{"21 > 21"}</Title>
              </Card>
            </ProCard>

            <ProCard style={{ height: 200, background: "whitesmoke" }} />
          </ProCard>

          <ProCard gutter={8} ghost>
            <ProCard colSpan={8} style={{ height: 200 }} />
            <ProCard colSpan={16} style={{ height: 200 }} />
          </ProCard>
        </ProCard>
      </PageContainer> */}
    </RcResizeObserver>
  );
}
