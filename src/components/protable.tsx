import {
  EllipsisOutlined,
  PlusOutlined,
  DownloadOutlined,
  EditOutlined,
  PrinterFilled,
  SaveOutlined,
  FileAddTwoTone,
  BarcodeOutlined,
} from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown, ProCard } from "@ant-design/pro-components";
import {
  Button,
  Dropdown,
  Space,
  Tag,
  ConfigProvider,
  Modal,
  InputNumber,
  Form,
  Drawer,
} from "antd";
import type { MenuProps } from "antd";
import thTHIntl from "antd/lib/locale/th_TH";
import enUSIntl from "antd/lib/locale/en_US";
import { useRef, useState } from "react";
import request from "umi-request";
import StepForm from "./../pages/index";
const intlMap = {
  thTHIntl,
  enUSIntl,
};
const items: MenuProps["items"] = [
  {
    key: "0",
    type: "group",
    label: "Manifest",
    children: [
      {
        key: "0-1",
        label: "Print Manifest",
      },
    ],
  },
  {
    key: "1",
    type: "group",
    label: "Rollcage",
    children: [
      {
        label: "Print Rollcage A",
        key: "1",
      },
      {
        label: "Print Rollcage B",
        key: "2",
      },
      {
        label: "Print Rollcage C",
        key: "3",
      },
      {
        label: "Print Rollcage D",
        key: "4",
      },
    ],
  },
];
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

type Item = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
  region: string;
  origin: string;
  destination: string;
  truck_in: string;
  truck_out: string;
  truck_info: {
    id: number;
    driver: string;
    plate_license: string;
    truck_type: string;
    service: string;
    carrier: string;
    truck_in: string;
    truck_out: string;
  }[];
  locked: boolean;
  author_association: string;
  user: string;
  avatar: string;
};

