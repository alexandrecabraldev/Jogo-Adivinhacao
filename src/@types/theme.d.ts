import {GlobalTheme} from "../global/GlobalTheme";

type CustomTheme = typeof GlobalTheme;

declare module "styled-components"{
    export interface DefaultTheme extends CustomTheme{}
}