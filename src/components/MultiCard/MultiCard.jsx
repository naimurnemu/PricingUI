import { memo, useState } from "react";
import React from "react";
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
  Select,
} from "../ui";

function MultiCard({
  plans,
  selectedType,
  variant = "blue",
  features,
  featureIndex,
  popularPlan,
  chipContent,
  subTitles,
  ...props
}) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const { name, title, text, price, onSelectPlan, details } = selectedPlan;

  const featureKey = String(featureIndex);
  return (
    <Card variant={variant}>
      {props?.name === popularPlan ? (
        <Chip variant={variant}>{chipContent}</Chip>
      ) : null}
      <CardBody>
        <Title>{name}</Title>
        <Price details={details[selectedType]} variant={variant}>
          {price}
        </Price>

        <Select
          variant={variant}
          options={plans}
          selected={selectedPlan}
          handleSelect={(plan) => setSelectedPlan(plan)}
        />
        <Subtitle>{subTitles[featureIndex]}:</Subtitle>
        <>
          <Tooltip description={text}>{title}</Tooltip>
          {features
            ?.filter((item) => item.is_pro === featureKey)
            ?.map((feature) => (
              <Tooltip
                key={feature.feature_title}
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

export default memo(MultiCard);
