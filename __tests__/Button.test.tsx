import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {
  it,
  describe,
  jest,
  expect,
  beforeEach,
  afterEach,
} from '@jest/globals';
import { render, screen, userEvent } from '../utils/test-utils';
import { Button } from '../src/components/Button';
import { LightTheme } from '../src/theme';

describe('Button Snapshots', () => {
  // Action button snapshots
  it('renders contained action button', () => {
    const testID = 'contained-action';
    const title = 'Action';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="action"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders contained action button with icon', () => {
    const testID = 'contained-action';
    const title = 'Action';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="action"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined action button', () => {
    const testID = 'outlined-action';
    const title = 'Action';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined action button with icon', () => {
    const testID = 'outlined-action';
    const title = 'Action';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  // Success button snapshots

  it('renders contained success button', () => {
    const testID = 'contained-success';
    const title = 'Success';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="success"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders contained success button with icon', () => {
    const testID = 'contained-success';
    const title = 'Success';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="success"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined success button', () => {
    const testID = 'outlined-success';
    const title = 'Success';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="success"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined success button with icon', () => {
    const testID = 'outlined-success';
    const title = 'Success';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="success"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  // Critical button snapshots
  it('renders contained critical button', () => {
    const testID = 'contained-critical';
    const title = 'Critical';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="critical"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders contained critical button with icon', () => {
    const testID = 'contained-critical';
    const title = 'Critical';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="critical"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined critical button', () => {
    const testID = 'outlined-critical';
    const title = 'Critical';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="critical"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined critical button with icon', () => {
    const testID = 'outlined-critical';
    const title = 'Critical';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="critical"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  // Warning button snapshots
  it('renders contained warning button', () => {
    const testID = 'contained-warning';
    const title = 'Warning';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="warning"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders contained warning button with icon', () => {
    const testID = 'contained-warning';
    const title = 'Warning';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="warning"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined warning button', () => {
    const testID = 'outlined-warning';
    const title = 'Warning';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="warning"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders outlined warning button with icon', () => {
    const testID = 'outlined-warning';
    const title = 'Warning';
    const mockOnPress = jest.fn();

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="warning"
        icon="chevron-right"
        title={title}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});

describe('Button Unit Tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render a contained action button', async () => {
    const testID = 'contained-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="action"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: LightTheme.colors.action,
      color: LightTheme.colors.onAction,
      borderColor: LightTheme.colors.action,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render a contained action button with an icon', async () => {
    const testID = 'contained-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="action"
        title={title}
        icon="chevron-right"
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: LightTheme.colors.action,
      color: LightTheme.colors.onAction,
      borderColor: LightTheme.colors.action,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon displays for the button.
    expect(screen.queryByTestId(iconTestID)).toBeTruthy();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render an outlined action button', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: undefined,
      color: LightTheme.colors.action,
      borderColor: LightTheme.colors.action,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render an outlined action button with an icon', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        title={title}
        icon="chevron-right"
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon displays for the button.
    expect(screen.queryByTestId(iconTestID)).toBeTruthy();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should not allow a user to press a disabled button', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        title={title}
        icon="chevron-right"
        disabled={true}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is disabled.
    expect(element).toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon displays for the button.
    expect(screen.queryByTestId(iconTestID)).toBeTruthy();

    // Confirm clicking on the button does not execute the onPress callback logic.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(0);
  });

  it('should transform the button label to uppercase when the uppercase property is true', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const title = 'Action';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="action"
        title={title}
        uppercase={true}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is disabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button label has the textTransform style.
    expect(labelElement).toHaveStyle({ textTransform: 'uppercase' });
  });

  it('should render a contained success button', async () => {
    const testID = 'contained-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Success';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="success"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: LightTheme.colors.success,
      color: LightTheme.colors.onSuccess,
      borderColor: LightTheme.colors.success,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render an outlined success button', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Success';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="success"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: undefined,
      color: LightTheme.colors.success,
      borderColor: LightTheme.colors.success,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render a contained critical button', async () => {
    const testID = 'contained-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Critical';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="critical"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: LightTheme.colors.critical,
      color: LightTheme.colors.onCritical,
      borderColor: LightTheme.colors.critical,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render an outlined critical button', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Critical';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="critical"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: undefined,
      color: LightTheme.colors.critical,
      borderColor: LightTheme.colors.critical,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render a contained warning button', async () => {
    const testID = 'contained-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Warning';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="contained"
        type="warning"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: LightTheme.colors.warning,
      color: LightTheme.colors.onWarning,
      borderColor: LightTheme.colors.warning,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });

  it('should render an outlined critical button', async () => {
    const testID = 'outlined-action';
    const labelTestID = `${testID}-label`;
    const iconTestID = `${testID}-icon`;
    const contentTestID = `${testID}-content`;
    const title = 'Warning';
    const mockOnPress = jest.fn();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Button
        testID={testID}
        onPress={mockOnPress}
        mode="outlined"
        type="warning"
        title={title}
      />,
    );

    // Confirm the button was rendered.
    const element = await screen.findByTestId(testID);
    expect(element).toBeDefined();

    // Confirm the button is enabled.
    expect(element).not.toBeDisabled();

    // Confirm the button label was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();

    // Confirm the button's styles are correct.
    const contentElement = await screen.findByTestId(contentTestID);
    expect(contentElement).toHaveStyle({
      backgroundColor: undefined,
      color: LightTheme.colors.warning,
      borderColor: LightTheme.colors.warning,
    });

    // Confirm the button's properties were set correctly.
    expect(labelElement).toHaveTextContent(title);
    expect(element.props.accessibilityRole).toBe('button');
    expect(element.props.accessibilityHint).toBeFalsy();
    expect(element.props.accessibilityLabel).toBeFalsy();

    // Confirm an icon does not display for the button.
    expect(screen.queryByTestId(iconTestID)).toBeNull();

    // Confirm clicking the button calls the onPress callback.
    await user.press(element);
    expect(mockOnPress).toBeCalledTimes(1);
  });
});
