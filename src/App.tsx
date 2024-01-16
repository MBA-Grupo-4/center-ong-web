// import Home from "./pages/App/Home";
// import Auth from "./pages/Auth";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import Ong from "./pages/App/Ong";
import Profile from "./pages/App/Profile";
import Ong from "./pages/App/Ong";
import Auth from "./pages/Auth";

function App() {
  const customTheme = extendTheme({
    colors: {
      custom: {
        blue100: "#3B5BDB",
        blue200: "#364FC7",
        orange100: "#E67700",
        gray100: "#626262",
        purple100: "#862E9C",
        yellow100: "#FAB005",
      },
    },
  });
  return (
    <ChakraProvider theme={customTheme}>
      <Auth />
      {/* <Home /> */}
      {/* <Ong /> */}
      {/* {<Profile />} */}
    </ChakraProvider>
  );
}

export default App;
