import styled from '@emotion/styled';
import { theme } from '../../styles';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  color: white;
  font-weight: 400;
  background-color: ${({ variant }) => theme.colors.secondary[variant]};
  &:hover {
    cursor: pointer;
    background-color: ${({ variant }) => theme.colors.primary.hover[variant]};
  }
`;

function Button({ children, variant = 'blue', ...props }) {
  return <StyledButton variant={variant} {...props}>{children}</StyledButton>;
}

export default Button;

