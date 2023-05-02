import styled, { keyframes } from "styled-components";
import { ITheme } from "../utils/interfaces";

export const SideLine = styled.div`
  background: ${(props) => props.theme.textColor};
  height: 200px;
  width: 2px;
  align-self: center;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const float = keyframes`
  0%{
    transform: skew(0, 0deg);
  }
  40%{
    transform: skew(-7deg, 0deg);
  }
  50% {
		transform: skew(7deg, 0deg);
	}
  60% {
		transform: skew(-7deg, 0deg);
	}
  100% {
		transform: skew(0, 0deg);
	}
`;

export const FloatText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 34px;
  transform: skew(0, 0deg);
  animation: ${float} 5s alternate ease-in-out infinite;

  @media only screen and (max-width: 570px) {
    font-size: 28px;
  }
`;
