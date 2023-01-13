export interface WalletState {
  ApproveNum: {
    dsg: number
  }
  TimeInfo: TimeInfo[]
  CurrentRound: TimeInfo
  TimeExchangeList: ExchangeList[]
  rewardNum: number
}

export interface TimeInfo {
  long_time: number,
  max_dsg_token: number,
  max_time_token: number,
  right_now_release: number,
  times: number,
  total_dsg: number
}
export interface ExchangeList {
  round: number,
  endTime: number,
  latestTime: number,
  totalAmount: number,
  debtAmount: number,
  RemainingAmount: number,
  ReleaseAmount: number,
  totalPage: number,
  page: number
  id: number
}
