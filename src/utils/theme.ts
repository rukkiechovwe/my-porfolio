import { ITheme } from "./interfaces";

export const lightTheme: ITheme = {
  bgColor: "#fff",
  buttonColor: "rgba(203, 203, 203, 0.2)",
  buttonPrimaryColor: "#00b968",
  headerTextColor: "#111",
  textColor: "grey",
  highlightTextColor: "#00b968",
  titleColor: "#000",
  paragraphTextColor: "hsla(0,0%,0%,0.8)",

  projectDescColor: "#484848",
  tooltipColor: "#fff",
  borderColor: "1px solid #eaeaea96",
  boxShadow: "3px 3px 20px #d2d2d247",
  white: "#fff",
  grey: "#dcdcdc",
  bgImageColor: "#111",
};

export const darkTheme: ITheme = {
  bgColor: "#111",
  buttonColor: "rgba(255, 255, 255, 0.08)",
  buttonPrimaryColor: "#00b968",
  buttonHoverColor: "#00b968",
  buttonHoverTextColor: "#fff",
  highlightTextColor: "#00b968",
  headerTextColor: "#fff",
  textColor: "hsla(0,0%,100%,0.4)",
  paragraphTextColor: "hsla(0,0%,100%,0.7)",
  titleColor: "#fff",
  projectDescColor: "#7d7d7d",
  tooltipColor: "#000",
  borderColor: "1px solid #26262694",
  boxShadow: "3px 3px 20px #0404045e",
  white: "#fff",
  grey: "#dcdcdc",
};
