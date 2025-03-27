import styled from "@emotion/styled";

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px 20px;
  border: 1px solid transparent;
  border-top: 8px solid;
  border-color: ${({ theme }) => theme.colors.card.border};
  border-top-color: ${({ theme, variant }) => theme.colors.primary[variant]};
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default Card;
