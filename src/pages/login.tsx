import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  ProConfigProvider,
  WaterMark,
} from "@ant-design/pro-components";
import thTHIntl from "antd/lib/locale/th_TH";
import { message, Space, Tabs, Image, ConfigProvider } from "antd";
import { useState } from "react";
import { signIn } from "next-auth/react";

const intlMap = {
  thTHIntl,
};
type LoginType = "phone" | "account";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  return (
    <ConfigProvider locale={intlMap["thTHIntl"]}>
      <ProConfigProvider hashed={false}>
        <WaterMark content={["SCG", "EXPRESS"]}>
          <div style={{ backgroundColor: "white" }}>
            <div style={{ textAlign: "center" }}>
              <Image
                src="https://www.scgexpress.co.th/wp-content/themes/scgx/assets/img/brand-logo.png"
                preview={false}
                width={150}
                alt="SCG EXPRESS"
              />
            </div>

            <LoginForm
              // logo="https://www.scgexpress.co.th/wp-content/themes/scgx/assets/img/brand-logo.png"
              title="Line Haul System"
              subTitle="Fast and easy to use"
              // get value username and password\
              onFinish={async (values) => {
                console.log(values);
                const result = await signIn("credentials", {
                  username: values.username,
                  password: values.password,
                  redirect: false,
                  callbackUrl: "/",
                });

                console.log(result);

                if (result?.error) {
                  message.error("เข้าสู่ระบบไม่สำเร็จ");

                  // wait 2 second and redirect to login page
                } else {
                  message.success("เข้าสู่ระบบสำเร็จ");
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 2000);
                }
                // try {
                //   await signIn("credentials", {
                //     username: values.username,
                //     password: values.password,
                //     callbackUrl: "/",
                //   });
                // } catch (e) {
                //   message.error("เข้าสู่ระบบไม่สำเร็จ");
                // }
              }}
            >
              <Tabs
                centered
                activeKey={loginType}
                onChange={(activeKey) => setLoginType(activeKey as LoginType)}
              >
                <Tabs.TabPane key={"account"} tab={"Account"} />
                {/* <Tabs.TabPane key={"phone"} tab={"Phone"} /> */}
              </Tabs>
              {loginType === "account" && (
                <>
                  <ProFormText
                    name="username"
                    fieldProps={{
                      size: "large",
                      prefix: <UserOutlined className={"prefixIcon"} />,
                    }}
                    placeholder={"example@scgexpress.co.th"}
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่ชื่อผู้ใช้ !",
                      },
                    ]}
                  />
                  <ProFormText.Password
                    name="password"
                    fieldProps={{
                      size: "large",
                      prefix: <LockOutlined className={"prefixIcon"} />,
                    }}
                    placeholder={"password"}
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่รหัสผ่าน ！",
                      },
                    ]}
                  />
                </>
              )}
              {/* {loginType === "phone" && (
                <>
                  <ProFormText
                    fieldProps={{
                      size: "large",
                      prefix: <MobileOutlined className={"prefixIcon"} />,
                    }}
                    name="mobile"
                    placeholder={"หมายเลขโทรศัพท์"}
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่หมายเลขโทรศัพท์!",
                      },
                      {
                        pattern: /^1\d{10}$/,
                        message: "หมายเลขโทรศัพท์ไม่ถูกต้อง！",
                      },
                    ]}
                  />
                  <ProFormCaptcha
                    fieldProps={{
                      size: "large",
                      prefix: <LockOutlined className={"prefixIcon"} />,
                    }}
                    captchaProps={{
                      size: "large",
                    }}
                    placeholder={"รหัสยืนยัน"}
                    captchaTextRender={(timing, count) => {
                      if (timing) {
                        return `${count} ${"รหัสยืนยัน"}`;
                      }
                      return "รับรหัสยืนยัน";
                    }}
                    name="captcha"
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่รหัสยืนยัน！",
                      },
                    ]}
                    onGetCaptcha={async () => {
                      message.success("รหัสยืนยันคือ 1234");
                    }}
                  />
                </>
              )} */}
              <div
                style={{
                  marginBlockEnd: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  Remember me
                </ProFormCheckbox>
                <a
                  style={{
                    float: "right",
                  }}
                >
                  Forgot password ?
                </a>
              </div>
            </LoginForm>
          </div>
        </WaterMark>
      </ProConfigProvider>
    </ConfigProvider>
  );
};
export default LoginPage;
