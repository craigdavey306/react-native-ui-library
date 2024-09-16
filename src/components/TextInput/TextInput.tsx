import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput as NativeTextInput,
  View,
  TextStyle,
  StyleProp,
} from 'react-native';
import { useTheme } from '../../theme';
import { Typography } from '../../tokens/Typography';

type LabelProps = {
  label?: string;
  style?: StyleProp<TextStyle>;
  testID?: string;
};

const Label = React.memo(
  ({ label, style, testID }: LabelProps): JSX.Element | null => {
    const { theme } = useTheme();

    return label ? (
      <View
        style={[
          styles.labelContainer,
          { backgroundColor: theme.colors.background },
        ]}>
        <Text
          style={[{ color: theme.colors.label }, style, styles.label]}
          testID={`${testID}-label`}>
          {label}
        </Text>
      </View>
    ) : null;
  },
);

type KeyboardOption = 'default' | 'numeric' | 'phone';

export type TextInputProps = LabelProps & {
  autoFocus?: boolean;
  disabled?: boolean;
  keyboard?: KeyboardOption;
  maxLength?: number;
  value?: string;
  viewOnly?: boolean;
  testID?: string;
  style?: TextStyle;
  onChange: (value: string) => void;
  accessibilityLabel?: string;
};

export const TextInput = React.memo(React.forwardRef(Component));

function Component(
  props: TextInputProps,
  ref?: React.Ref<React.ComponentRef<typeof NativeTextInput>>,
) {
  const { theme } = useTheme();
  const {
    disabled,
    keyboard,
    maxLength,
    onChange,
    value,
    testID,
    style,
    ...rest
  } = props;
  const color = theme.colors.text;

  const nativeKeyboard: KeyboardTypeOptions =
    keyboard === 'numeric'
      ? 'number-pad'
      : keyboard === 'phone'
      ? 'phone-pad'
      : 'default';

  return (
    <View
      style={[
        styles.rootContainer,
        { backgroundColor: theme.colors.background },
      ]}
      testID={`${props.testID}-container`}>
      <Label
        label={props.label}
        style={{
          color: !disabled ? theme.colors.label : theme.colors.disabled,
        }}
        testID={testID}
      />
      <NativeTextInput
        autoFocus={props.autoFocus}
        accessibilityLabel={props.accessibilityLabel}
        ref={ref}
        disableFullscreenUI
        editable={!disabled}
        keyboardType={nativeKeyboard}
        maxLength={maxLength}
        onChangeText={onChange}
        value={value}
        testID={`${testID}-text`}
        style={[
          style,
          { color: disabled ? theme.colors.disabled : color },
          styles.input,
          {
            borderColor: theme.colors.border,
            backgroundColor: disabled
              ? theme.colors.disabled
              : theme.colors.background,
            borderWidth: 1,
            borderRadius: 5,
            color,
          },
        ]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    paddingRight: 5,
    ...Typography.labelLarge,
  },
  input: {
    flex: 1,
  },
});
