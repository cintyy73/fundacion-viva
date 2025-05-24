import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#fbd3be",  // lighter
      500: "#C0E83E",  // primary
      900: "#bd101b",  // darker
    },
    accent: {
      100: "#747474",  // lighter
      500: "#5C349E",  // accent
      900: "#000000",  // darker
    },
    warn: {
      100: "#ef9a9a",  // lighter
      500: "#f44336",  // warning
      900: "#d32f2f",  // darker
    },
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
      },
    },
  },
});

export default theme;