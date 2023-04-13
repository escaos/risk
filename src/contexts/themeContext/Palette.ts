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
      background: '#FFFFFF',
      text: '#000000',
      button: {
        background: '#FFFFFF',
        hover: '#F5F5F5',
        active: '#E0E0E0',
        text: '#000000',
      },
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
      disabled: '#000000',
      hint: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    icons: {
      primary: '#000000',
      secondary: '#000000',
      background: '#000000',
    },
    divider: '#000000',
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#000000',
    },
  },
  dark: {
    modal: {
      background: '#000000',
      text: '#FFFFFF',
      button: {
        background: '#000000',
        hover: '#0D0D0D',
        active: '#1A1A1A',
        text: '#FFFFFF',
      },
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      disabled: '#FFFFFF',
      hint: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    icons: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      background: '#FFFFFF',
    },
    divider: '#FFFFFF',
    primary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
  },
};
