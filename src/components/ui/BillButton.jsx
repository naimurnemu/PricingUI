import styled from "@emotion/styled";

const StyledButton = styled.button`
background-color: transparent;
  font-weight: 600;
  border: none;
  padding: 0.4rem 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  border-bottom-color: ${({theme, isSelected}) => (isSelected ? theme.colors.primary.blue : "none")};
  color: ${({theme, isSelected}) => (isSelected ? theme.colors.primary.blue : theme.colors.text)};
  
`;

function BillButton({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

export default BillButton;