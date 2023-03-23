import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import { useRef, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDsgAddress,
  getTimeAddress,
  getTimeShopAddress,
} from "utils/addressHelpers";
import erc20Abi from "config/abi/erc20.json";
import timeShopAbi from "config/abi/TimeShop.json";
import multicall from "utils/multicall";
import { getBalanceNumber } from "utils/formatBalance";
import { AppDispatch, AppState } from "../index";
import {
  fetchTimeShopInfo,
  fetchDSGApproveNumAsync,
  fetchTimeExchangeList,
  fetchRewardNumAsync,
} from "./reducer";
import { ExchangeList } from "./type";
import { BIG_TEN } from "utils/bigNumber";
import {
  Currency,
  CurrencyAmount,
  ETHER,
  JSBI,
  Token,
  TokenAmount,
} from "swap-sdk";
import { useMulticallContract } from "hooks/useContract";
import { isAddress } from "utils";
import {
  useMultipleContractSingleData,
  useSingleContractMultipleData,
} from "state/multicall/hooks";
import ERC20_INTERFACE from "config/abi/erc20";
import { useAllTokens } from "hooks/Tokens";

const REFRESH_INTERVAL = 30 * 1000;
const SLOW_INTERVAL = 60 * 1000;

// Check if the tab is active in the user browser
const useIsBrowserTabActive = () => {
  const isBrowserTabActiveRef = useRef(true);

  useEffect(() => {
    const onVisibilityChange = () => {
      isBrowserTabActiveRef.current = !document.hidden;
    };

    window.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return isBrowserTabActiveRef;
};

// get the balance for a single token/account combo
export function useTokenBalance(
  account?: string,
  token?: Token
): TokenAmount | undefined {
  const tokenBalances = useTokenBalances(account, [token]);
  if (!token) return undefined;
  return tokenBalances[token.address];
}

const useRefresh = (slow?) => {
  const [fefresh, setFefresh] = useState(0);
  const isBrowserTabActiveRef = useIsBrowserTabActive();

  useEffect(() => {
    const interval = setInterval(
      async () => {
        if (isBrowserTabActiveRef.current) {
          setFefresh((prev) => prev + 1);
        }
      },
      slow ? SLOW_INTERVAL : REFRESH_INTERVAL
    );
    return () => clearInterval(interval);
  }, [isBrowserTabActiveRef]);

  return fefresh;
};

// 获取DSG授权数量
export const FetchDSGApproveNum = async (account: string) => {
  const dsgAdd = getDsgAddress();
  const TimeShop = getTimeShopAddress();
  const calls = [
    {
      address: dsgAdd,
      name: "allowance",
      params: [account, TimeShop],
    },
  ];
  try {
    const approvedNum = await multicall(erc20Abi, calls);
    return getBalanceNumber(approvedNum);
  } catch (error) {
    throw error;
  }
};
// 获取Time详情
export const FetchTimeShopInfo = async () => {
  const TimeShop = getTimeShopAddress();
  const calls = [
    {
      address: TimeShop,
      name: "getViews",
    },
  ];
  try {
    const Views = await multicall(timeShopAbi, calls);
    const info = Views[0][0].map((item, index) => ({
      times: index + 1,
      long_time: Number(new BigNumber(item.long_time.toJSON().hex)),
      max_dsg_token: getBalanceNumber(
        new BigNumber(item.max_dsg_token.toJSON().hex)
      ),
      max_time_token: getBalanceNumber(
        new BigNumber(item.max_time_token.toJSON().hex)
      ),
      right_now_release: Number(
        new BigNumber(item.right_now_release.toJSON().hex)
      ),
      total_dsg: getBalanceNumber(new BigNumber(item.total_dsg.toJSON().hex)),
    }));
    return info;
  } catch (error) {
    console.error(error);
    return [];
  }
};
// 获取兑换列表条数
export const FetchRecordLength = async (account: string) => {
  const TimeShop = getTimeShopAddress();
  const calls = [
    {
      address: TimeShop,
      name: "getUsersRecordLength",
      params: [account],
    },
  ];
  try {
    const res = await multicall(timeShopAbi, calls);
    return new BigNumber(res[0][0].toJSON().hex).toNumber();
  } catch (error) {
    console.error(error);
    return [];
  }
};
// 获取当前可领取数量
export const FetchReleaseAmount = async (list: any) => {
  const TimeShop = getTimeShopAddress();
  const calls = list.map((item, index) => ({
    address: TimeShop,
    name: "getReleaseAmount",
    params: [
      item.latestTime,
      item.endTime,
      new BigNumber(item.totalAmount).times(BIG_TEN.pow(18)).toString(),
      new BigNumber(item.debtAmount).times(BIG_TEN.pow(18)).toString(),
    ],
  }));

  try {
    const numArr = await multicall(timeShopAbi, calls);
    const AmountList = numArr.map((item) =>
      getBalanceNumber(new BigNumber(item[0].toJSON().hex))
    );
    return AmountList;
  } catch (error) {
    throw error;
  }
};
// 获取Time详情
export const FetchExchangeList = async (
  account: string,
  page: number,
  pageSize: number
) => {
  const TimeShop = getTimeShopAddress();
  const getTotalPage = (totalNum) => {
    if (pageSize != 0 && totalNum % pageSize == 0) {
      return parseInt(String(totalNum / pageSize));
    }
    if (pageSize != 0 && totalNum % pageSize != 0) {
      return parseInt(String(totalNum / pageSize)) + 1;
    }
  };

  // 获取当前页的数据
  const ListArr = (start, end) => {
    let calls = [];
    for (let i = start; i >= end; i--) {
      let item = {
        address: TimeShop,
        name: "getUserRecordKey",
        params: [account, i],
      };
      calls.push(item);
    }
    return calls;
  };
  // 获取总条数
  const totalNum = await FetchRecordLength(account);
  if (Number(totalNum) === 0) {
    return [];
  }
  // 获取总页数
  const totalPage = getTotalPage(Number(totalNum));
  // 获取当前页下标区间后返回对应请求参数列表
  const remainder = pageSize - (Number(totalNum) % pageSize);
  const start = totalPage * pageSize - (page - 1) * pageSize - 1 - remainder;
  const end = start - pageSize + 1 < 0 ? 0 : start - pageSize + 1;
  const calls = ListArr(start, end);
  try {
    const arr = await multicall(timeShopAbi, calls);
    const List = arr.map((item, index) => ({
      round: Number(new BigNumber(item[0].round.toJSON().hex)) + 1,
      endTime: Number(new BigNumber(item[0].endTime.toJSON().hex)),
      latestTime: new BigNumber(item[0].latestTime.toJSON().hex).toNumber(),
      totalAmount: getBalanceNumber(
        new BigNumber(item[0].totalAmount.toJSON().hex)
      ),
      debtAmount: getBalanceNumber(
        new BigNumber(item[0].debtAmount.toJSON().hex)
      ),
      RemainingAmount: getBalanceNumber(
        new BigNumber(item[0].totalAmount.toJSON().hex).minus(
          new BigNumber(item[0].debtAmount.toJSON().hex)
        )
      ),
      totalPage: totalPage,
      page: page,
      id: start - index,
    }));
    const AmountList = await FetchReleaseAmount(List);
    const completeList = AmountList.map((item, index) => ({
      ...List[index],
      ReleaseAmount: item,
    }));

    return completeList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 获取可领取数量
export const FetchRewardNum = async (account: string) => {
  const TimeShop = getTimeShopAddress();
  const calls = [
    {
      address: TimeShop,
      name: "getReward",
      params: [account],
    },
  ];
  try {
    const RewardNum = await multicall(timeShopAbi, calls);
    return getBalanceNumber(new BigNumber(RewardNum[0][0].toJSON().hex));
  } catch (error) {
    throw error;
  }
};

// 获取Time兑换详情
export const useFetTimeInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { account } = useWeb3React();
  const refresh = useRefresh(1);
  useEffect(() => {
    dispatch(fetchTimeShopInfo());
  }, [refresh, account]);
};

// 获取Time兑换列表
export const useFetTimeExchangeList = (page: number, pageSize: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const { account } = useWeb3React();
  useEffect(() => {
    if (account) dispatch(fetchTimeExchangeList({ account, page, pageSize }));
  }, [account, page, pageSize]);
};
// 获取DSG授权数量
export const useFetchDSGApproveNum = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { account } = useWeb3React();
  useEffect(() => {
    if (account) dispatch(fetchDSGApproveNumAsync(account));
  }, [account]);
};
//
export const useFetchRewardNum = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { account } = useWeb3React();
  useEffect(() => {
    dispatch(fetchRewardNumAsync(account));
  }, [account]);
};

/**
 * Returns a map of the given addresses to their eventually consistent BNB balances.
 */
export function useBNBBalances(uncheckedAddresses?: (string | undefined)[]): {
  [address: string]: CurrencyAmount | undefined;
} {
  const multicallContract = useMulticallContract();

  const addresses: string[] = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a): a is string => a !== false)
            .sort()
        : [],
    [uncheckedAddresses]
  );

  const results = useSingleContractMultipleData(
    multicallContract,
    "getEthBalance",
    addresses.map((address) => [address])
  );
    console.log(addresses,results);
    
  return useMemo(
    () =>
      addresses.reduce<{ [address: string]: CurrencyAmount }>(
        (memo, address, i) => {
          const value = results?.[i]?.result?.[0];
          if (value)
            memo[address] = CurrencyAmount.ether(JSBI.BigInt(value.toString()));
          return memo;
        },
        {}
      ),
    [addresses, results]
  );
}

