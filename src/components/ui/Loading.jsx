import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #251e1e;
  border-top: 5px solid #333;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

function Loading() {
  return (
    <Loader>
      <Spinner />
    </Loader>
  )
}

export default Loading;
