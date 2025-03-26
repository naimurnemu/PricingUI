import styled from "@emotion/styled";

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary.blue};
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
