import { getLiquidityPool } from 'utils/addressHelpers'
import multicall from 'utils/multicall';
import liquidityPoolABI from 'config/abi/liquidityPool.json'


export const fetchAdditionalRates = async () => {
  const liquidityPoolAddress = getLiquidityPool();
  try {
    const calls = [
      {
        address: liquidityPoolAddress,
        name: "getAdditionalRates",
      },
    ];
    const [res] = await multicall(liquidityPoolABI, calls);
    return res[0].map((item) => Number(item.toJSON().hex) / 100);
  } catch (error) {
    return [];
  }
};
