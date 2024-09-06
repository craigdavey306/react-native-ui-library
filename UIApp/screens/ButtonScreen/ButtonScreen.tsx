import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../../../src/theme';

export const ButtonScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <Text>Button Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
});
