import React, { useState } from "react";
import { Text, Box } from "uikit";
import useConnectWallet from "hooks/useConnectWallet";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { ComponentsWrapper, PageContainer } from "components/PageContainer";
import styled from "styled-components";
import { Button, Drawer, message, notification } from "antd";
import { useNavigate } from "react-router-dom";
import BlanceOfText from "./balance";
import ApproveButton from "components/ApproveButton";
import GetBalance from "./GetBalance";

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
  //  // 授权
  //  const handleApprove = useCallback(async () => {
  //   setpending(true);
  //   try {
  //     await onApprove();
  //     toastSuccess(t('Approve Succeeded'));
  //   } catch (e) {
  //     console.error(e);
  //     toastError(t('Approve Failed'));
  //   } finally {
  //     setpending(false);
  //   }
  //   setLoadApprovedNum(false);
  // }, [onApprove, toastSuccess, t, toastError, setpending]);

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
            navigate(`/add`);
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
        <GetBalance />
        <ApproveButton
          mt="58px"
          erc20Token="0x26613b05D23C808aCf7D47981444de4bbd2CfA4a"
          spender="0x4ae66ff652cebaac99faf2fb947e9e8621ad0d93"
          onFinish={() => {
            console.log("授权完成");
          }}
        />
      </Content>
      <BlanceOfText />
    </PageContainer>
  );
};

export default Test;
