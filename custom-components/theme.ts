import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColormode: "light",
  useSystemColormode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "linear-gradient(to bottom,#00A884 0%, #00A884 13%,#E1E1DE 0%,#E1E1DE  100%)",
        height: "100vh",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
        },
      },
    },
  },
  colors: {
    mainTopBackground: "#00A884 ",
    mainBackground: "#ece5dd",
    chatheader: "#F0F2F5",
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});