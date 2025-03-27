import React from "react";
import styled from "@emotion/styled";
import { Button, Title, Text, Chip, Price, Info } from "../ui";
import { chipContent } from "../../lib/variants";

const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px 20px;
  border: 1px solid transparent;
  border-top: 0.5rem solid;
  border-color: ${({ theme }) => theme.colors.card.border};
  border-top-color: ${({ theme, variant }) => theme.colors.primary[variant]};
  position: relative;
`;

function UniCard({ plans, selectedType, variant = "blue", ...props }) {
  const { name, title, description, price, onSelectPlan, details } =
    plans[0] || {};
  // console.log(props);
  return (
    <StyledCard variant={variant}>
      {props?.name === "Pro" ? (
        <Chip variant={variant}>{chipContent}</Chip>
      ) : null}
      <Title>{name}</Title>
      <Price details={details[selectedType]} variant={variant}>
        {price}
      </Price>
      <Info variant={variant}>
      {title}
      </Info>

      <Text>{description}</Text>
      <Text style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{price}</Text>
      <Button variant={variant} onClick={onSelectPlan}>
        Select Plan
      </Button>
    </StyledCard>
  );
}

export default UniCard;
