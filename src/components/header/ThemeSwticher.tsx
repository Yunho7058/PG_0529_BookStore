import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import Button from '../common/Button';

type ThemeNameType = 'light' | 'dark';
interface Props {
  themeName: ThemeNameType;
  setThemeName: (themeName: ThemeNameType) => void;
}

const ThemeSwticher = () => {
  const { themeName, toggle } = useContext(ThemeContext);
  return (
    <Button size="small" scheme="normal" onClick={toggle}>
      {themeName}
    </Button>
  );
};
export default ThemeSwticher;
