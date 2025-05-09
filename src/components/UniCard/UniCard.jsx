import React, { memo } from "react";
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

function UniCard({
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
  const { name, title, text, price, details } = plans[0] || {};
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
        <Info
          handleModalOpen={() => handleModalOpen(plans[0], "delete", name)}
          description={text}
          variant={variant}
          quantity={selectedPlans[name]?.[title]?.quantity || 0}
        >
          {title}
        </Info>
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
          onClick={() => handleModalOpen(plans[0], "confirm", name)}
          variant={variant}
        >
          Select Plan
        </Button>
      </CardAction>
    </Card>
  );
}

export default memo(UniCard);
