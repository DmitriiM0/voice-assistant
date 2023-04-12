import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      text: string;
      light: string;
      contrastText: string;
      secondary: string;
      description: string;
      border: string;
    };
    radius: string;
  }
}
