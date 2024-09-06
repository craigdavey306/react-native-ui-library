import React from 'react';
import { StyleSheet } from 'react-native';
import {
  NavigationContainer,
  Theme as NavigatorTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, useTheme, Theme } from '../src/theme';
import { ButtonScreen, HomeScreen } from './screens';
import { TextInputScreen } from './screens/TextInputScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const { theme } = useTheme();

  function serializeNavTheme(theme: Theme): NavigatorTheme {
    return {
      dark: theme.dark,
      colors: {
        primary: theme.colors.action,
        background: theme.colors.background,
        card: theme.colors.background,
        text: theme.colors.text,
        border: theme.colors.border,
        notification: theme.colors.action,
      },
    };
  }

  const navTheme = serializeNavTheme(theme);

  return (
    <ThemeProvider>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Button" component={ButtonScreen} />
          <Stack.Screen name="Text Input" component={TextInputScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
