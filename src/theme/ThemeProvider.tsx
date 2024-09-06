import React, { useState, useEffect, createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { Theme, DarkTheme, LightTheme } from './Theme';

export interface ThemeContextInterface {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: LightTheme,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {}

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<ThemeProviderProps>) => {
  const colorScheme = useColorScheme();

  const getColorTheme = (): ThemeContextInterface => {
    return {
      theme: colorScheme === 'dark' ? DarkTheme : LightTheme,
    };
  };

  const [colorTheme, setColorTheme] = useState<ThemeContextInterface>(
    getColorTheme(),
  );

  useEffect(() => {
    setColorTheme(getColorTheme());
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ ...colorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
