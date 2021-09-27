import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PlanetIndex from "./components/PlanetIndex.js";
import PlanetPage from "./components/PlanetPage.js";
import Menu from "./components/Menu";


const NoMatch = () => {
  return(
    <div className={"no-planet-404"}>
      <h1>This planet is out of the solar system!</h1>
    </div>
  )
};
function App() {
  return (
    <Router>
      <div className="app-container">
          
          <Menu />
          <Switch>
            <Route exact path={"/"} component={PlanetIndex} />
            <Route path={"/:planet"} component={PlanetPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
