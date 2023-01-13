import React from 'react'
import { Currency, ETHER } from 'swap-sdk'
import { BinanceIcon } from 'uikit'
import styled from 'styled-components'
import useCurrencyLogo from 'hooks/useCurrencyLogo'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  symbol,
}: {
  currency?: Currency
  symbol?: string
  size?: string
  style?: React.CSSProperties
}) {

  const srcs = useCurrencyLogo({
    symbol,
    currency,
  })

  if (currency === ETHER) {
    return <BinanceIcon width={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
