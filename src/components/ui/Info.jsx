import styled from "@emotion/styled";
import { InfoIcon } from "../../assets/icons";
import Tooltip from "./Tooltip";

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  white-space: normal;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background-color: ${({ theme, variant }) => theme.colors.secondary[variant]};
  border-radius: 50px;
`;

const InfoText = styled.p`
  color: ${({ theme, variant }) => theme.colors.primary[variant]};
  font-size: 12.5px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  > * {
    color: inherit;
  }
`;

const InfoQuantity = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;

  &:hover .quantity {
    opacity: 0;
  }

  &:hover .minus {
    opacity: 1;
  }
`;

const QuantityText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  opacity: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s ease;
  position: absolute;
  font-size: 14px;
`;

const Minus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.2s ease;
  font-size: 14px;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0;
  position: absolute;
`;

function Info({ children, description, quantity = 0, ...props }) {
  return (
    <StyledInfo {...props}>
      <InfoText {...props} dangerouslySetInnerHTML={{ __html: children }} />
      {quantity ? (
        <InfoQuantity>
          <QuantityText className="quantity">{quantity}</QuantityText>
          <Minus
            onClick={() => props.handleModalOpen()}
            {...props}
            className="minus"
          >
            -
          </Minus>
        </InfoQuantity>
      ) : (
        <Tooltip
          style={{ marginBottom: "-2px" }}
          description={description}
          isIcon={true}
        >
          <InfoIcon {...props} varinant={props.variant} />
        </Tooltip>
      )}
    </StyledInfo>
  );
}

export default Info;
