import React from "react";
import theme from "../../styles/theme";

const ArrowDownIcon = ({
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
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ fontSize, fontWeight }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ArrowDownIcon;
