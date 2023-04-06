import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import HelmetComponent from "./helmet";

const GlobalCss = createGlobalStyle`
body {
  font-family: "Nunito", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
}
`;

function App() {
  return (
    <>
      <HelmetComponent />
      <GlobalCss />
      <Router />
    </>
  );
}

export default App;
