import React from "react";
import theme from "../../styles/theme";

const ArrowUpIcon = ({ fontSize = "inherit", fontWeight = "normal", variant }) => {
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
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

export default ArrowUpIcon;
