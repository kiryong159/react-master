import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterprops {
  toggleMode: () => void;
  isDark: boolean;
}

function Router({ toggleMode, isDark }: IRouterprops) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleMode={toggleMode} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
