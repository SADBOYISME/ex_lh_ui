// import next route api
import type { NextApiRequest, NextApiResponse } from "next";

const jsonData = `{
  "data": [
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    },
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_in" : "2023-05-13T03:54:50Z",
      "truck_out" : "2023-05-13T03:54:50Z",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
    ,
    {
      "id": 624748504,
      "number": 6689101,
      "region": "BKK - BKK",
      "origin": "CMI - HUB WAN",
      "destination": "HUB WAN",
      "truck_info":[
        {
          "id": 1,
          "driver": "วิศรุต ชอบชื่น",
          "plate_license": "ฏศ9012",
          "truck_type": "4 ล้อ",
          "service": "normal",
          "carrier": "บริษัท สหกรณ์ จำกัด",
          "truck_in" : "2023-05-13T03:54:50Z",
          "truck_out" : "2023-05-13T03:54:50Z"
        }
      ],
      "state": "open",
      "locked": false,
      "comments": 1,
      "created_at": "2020-05-26T09:42:56Z",
      "updated_at": "2020-05-26T10:03:02Z",
      "closed_at": null,
      "author_association": "NONE",
      "user": "chenshuai2144",
      "avatar": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
    }
  ],
  "page": 1,
  "success": true,
  "total": 2
}
`;
// convert to json
const data = JSON.parse(jsonData);
// create function
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(data);
}
