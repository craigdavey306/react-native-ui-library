import React from 'react';
import {
  AccessibilityRole,
  GestureResponderEvent,
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native';
import { useTheme, Theme } from '../../theme';
import { IconName, Icon } from '../Icon';
import { Typography } from '../../tokens';

type ButtonMode = 'outlined' | 'contained';
type ButtonType = 'action' | 'critical' | 'success' | 'warning';

interface ButtonProps {
  mode?: ButtonMode;
  type?: ButtonType;
  icon?: IconName;
  disabled?: boolean;
  title: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  onPress?: (e: GestureResponderEvent) => void;
  maxFontSizeMultiplier?: number;
  testID?: string;
  uppercase?: boolean;
}

function getButtonStyles(mode: ButtonMode, type: ButtonType, theme: Theme) {
  const isContained = mode === 'contained';

  const buttonColor =
    type === 'action'
      ? theme.colors.action
      : type === 'critical'
      ? theme.colors.critical
      : type === 'success'
      ? theme.colors.success
      : theme.colors.warning;

  const textColor = !isContained
    ? undefined
    : type === 'action'
    ? theme.colors.onAction
    : type === 'critical'
    ? theme.colors.onCritical
    : type === 'success'
    ? theme.colors.onSuccess
    : theme.colors.onWarning;

  return {
    color: textColor ?? buttonColor,
    backgroundColor: isContained ? buttonColor : undefined,
    borderColor: buttonColor,
  };
}

export const Button = ({
  mode = 'contained',
  type = 'action',
  title,
  icon,
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole = 'button',
  onPress,
  maxFontSizeMultiplier = 1.5,
  testID,
  uppercase,
  disabled,
}: ButtonProps) => {
  const { theme } = useTheme();
  const buttonStyles = getButtonStyles(mode, type, theme);

  return (
    <View style={[styles.button]}>
      <View
        style={[
          styles.content,
          { ...buttonStyles },
          disabled && styles.disabled,
        ]}
        testID={`${testID}-content`}>
        {icon ? (
          <View style={styles.icon} testID={`${testID}-icon`}>
            <Icon name={icon} color={buttonStyles.color} />
          </View>
        ) : null}
        <Pressable
          onPress={onPress}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole={accessibilityRole}
          accessibilityHint={accessibilityHint}
          disabled={disabled}>
          <Text
            style={[
              { color: buttonStyles.color },
              styles.label,
              disabled && styles.disabled,
              uppercase && styles.uppercaseLabel,
            ]}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
            testID={`${testID}-label`}>
            {title}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  icon: {
    marginLeft: 12,
    marginRight: -4,
  },
  label: {
    textAlign: 'center',
    marginVertical: 9,
    marginHorizontal: 5,
    ...Typography.labelLarge,
  },
  uppercaseLabel: {
    textTransform: 'uppercase',
  },
  disabled: {
    opacity: 0.7,
  },
});
