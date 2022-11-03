import React, { ReactElement } from "react";
import styled from "styled-components";

type TextProps = {
  size?: string;
  weight?: string;
  style?: string;
  family?: string;
  color?: string;
  margin?: string;
  decoration?: string;
  display?: string;
  position?: string;
  bottom?: string | number;
  right?: string | number;
  children?:
    | string
    | number
    | ReactElement
    | (string | ReactElement | JSX.Element | number)[];
  onClick?: () => void;
};

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.size || "18px"};
  font-weight: ${(props) => props.weight || "normal"};
  font-style: ${(props) => props.style || "normal"};
  font-family: ${(props) => props.family || "Alef"};
  color: ${(props) => props.color || " black"};
  margin: ${(props) => props.margin || "0"};
  text-decoration: ${(props) => props.decoration || "none"};
  display: ${(props) => props.display || "inline-block"};
  position: ${(props) => props.position || "static"};
  bottom: ${(props) => props.bottom || "0"};
  right: ${(props) => props.bottom || "0"};
`;

const Text = (props: TextProps) => {
  return <StyledText {...props} />;
};

export default Text;
