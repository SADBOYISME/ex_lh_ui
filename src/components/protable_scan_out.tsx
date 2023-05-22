import type { ColumnsState, ProColumns } from "@ant-design/pro-components";
import { ProTable } from "@ant-design/pro-components";
import { useState } from "react";

const valueEnum = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

export type TableListItem = {
  key: number;
  name: string;
  status: string;
  tracking: string;
  order_code: number;
  sender_name: string;
  updatedAt: number;
  createdAt: number;
  money: number;
};
const tableListDataSource: TableListItem[] = [];

for (let i = 0; i < 10; i += 1) {
  tableListDataSource.push({
    key: i,
    name: `TradeCode ${i}`,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    tracking: "A" + random12() + "A",
    order_code: random12(),
    updatedAt: Date.now() - Math.floor(Math.random() * 1000),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
  });
}

// FUNCTION: random number 12 digits
function random12() {
  return Math.floor(100000000000 + Math.random() * 900000000000);
}

// fuction random name sender
// function randomName() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   for (var i = 0; i < 10; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }

//   return text;
// }

const columns: ProColumns<TableListItem>[] = [
  {
    title: "Stack ID",
    dataIndex: "key",
    key: "name",
  },
  {
    title: "Stack ID",
    dataIndex: "status",
    initialValue: "all",
    filters: true,
    onFilter: true,
    valueType: "select",
    valueEnum: {
      all: { text: "pacel", status: "Default" },
      close: { text: "pacel", status: "Default" },
      running: { text: "pacel", status: "Processing" },
      online: { text: "pacel", status: "Success" },
      error: { text: "pacel", status: "Error" },
    },
  },

  {
    title: "Tracking Number",
    dataIndex: "tracking",
    filters: true,
    onFilter: true,
  },

  {
    title: "Order Code",
    dataIndex: "order_code",
    hideInSetting: true,
  },

  {
    title: "Sender Name",
    dataIndex: "sender_name",
    hideInSetting: true,
  },

  {
    title: "Order Date",
    key: "since2",
    dataIndex: "createdAt",
    valueType: "date",
    hideInSetting: true,
  },

  {
    title: "Action",
    key: "option",
    width: 120,
    valueType: "option",
    render: () => [<a key="1">Edit</a>, <a key="2">Delete</a>],
  },
];

const TableScanOut = () => {
  const [columnsStateMap, setColumnsStateMap] = useState<
    Record<string, ColumnsState>
  >({
    name: {
      show: false,
      order: 2,
    },
  });
  return (
    <ProTable<TableListItem, { keyWord?: string }>
      columns={columns}
      request={(params) =>
        Promise.resolve({
          data: tableListDataSource.filter((item) => {
            if (!params?.keyWord) {
              return true;
            }
            if (
              item.name.includes(params?.keyWord) ||
              item.status.includes(params?.keyWord)
            ) {
              return true;
            }
            return false;
          }),
          success: true,
        })
      }
      //   options={{
      //     search: true,
      //   }}
      rowKey="key"
      columnsState={{
        value: columnsStateMap,
        onChange: setColumnsStateMap,
      }}
      search={false}
      dateFormatter="string"
      headerTitle=""
    />
  );
};

export default TableScanOut;
