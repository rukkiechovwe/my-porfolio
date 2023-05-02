import styled, { keyframes } from "styled-components";
import { ITheme } from "../../utils/interfaces";
import { FloatText } from "../../styles/commonstyles";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

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
export const AboutContainer = styled.div`
  text-align: left;
  width: 100%;
  padding: 0 0 10px 0;
  @media only screen and (min-width: 768px) {
    padding: 30px 0 10px 0;
    width: 80%;
  }
`;

export const HeaderText = styled(FloatText)`
`;

export const ParaText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-size: 15px;
  text-align: left;
  line-height: 26px;

  @media only screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 32px;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: capitalize;
  font-size: 15px;
  text-align: left;
  line-height: 22px;

  @media only screen and (min-width: 768px) {
    width: 80%;
    // font-size: 17px;
  }
  @media only screen and (max-width: 570px) {
    padding: 0 0 20px 0;
  }
`;
export const SkillList = styled.div`
  // margin-top: 25px;
  width: 100%;
  display: grid;
  grid-template: 1fr / 100%;
  gap: 20px;
`;

export const SkillItem = styled.div`
  display: flex;
  font-weight: 200;
  // padding: 15px;
  // background-color: ${(props) => props.theme.buttonColor};
  // box-shadow: ${(props) => props.theme.boxShadow};
  // border-radius: 5px;

  flex-direction: column;
  @media only screen and (min-width: 570px) {
    flex-direction: row;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;
export const SkillTitleText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  margin: 0;
  text-align: left;
`;
export const DataNameText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  padding-right: 10px;
`;
export const SkillText = styled.span`
  color: ${(props) => (props.theme as ITheme).titleColor};
`;