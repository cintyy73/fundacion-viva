import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";

export const theme = extendTheme({
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
