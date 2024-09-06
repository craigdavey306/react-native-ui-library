import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import { Icon, IconProps } from '../Icon';
import { Typography } from '../../tokens/Typography';
import { useTheme } from '../../theme';

type LabelProps = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const Label = React.memo(({ title, style }: LabelProps): JSX.Element | null => {
  const { theme } = useTheme();

  return title ? (
    <Text
      style={[
        style,
        styles.text,
        { backgroundColor: theme.colors.background },
      ]}>
      {title}
    </Text>
  ) : null;
});

type ActionRowProps = Pick<
  PressableProps,
  'accessibilityLabel' | 'accessibilityHint' | 'disabled' | 'onPress' | 'style'
> & {
  label: LabelProps;
  icon: IconProps;
};

export const ActionRow = (props: ActionRowProps) => {
  const { theme } = useTheme();
  const { onPress, label, icon, disabled, ...rest } = props;

  const iconColor = !disabled ? icon.color : theme.colors.disabled;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, { backgroundColor: theme.colors.background }]}
      {...rest}>
      <Label {...label} />
      <Icon size={icon.size} color={iconColor} name={icon.name} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  text: {
    ...Typography.labelLarge,
  },
});
