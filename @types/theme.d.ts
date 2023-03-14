import {globalTheme} from "../src/global/GlobalTheme";

type CustomTheme = typeof globalTheme;

declare module "styled-components"{
    export interface DefaultTheme extends CustomTheme{}
}