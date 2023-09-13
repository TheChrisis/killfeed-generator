import { extendTheme, ThemeComponents, type ThemeConfig } from '@chakra-ui/react';

const components: ThemeComponents = {
  Modal: {
    baseStyle: {
      dialog: {
        _dark: {
          bg: 'blackAlpha.800',
        },
        _light: {
          bg: 'whiteAlpha.800',
        },
      },
    },
  },
  Tooltip: {
    baseStyle: {
      _dark: {
        bg: 'blackAlpha.800',
        color: 'white',
      },
      _light: {
        bg: 'whiteAlpha.800',
        color: 'black',
      },
    },
    defaultProps: {
      placement: 'top',
    },
  },
};

const theme: ThemeConfig = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  components,
});

export default theme;
