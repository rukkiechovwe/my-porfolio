import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  @media only screen and (min-width: 570px) {
    padding: 2rem 2.54rem;
  }
  @media only screen and (min-width: 765px) {
    padding: 2rem 3.54rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 2rem 5.54rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 2rem 7.54rem;
  }
`;

export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 42px;
  font-weight: 100;
  @media only screen and (max-width: 570px) {
    font-size: 34px;
  }
`;

export const SpanText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 200;
  padding: 0;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
  @media only screen and (max-width: 570px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 765px) {
    padding: 0 4%;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;

export const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

export const SpaceY = styled.div<{ space: string }>`
  margin-top: ${(props) => props.space || "12px"};
`;
