import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import HelmetComponent from "./helmet";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useState } from "react";
const GlobalCss = createGlobalStyle`
body {
  font-family: "Nunito", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
a {
  text-decoration-line: none;
  color:inherit;
}
* {
  box-sizing: border-box;
}

`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => setIsDark((prev) => !prev);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <HelmetComponent />
        <GlobalCss />
        <Router isDark={isDark} toggleMode={toggleMode} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
