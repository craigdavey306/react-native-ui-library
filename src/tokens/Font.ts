// import { TextStyle } from 'react-native';

import { Platform } from 'react-native';

// type FontWeight = TextStyle['fontWeight'];

// interface FontInterface {
//   size: {
//     tiny: number;
//     small: number;
//     medium: number;
//     normal: number;
//     large: number;
//     extraLarge: number;
//   };
//   weight: {
//     normal: FontWeight;
//     medium: FontWeight;
//     semibold: FontWeight;
//     bold: FontWeight;
//   };
// }

// export const Font: FontInterface = {
//   size: {
//     tiny: 10,
//     small: 12,
//     medium: 14,
//     normal: 14,
//     large: 18,
//     extraLarge: 24,
//   },
//   weight: {
//     normal: '400',
//     medium: '500',
//     semibold: '600',
//     bold: '700',
//   },
// };

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type Font = {
  fontFamily: string;
  fontWeight: FontWeight;
  fontStyle?: 'normal' | 'italic';
};

export type FontTypes = {
  regular: Font;
  medium: Font;
  bold: Font;
  light: Font;
  thin: Font;
};

type PlatformFonts = {
  android?: FontTypes;
  default: FontTypes;
  ios: FontTypes;
};

const iosFontFamily = 'System';
const defaultFontFamily = 'sans-serif';

export const platformFonts: PlatformFonts = {
  ios: {
    regular: {
      fontFamily: iosFontFamily,
      fontWeight: '400',
    },
    medium: {
      fontFamily: iosFontFamily,
      fontWeight: '500',
    },
    bold: {
      fontFamily: iosFontFamily,
      fontWeight: 'bold',
    },
    light: {
      fontFamily: iosFontFamily,
      fontWeight: '300',
    },
    thin: {
      fontFamily: iosFontFamily,
      fontWeight: '100',
    },
  },
  default: {
    regular: {
      fontFamily: defaultFontFamily,
      fontWeight: '400',
    },
    medium: {
      fontFamily: defaultFontFamily,
      fontWeight: '500',
    },
    bold: {
      fontFamily: defaultFontFamily,
      fontWeight: 'bold',
    },
    light: {
      fontFamily: defaultFontFamily,
      fontWeight: '300',
    },
    thin: {
      fontFamily: defaultFontFamily,
      fontWeight: '100',
    },
  },
};

export const Fonts = Platform.select(platformFonts);
