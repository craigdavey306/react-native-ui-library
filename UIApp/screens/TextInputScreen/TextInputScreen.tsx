import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Theme, useTheme } from '../../../src/theme';
import { TextInput, TextInputProps } from '../../../src/components/TextInput';

type TestComponentProps = {
  theme: Theme;
  value: string;
  onChange: (value: string) => void;
  ref?: React.Ref<React.ComponentRef<typeof TextInput>>;
} & TextInputProps;

const DisabledText = ({ theme, onChange, value }: TestComponentProps) => {
  return (
    <View>
      <Text style={[styles.testInput, { color: theme.colors.label }]}>
        Disabled Input
      </Text>
      <TextInput
        label="Disabled"
        keyboard="default"
        onChange={onChange}
        value={value}
        disabled={true}
        testID="disabled-input"
        accessibilityLabel="disabled input text"
      />
    </View>
  );
};

const NumericInput = ({
  theme,
  onChange: handleChange,
  value,
}: TestComponentProps) => {
  const [input, setInput] = useState<string>(value);

  const handleInput = (value: string) => {
    setInput(value);
    handleChange(value);
  };

  return (
    <View>
      <Text style={[styles.testInput, { color: theme.colors.label }]}>
        Numeric Input (Max Length 5)
      </Text>
      <TextInput
        label="Numeric"
        keyboard="numeric"
        onChange={handleInput}
        value={input}
        maxLength={5}
        testID="numeric-input"
        accessibilityLabel="numeric input text"
      />
    </View>
  );
};

const DefaultTextInput = ({ theme, onChange, value }: TestComponentProps) => {
  const [input, setInput] = useState<string>(value);

  const handleInput = (value: string) => {
    setInput(value);
    onChange(value);
  };

  return (
    <View>
      <Text style={[styles.testInput, { color: theme.colors.label }]}>
        Default Input
      </Text>
      <TextInput
        label="Default"
        keyboard="default"
        onChange={handleInput}
        value={input}
        maxLength={60}
        testID="default-input"
        accessibilityLabel="default input text"
      />
    </View>
  );
};

export const TextInputScreen = () => {
  const { theme } = useTheme();
  const [disabledText, setDisabledText] = useState('Disabled Text');
  const [numericText, setNumericText] = useState('');
  const [defaultText, setDefaultText] = useState('');
  const [renderedText, setRenderedText] = useState(disabledText);

  const handleDisabledTextChange = (value: string) => {
    setDisabledText(value);
    setRenderedText(value);
  };

  const handleNumericTextChange = (value: string) => {
    setNumericText(value);
    setRenderedText(value);
  };

  const handleDefaultTextChange = (value: string) => {
    setDefaultText(value);
    setRenderedText(value);
  };

  return (
    <View style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <DisabledText
        theme={theme}
        onChange={handleDisabledTextChange}
        value={disabledText}
      />
      <NumericInput
        theme={theme}
        onChange={handleNumericTextChange}
        value={numericText}
      />
      <DefaultTextInput
        theme={theme}
        onChange={handleDefaultTextChange}
        value={defaultText}
      />

      <View style={styles.renderTextContainer}>
        <Text>User input:</Text>
        <Text
          testID="test-rendered-text"
          style={styles.renderText}
          accessibilityLabel="test rendered text">
          {renderedText}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  testInput: {
    textAlign: 'center',
    flexDirection: 'column',
    marginTop: 5,
  },
  renderTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 10,
  },
  renderText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
