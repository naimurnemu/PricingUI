import styled from "@emotion/styled";
import { memo, useState } from "react";

const TooltipWrapper = styled.div`
  position: relative;
  display: block;
`;

const TooltipOppenr = styled.div`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const TooltipTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin: 14px 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  > * {
    font-weight: 400;
    color: inherit;
  }
`;

const TooltipBox = styled.div`
  display: flex;
  width: 110%;
  min-width: 250px;
  padding: 8px 12px;
  position: absolute;
  bottom: 150%;  
  left: 50%;
  transform: ${({ isIcon }) => isIcon ? "translateX(-85%)" : "translateX(-50%)"} ;
  transition: opacity 0.2s ease-in-out;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  border-radius: 4px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.card.background};
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.01), 1px 2px 16px rgba(0, 0, 0, 0.12);

  &::after {
    content: "";
    position: absolute;
    top: 100%; 
    left: ${({ isIcon }) => (isIcon ? "auto" : "10%")}; 
    right: ${({ isIcon }) => (isIcon ? "12.5%" : "auto")};  
    border-width: 6px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.card.background} transparent transparent transparent;
  }
`;

const TooltipContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
  > img[src$=".gif"] {
    height: 180px;
    width: 100%;
    object-fit: contain;
  }
  > img {
    height: 200px;
    width: 100%;
    object-fit: contain;
  }
`;

function Tooltip({ description, children, isIcon = false, ...props }) {
  const [show, setShow] = useState(false);

  return (
    <TooltipWrapper {...props}>
      {isIcon ? (
        <TooltipOppenr
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {children}
        </TooltipOppenr>
      ) : (
        <TooltipTitle
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      )}
      {show ? (
        <TooltipBox show={show} isIcon={isIcon} {...props}>
          <TooltipContent dangerouslySetInnerHTML={{ __html: description }} />
        </TooltipBox>
      ) : null}
    </TooltipWrapper>
  );
}

export default memo(Tooltip);
