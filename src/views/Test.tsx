import React, { useState } from "react";
import { Text, Box } from "uikit";
import useConnectWallet from "hooks/useConnectWallet";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { ComponentsWrapper, PageContainer } from "components/PageContainer";
import styled from "styled-components";
import { Button, Drawer, message, notification } from "antd";

const Content = styled(Box)`
  padding-top: 100px;
  margin: 0 auto;
`;

type NotificationType = "success" | "info" | "warning" | "error";

const Test = () => {
  const { onConnectWallet } = useConnectWallet();
  const { account, chainId } = useActiveWeb3React();
  const [open, setOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

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
