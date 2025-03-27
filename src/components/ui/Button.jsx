import styled from "@emotion/styled";

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  line-height: 40px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 16px;
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
