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

function Info({ children, description, ...props }) {
  return (
    <StyledInfo {...props}>
      <InfoText {...props} dangerouslySetInnerHTML={{ __html: children }} />
      <Tooltip
        style={{ marginBottom: "-2px" }}
        description={description}
        isIcon={true}
      >
        <InfoIcon {...props} varinant={props.variant} />
      </Tooltip>
    </StyledInfo>
  );
}

export default Info;
