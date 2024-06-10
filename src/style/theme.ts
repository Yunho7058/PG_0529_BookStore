export type ColorKey =
  | 'primary'
  | 'background'
  | 'secondary'
  | 'third'
  | 'border'
  | 'text';
export type HeadingSize = 'large' | 'medium' | 'small';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonScheme = 'primary' | 'normal' | 'like';
export type LayoutWidth = 'large' | 'medium' | 'small';
interface Theme {
  name: 'light' | 'dark';
  color: {
    [key in ColorKey]: string;
  };
  heading: {
    [key in HeadingSize]: { fontSize: string };
  };
  buttonSize: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in LayoutWidth]: string;
    };
  };
}
//타입 지정때 Record 방식은 무엇인가?

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'red',
    background: 'lightgray',
    secondary: 'rgba(0,0,0,0.7)',
    third: 'green',
    border: 'grey',
    text: 'black',
  },
  heading: {
    large: {
      fontSize: '2rem',
    },
    medium: {
      fontSize: '1.5rem',
    },
    small: {
      fontSize: '1rem',
    },
  },
  buttonSize: {
    large: {
      fontSize: '1.5rem',
      padding: '1rem 2rem',
    },
    medium: {
      fontSize: '1rem',
      padding: '0.5rem 1rem',
    },
    small: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem',
    },
  },
  buttonScheme: {
    primary: {
      color: 'white',
      backgroundColor: 'midnightblue',
    },
    normal: {
      color: 'black',
      backgroundColor: 'rbga(0,0,0,0.5)',
    },
    like: {
      color: 'white',
      backgroundColor: 'coral',
    },
  },
  borderRadius: {
    default: '4px',
  },
  layout: {
    width: {
      large: '1020px',
      medium: '760px',
      small: '320px',
    },
  },
};

export const dark: Theme = {
  ...light,
  name: 'dark',
  color: {
    primary: 'black',
    background: 'black',
    secondary: 'red',
    third: 'green',
    border: 'grey',
    text: 'white',
  },
};
