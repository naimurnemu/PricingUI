import styled from "@emotion/styled";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  justify-content: space-between;
  align-items: stretch;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

function Grid({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}

export default Grid;
