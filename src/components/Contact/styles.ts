import styled from "styled-components";
import { ITheme } from "../../utils/interfaces";
import { Container } from "../../styles/commonstyles";

export const CContainer = styled(Container)`
  min-height: 85vh;
  margin: 0 auto;

  @media only screen and (min-width: 570px) {
    padding: 2rem 2.54rem;
  }
  @media only screen and (min-width: 768px) {
    padding: 2rem 3.54rem;
    max-width: 650px;
  }
  @media only screen and (min-width: 1024px) {
    padding: 2rem 5.54rem;
    max-width: 991px;
  }
`;

export const SpanText = styled.span`
  color: ${(props) => (props.theme as ITheme).paragraphTextColor};
  font-weight: 200;
  padding: 0;
  text-align: left;
  font-size: 15px;
  line-height: 24px;
  @media only screen and (max-width: 570px) {
    font-size: 16px;
  }
`;

export const ResumeContainer = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template: 1fr 1fr / 50% 50%;
    gap: 20px;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 10px 0;
  width: 50%;

  @media only screen and (min-width: 600px) {
    margin: 0;
    width: fit-content;
  }
`;

export const SpaceY = styled.div<{ space: string }>`
  margin-top: ${(props) => props.space || "12px"};
`;
