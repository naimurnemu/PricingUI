import styled from "@emotion/styled";
import { InfoIcon } from "../../assets/icons";

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  white-space: normal;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  background-color: ${({ theme, variant }) => theme.colors.secondary[variant]};
  border-radius: 50px;
`;

const InfoText = styled.p`
  color: ${({ theme, variant }) => theme.colors.primary[variant]};
  font-size: 12.5px;
  margin: 0;
  > * {
    color: inherit;
  }
`;

function Info({ children, ...props }) {
  return (
    <StyledInfo {...props}>
      <InfoText {...props} dangerouslySetInnerHTML={{ __html: children }} />
      <InfoIcon {...props} varinant={props.variant} />
    </StyledInfo>
  );
}

export default Info;
