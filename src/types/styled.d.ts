import "styled-components";
import { ITheme } from "../utils/interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
