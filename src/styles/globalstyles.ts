import { createGlobalStyle } from "styled-components";
import { ITheme } from "../utils/interfaces";

const AppStyles = createGlobalStyle`
   @font-face {
      font-family: 'Eina';
      font-weight:400;
      src: url("/assets/fonts/Eina-Regular.ttf");
   }

   @font-face {
      font-family: 'AtypText';
      font-weight:500;
      src: url("/assets/fonts/AtypText-Semibold.ttf");
   }

   *:focus {
      outline: none;
   }

   body,html {
      margin: 0;
      padding: 0;
      font-family: 'Eina';
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
      font-family: 'AtypText';
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
   }


//    svg text {
//   font-family: Lora;
//   letter-spacing: 10px;
//   stroke: #ffa5d8;
//   font-size: 150px;
//   font-weight: 700;
//   stroke-width: 3;
 
//   animation: textAnimate 5s infinite alternate;
  
// }

// @keyframes textAnimate {
//   0% {
//     stroke-dasharray: 0 50%;
//     stroke-dashoffset:  20%;
//     fill:hsl(189, 68%, 75%)

//   }
  
//   100% {
//     stroke-dasharray: 50% 0;
//     stroke-dashoffstet: -20%;
//     fill: hsla(189, 68%, 75%,0%)
//   }
  
// }
`;

export default AppStyles;
