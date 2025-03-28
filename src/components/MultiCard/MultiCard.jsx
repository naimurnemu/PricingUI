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
  selectedPlans,
  variant = "blue",
  features,
  featureIndex,
  popularPlan,
  chipContent,
  subTitles,
  handleModalOpen,
  ...props
}) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const { name, title, text, price, details } = selectedPlan;

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
          handleModalOpen={() => handleModalOpen(selectedPlan, "delete", name)}
          handleSelect={(plan) => setSelectedPlan(plan)}
          quantity={selectedPlans[name]?.[title]?.quantity || 0}
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
        <Button
          onClick={() => handleModalOpen(selectedPlan, "confirm", name)}
          variant={variant}
        >
          Select Plan
        </Button>
      </CardAction>
    </Card>
  );
}

export default memo(MultiCard);
