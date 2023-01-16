import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Price } from 'swap-sdk'
import { Text, Flex, Button } from 'uikit'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { getBalanceAmount } from 'utils/formatBalance'
import { useFetchPublicPoolsData, usePools } from 'state/tradingPool/hooks'
import { Link } from 'react-router-dom'

const FlexStyled = styled(Flex)`
  width: 429px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  ${({ theme }) => theme.mediaQueriesSize.padding}
  margin-bottom: 16px;
  max-width: 100%;
`

export default function TradingTips() {
  useFetchPublicPoolsData()

  const { t } = useTranslation()
  const { account } = useWeb3React()

  const { userData } = usePools(account)

  const userAccRewardAmount = new BigNumber(userData.pendingRewards)
  const displayUserQuantity = getBalanceAmount(userAccRewardAmount).toFixed(3)

  
  return (
    <FlexStyled justifyContent="space-between" alignItems="center">
      <Text color="white">{t('Trade Mining Rewards')}: {userData.isLoading
        ?
        '--'
        :
        <Text as="span" fontSize="20px" color="white" bold>{displayUserQuantity}</Text>} DSG</Text>
      <Button as={Link} to="/trading">{t('View')}</Button>
    </FlexStyled>
  )
}
