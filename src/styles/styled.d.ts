import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      orange: string;
      darkGray: string;
      lightGray: string;
      red: string;
      white: string;
      green: string;
    };
  }
}
