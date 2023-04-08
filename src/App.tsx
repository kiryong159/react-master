import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import HelmetComponent from "./helmet";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
