import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Title,
  Chip,
  Price,
  Info,
  Subtitle,
  Tooltip,
  Card,
  CardBody,
  CardAction,
} from "../ui";
import { chipContent, subTitles } from "../../lib/variants";


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
    <Card variant={variant}>
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
    </Card>
  );
}

export default UniCard;
