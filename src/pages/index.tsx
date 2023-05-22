import type { ProFormInstance } from "@ant-design/pro-components";
import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  StatisticCard,
} from "@ant-design/pro-components";
import {
  ConfigProvider,
  Divider,
  Timeline,
  message,
  Typography,
  Collapse,
  Col,
  Row,
  Grid,
  Tag,
} from "antd";
import thTHIntl from "antd/lib/locale/th_TH";
import enUSIntl from "antd/lib/locale/en_US";
import { useRef, useState, useEffect } from "react";
const intlMap = {
  thTHIntl,
  enUSIntl,
};
const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const { Operation } = StatisticCard;
const { Title } = Typography;
const { Panel } = Collapse;
const data = [
  {
    amount: 20,
    ratio: 0.1,
    memo: "学习",
    const: "const",
  },
  {
    amount: 100,
    ratio: 0.5,
    memo: "睡觉",
    const: "const",
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: "吃饭",
    const: "const",
  },
  {
    amount: 30,
    ratio: 0.15,
    memo: "讲礼貌",
    const: "const",
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: "其他",
    const: "const",
  },
  {
    amount: 20,
    ratio: 0.1,
    memo: "运动",
    const: "const",
  },
  {
    amount: 10,
    ratio: 0.05,
    memo: "暂无备注",
    const: "const",
  },
];
const { useBreakpoint } = Grid;
const App: React.FC = () => {
  const formRef = useRef<ProFormInstance>();
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [componentTruck, setComponentDisabledTruck] = useState<boolean>(false);
  const [componentSize, setComponentSize] = useState("md");

  // handle disable
  const handleDisable = () => {
    setComponentDisabled(!componentDisabled);
  };
  // log size of screen
  const screens = useBreakpoint();

  // find current screen in screens object {"xs": false,"sm": false,"md": false,"lg": false,"xl": false,"xxl": false} get frist true
  const firstTrueKey = Object.entries(screens)
    .reverse()
    .find(([key, value]) => value === true);
  const currentBreakpoint = firstTrueKey ? firstTrueKey[0] : "";

  console.log(currentBreakpoint); // Output: "lg" (if a true breakpoint exists) Output: "lg";

  //call usEffect
  useEffect(() => {
    if (currentBreakpoint !== "") {
      // if currentBreakpoint = lg , xl , xxl set size to md
      if (
        currentBreakpoint === "lg" ||
        currentBreakpoint === "xl" ||
        currentBreakpoint === "xxl"
      ) {
        setComponentSize("md");
      } else {
        setComponentSize(currentBreakpoint);
      }
    }
  }, [currentBreakpoint]);

  return (
    <ConfigProvider locale={intlMap["thTHIntl"]}>
      {/* <Divider orientation="left">
        <Title level={3}>Add information Manifest</Title>
      </Divider> */}
      Current break point:{" "}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
      <ProCard>
        <StepsForm<{
          name: string;
        }>
          formRef={formRef}
          onFinish={async () => {
            await waitTime(1000);
            message.success("บันทึกข้อมูลสำเร็จ");
          }}
          formProps={{
            validateMessages: {
              required: "โปรดกรอกข้อมูลลงในช่องนี้",
            },
          }}
        >
          <StepsForm.StepForm<{
            name: string;
          }>
            name="base"
            title="Location"
            stepProps={{
              description: "location information",
            }}
            onFinish={async () => {
              console.log(formRef.current?.getFieldsValue());
              await waitTime(2000);
              return true;
            }}
          >
            <Row gutter={[16, 16]}>
              <Col>
                <ProFormSelect
                  label="Branch Origin"
                  tooltip="สถานีที่ทำการรับพัสดุ"
                  name="branch_origin"
                  width="md"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue="1"
                  options={[
                    { value: "1", label: "123-LLK" },
                    { value: "2", label: "903 HUB-WAN " },
                  ]}
                />
              </Col>
              <Col>
                <ProFormSelect
                  label="Region "
                  tooltip="ภูมิภาคการขนส่ง"
                  name="region"
                  width="md"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue="6"
                  options={[
                    { value: "6", label: "BKK - BKK" },
                    { value: "7", label: "BKK - UPC 2,8" },
                    { value: "8", label: "BKK - UPC 4,5,9" },
                    { value: "9", label: "UPC - BKK" },
                    { value: "10", label: "UPC - UPC" },
                    { value: "11", label: "Same Region" },
                  ]}
                />
              </Col>

              <Col>
                <ProFormSelect
                  label="Branch Destination"
                  tooltip="สถานีที่ทำการส่งพัสดุ"
                  name="branch_destination"
                  width="md"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  initialValue="2"
                  options={[
                    { value: "1", label: "123-LLK" },
                    { value: "2", label: "903 HUB-WAN " },
                  ]}
                />
              </Col>

              <Col>
                <ProFormSelect
                  label="Node Destination"
                  tooltip="สถานีที่ทำการส่งพัสดุระหว่างทาง"
                  name="node"
                  width="md"
                  valueEnum={{
                    red: "WS-1",
                    green: "HK-209",
                    blue: "RK-11",
                    yellow: "RK-12",
                  }}
                  fieldProps={{
                    mode: "multiple",
                  }}
                  placeholder="สามารถเลือกได้มากกว่า 1 สถานี หรือ ไม่เลือกก็ได้"
                  rules={[
                    {
                      required: false,
                      message: "Please select your favorite colors!",
                      type: "array",
                    },
                  ]}
                />
              </Col>
            </Row>
          </StepsForm.StepForm>
          <StepsForm.StepForm<{
            checkbox: string;
          }>
            name="checkbox"
            title="Truck"
            stepProps={{
              description: "truck information",
            }}
            onFinish={async () => {
              console.log(formRef.current?.getFieldsValue());
              return true;
            }}
          >
            <Divider orientation="left">SGCL</Divider>
            <ProFormSelect
              label="Send data to SCGL"
              tooltip="ส่งต่องานไปยัง SCGL"
              name="send_data_to_scgl"
              // add width=100%
              width="md"
              placeholder="หากไม่ส่งต่องาน SCGL ปล่อยช่องนี้ว่างไว้"
              showSearch
              onChange={(value: any) => {
                console.log(value);
                // check if value is undefined or null
                if (value === undefined || value === null) {
                  setComponentDisabled(true);
                } else {
                  setComponentDisabled(false);
                }
              }}
              rules={[
                {
                  required: false,
                  message: "กรุณาเลือกประเภทการส่ง",
                },
              ]}
              // initialValue=""
              options={[
                { value: "2", label: "OWOS" },
                { value: "3", label: "Beverage" },
                { value: "4", label: "FFM-EE" },
                { value: "5", label: "Big Lot" },
                { value: "6", label: "Return" },
                { value: "7", label: "Cool Cont" },
                { value: "8", label: "FFM-Ware CDC" },
                { value: "1", label: "Roll Cage" },
              ]}
            />
            {componentDisabled && (
              <>
                <Divider orientation="left">Truck Information</Divider>
                <ProForm.Group>
                  <ProFormSelect
                    label="Truck Information"
                    tooltip="ทะเบียนรถ / ประเภทรถ / บริการขนส่ง"
                    name="license_plate"
                    width="md"
                    placeholder="ตัวอย่าง. 1กข 1234 / รถบรรทุก 6 ล้อ / Cool"
                    showSearch
                    // cathed value from select
                    onChange={(value: any) => {
                      console.log(value);
                      // check if value is ADD
                      if (value === "ADD") {
                        setComponentDisabledTruck(true);
                        // set field value carriers and driver_name to ""
                        formRef.current?.setFieldsValue({
                          carriers: "",
                          driver_name: "",
                        });
                      } else {
                        setComponentDisabledTruck(false);
                        // set field value carriers and driver_name to dummy data
                        formRef.current?.setFieldsValue({
                          carriers: "1",
                          driver_name: "นายวิทยา สุขใจ",
                        });
                      }
                    }}
                    rules={[
                      {
                        required: true,
                        message: "กรุณาเลือกทะเบียนรถ",
                      },
                    ]}
                    initialValue=""
                    options={[
                      { value: "ADD", label: "เพิ่มข้อมูลรถ" },
                      { value: "1", label: "พฒ190 / รถบรรทุก 6 ล้อ / Cool" },
                      { value: "2", label: "ปว191 / รถบรรทุก 6 ล้อ / Frozen" },
                      { value: "3", label: "รส192 / รถบรรทุก 4 ล้อ / Normal" },
                      { value: "4", label: "หก193 / รถบรรทุก 6 ล้อ / Normal" },
                      { value: "5", label: "จฟ194 / รถบรรทุก 6 ล้อ / Normal" },
                    ]}
                  />

                  <ProFormSelect
                    label="Carriers"
                    tooltip="บริษัทขนส่ง"
                    name="carriers"
                    // add width=100%
                    width="md"
                    placeholder="เลือกบริษัทขนส่ง"
                    showSearch
                    rules={[
                      {
                        required: true,
                        message: "กรุณาเลือกบริษัทขนส่ง",
                      },
                    ]}
                    // initialValue=""
                    options={[
                      {
                        value: "1",
                        label: "100000 - บริษัท เอสซีจี เอ็กซ์เพรส",
                      },
                      {
                        value: "2",
                        label:
                          "200072 - บริษัท เอสซีจี โลจิสติกส์ แมเนจเม้นท์ จำกัด",
                      },
                      {
                        value: "3",
                        label: "200083 - บริษัท แสงอัมพร ทรานสปอร์ต จำกัด",
                      },
                      {
                        value: "4",
                        label: "200084 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
                      },
                      {
                        value: "5",
                        label: "200085 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
                      },
                      {
                        value: "6",
                        label: "200086 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
                      },
                      {
                        value: "7",
                        label: "200087 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
                      },
                    ]}
                  />

                  <ProFormText
                    name="driver_name"
                    label="Driver's name"
                    tooltip="ชื่อคนขับรถ"
                    width="md"
                    placeholder="ตัวอย่าง. นาย สมชาย ใจดี"
                    rules={[
                      {
                        required: true,
                        message: "กรุณากรอกชื่อคนขับรถ",
                      },
                    ]}
                  />
                </ProForm.Group>
                {componentTruck && (
                  <>
                    <Divider orientation="left">Add Truck</Divider>
                    <ProForm.Group>
                      <ProFormText
                        name="license_plate_add"
                        label="License Plate"
                        tooltip="หมายเลขทะเบียนรถ"
                        width="md"
                        placeholder="ตัวอย่าง. 1กข 1234"
                        rules={[
                          {
                            required: true,
                            message: "กรุณากรอกหมายเลขทะเบียนรถ",
                          },
                        ]}
                      />

                      <ProFormSelect
                        label="Truck Type"
                        tooltip="ประเภทรถ"
                        name="truck_type"
                        width="md"
                        placeholder="เลือกประเภทรถ"
                        rules={[
                          {
                            required: true,
                            message: "กรุณาเลือกประเภทรถ",
                          },
                        ]}
                        initialValue=""
                        options={[
                          { value: "1", label: "รถบรรทุก 4 ล้อ" },
                          { value: "2", label: "รถบรรทุก 6 ล้อ" },
                          { value: "3", label: "รถบรรทุก 10 ล้อ" },
                          { value: "4", label: "รถบรรทุก 12 ล้อ" },
                        ]}
                      />

                      <ProFormSelect
                        label="Service Type"
                        tooltip="บริการขนส่ง"
                        name="service_type"
                        width="md"
                        placeholder="เลือกบริการขนส่ง"
                        rules={[
                          {
                            required: true,
                            message: "กรุณาเลือกบริการขนส่ง",
                          },
                        ]}
                        initialValue=""
                        options={[
                          { value: "1", label: "Cool" },
                          { value: "2", label: "Frozen" },
                          { value: "3", label: "Normal" },
                        ]}
                      />
                    </ProForm.Group>
                  </>
                )}
              </>
            )}
          </StepsForm.StepForm>

          <StepsForm.StepForm
            name="time"
            title="Costing"
            stepProps={{
              description: "Costing information",
            }}
          >
            <Divider orientation="left">Costing Overview</Divider>
            <StatisticCard.Group style={{ width: "100%" }}>
              <StatisticCard
                statistic={{
                  title: "Total",
                  value: 500,
                }}
              />
              <Operation>=</Operation>
              <StatisticCard
                statistic={{
                  title: "Truck Fee",
                  value: 234,
                }}
              />
              <Operation>+</Operation>
              <StatisticCard
                statistic={{
                  title: "Node Fee",
                  value: 112,
                }}
              />
              <Operation>+</Operation>
              <StatisticCard
                statistic={{
                  title: "Branch Fee",
                  value: 255,
                }}
              />
            </StatisticCard.Group>

            {/* <Divider orientation="left">Truck Fee information</Divider> */}
            {/*  add space */}
            <p></p>
            <Collapse defaultActiveKey={["1"]}>
              <Panel
                header={<span style={{ color: "#ffff" }}>Truck Fee</span>}
                key="1"
                style={{
                  backgroundColor: "#ff4d4f",
                }}
              >
                <Timeline
                  items={[
                    {
                      color: "green",
                      children: (
                        <>
                          <b>Truck Fee information</b>
                          <p></p>

                          <b>Carriers</b>
                          <p>
                            200072 - บริษัท เอสซีจี โลจิสติกส์ แมเนจเม้นท์ จำกัด
                          </p>

                          <b>Driver name</b>
                          <p>นาย สมชาย ใจดี</p>

                          <b>License Plate / Type / Service</b>
                          <p>พฒ190 / รถบรรทุก 6 ล้อ / Cool</p>

                          <b>Total Truck Fee : 234</b>
                        </>
                      ),
                    },
                  ]}
                />
              </Panel>
              <Panel
                header={<span style={{ color: "#ffff" }}>Location Fee</span>}
                key="2"
                style={{
                  backgroundColor: "#ff4d4f",
                }}
              >
                <Timeline
                  items={[
                    {
                      color: "green",
                      children: (
                        <>
                          <b>Locations Fee information</b>
                          <p></p>

                          <p>Branch Origin : 142-JGS</p>
                          <p>Branch Destination : 142-JGS</p>

                          <b>Total Locations Fee : 112</b>
                        </>
                      ),
                    },
                  ]}
                />
              </Panel>
              <Panel
                header={<span style={{ color: "#ffff" }}>Node Fee</span>}
                style={{
                  backgroundColor: "#ff4d4f",
                }}
                key="3"
              >
                <Timeline
                  items={[
                    {
                      color: "green",
                      children: (
                        <>
                          <b>Node Fee information</b>
                          <p></p>

                          <p>Node : 142-JGS</p>
                          <p>Node : 142-JGS</p>

                          <b>Total Node Fee : 112</b>
                        </>
                      ),
                    },
                  ]}
                />
              </Panel>
            </Collapse>
            <p></p>
          </StepsForm.StepForm>
        </StepsForm>
      </ProCard>
    </ConfigProvider>
  );
};

export default App;
