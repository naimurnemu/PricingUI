import styled from "@emotion/styled";

const PriceContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const StyledPrice = styled.h2`
  font-size: 32px;
  font-weight: 600;
  padding: 10px 0;
  margin: 0;
  line-height: 24px;
  color: ${({ theme, variant }) => theme.colors.primary[variant]};
`;

const InfoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const Saved = styled.span`
  font-size: 12px;
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.secondary.gray};
`;

const Period = styled.span`
  font-size: 12px;
  padding: 0 4px;
  color: ${({ theme }) => theme.colors.secondary.gray};
`;

function Price({ children, details, ...props }) {
  const { price, price_postfix } = details;
  return (
    <PriceContainer>
      <StyledPrice {...props}>{price}</StyledPrice>
      <InfoContainer>
        {price < children && (
          <Saved>
            {children}
            {price_postfix}
          </Saved>
        )}
        {price_postfix?.length > 0 && <Period>{price_postfix}</Period>}
      </InfoContainer>
    </PriceContainer>
  );
}

export default Price;
