import React from "react";
import { Heading, Text, Flex, Box, AnimationRingIcon, Button } from "uikit";
import useConnectWallet from "hooks/useConnectWallet";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { ComponentsWrapper, PageContainer } from "components/PageContainer";
import styled from "styled-components";

const Content = styled(Box)`
  padding-top: 100px;
  margin: 0 auto;
`;
const Test = () => {
  const { onConnectWallet } = useConnectWallet();
  const { account, chainId } = useActiveWeb3React();

  return (
    <PageContainer>
      <Content>
        <Text>123</Text>
      </Content>
    </PageContainer>
  );
};

export default Test;
