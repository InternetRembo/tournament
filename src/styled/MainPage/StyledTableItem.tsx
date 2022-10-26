import React from "react";
import styled from "styled-components";

type StyledTableItemPros = {
  bgColor: string;
};

export const StyledTableItem = styled.div<StyledTableItemPros>`
  border-bottom: 1px solid grey;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  margin: 5px;
  height: 46px;
`;
