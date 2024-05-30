import { ThemeProvider } from 'styled-components';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { GlobalStyled } from './style/global';
import { dark, light } from './style/theme';
import ThemeSwticher from './components/header/ThemeSwticher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';

function App() {
  //const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const { themeName, toggle } = useContext(ThemeContext);
  return (
    <BookStoreThemeProvider>
      {/* <ThemeProvider theme={themeName === 'light' ? light : dark}>
        <GlobalStyled themeName={themeName} />
        <ThemeSwticher themeName={themeName} setThemeName={toggle} /> */}
      book store
      <Layout children={<Home />} />
      {/* </ThemeProvider> */}
    </BookStoreThemeProvider>
  );
}

export default App;
