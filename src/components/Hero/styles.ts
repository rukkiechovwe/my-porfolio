import styled, { keyframes } from "styled-components";
import { ITheme } from "../../utils/interfaces";
import { SButton } from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  min-height: 400px;
  padding: 0 15px;
  position: relative;
  overflow: hidden;
  @media only screen and (min-width: 769px) {
    padding: 0 15px;
    height: 100vh;
    min-height: 500px;
  }
`;

export const HeaderText = styled.h1`
  font-size: 50px;
  line-height: 56px;
  text-align: center;
  font-weight: 500;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  z-index: 9;
  margin: 0.5rem 0;
  @media only screen and (min-width: 400px) {
    font-size: 70px;
    line-height: 76px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 84px;
    line-height: 90px;
    max-width: 1000px;
  }

  @media only screen and (min-width: 991px) {
    font-size: 98px;
    line-height: 104px;
  }
`;

export const Greetings = styled.h4`
  text-transform: capitalize;
  font-size: 18px;
  margin: 0;
  font-weight: 100;
  letter-spacing: 1px;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  @media only screen and (min-width: 400px) {
    font-size: 20px;
  }
`;

export const DescText = styled.h4`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 100;
  letter-spacing: 1px;
  margin: 1rem 0 3rem;
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  @media only screen and (min-width: 400px) {
    font-size: 16px;
  }
`;

const bounceLetters = keyframes`
  from {
    opacity: 1;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(0.7);
  }
`;

export const NameLetters = styled.span`
  display: inline-block;
  transform: scale(1);
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  transition: all 300ms ease;

  &:hover {
    animation: ${bounceLetters} 500ms alternate 2;
    color: #00b968;
  }
`;

const bounce = keyframes`
  from {
      opacity: 1;
    transform: transalte(0);
  }
  to {
    opacity: 1;
    transform: translateY(-20px);
  }
`;

export const ScrollButton = styled(SButton)`
  position: absolute !important;
  inset: auto auto 30px auto;
  min-width: fit-content;
  min-height: fit-content;
  border-radius: 50%;
  opacity: 0;
  animation: ${bounce} 2s alternate infinite;
  animation-delay: 5s;
  background: ${(props) => (props.theme as ITheme).highlightTextColor};
  padding: 8px;

  & svg {
    width: 20px;
    height: 20px;
  }

  @media only screen and (min-width: 600px) {
    padding: 15px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
`;
