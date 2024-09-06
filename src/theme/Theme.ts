import { LightColors, DarkColors } from '../tokens';
import { Colors } from '../tokens';

export interface Theme {
  dark: boolean;
  colors: Colors;
}

export const LightTheme: Theme = {
  dark: false,
  colors: LightColors,
};

export const DarkTheme: Theme = {
  dark: true,
  colors: DarkColors,
};
