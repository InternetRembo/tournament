import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  width?: string;
  height?: string;
  border?: string;
  fontSize?: string;
  backgroundColor?: string;
  margin?: string;
  onClick?: () => void;
  color?: string;
  hoverColor?: string;
  position?: string;
  top?: string;
  left?: string;
};

export const StyledButton = styled.button<ButtonProps>`
  color: ${(props) => props.color || "green"};
  background-color: ${(props) => props.backgroundColor || "white"};
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "46px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "18px"};
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  border-radius: 5px;
  margin: ${(props) => props.margin || "20px , 0 , 0 , 0"};
  &:hover {
    background-color: ${(props) => props.hoverColor || "#ccff99;"};
  }
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
