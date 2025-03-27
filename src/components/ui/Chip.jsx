import styled from "@emotion/styled";

const StyledChip = styled.div`
  display: inline-block;
  background-color: ${({ theme, variant }) => theme.colors.primary[variant]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  padding: 6.5px 8px;
  margin: 0;
  font-weight: 600;
  font-size: 12px;
  position: absolute;
  top: 6px;
  right: 6px;
`;

function Chip({ children, ...props }) {
  return <StyledChip {...props}>{children}</StyledChip>;
}

export default Chip;
