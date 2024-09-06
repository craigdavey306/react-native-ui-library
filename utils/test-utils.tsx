import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from '../src/theme';

// Wrapper component for the theme provider.
const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

function customRenderer(ui: React.ReactElement, options?: RenderOptions) {
  return { ...render(ui, { wrapper: Wrapper, ...options }) };
}

// re-export everything
export * from '@testing-library/react-native';

// override the render method
export { customRenderer as render };
