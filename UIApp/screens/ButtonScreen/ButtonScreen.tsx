import { Alert, StyleSheet, View, ScrollView } from 'react-native';
import { useTheme } from '../../../src/theme';
import { Button } from '../../../src/components/Button';

type TestButtonProps = {
  handleButtonPress: (label: string) => void;
};

function transformComponentToLabel(componentName: string) {
  return componentName.match(/[A-Z][a-z]+/g)?.join(' ') ?? 'Button pressed';
}

// Access buttons

const ActionButtonWithIconContainedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithIconContainedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="action"
        title="Action Contained"
        onPress={() => handleButtonPress(label)}
        icon="chevron-right"
        accessibilityLabel={label}
        testID={component}
        uppercase={true}
      />
    </View>
  );
};

const ActionButtonWithoutIconContainedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithoutIconContainedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="action"
        title="Action Contained without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const ActionButtonWithIconContainedDisabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithIconContainedDisabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="action"
        title="Action Contained Disabled"
        onPress={() => handleButtonPress(label)}
        icon="chevron-right"
        disabled={true}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const ActionButtonWithIconOutlinedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithIconOutlinedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="outlined"
        type="action"
        title="Action Outlined"
        onPress={() => handleButtonPress(label)}
        icon="chevron-right"
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const ActionButtonWithIconOutlinedDisabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithIconOutlinedDisabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="outlined"
        type="action"
        title="Action Outlined Disabled"
        onPress={() => handleButtonPress(label)}
        icon="chevron-right"
        disabled={true}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const ActionButtonWithoutIconOutlinedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'ActionButtonWithoutIconOutlinedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="outlined"
        type="action"
        title="Action Outlined without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

// Success buttons

const SuccessButtonWithoutIconContainedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'SuccessButtonWithoutIconContainedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="success"
        title="Success Contained without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const SuccessButtonWithoutIconOutlinedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'SuccessButtonWithoutIconOutlinedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="outlined"
        type="success"
        title="Success Outlined without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

// Critical buttons

const CriticalButtonWithoutIconContainedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'CriticalButtonWithoutIconContainedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="critical"
        title="Critical Contained without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const CriticalButtonWithoutIconOutlinedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'CriticalButtonWithoutIconOutlinedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="outlined"
        type="critical"
        title="Critical Outlined without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

// Warning buttons

const WarningButtonWithoutIconContainedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'WarningButtonWithoutIconContainedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={styles.button}>
      <Button
        mode="contained"
        type="warning"
        title="Warning Contained without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

const WarningButtonWithoutIconOutlinedEnabled = ({
  handleButtonPress,
}: TestButtonProps) => {
  const component = 'WarningButtonWithoutIconOutlinedEnabled';
  const label = transformComponentToLabel(component);

  return (
    <View style={[styles.button, styles.lastButton]}>
      <Button
        mode="outlined"
        type="warning"
        title="Warning Outlined without Icon"
        onPress={() => handleButtonPress(label)}
        accessibilityLabel={label}
        testID={component}
      />
    </View>
  );
};

export const ButtonScreen = () => {
  const { theme } = useTheme();

  const handleButtonPress = (label: string) => {
    Alert.alert(`${label} pressed`);
  };

  return (
    <ScrollView
      style={[styles.root, { backgroundColor: theme.colors.background }]}>
      <ActionButtonWithIconContainedEnabled
        handleButtonPress={handleButtonPress}
      />
      <ActionButtonWithoutIconContainedEnabled
        handleButtonPress={handleButtonPress}
      />
      <ActionButtonWithIconContainedDisabled
        handleButtonPress={handleButtonPress}
      />
      <ActionButtonWithIconOutlinedEnabled
        handleButtonPress={handleButtonPress}
      />
      <ActionButtonWithoutIconOutlinedEnabled
        handleButtonPress={handleButtonPress}
      />
      <ActionButtonWithIconOutlinedDisabled
        handleButtonPress={handleButtonPress}
      />

      <SuccessButtonWithoutIconContainedEnabled
        handleButtonPress={handleButtonPress}
      />
      <SuccessButtonWithoutIconOutlinedEnabled
        handleButtonPress={handleButtonPress}
      />

      <CriticalButtonWithoutIconContainedEnabled
        handleButtonPress={handleButtonPress}
      />
      <CriticalButtonWithoutIconOutlinedEnabled
        handleButtonPress={handleButtonPress}
      />

      <WarningButtonWithoutIconContainedEnabled
        handleButtonPress={handleButtonPress}
      />
      <WarningButtonWithoutIconOutlinedEnabled
        handleButtonPress={handleButtonPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
    padding: 30,
  },
  button: {
    marginVertical: 10,
  },
  lastButton: {
    marginBottom: 50,
  },
});