const Protable: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [intl, setIntl] = useState("enUSIntl");
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };
  const columns: ProColumns<Item>[] = [
    // {
    //   dataIndex: "index",
    //   valueType: "indexBorder",
    //   width: 48,
    // },
    // {
    //   title: "ID Sheet",
    //   dataIndex: "id",
    //   copyable: true,
    //   ellipsis: true,
    //   width: 120,
    //   align: "center",
    //   // tip: "If the title is too long, it will automatically shrink",
    //   formItemProps: {
    //     rules: [
    //       {
    //         required: true,
    //         message: "This is required",
    //       },
    //     ],
    //   },
    // },
    {
      title: "Barcode",
      dataIndex: "number",
      copyable: true,
      // ellipsis: true,
      // tip: "If the title is too long, it will automatically shrink",
      // width: 120,
      align: "center",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "This is required",
          },
        ],
      },
    },

    {
      title: "Region",
      dataIndex: "region",
      // ellipsis: true,
      // width: 120,
      align: "center",
      valueType: "select",
      valueEnum: {
        1: { text: "North" },
        2: { text: "South" },
        3: { text: "East" },
        4: { text: "West" },
      },
    },
    // add Origin > Destination

    {
      title: "Origin > Destination",
      dataIndex: "origin",
      ellipsis: true,
    },

    // add truck in > truck out
    {
      title: "Truck In > Truck Out",
      dataIndex: "truck_in",
      ellipsis: true,
    },

    {
      disable: true,
      title: "Status",
      dataIndex: "state",
      filters: true,
      onFilter: true,
      ellipsis: true,
      // width: 120,
      align: "center",
      // add text-center
      valueType: "select",
      valueEnum: {
        all: { text: "super long".repeat(50) },
        open: {
          text: "Success",
          status: "Success",
        },
        closed: {
          text: "Error",
          status: "Error",
          disabled: true,
        },
        processing: {
          text: "Processing",
          status: "Processing",
        },
      },
    },

    // {
    //   disable: true,
    //   title: "labels",
    //   dataIndex: "labels",
    //   search: {
    //     transform: (value) => {
    //       return {
    //         labels: value,
    //       };
    //     },
    //   },
    //   renderFormItem: (_, { defaultRender }) => {
    //     return defaultRender(_);
    //   },
    //   render: (_, record) => (
    //     <Space>
    //       {record.labels.map(({ name, color }) => (
    //         <Tag color={color} key={name}>
    //           {name}
    //         </Tag>
    //       ))}
    //     </Space>
    //   ),
    // },

    // {
    //   title: "Created Date",
    //   key: "showTime",
    //   dataIndex: "created_at",
    //   valueType: "date",
    //   sorter: true,
    //   hideInSearch: true,
    //   align: "center",
    //   width: 120,
    // },

    // {
    //   title: "Info",
    //   dataIndex: "info",
    //   search: false,
    //   // align: "center",
    //   // fixed: 'right',
    //   renderFormItem: (_, { defaultRender }) => {
    //     return defaultRender(_);
    //   },
    //   render: (_, record) => (
    //     <Space>
    //       {record.truck_info.map(
    //         ({
    //           id,
    //           driver,
    //           plate_license,
    //           truck_type,
    //           service,
    //           carrier,
    //           truck_in,
    //           truck_out,
    //         }) => (
    //           // add space wrap
    //           <Space wrap key="">
    //             <Tag color="blue" key={id}>
    //               Truck Info :{" "}
    //               {driver +
    //                 " / " +
    //                 plate_license +
    //                 " / " +
    //                 truck_type +
    //                 " / " +
    //                 service}
    //             </Tag>

    //             <Tag color="success" key={carrier}>
    //               Carrier : {carrier}
    //             </Tag>

    //             <Tag color="warning" key={truck_in}>
    //               Truck In : {truck_in}
    //             </Tag>

    //             <Tag color="warning" key={truck_out}>
    //               Truck Out : {truck_out}
    //             </Tag>
    //           </Space>
    //         )
    //       )}
    //     </Space>
    //   ),
    // },

    {
      title: "Created date",
      dataIndex: "created_at",
      valueType: "dateRange",
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
    },

    {
      title: "",
      valueType: "option",
      key: "Action",
      align: "center",
      render: (text, record, _, action) => [
        <>
          {/* <Button
            icon={<PrinterFilled />}
            style={{
              backgroundColor: "#f5222d",
              borderColor: "#f5222d",
              color: "white",
            }}
            size="small"
            key="print_manifest"
            disabled
          >
            Manifrest
          </Button> */}

          <Dropdown.Button
            size="small"
            key="actionGroup"
            danger
            // loading={loading}
            menu={{ items }}

            // onClick={() => enterLoading(0)}
          >
            <PrinterFilled />
            Print Action
          </Dropdown.Button>
          {/* 
          <Button
            icon={<PlusOutlined />}
            style={{
              backgroundColor: "#73d13d",
              borderColor: "#73d13d",
              color: "white",
            }}
            size="small"
            key="print_manifest"
            onClick={showModal}
          >
            Record Mileage
          </Button> */}

          <Button
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.id);
            }}
            type="primary"
            size="small"
            icon={<EditOutlined />}
            style={{
              backgroundColor: "#0958d9",
              borderColor: "#0958d9",
              color: "white",
            }}
          >
            Edit
          </Button>
        </>,
      ],
    },

    // add sreach   driver,plate_license,truck_type,service,carrier,truck_in,truck_out

    {
      title: "Driver",
      dataIndex: "driver",
      hideInTable: true,

      align: "center",
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
    },

    {
      title: "Plate License",
      dataIndex: "plate_license",
      hideInTable: true,
      align: "center",
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
    },

    {
      title: "Carrier",
      // dataIndex: "truck_type",
      hideInTable: true,
      align: "center",
      valueType: "select",
      valueEnum: {
        100000: {
          status: "Processing",
          text: "100000 - บริษัท เอสซีจี เอ็กซ์เพรส",
        },
        200072: {
          status: "Processing",
          text: "200072 - บริษัท เอสซีจี โลจิสติกส์ แมเนจเม้นท์ จำกัด",
        },
        200083: {
          status: "Processing",
          text: "200083 - บริษัท แสงอัมพร ทรานสปอร์ต จำกัด",
        },
        200084: {
          status: "Processing",
          text: "200084 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
        },
        200085: {
          status: "Processing",
          text: "200085 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
        },
        200086: {
          status: "Processing",
          text: "200086 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
        },
        200087: {
          status: "Processing",
          text: "200087 - บริษัท บิ๊กบูม ทรานสปอร์ต จำกัด",
        },
      },

      // renderFormItem: (_, { defaultRender }) => {
      //   return defaultRender(_);
      // },
    },

    {
      title: "Truck Type",
      // dataIndex: "truck_type",
      hideInTable: true,
      align: "center",
      valueType: "select",
      valueEnum: {
        100000: {
          status: "Processing",
          text: "รถ 4 ล้อ",
        },
        200072: {
          status: "Processing",
          text: "รถ 6 ล้อ",
        },
        200083: {
          status: "Processing",
          text: "รถ 10 ล้อ",
        },
        200084: {
          status: "Processing",
          text: "รถ 12 ล้อ",
        },
      },

      // renderFormItem: (_, { defaultRender }) => {
      //   return defaultRender(_);
      // },
    },

    {
      title: "Service",
      // dataIndex: "truck_type",
      hideInTable: true,
      align: "center",
      valueType: "select",
      valueEnum: {
        100000: {
          status: "Processing",
          text: "Normal",
        },
        200072: {
          status: "Processing",
          text: "Cool",
        },
        200083: {
          status: "Processing",
          text: "Frozen",
        },
        200084: {
          status: "Processing",
          text: "OWOS",
        },
      },
    },

    {
      title: "Truck In",
      hideInTable: true,
      align: "center",
      valueType: "date",
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
    },

    {
      title: "Truck Out",
      hideInTable: true,
      align: "center",
      valueType: "date",
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
    },
  ];
  return (
    <ConfigProvider locale={intlMap[intl]}>
      <Drawer
        title="Add information Manifest"
        width="100%"
        height="80%"
        onClose={onClose}
        placement="top"
        open={openDrawer}
        bodyStyle={{ paddingBottom: 80 }}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>Cancel</Button>
        //     <Button onClick={onClose} type="primary">
        //       Submit
        //     </Button>
        //   </Space>
        // }
      >
        <StepForm />
      </Drawer>

      <ProTable<Item>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          // await waitTime(2000);
          return request<{
            data: Item[];
          }>("http://localhost:3000/api/_mockup_data", {
            params,
          });
        }}
        editable={{
          type: "multiple",
        }}
        columnsState={{
          persistenceKey: "pro-table-singe-demos",
          persistenceType: "localStorage",
          onChange(value) {
            console.log("value: ", value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: "auto",
        }}
        options={{
          setting: {
            listsHeight: 400,
          },
        }}
        bordered
        size="small"
        // fixedHeader
        scroll={{ y: 1000, x: 1000 }}
        // fix first column and add index column
        // tableLayout="auto"
        // expandable={{ expandedRowRender }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === "get") {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 20,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        headerTitle="Manifrest List"
        toolBarRender={() => [
          <Space wrap key="toolbar">
            <Button
              key=""
              type="primary"
              ghost
              onClick={() => {
                setIntl(intl === "thTHIntl" ? "enUSIntl" : "thTHIntl");
              }}
            >
              <DownloadOutlined />
              Export Manifest
            </Button>

            <Button key="button" type="primary">
              <DownloadOutlined />
              Export Pacel
            </Button>

            <Button
              key="button"
              type="primary"
              ghost
              onClick={showDrawer}
              icon={<FileAddTwoTone />}
            >
              Create Manifest
            </Button>

            <Button key="button" type="primary">
              <BarcodeOutlined />
              Scan In
            </Button>

            <Button key="button" type="primary" ghost>
              <BarcodeOutlined />
              Scan Out
            </Button>
          </Space>,
        ]}
      />
      <Modal
        title="Record Mileage"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>

        <Form
          layout="inline"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="mileage"
            label="Mileage Start"
            rules={[
              {
                required: true,
                message: "Please input the Mileage!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="mileage_end"
            label="Mileage End"
            rules={[
              {
                required: true,
                message: "Please input the Mileage!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default Protable;
