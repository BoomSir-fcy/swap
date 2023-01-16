import { useMemo } from 'react'
import { CurrencyAmount, JSBI, Price, Trade, TokenAmount, Token, ChainId } from 'swap-sdk'
import { PolyData } from 'state/types'


export function usePolySwap(polyData: PolyData, trade: Trade, showWrap: boolean): {
  polyData: PolyData
} {

  const polyCurrencyData = useMemo(() => {
    let price = null
    let currencyAmount = null
    let toTokenAmount = null
    let fromCurrencyToken = null
    let fromCurrencyTokenAmount = null
    if (polyData) {
      price = new Price(
        polyData.fromToken,
        polyData.toToken,
        polyData.fromTokenAmount,
        polyData.toTokenAmount
      )
      currencyAmount = CurrencyAmount.ether(JSBI.BigInt(polyData.fromTokenAmount))
      toTokenAmount = CurrencyAmount.ether(JSBI.BigInt(polyData.toTokenAmount))
      fromCurrencyToken = new Token(
        ChainId.MAINNET,
        polyData.fromToken.address,
        polyData.fromToken.decimals,
        polyData.fromToken.symbol,
        polyData.fromToken.name,
      )
      fromCurrencyTokenAmount = new TokenAmount(fromCurrencyToken, JSBI.BigInt(polyData.fromTokenAmount))
    }
    return {
      price,
      currencyAmount,
      fromCurrencyTokenAmount,
      fromCurrencyToken,
      toTokenAmount
    }
  }, [polyData])

  const isPolyMethed = useMemo(() => {
    if (showWrap) return false
    if (!polyData) return false
    if (!trade) return true
    return !!trade?.executionPrice?.lessThan(polyCurrencyData?.price)
  }, [polyData, polyCurrencyData, trade, showWrap])

  const polyDataRes = {
    ...polyData,
    isPolyMethed,
    price: polyCurrencyData.price,
    currencyAmount: polyCurrencyData.currencyAmount,
    fromCurrencyTokenAmount: polyCurrencyData.fromCurrencyTokenAmount,
    fromCurrencyToken: polyCurrencyData.fromCurrencyToken,
    toCurrencyAmount: polyCurrencyData.toTokenAmount,
  }
  return {
    polyData: polyDataRes,
  }
}