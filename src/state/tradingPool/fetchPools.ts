
import tradingPoolABI from "config/abi/tradingPool.json";
import multicall from "utils/multicall";
import { getTradingPoolAddress } from "utils/addressHelpers";

export const fetchPoolsDtaList = async () => {
  try {
    const calls = [
      {
        address: getTradingPoolAddress(),
        name: "getAllPoolViews", // Function name on the contract (example: balanceOf)
      },
    ];

    const [data] = await multicall(tradingPoolABI, calls);
    return data[0];
  } catch (error) {
    return [];
  }
};
