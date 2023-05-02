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
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 570px) {
    padding: 0 2.54rem 4rem;
  }

  @media only screen and (min-width: 680px) {
    width: 80%;
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

export const HeaderText = styled(FloatText)``;

export const EperienceContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  gap: 40px;
  color: #fff;
  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: #fff;
  overflow: auto;
  @media only screen and (min-width: 600px) {
    flex-direction: column;
    overflow: unset;
  }
`;

export interface ITabItem {
  active?: boolean;
}

export const TabItem = styled.div<ITabItem>`
  background: ${(props) => props.active && "#00b9681f"};
  padding: 10px;
  border-bottom: ${(props) =>
    props.active ? "2px solid #00b968" : "2px solid transparent"}!important;
  border-left: none !important;
  cursor: pointer;

  p {
    margin: 0;
    color: ${(props) =>
      props.active ? props.theme.highlightTextColor : props.theme.textColor};
    font-size: 13px !important;
    @media only screen and (min-width: 768px) {
      font-size: 14px !important;
    }
  }

  @media only screen and (min-width: 600px) {
    border-left: ${(props) =>
      props.active ? "2px solid #00b968" : "2px solid transparent"}!important;
    border-bottom: none !important;
  }
`;

export const TabContent = styled.div`
  p {
    margin: 0;

    font-size: 14px !important;
    // font-family: "AtypText";
  }
`;

export const ExperienceTitle = styled.h3`
  color: ${(props) => (props.theme as ITheme).headerTextColor};
  margin: 0 0 6px;
  font-size: 18px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const ExperienceCompany = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
  margin: 0 0 10px;
`;

export const ExperienceDuration = styled.p`
  color: ${(props) => (props.theme as ITheme).textColor};
  font-style: italic;
  font-size: 13px !important;
  @media only screen and (min-width: 768px) {
    font-size: 14px !important;
  }
`;

export const WorkDoneList = styled.ul`
  padding: 0 0 0 15px;
`;
export const WorkDoneItem = styled.li`
  color: ${(props) => (props.theme as ITheme).projectDescColor};
  font-size: 15px !important;
  line-height: 26px;
  margin: 0 0 20px;
  @media only screen and (min-width: 768px) {
    font-size: 16px !important;
  }
`;
export const ColoredText = styled.span`
  color: ${(props) => (props.theme as ITheme).highlightTextColor};
`;