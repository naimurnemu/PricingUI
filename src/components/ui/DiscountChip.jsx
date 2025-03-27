import styled from "@emotion/styled";

const DiscountChip = styled.span`
  background-color: ${({ theme }) => theme.colors.offer.background};
  border-radius: 50px;
  color: #333;
  font-size: 16px;
  font-weight: 400;
  padding: 5px 12px 6.5px 12px;
  margin-left: 10px;
  text-align: center;
  white-space: nowrap;

  @media (max-width: ${"380px"}) {
    font-size: 14px;
  }
`;

export default DiscountChip;
