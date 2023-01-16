import React from 'react'
import { Text, Flex } from 'uikit'
import QuestionHelper from 'components/QuestionHelper'
import { useTranslation } from 'contexts/Localization'

/**
 * Formatted version of price impact text with warning colors
 */
export default function LiquidityProviderFee() {
  const { t } = useTranslation()

  return (
    <Flex>
      <Text fontSize="14px" color="textSubtle">
        {t('Liquidity Provider Fee')}
      </Text>
      <QuestionHelper
        text={
          <>
            <Text mb="12px">{t('for each trade a 0.3% fee is paid')}:</Text>
            <Text>-{t('0.1% to the LP token holders')}</Text>
            <Text>-{t('0.04% to the Money-hungry Dino stakers')}</Text>
            <Text>-{t('0.05% buyback DSG and burn')}</Text>
            <Text>-{t('0.025% buyback DSG, then to DSG LP')}</Text>
            <Text>-{t('0.025% to vDSG holder')}</Text>
            <Text>-{t('0.06% to operation fund')}</Text>
          </>
        }
        placement="top-start"
        ml="4px"
      />
    </Flex>
  )
}
