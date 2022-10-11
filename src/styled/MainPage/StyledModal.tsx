import React from "react";
import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 500px;
  background-color: #292f33;
  color: white;
  box-shadow: #131212 1px 1px 2px 1px;
  padding: 20px;
  margin: 30px auto 0;

  border-radius: 4px;
`;

export const OutsideSpace = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
