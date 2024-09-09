import { Palette, black, transparent, white } from './Palette';

const { Blue, Disabled, Gray, Green, Red, Yellow } = Palette;

export interface Colors {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  action: string;
  onAction: string;
  critical: string;
  onCritical: string;
  disabled: string;
  success: string;
  onSuccess: string;
  warning: string;
  onWarning: string;
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
  onAction: white,
  critical: Red.grade40,
  onCritical: white,
  disabled: Disabled.light,
  success: Green.grade70,
  onSuccess: white,
  warning: Yellow.grade60,
  onWarning: black,
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
  onAction: white,
  critical: Red.grade50,
  onCritical: white,
  disabled: Disabled.dark,
  success: Green.grade60,
  onSuccess: white,
  warning: Yellow.grade30,
  onWarning: black,
  background: black,
  border: Gray.grade30,
  text: white,
  label: Gray.grade10,
  transparent,
};
