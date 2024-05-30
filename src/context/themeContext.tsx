import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '../style/global';
import { dark, light } from '../style/theme';
import ThemeSwticher from '../components/header/ThemeSwticher';
const DEFAULT_THEMENAME = 'light';
const THEME_LOCALSTORAGE_KEY = 'book';

interface State {
  themeName: 'light' | 'dark';
  toggle: () => void;
}
export const state: State = {
  themeName: DEFAULT_THEMENAME,
  toggle: () => {},
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(
    DEFAULT_THEMENAME
  );
  const toggle = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem(
      THEME_LOCALSTORAGE_KEY,
      themeName === 'light' ? 'dark' : 'light'
    );
  };
  useEffect(() => {
    const save = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as
      | 'light'
      | 'dark';
    setThemeName(save || DEFAULT_THEMENAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle, themeName }}>
      <ThemeProvider theme={themeName === 'light' ? light : dark}>
        <GlobalStyled themeName={themeName} />
        <ThemeSwticher />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
