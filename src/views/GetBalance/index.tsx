import React, { useEffect, useMemo, useState } from "react";
import { getBalanceAmount } from "utils/formatBalance";
import { useGetBnbBalance } from "./hook";
import { Text, Box } from "uikit";

function GetBalance() {
  const [balances, setBalances] = useState([]);
  const { balance: MATICBalance } = useGetBnbBalance();

  const TokenBalance = useMemo(() => {
    let balance = getBalanceAmount(MATICBalance).toString();

    if (balance.indexOf("-") >= 0) {
      // 科学计数法转化
      balance = `0${String(Number(balance) + 1).substring(1)}`;
    }
    return balance;
  }, [MATICBalance]);

  return (
    <Box>
      <Text>{TokenBalance}</Text>
    </Box>
  );
}

export default GetBalance;
