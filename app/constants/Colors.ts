/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#7B61FF';
const tintColorDark = '#7B61FF';

export const Colors = {
  light: {
    textTitle: '#13CAD6',
    text: '#1C1B1F',
    textInput: '#13CAD6',
    textButton: '#fff',
    gradien: ['#33E4DB', '#00BBD3'],
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '##000000',
    tabIconSelected: tintColorLight,
    cardBackground: '#fff',
    buttonBackground: '#7B61FF',
    colorLineCategorie: '#4A90E2',
  },
  dark: {
    textTitle: '#13CAD6',
    text: '#fff',
    textInput: '#13CAD6',
    textButton: '#000',
    gradien: ['#33E4DB', '#00BBD3'],
    background: '#000',
    tint: tintColorDark,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorDark,
    cardBackground: '#060606',
    buttonBackground: '#7B61FF',
    colorLineCategorie: '#4A90E2',
  },
};
