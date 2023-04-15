export interface IThemePalette {
  modal: {
    background: string;
    text: string;
    button: {
      background: string;
      hover: string;
      active: string;
      text: string;
    };
  };

  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  background: {
    default: string;
    paper: string;
  };
  icons: {
    primary: string;
    secondary: string;
    background: string;
  };
  divider: string;
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
}

export type IPalette = {
  light: IThemePalette;
  dark: IThemePalette;
};

export const PALETTE: IPalette = {
  light: {
    modal: {
      background: 'white',
      text: 'text-gray-700',
      button: {
        background: 'primary',
        hover: 'primary-dark',
        active: 'primary-darker',
        text: 'text-white',
      },
    },
    text: {
      primary: 'text-primary-dark',
      secondary: 'text-gray-600',
      disabled: 'text-gray-400',
      hint: 'text-gray-400',
    },
    background: {
      default: 'bg-gray-50',
      paper: 'white',
    },
    icons: {
      primary: 'text-gray-600',
      secondary: 'text-gray-400',
      background: 'bg-gray-50',
    },
    divider: 'border-gray-300',
    primary: {
      light: 'primary',
      main: 'primary-dark',
      dark: 'primary-darker',
      contrastText: 'text-white',
    },
  },
  dark: {
    modal: {
      background: 'gray-900',
      text: 'text-gray-100',
      button: {
        background: 'primary-dark',
        hover: 'primary',
        active: 'primary-light',
        text: 'text-gray-800',
      },
    },
    text: {
      primary: 'text-primary-light',
      secondary: 'text-gray-400',
      disabled: 'text-gray-600',
      hint: 'text-gray-600',
    },
    background: {
      default: 'gray-900',
      paper: 'gray-800',
    },
    icons: {
      primary: 'text-gray-400',
      secondary: 'text-gray-500',
      background: 'gray-900',
    },
    divider: 'border-gray-700',
    primary: {
      light: 'primary-light',
      main: 'primary',
      dark: 'primary-dark',
      contrastText: 'text-gray-900',
    },
  },
};
