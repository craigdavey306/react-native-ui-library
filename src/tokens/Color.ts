import { Palette, black, transparent, white } from './Palette';

const { Blue, Disabled, Gray, Green, Red, Yellow } = Palette;

export interface Colors {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  action: string;
  critical: string;
  disabled: string;
  success: string;
  warning: string;
  background: string;
  border: string;
  text: string;
  transparent: string;
  label: string;
}

export const LightColors: Colors = {
  primary: Green.grade40,
  onPrimary: white,
  secondary: Green.grade70,
  onSecondary: white,
  action: Blue.grade50,
  critical: Red.grade40,
  disabled: Disabled.light,
  success: Green.grade60,
  warning: Yellow.grade30,
  background: white,
  border: Gray.grade50,
  text: black,
  label: Gray.grade80,
  transparent,
};

export const DarkColors: Colors = {
  primary: Green.grade50,
  onPrimary: white,
  secondary: Green.grade80,
  onSecondary: white,
  action: Blue.grade30,
  critical: Red.grade50,
  disabled: Disabled.dark,
  success: Green.grade60,
  warning: Yellow.grade30,
  background: black,
  border: Gray.grade30,
  text: white,
  label: Gray.grade10,
  transparent,
};
