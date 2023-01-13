import { ChainId } from 'swap-sdk'
import { request, req } from './axios'

// const baseURL = 'https://api.dsgmetaverse.com'
// const baseURL = process.env.VUE_APP_GOLANG_DEVURL;
const baseURLs = {
  [ChainId.MAINNET]: 'https://sv.dsgmetaverse.com',
  [ChainId.TESTNET]: 'https://api.dsgmetaverse.com',
  [ChainId.MATIC_TESTNET]: 'http://192.168.101.122:8300',
}
const baseURLsTest = 'https://task.dsgmetaverse.com/v1/'
const baseURL = baseURLs[process.env.REACT_APP_CHAIN_ID] || baseURLs[ChainId.MAINNET]

interface QueryParams {
  [elem: string]: any
}

export const get = (url: string, params?: QueryParams): Promise<any> =>
  request({
    url,
    params,
    baseURL,
    method: 'get',
    withCredentials: false,
  })
export const getMission = (url: string, params?: QueryParams): Promise<any> =>
  req({
    url,
    params,
    baseURL: baseURLsTest,
    method: 'get',
    withCredentials: false,
  })
export const get1inch = (url: string, params?: QueryParams): Promise<any> =>
  request({
    url,
    params,
    method: 'get',
    withCredentials: false,
    baseURL: 'https://poly.dsgmetaverse.com/v3.0',
  })
export const postMission = (url: string, data?: QueryParams, config = {}): Promise<any> =>
  request({
    url,
    data,
    baseURL: baseURLsTest,
    method: 'post',
    withCredentials: false,
    ...config,
  })
export const post = (url: string, data?: QueryParams, config = {}): Promise<any> =>
  request({
    url,
    data,
    baseURL,
    method: 'post',
    withCredentials: false,
    ...config,
  })

export const getNftInfo = (token: string, id: string | number): Promise<any> => get(`/nft/${token}/${id}`)
export const getMysteryNftInfo = (id: string | number): Promise<any> => get(`/mysterybox/box/${id}`)
export const getNftsList = (account: string): Promise<any> => get(`/nfts/${account.toLowerCase()}`)
export const getMarketSales = (data: QueryParams): Promise<any> => get('/market/sales', data)
export const getMarketSalesSum = (data: QueryParams): Promise<any> => get('/market/sum', data)
export const nftsFilter = (data: QueryParams): Promise<any> => get('/nfts-filter', data)
export const getMysteryboxFactories = (): Promise<any> => get('mysterybox/factories')

export const get1inchQuoteData = (chainId: number, data: QueryParams): Promise<any> =>
  get1inch(`/${chainId}/quote`, data)
export const get1inchSwapData = (chainId: number, data: QueryParams): Promise<any> => get1inch(`/${chainId}/swap`, data)
export const get1inchApproveCallData = (chainId: number, data: QueryParams): Promise<any> =>
  get1inch(`/${chainId}/approve/calldata`, data)
export const get1inchApproveSpender = (chainId: number, data?: QueryParams): Promise<any> =>
  get1inch(`/${chainId}/approve/spender`, data)
// 任务列表
export const getTaskList = (): Promise<any> => getMission('/task/gettasklist')
// 任务id对应的状态
export const getTaskTtatus = (data: QueryParams): Promise<any> => getMission('/task/gettaskstatus', data)
// 赛季信息
export const getSeasonInfo = (data: QueryParams): Promise<any> => getMission('/task/getseasoninfo', data)
// 任务积分历史
export const getHistoryList = (data: QueryParams): Promise<any> => getMission('/task/getpointhistory', data)
// 邀请好友列表
export const getFrindList = (data: QueryParams): Promise<any> => getMission('/task/getnowseasoninvite', data)
// 我的上赛季信息
export const getLastseason = (data: QueryParams): Promise<any> => getMission('/task/getlastseason', data)

export const postTest = (params: QueryParams): Promise<any> => post('/nfts/test', params)
// 签到
export const signIn = (params: QueryParams): Promise<any> => postMission('/task/signin', params)
// 领取积分
export const collectpoints = (params: QueryParams): Promise<any> => postMission('/task/collectpoints', params)
// 领取dsg
export const receivedsg = (params: QueryParams): Promise<any> => postMission('/task/receivedsg', params)
// 邀请好友
export const invite = (params: QueryParams): Promise<any> => postMission('/task/invitation', params)
// 获取lp池附加奖励的接口
export const getPoolLpDonate = (): Promise<any> => get('/pool/lp-donate')
