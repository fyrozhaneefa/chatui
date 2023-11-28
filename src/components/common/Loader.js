import React from "react";
import styled, { keyframes } from "styled-components";
const pulseRunAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  25% {
    transform: translateY(-5px) scale(1.3);
    opacity: 1;
  }
  50% {
    transform: translateY(0) scale(1);
    opacity: 0.5;
  }
  75% {
    transform: translateY(5px) scale(1.3);
    opacity: 1;
  }
`;
const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: rgb(5 47 133);
  border-radius: 50%;
  margin: 0 5px;
  animation: ${pulseRunAnimation} 1.5s infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
      <Dot delay="0.6s" />
    </LoaderWrapper>
  );
};

export default Loader;
