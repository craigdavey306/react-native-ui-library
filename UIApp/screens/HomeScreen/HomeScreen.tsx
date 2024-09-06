import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList, StackItem } from '../../types';
import { useTheme } from '../../../src/theme';
import { STACK_SCREEN_LIST } from '../../constants';
import { ActionRow } from '../../../src/components/ActionRow';

type StackScreen = StackItem['screen'];

export const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>): JSX.Element => {
  const { theme } = useTheme();

  const navigateToScreen = (screen: StackScreen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={STACK_SCREEN_LIST}
        renderItem={({ item }) => (
          <ActionRow
            onPress={() => navigateToScreen(item.screen)}
            label={{
              title: item.title,
              style: { color: theme.colors.action },
            }}
            icon={{
              name: 'chevron-right',
              color: theme.colors.action,
            }}
            accessibilityLabel={`Navigate to ${item.title}`}
          />
        )}
        keyExtractor={(item) => item.title}
        style={{ backgroundColor: theme.colors.background }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
});
