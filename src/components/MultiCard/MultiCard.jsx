import styled from "@emotion/styled";
import { useState } from "react";
import { Button, Text, Title } from "../ui";

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

function MultiCard(props) {
  console.log(props);
  const {variant, plans} = props || {};
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const {
    name,
    title,
    description,
    price,
    onSelectPlan,
  } = selectedPlan;
  return (
    <StyledCard variant={variant}>
      <h4>{name}</h4>
      <Title>{price}</Title>
      <Text>{description}</Text>
      <Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{price}</Text>
      <Button variant={variant} onClick={onSelectPlan}>
        Select Plan
      </Button>
    </StyledCard>
  );
}

export default MultiCard;
