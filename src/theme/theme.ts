import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

const breakpoints = {
  base: '0em',      // 0px
  sm: '30em',       // 480px
  md: '48em',       // 768px
  customMd: '60em', // 960px
  lg: '62em',       // 992px
  xl: '80em',       // 1280px
  '2xl': '96em',    // 1536px
}

export const theme = extendTheme({
  // cambio export default ver importaciones cambiada en main
  breakpoints,
  colors: {
    primary: {
      default: "#C0E83E",
      "50": "#f6fbd7",
      "100": "#e9f7a8",
      "200": "#dbf278",
      "300": "#cdec49",
      "400": "#c0e83e",
      "500": "#a1c933",
      "600": "#82a929",
      "700": "#64891e",
      "800": "#466914",
      "900": "#294a09",
      "950": "#172d04",
    },

    secondary: {
      default: "#5C349E",
      "50": "#ede6f7",
      "100": "#d5c2ea",
      "200": "#bb9ddb",
      "300": "#a179cb",
      "400": "#8755bc",
      "500": "#6e3fab",
      "600": "#5c349e",
      "700": "#4b2981",
      "800": "#3a2064",
      "900": "#281647",
      "950": "#1b0e31",
    },
  },

  styles: {
    global: {
      body: {
        bg: "#ffffff",
      },
    },
  },

  // fonts: {
  //   heading: `'Outfit', sans-serif`,
  //   body: `'Plus Jakarta Sans', sans-serif`,
  // },

  components: {
    Button,
  },
});

 
