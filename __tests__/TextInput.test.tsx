import 'react-native';
import React from 'react';
import '@testing-library/jest-native/extend-expect';
import { it, describe, jest, expect } from '@jest/globals';
import { render, screen, fireEvent } from '../utils/test-utils';
import { TextInput } from '../src/components/TextInput';

describe('Text Input Tests', () => {
  it('should not allow changes for disabled text input', async () => {
    const testID = 'disabled-text';
    const textTestID = `${testID}-text`;
    const defaultText = 'default';
    const mockHandleChange = jest.fn();

    // Render disabled TextInput component.
    render(
      <TextInput
        disabled={true}
        onChange={mockHandleChange}
        testID={testID}
        value={defaultText}
        keyboard="default"
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm the element is disabled.
    expect(element).toBeDisabled();

    // Try updating the text.
    fireEvent.changeText(element, 'override');

    // Confirm the onChange function was not called.
    expect(mockHandleChange).toBeCalledTimes(0);
  });

  it('should handle input text for the default keyboard', async () => {
    const testID = 'default-keyboard';
    const textTestID = `${testID}-text`;
    const mockHandleChange = jest.fn();
    const inputText = 'abc123@gmail.com';
    const maxLength = 30;

    // Render TextInput component with default keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="default"
        maxLength={maxLength}
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();

    // Update the text.
    fireEvent.changeText(element, inputText);

    // Confirm the onChange logic was called.
    expect(mockHandleChange).toBeCalledTimes(1);
    // Confirm the onChange function was called with the input.
    expect(mockHandleChange).lastCalledWith(inputText);
  });

  it('should limit the amount of text when maxLength is defined', async () => {
    const testID = 'default-keyboard';
    const textTestID = `${testID}-text`;
    const mockHandleChange = jest.fn();
    const maxLength = 10;

    // Render TextInput component with default keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="default"
        maxLength={maxLength}
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm the element has the maxLength property set correctly.
    expect(element.props.maxLength).toBe(maxLength);
  });

  it('should render numeric input with number-pad keyboard', async () => {
    const testID = 'numeric-keyboard';
    const textTestID = `${testID}-text`;
    const labelTestID = `${testID}-label`;
    const expected = 'number-pad';
    const mockHandleChange = jest.fn();
    const maxLength = 5;

    // Render TextInput component with numeric keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="numeric"
        maxLength={maxLength}
        label="Numeric"
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm label element was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();
    // Confirm the elements' properties have been set correctly.
    expect(element.props.maxLength).toBe(maxLength);
    expect(element.props.keyboardType).toBe(expected);
    expect(labelElement).toHaveTextContent('Numeric');
  });

  it('should render default input with a default keyboard', async () => {
    const testID = 'default-keyboard';
    const textTestID = `${testID}-text`;
    const labelTestID = `${testID}-label`;
    const expected = 'default';
    const mockHandleChange = jest.fn();
    const maxLength = 5;

    // Render TextInput component with default keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="default"
        maxLength={maxLength}
        label="Default"
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm label element was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();
    // Confirm the elements' properties have been set correctly.
    expect(element.props.maxLength).toBe(maxLength);
    expect(element.props.keyboardType).toBe(expected);
    expect(labelElement).toHaveTextContent('Default');
  });

  it('should render phone number input with a phone-pad keyboard', async () => {
    const testID = 'numeric-keyboard';
    const textTestID = `${testID}-text`;
    const labelTestID = `${testID}-label`;
    const expected = 'phone-pad';
    const mockHandleChange = jest.fn();
    const maxLength = 5;

    // Render TextInput component with phone keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="phone"
        maxLength={maxLength}
        label="Phone"
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm label element was rendered.
    const labelElement = await screen.findByTestId(labelTestID);
    expect(labelElement).toBeDefined();
    // Confirm the elements' properties have been set correctly.
    expect(element.props.maxLength).toBe(maxLength);
    expect(element.props.keyboardType).toBe(expected);
    expect(labelElement).toHaveTextContent('Phone');
  });

  it('should not render a label when a label prop is not defined', async () => {
    const testID = 'numeric-keyboard';
    const textTestID = `${testID}-text`;
    const labelTestID = `${testID}-label`;
    const expected = 'phone-pad';
    const mockHandleChange = jest.fn();
    const maxLength = 5;

    // Render TextInput component with phone keyboard.
    render(
      <TextInput
        onChange={mockHandleChange}
        testID={testID}
        value=""
        keyboard="phone"
        maxLength={maxLength}
        label=""
      />,
    );

    // Confirm the element was rendered.
    const element = await screen.findByTestId(textTestID);
    expect(element).toBeDefined();
    // Confirm the elements' properties have been set correctly.
    expect(element.props.maxLength).toBe(maxLength);
    expect(element.props.keyboardType).toBe(expected);
    // Confirm a label cannot be found in the document.
    expect(screen.queryByTestId(labelTestID)).toBeNull();
  });
});
