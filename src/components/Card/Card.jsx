import React from "react";
import styled from "@emotion/styled";
import { Button, Title, Text } from "../ui";

const StyledCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-color: ${({ theme }) => theme.colors.card.border};
  border-top: 0.5rem solid;
  border-top-color: ${({ theme, variant }) => theme.colors.primary[variant]};
`;

function Card(props) {
  const {name, title, description, price, onSelectPlan, variant = "blue" } = props;
  // console.log(props);
  return (
    <StyledCard variant={variant}>
      <h4>{name}</h4>
      <Title>{price}</Title>
      <Text>{description}</Text>
      <Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{price}</Text>
      <Button variant={variant} onClick={onSelectPlan}>Select Plan</Button>
    </StyledCard>
  );
}

export default Card;
