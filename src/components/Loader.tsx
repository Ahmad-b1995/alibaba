import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loading = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  border: 8px solid #f3f3f3;
  border-top: 8px solid #1d3648;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation-name: ${loadingAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

function Loader() {
  return <Loading></Loading>;
}

export default Loader;
