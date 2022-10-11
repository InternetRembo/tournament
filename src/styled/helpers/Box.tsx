import { ReactElement } from 'react';
import styled from 'styled-components';

type BoxProps = {
    display?: string;
    bgColor?: string;
    position?: string;
    bottom?: string | number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
    children?: string | number | ReactElement | (string | ReactElement | JSX.Element | number)[];
};

export const StyledBox = styled.div<BoxProps>`
  display: ${(props) => props.display || 'block'};
  position: ${(props) => props.position || 'static'};
  bottom: ${(props) => props.bottom || 'none'};
  top: ${(props) => props.top || 'none'};
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.bottom || 'none'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  background-color: ${(props) => props.bgColor || 'none'};
`;
