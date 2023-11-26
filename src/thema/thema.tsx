import {StyleSheet} from 'react-native';

export type Theme = {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  background: string;
  header: string;
};
type Themes = {
  dark: Theme;
  light: Theme;
};

export const themes: Themes = {
  dark: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#ffffff',
    textSecondary: '#8899a6',
    background: '#15202b',
    header: '#f64c2d',
  },
  light: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#14171a',
    textSecondary: '#657786',
    background: '#ffffff',
    header: '#f64c2d',
  },
};
