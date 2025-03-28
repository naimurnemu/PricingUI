import styled from "@emotion/styled";

const Subtitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0;
  margin: 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.text};

  > * {
    color: inherit;
    font-weight: inherit;
  }
`;

export default Subtitle;
