import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#004b87", // Updated to match Financial Times background color
    800: "#005a9c", // Updated to match Financial Times background color
    700: "#0072ce", // Updated to match Financial Times background color
  },
  background: "#f3f2f1" // Adding a new background color
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
