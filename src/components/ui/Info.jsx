import styled from "@emotion/styled";

const StyledInfo = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary.gray};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

function Info({ children }) {
  return <StyledInfo>{children}</StyledInfo>;
}

export default Info;
