import styled from "@emotion/styled";

const StyledSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

function Subtitle({ children }) {
  return <StyledSubtitle>{children}</StyledSubtitle>;
}

export default Subtitle;
