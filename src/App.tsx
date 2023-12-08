import Auth from "./pages/Auth";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App() {
  const customTheme = extendTheme({
    colors: {
      custom: {
        blue100: "#3B5BDB",
        blue200: "#364FC7",
        orange100: "#E67700",
        gray100: "#626262",
      },
    },
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Auth />
    </ChakraProvider>
  );
}

export default App;
