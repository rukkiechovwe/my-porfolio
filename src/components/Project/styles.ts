import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";
import { Container } from "../../styles/commonstyles";

export const PContainer = styled(Container)`
  min-height: 100vh;
  margin: 0 auto;
  @media only screen and (min-width: 570px) {
    padding: 2rem 2.54rem;
  }
  @media only screen and (min-width: 680px) {
    width: 80%;
  }
`;

export const MobileProjects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DeskTopProjects = styled.div`
  display: none;
  column-gap: 1.5rem;
  margin: 2rem 0 0;

  @media (min-width: 768px) {
    display: block;
    column-count: 2;
  }
`;

export interface IProject {
  url?: string;
}

export const Project = styled.div<IProject>`
  margin: 0 0 1.5rem;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px 20px;
  border-radius: 5px;
  // border: ${(props) => props.theme.borderColor};
  background: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000036;
    z-index: 1;
    border-radius: 5px;
    background: #00000052;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8596171745065213) 0%,
      rgba(0, 0, 0, 0.09491129215358018) 92%,
      rgba(0, 0, 0, 0.09491129215358018) 100%
    );
  }

  &:hover::after {
    background: #00000052;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8596171745065213) 0%,
      rgba(0, 0, 0, 0.09491129215358018) 92%,
      rgba(0, 0, 0, 0.09491129215358018) 100%
    );
  }

  div {
    z-index: 2;
    transition: 200ms;
    transform: translateY(0);

    @media (min-width: 768px) {
      transform: translateY(100px);
    }
  }

  &:hover div {
    transform: translateY(0);
  }

  @media (min-width: 570px) {
    padding: 2.5rem 1.6rem;
  }
  @media (min-width: 670px) {
    &:nth-child(3n + 1) {
      height: 360px;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TagRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background: rgb(105, 104, 105);
  color: ${(props) => (props.theme as ITheme).white};
  width: max-content;
  border-radius: 5px;
  padding: 3px 8px;
  margin: 0 8px 15px 0;
  font-size: 13px;
`;

export const TitleText = styled.h3`
  color: ${(props) => (props.theme as ITheme).white};
  text-transform: capitalize;
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  @media only screen and (max-width: 570px) {
    font-size: 26px;
  }
`;

export const DescText = styled.p`
  color: rgb(213, 213, 213);
  margin: 0 0 10px;
  padding: 0;
  font-size: 15px;
  line-height: 20px;
  @media only screen and (max-width: 570px) {
    font-size: 14px;
  }
`;

export const IconText = styled.a`
  color: ${(props) => (props.theme as ITheme).titleColor};
  color: ${(props) => (props.theme as ITheme).grey};
  padding-right: 15px;

  :hover {
    color: #36e2b2;
  }
`;
