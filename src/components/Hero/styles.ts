import styled, { keyframes } from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  min-height: 550px;
  padding: 0 15px;
  position: relative;
  @media only screen and (min-width: 765px) {
    padding: 0 15px;
  }
`;

export const HeaderText = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: 400;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  z-index: 9;
  margin: 0.5rem 0;
  @media only screen and (min-width: 400px) {
    font-size: 70px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 98px;
    max-width: 1000px;
  }
`;
export const Greetings = styled.h4`
  text-transform: uppercase;
  font-size: 20px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 2px;
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  @media only screen and (min-width: 400px) {
    font-size: 22px;
  }
`;
export const DescText = styled.h4`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 1px;
  margin: 0 0 3rem;
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  @media only screen and (min-width: 400px) {
    font-size: 18px;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const SmallText = styled.span`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.theme as ITheme).textColor};
`;

export const SummaryText = styled(SmallText)`
  font-weight: 200;
  padding: 0 100px;
`;

export const Image = styled.img`
  position: absolute;
`;

export const SpiralImage = styled(Image)`
  max-width: 6.625em;
  bottom: 10%;
  left: 0;
  @media only screen and (min-width: 570px) {
    max-width: 8.625em;
    bottom: 20%;
  }
`;

export const SpiralImage1 = styled(Image)`
  max-width: 6.625em;
  bottom: 0;
  right: 0;
  @media only screen and (min-width: 570px) {
    max-width: 8.625em;
  }
`;

const rotate = keyframes`
  from {
    transform: transalte(0);
  }
  to {
    transform: translateY(-20px);
  }
`;

export const StarfishImage = styled(Image)`
  width: 15.625em;

  bottom: 20%;
  right: 20%;
  animation: ${rotate} 12s linear infinite;
  @media only screen and (min-width: 570px) {
    width: 20.625em;
  }
`;
export const ReactContainer = styled.div`
  animation: ${rotate} 1s alternate-reverse 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  width: 3.5em;
  height: 3.5em;
  bottom: 11%;
  left: 15%;
  position: absolute;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media only screen and (min-width: 400px) {
    width: 4.5em;
    height: 4.5em;
  }
  @media only screen and (min-width: 768px) {
    width: 5.5em;
    height: 5.5em;
    bottom: 19%;
    left: 19%;
  }
`;
export const VueContainer = styled.div`
  animation: ${rotate} 1s alternate-reverse .7s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  width: 4em;
  height: 4em;
  bottom: 8%;
  right: 9%;
  position: absolute;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media only screen and (min-width: 400px) {
    width: 5em;
    height: 5em;
  }
  @media only screen and (min-width: 768px) {
    width: 6em;
    height: 6em;
    bottom: 16%;
    right: 14%;
  }
`;
export const JsContainer = styled.div`
  animation: ${rotate} 1s alternate infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.buttonColor};
  width: 3em;
  height: 3em;
  bottom: 75%;
  left: 10%;
  position: absolute;
  box-shadow: ${(props) => props.theme.boxShadow};
  @media only screen and (min-width: 400px) {
    width: 4em;
    height: 4em;
  }
  @media only screen and (min-width: 768px) {
    width: 5em;
    height: 5em;
    bottom: 60%;
    left: 16%;
  }
`;
export const Language = styled(Image)`
  width: 1.5em;
  height: 1.5em;
  @media only screen and (min-width: 400px) {
    width: 2.5em;
    height: 2.5em;
  }
  @media only screen and (min-width: 768px) {
    width: 3em;
    height: 3em;
  }
`;
