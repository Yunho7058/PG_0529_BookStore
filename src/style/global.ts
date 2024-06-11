import { createGlobalStyle } from 'styled-components';
import 'sanitize.css';

interface Props {
  themeName: 'light' | 'dark';
}

export const GlobalStyled = createGlobalStyle<Props>`
body{
    padding: 30px;
    margin: 0px;
}
h1{
    margin: 0px;
}
*{
    color: ${(props) => (props.themeName === 'light' ? 'black' : 'white')};
}
`;
