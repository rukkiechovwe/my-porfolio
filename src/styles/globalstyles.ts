import { createGlobalStyle } from "styled-components";
import { ITheme } from "../utils/interfaces";

const AppStyles = createGlobalStyle`
   @font-face {
      font-family: 'AlbertSans';
      font-weight:400;
      src: url("/assets/fonts/AlbertSans-Regular.ttf");
   }

   @font-face {
      font-family: 'Spinnaker';
      font-weight:900;
      src: url("/assets/fonts/Spinnaker-Regular.ttf");
   }

   *:focus {
      outline: none;
   }

   body,html {
      margin: 0;
      padding: 0;
      font-family: 'AlbertSans';
      font-weight:400;
      background-color: ${(props) => (props.theme as ITheme).bgColor};
   }

   body {
      overflow-x: hidden;
   }

   a {
      text-decoration: none;
   }

   p {
      font-size: 17px;
      font-weight: 400;
      @media only screen and (max-width: 570px) {
         font-size: 16px;
      }
   }

   h1, h2, h3 {
      font-weight: 500;
      font-family: 'Spinnaker';
   }

   .tooltip-container {
      position: relative;
   }

   .tooltip-box {
      position: absolute;
      background:  ${(props) => (props.theme as ITheme).titleColor};
      color: ${(props) => (props.theme as ITheme).tooltipColor};
      padding: 5px;
      border-radius: 5px;
      top: calc(100% + 5px);
      display: none;
      width: max-content;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 24px;
   }

   .tooltip-box.visible {
      display: block;
   }

   .trail{
      background-color: ${(props) =>
        (props.theme as ITheme).highlightTextColor};
      height: 10px;
      width: 10px;
      position: absolute;
      border-radius: 50%;

      @media only screen and (max-width: 768px) {
         display: none;
      }
   }
`;

export default AppStyles;
