import { contractAddress } from "config/wallet/networks";
import { ChainId } from "swap-sdk";
import MULTICALL_ABI from "./abi.json";

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  ...contractAddress.multiCall,
  97: undefined,
};

export { MULTICALL_ABI, MULTICALL_NETWORKS };
