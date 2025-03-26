import styled from '@emotion/styled'

const StyledDiscountChip = styled.span`
  background-color: ${({ theme }) => theme.colors.offer.background};
  border-radius: 10rem;
  color: #333;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
`

function DiscountChip({children, ...props}) {
  return (
    <StyledDiscountChip {...props}>{children}</StyledDiscountChip>
  )
}

export default DiscountChip
