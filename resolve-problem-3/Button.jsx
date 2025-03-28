import React from "react";

const Button = ({ variant = "primary", children, onClick = () => {} }) => {
  const variants = Object.keys(styleVariants) || [];
  const sVariant = variants.find((item) => variant?.includes(item));
  const hasArrow = variant?.includes("icon-arrow");

  return (
    <button style={styleVariants[sVariant]} onClick={onClick}>
      {hasArrow ? <span>&rarr;</span> : null}
      {children}
    </button>
  );
};

export default Button;

const styleVariants = {
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "gray",
    color: "black",
  },
};
