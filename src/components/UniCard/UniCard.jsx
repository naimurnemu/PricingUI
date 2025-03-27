import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Title,
  Text,
  Chip,
  Price,
  Info,
  Subtitle,
  Tooltip,
} from "../ui";
import { chipContent, subTitles } from "../../lib/variants";

const StyledCard = styled.div`
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

const CardBody = styled.div`
  display: block;
`;

const CardAction = styled.div`
  display: block;
`;

function UniCard({
  plans,
  selectedType,
  variant = "blue",
  features,
  featureIndex,
  ...props
}) {
  const { name, title, text, price, onSelectPlan, details } = plans[0] || {};
  const featureKey = String(featureIndex);
  return (
    <StyledCard variant={variant}>
      {props?.name === "Pro" ? (
        <Chip variant={variant}>{chipContent}</Chip>
      ) : null}
      <CardBody>
        <Title>{name}</Title>
        <Price details={details[selectedType]} variant={variant}>
          {price}
        </Price>
        <Info description={text} variant={variant}>
          {title}
        </Info>
        <Subtitle>{subTitles[featureIndex]}:</Subtitle>
        <>
          <Tooltip description={text}>{title}</Tooltip>
          {features
            ?.filter((item) => item.is_pro === featureKey)
            ?.map((feature) => (
              <Tooltip
                key={feature.featureKey}
                description={feature.feature_desc}
              >
                {feature.feature_title}
              </Tooltip>
            ))}
        </>
      </CardBody>
      <CardAction>
        <Button variant={variant} onClick={onSelectPlan}>
          Select Plan
        </Button>
      </CardAction>
    </StyledCard>
  );
}

export default UniCard;
