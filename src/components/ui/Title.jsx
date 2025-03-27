import styled from "@emotion/styled";

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

export default Title;
