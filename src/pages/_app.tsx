// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  DashboardTwoTone,
  DownloadOutlined,
  FileAddTwoTone,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Image, Typography } from "antd";

const { Header, Sider, Content, Footer } = Layout;
const { Text } = Typography;
const menuItems = [
  {
    key: "1",
    icon: (
      <DashboardTwoTone twoToneColor="#f5222d" style={{ fontSize: "18px" }} />
    ),
    label: <Text strong>Dashboard</Text>,
    href: "/dashboard",
  },
  {
    key: "2",
    icon: (
      <FileAddTwoTone twoToneColor="#f5222d" style={{ fontSize: "18px" }} />
    ),
    label: <Text strong>Add Sheet</Text>,
    href: "/",
  },
  {
    key: "3",
    icon: <DownloadOutlined style={{ fontSize: "18px", color: "#f5222d" }} />,
    label: <Text strong>Scan In</Text>,
    href: "/manifrest/scan_in",
  },
  {
    key: "4",
    icon: <UploadOutlined style={{ fontSize: "18px", color: "#f5222d" }} />,
    label: <Text strong>Scan Out</Text>,
    href: "/manifrest/scan_out",
  },
  {
    key: "6",
    icon: <FileSearchOutlined style={{ fontSize: "18px", color: "#f5222d" }} />,
    label: <Text strong>Search Sheet</Text>,
    href: "/manifrest/sheet",
  },
];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <SessionProvider session={session}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          // add theme light
          theme="light"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
          // }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: "100vh",
            left: 0,
            top: 0,
            bottom: 0,
            position: "sticky",
          }}
        >
          {/*   src="https://www.scgexpress.co.th/wp-content/themes/scgx/assets/img/brand-logo.png" */}
          {/* add logo */}

          <div
            style={{
              height: "88px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: colorBgContainer,
              // marginBottom: "24px",
            }}
          >
            <Image
              src="https://www.scgexpress.co.th/wp-content/themes/scgx/assets/img/brand-logo.png"
              preview={false}
              width={collapsed ? 64 : 150}
              alt="SCG EXPRESS"
            />
          </div>

          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={(e) => {
              console.log(e);
            }}
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: "#f5222d" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          {/* <WaterMark content="SCG EXPRESS" zIndex={0} fontColor='#ffd4ce'> */}
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Component {...pageProps} />
          </Content>
          {/* </WaterMark> */}
          <Footer style={{ textAlign: "center" }}>
            SCG EXPRESS LINE HAUL PROJECT. ©2023 Created by IT Development Team {session}
          </Footer>
        </Layout>
      </SessionProvider>
    </Layout>
  );
}
