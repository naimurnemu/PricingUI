import styled from "@emotion/styled";

const BillButton = styled.button`
  background-color: transparent;
  font-size: 16px;
  padding: 4px 0;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid transparent;
  font-weight: ${({ isSelected }) => (isSelected ? "600" : "400")};
  border-bottom-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.blue : "none"};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary.blue : theme.colors.text};
  white-space: nowrap;

  @media (max-width: ${"380px"}) {
    font-size: 14px;
  }
`;

export default BillButton;
