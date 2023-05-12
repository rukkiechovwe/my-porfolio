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

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 570px) {
    padding: 0 2.54rem 4rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 2rem 3.54rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 2rem 5.54rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 2rem 7.54rem;
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

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;
