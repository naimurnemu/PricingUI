import React from "react";
import theme from "../../styles/theme";

const InfoIcon = ({
  fontSize = "inherit",
  fontWeight = "normal",
  variant,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={theme.colors.primary[variant]}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ fontSize, fontWeight }}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};

export default InfoIcon;
