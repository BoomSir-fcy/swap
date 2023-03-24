import React, { useEffect, useState } from "react";
import Web3 from "web3";
// import { abi as multicallAbi } from "./multicall.json";
// import { abi as erc20Abi } from "./erc20.json";
import { MULTICALL_ABI, MULTICALL_NETWORKS } from 'config/constants/multicall'

const MULTI_CALL_ADDRESS = "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441"; // multiCall 合约地址
const TOKEN_ADDRESSES = [
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
]; // 代币合约地址列表
const ACCOUNT_ADDRESS = "0x1234567890123456789012345678901234567890"; // 查询余额的账户地址

function BlanceOfText() {
  const [balances, setBalances] = useState([]);

//   useEffect(() => {
//     async function fetchBalances() {
//       const web3 = new Web3(window.ethereum);
//       const multicall = new web3.eth.Contract(MULTICALL_ABI, MULTI_CALL_ADDRESS);
//       const tokenContracts = TOKEN_ADDRESSES.map(
//         (address) => new web3.eth.Contract(erc20Abi, address)
//       );
//       const calls = tokenContracts.map((contract) => ({
//         to: contract.options.address,
//         data: contract.methods.balanceOf(ACCOUNT_ADDRESS).encodeABI(),
//       }));
//       const [, results] = await multicall.methods.aggregate(calls).call();
//       const newBalances = results.map((result) =>
//         web3.eth.abi.decodeParameter("uint256", result)
//       );
//       setBalances(newBalances);
//     }

//     if (window.ethereum) {
//       fetchBalances();
//     }
//   }, []);

  return (
    <div>
      {balances.map((balance, index) => (
        <div key={TOKEN_ADDRESSES[index]}>
          <span>{TOKEN_ADDRESSES[index]}: </span>
          <span>{balance}</span>
        </div>
      ))}
    </div>
  );
}

export default BlanceOfText;
