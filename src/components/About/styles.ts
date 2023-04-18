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
  min-height: 80vh;

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
export const AboutContainer = styled.div`
  text-align: center;
  width: 80%;
  padding: 0px 0 40px 0;
  @media only screen and (max-width: 765px) {
    text-align: center;
    width: 100%;
  }
`;
export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 40px 0;
  text-align: left;
  width: 100%;
  text-transform: capitalize;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1px;
  @media only screen and (max-width: 765px) {
    width: 100%;
  }
  @media only screen and (max-width: 570px) {
    font-size: 16px;
    padding: 0 0 60px 0;
  }
`;
export const SkillList = styled.div`
  margin-top: 25px;
  width: 100%;
  display: grid;
  grid-template: 1fr / 100%;
  gap: 20px;

  @media only screen and (min-width: 670px) {
    grid-template: 1fr / 50% 50%;
  }
`;

export const SkillItem = styled.div`
  display: flex;
  font-weight: 200;
  padding: 15px;
  background-color: ${(props) => props.theme.buttonColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 5px;

  flex-direction: column;
  @media only screen and (min-width: 570px) {
    flex-direction: row;
  }
`;
export const HeaderText = styled.h1`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  font-size: 36px;
  font-weight: 100;
  @media only screen and (max-width: 570px) {
    font-size: 30px;
  }
`;

export const ParaText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 100;
  text-align: center;
  line-height: 26px;
  letter-spacing: 1px;

  @media only screen and (min-width: 765px) {
    //  padding: 0 4%;
  }
`;

export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;
export const ColoredLinkText = styled.a`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;
export const SkillTitleText = styled.p`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  margin: 0;
  text-align: center;
`;
export const DataNameText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  padding-right: 10px;
`;
export const SkillText = styled.span`
  color: ${(props) => (props.theme as ITheme).titleColor};
`;

export const Image = styled.img`
  position: absolute;
`;

export const HandSignImage = styled(Image)`
  max-width: 18.625em;
  bottom: 10px;
  left: 0;
  display: none;
  @media only screen and (min-width: 765px) {
    display: block;
  }
`;

export const AboutImage = styled(Image)`
  width: 11.625em;
  position: relative;
`;
