/**
 * Colors selected using the online HTML Color Picker provided
 * by the University of Washington.
 *
 * url: https://a.atmos.washington.edu/~ovens/javascript/colorpicker.html
 *
 * Light and dark color theme modes were updated via Chat GPT.
 */

export const Palette = {
  Black: { grade100: '#000' },
  Blue: {
    grade5: '#eaf5fb',
    grade10: '#c2e1f5',
    grade20: '#85c7f2',
    grade30: '#41aaeb',
    grade40: '#208bd5',
    grade50: '#0079c3', // Action Light Mode
    grade60: '#005d91', // Action Dark Mode
    grade70: '#00486f',
    grade80: '#003651',
    grade90: '#002233',
  },
  Gray: {
    grade2: '#f7f7f7', // Background Light Mode
    grade3: '#f2f2f2',
    grade5: '#eaeaea',
    grade10: '#dcdcdc', // Border Light Mode
    grade20: '#cccccc',
    grade25: '#bfbfbf',
    grade30: '#b3b3b3',
    grade40: '#999999',
    grade50: '#808080',
    grade60: '#666666',
    grade70: '#4d4d4d',
    grade80: '#333333', // Background Dark Mode
    grade90: '#1a1a1a', // Border Dark Mode
  },
  Green: {
    grade5: '#dfeedf',
    grade10: '#c5ebc5',
    grade20: '#94cc95',
    grade30: '#6cb16e',
    grade40: '#3c8b3e', // Primary Light Mode
    grade50: '#4da653', // Primary Dark Mode
    grade60: '#3dbe62', // Success Color
    grade70: '#2b6430', // Secondary Light Mode
    grade80: '#356b38', // Secondary Dark Mode
    grade90: '#234e27',
  },
  Orange: {
    grade5: '#fff2e6',
    grade10: '#ffe6cc',
    grade20: '#ffcc99',
    grade30: '#ffb366',
    grade40: '#ff9933',
    grade50: '#ff8000',
    grade60: '#cc6600',
    grade70: '#994d00',
    grade80: '#663300',
    grade90: '#4d2600',
  },
  Red: {
    grade5: '#fee4e5',
    grade10: '#fdcecf',
    grade20: '#fb9da0',
    grade30: '#fa6b70',
    grade40: '#d6453d', // Updated to Critical Light Mode
    grade50: '#f0544f', // Updated to Critical Dark Mode
    grade60: '#c5070d',
    grade70: '#94050a',
    grade80: '#620407',
    grade90: '#4a0305',
  },
  Transparent: { grade100: '#00000000' },
  White: { grade100: '#fff' },
  Yellow: {
    grade5: '#fffde6',
    grade10: '#fffccc',
    grade20: '#fff899',
    grade30: '#fff566', // Warning Light Mode
    grade40: '#fff133',
    grade50: '#f1c40f', // Warning Dark Mode
    grade60: '#ccbe00',
    grade70: '#998f00',
    grade80: '#807700',
    grade90: '#665f00',
  },
  Disabled: {
    light: '#a6a2a2', // Added for Disabled Light Mode
    dark: '#565656', // Added for Disabled Dark Mode
  },
};

export const black = Palette.Black.grade100;
export const transparent = Palette.Transparent.grade100;
export const white = Palette.White.grade100;
