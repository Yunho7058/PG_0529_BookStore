import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

type ThemeNameType = 'light' | 'dark';
interface Props {
  themeName: ThemeNameType;
  setThemeName: (themeName: ThemeNameType) => void;
}

const ThemeSwticher = () => {
  const { themeName, toggle } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggle}>{themeName}</button>
    </>
  );
};
export default ThemeSwticher;
