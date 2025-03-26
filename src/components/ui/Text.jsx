import styled from "@emotion/styled";

const StyledText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
`;

function Text({ children }) {
  return <StyledText>{children}</StyledText>;
}

export default Text;
