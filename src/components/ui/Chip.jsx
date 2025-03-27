import styled from "@emotion/styled";

const Chip = styled.div`
  display: inline-block;
  background-color: ${({ theme, variant }) => theme.colors.primary[variant]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  padding: 6.5px 8px;
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  top: 6px;
  right: 6px;
`;

export default Chip;
