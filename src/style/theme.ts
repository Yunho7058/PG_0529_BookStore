type ColorKey = 'primary' | 'background' | 'secondary' | 'third';
interface Theme {
  name: 'light' | 'dark';
  color: {
    [key in ColorKey]: string;
  };
}
//타입 지정때 Record 방식은 무엇인가?

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'white',
    background: 'lightgray',
    secondary: 'red',
    third: 'green',
  },
};

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'black',
    background: 'black',
    secondary: 'red',
    third: 'green',
  },
};
