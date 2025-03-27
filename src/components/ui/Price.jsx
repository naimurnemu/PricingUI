import styled from "@emotion/styled";

const PriceContainer = styled.div`
  display: inline-flex;
  align-items: start;
  justify-content: start;
  gap: 8px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const StyledPrice = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  line-height: 24px;
  color: ${({ theme, variant }) => theme.colors.primary[variant]};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Saved = styled.div`
  display: inline-block;
  font-size: 12px;
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.offer.linethrough};
  margin-top: -8px;
`;

const Period = styled.div`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  justify-self: flex-end;
  padding-top: ${({ hasDiff }) => (hasDiff ? "0px" : "6px")};
  color: ${({ theme }) => theme.colors.offer.pricePeriod};
`;

function Price({ children, details, ...props }) {
  const { price, price_postfix } = details;
  const hasDiff = price < children;

  return (
    <PriceContainer>
      <StyledPrice {...props}>{price}</StyledPrice>
      <InfoContainer>
        {hasDiff && <Saved>{children} {price_postfix}</Saved>}
        {price_postfix?.length > 0 && <Period hasDiff={hasDiff}>{price_postfix}</Period>}
      </InfoContainer>
    </PriceContainer>
  );
}

export default Price;