export function useCurrencyBalances(
  account?: string,
  currencies?: (Currency | undefined)[]
): (CurrencyAmount | undefined)[] {
  const tokens = useMemo(
    () =>
      currencies?.filter(
        (currency): currency is Token => currency instanceof Token
      ) ?? [],
    [currencies]
  );
  const tokenBalances = useTokenBalances(account, tokens);
  const containsBNB: boolean = useMemo(
    () => currencies?.some((currency) => currency === ETHER) ?? false,
    [currencies]
  );
  const ethBalance = useBNBBalances(containsBNB ? [account] : []);
  // console.log(ethBalance,containsBNB);
  
  return useMemo(
    () =>
      currencies?.map((currency) => {
        if (!account || !currency) return undefined;
        if (currency instanceof Token) return tokenBalances[currency.address];
        if (currency === ETHER) return ethBalance[account];
        return undefined;
      }) ?? [],
    [account, currencies, ethBalance, tokenBalances]
  );
}

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useTokenBalancesWithLoadingIndicator(
  address?: string,
  tokens?: (Token | undefined)[]
): [{ [tokenAddress: string]: TokenAmount | undefined }, boolean] {
  const validatedTokens: Token[] = useMemo(
    () =>
      tokens?.filter(
        (t?: Token): t is Token => isAddress(t?.address) !== false
      ) ?? [],
    [tokens]
  );

  const validatedTokenAddresses = useMemo(
    () => validatedTokens.map((vt) => vt.address),
    [validatedTokens]
  );
    
  const balances = useMultipleContractSingleData(
    validatedTokenAddresses,
    ERC20_INTERFACE,
    "balanceOf",
    [address]
  );
  console.log(balances);

  const anyLoading: boolean = useMemo(
    () => balances.some((callState) => callState.loading),
    [balances]
  );

  return [
    useMemo(
      () =>
        address && validatedTokens.length > 0
          ? validatedTokens.reduce<{
              [tokenAddress: string]: TokenAmount | undefined;
            }>((memo, token, i) => {
              const value = balances?.[i]?.result?.[0];
              const amount = value ? JSBI.BigInt(value.toString()) : undefined;
              if (amount) {
                memo[token.address] = new TokenAmount(token, amount);
              }
              return memo;
            }, {})
          : {},
      [address, validatedTokens, balances]
    ),
    anyLoading,
  ];
}

export function useTokenBalances(
  address?: string,
  tokens?: (Token | undefined)[]
): { [tokenAddress: string]: TokenAmount | undefined } {
  return useTokenBalancesWithLoadingIndicator(address, tokens)[0];
}

export function useCurrencyBalance(
  account?: string,
  currency?: Currency
): CurrencyAmount | undefined {
  return useCurrencyBalances(account, [currency])[0];
}

// mimics useAllBalances
export function useAllTokenBalances(): {
  [tokenAddress: string]: TokenAmount | undefined;
} {
  const { account } = useWeb3React();
  const allTokens = useAllTokens();
  const allTokensArray = useMemo(
    () => Object.values(allTokens ?? {}),
    [allTokens]
  );
  const balances = useTokenBalances(account ?? undefined, allTokensArray);
  return balances ?? {};
}
