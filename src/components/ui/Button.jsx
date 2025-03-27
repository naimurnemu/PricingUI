import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  color: white;
  font-weight: 400;
  background-color: ${({ variant, theme }) => theme.colors.primary[variant]};
  &:hover {
    cursor: pointer;
    background-color: ${({ variant, theme }) =>
      theme.colors.primary.hover[variant]};
    transition: 0.3s ease-in-out;
  }
`;

export default Button;
