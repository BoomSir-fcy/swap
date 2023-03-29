import React from "react";
import styled from "styled-components";
import { Text, Flex, Heading, IconButton, ArrowBackIcon } from "uikit";
import { Link } from "react-router-dom";
import Settings from "./Settings";
// import Transactions from './Transactions'
import QuestionHelper from "../QuestionHelper";
import Transactions from "./Transactions";

interface Props {
  title: string;
  subtitle: string;
  helper?: string;
  backTo?: string;
  noConfig?: boolean;
  hideSetting?: boolean;
}

const AppHeaderContainer = styled(Flex)`
  align-items: flex-end;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
  /* box-shadow: ${({ theme }) => theme.shadows.success}; */
`;

const AppHeader: React.FC<Props> = ({
  title,
  subtitle,
  helper,
  backTo,
  hideSetting,
  noConfig = false,
}) => {
  return (
    <AppHeaderContainer>
      <Flex alignItems="center" mr={noConfig ? 0 : "16px"}>
        {backTo && (
          <IconButton as={Link} to={backTo}>
            <ArrowBackIcon width="32px" />
          </IconButton>
        )}
        <Flex
          alignContent={subtitle ? "" : "center"}
          justifyContent={subtitle ? "" : "center"}
          flexDirection={subtitle ? "column" : "row"}
        >
          <Heading as="h2" mb={subtitle ? "8px" : "0"}>
            {title}
          </Heading>
          <Flex alignItems="center">
            {helper && (
              <QuestionHelper placement="top-start" text={helper} mr="4px" />
            )}
            <Text ml="4px" color="textSubtle" fontSize="14px">
              {subtitle}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {!noConfig && (
        <Flex>
          {hideSetting ? null : <Settings />}
          <Transactions />
        </Flex>
      )}
    </AppHeaderContainer>
  );
};

export default AppHeader;
