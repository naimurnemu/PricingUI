import styled from "@emotion/styled";
import { useState } from "react";

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  width: 140px;
  background-color: ${({ theme }) => theme.colors.tooltipBackground};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <TooltipWrapper
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <TooltipText show={show}>{text}</TooltipText>
    </TooltipWrapper>
  );
}

export default Tooltip;
