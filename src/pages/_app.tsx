import GlobalStyle from '../components/globalstyles';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';

const theme: DefaultTheme = {
  colors: {
    primary: '#4f46e5',
    secondary: '#3f38b7',
    light: '#eae9fc',
    text: '#111827',
    contrastText: '#fff',
    description: '#3e3e3e',
    border: '#e4e4e7',
  },
  radius: '10px',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
