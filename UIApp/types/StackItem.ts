/**
 * Contains all of the test screens navigable listed on the home screen.
 */
import { RootStackParamList } from './RootStackParamList';

export type StackItem = {
  /**
   * Displays the screen title.
   */
  title: string;

  /**
   * Screen name defined in the navigation stack.
   */
  screen: keyof Omit<RootStackParamList, 'Home'>;
};
