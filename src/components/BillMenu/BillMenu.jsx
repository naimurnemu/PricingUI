import React from "react";
import styled from "@emotion/styled";
import { BillButtion, DiscountChip } from "../ui";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 16px 0;
  row-gap: 0.5rem;
`;

const StyledKeyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${({ hasLine }) => (hasLine ? "1px solid #c6d7e3" : "none")};
  padding: 0 17px;

  @media (max-width: ${"600px"}) {
    padding: 0 10px;
  }
`;

function BillMenu({
  plansInfo,
  planKeys,
  handlePlanTypeChange,
  selectedPlanType,
}) {
  return (
    <StyledMenu>
      {planKeys.map((key, index) => (
        <StyledKeyBox hasLine={index !== planKeys.length - 1} key={key}>
          <BillButtion
            isSelected={selectedPlanType === key}
            onClick={() => handlePlanTypeChange(key)}
          >
            {plansInfo[key].title}
          </BillButtion>
          {/* <span>{plansInfo[key].sub_title}</span> */}
          {plansInfo[key].discount ? (
            <DiscountChip>{plansInfo[key].discount}</DiscountChip>
          ) : null}
        </StyledKeyBox>
      ))}
    </StyledMenu>
  );
}

export default BillMenu;
