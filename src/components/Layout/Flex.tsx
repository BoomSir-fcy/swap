import styled from 'styled-components'
import { Flex } from 'uikit'

const FlexLayout = styled.div<{ minWidth?: string; maxWidth?: string }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > * {
    min-width: ${({ minWidth }) => minWidth || '300px' };
    max-width: ${({ maxWidth }) => maxWidth || '460px' };
    width: 100%;
    flex: 1;
    margin: 0;
    margin-bottom: 32px;
    ${({ theme }) => theme.mediaQueries.md} {
      min-width: ${({ minWidth }) => minWidth || '450px' };
      max-width: ${({ maxWidth }) => maxWidth || '580px' };
    };
    ${({ theme }) => theme.mediaQueries.xl} {
      min-width: ${({ minWidth }) => minWidth || '580px' };
      max-width: ${({ maxWidth }) => maxWidth || '580px' };
    };
    &:nth-child(2n - 1) {
      margin-right: 0;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin-right: 8px;
      };
      ${({ theme }) => theme.mediaQueries.md} {
        margin-right: 16px;
      };
    }
  }
`
export default FlexLayout

export const FlexMdWrap = styled(Flex)`
    flex-wrap: wrap;
    ${({ theme }) => theme.mediaQueries.md} {
        flex-wrap: nowrap;
    };
`