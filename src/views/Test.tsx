import React, { useState } from "react";
import { Text, Box } from "uikit";
import { PageContainer } from "components/PageContainer";
import styled from "styled-components";
import { Button, Drawer, message, notification } from "antd";
import { useNavigate } from "react-router-dom";

const Content = styled(Box)`
  padding-top: 100px;
  margin: 0 auto;
`;

type NotificationType = "success" | "info" | "warning" | "error";

const Test = () => {
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "消息标题",
      description: "标题内容！！！~~~~~~~11111",
    });
  };
  return (
    <PageContainer>
      {contextHolder}
      <Content>
        <Text>123</Text>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
        <Button type="primary" onClick={() => message.success("这是一条消息")}>
          message
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate(`/Swap`);
          }}
        >
          兑换
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate(`/liquidity`);
          }}
        >
          添加流动性
        </Button>
        <Button
          type="primary"
          onClick={() => openNotificationWithIcon("success")}
        >
          success message
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <p>Some contents...</p>
        </Drawer>
      </Content>
    </PageContainer>
  );
};

export default Test;
