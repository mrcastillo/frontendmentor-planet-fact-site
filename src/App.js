import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PlanetIndex from "./components/PlanetIndex.js";
import PlanetPage from "./components/PlanetPage.js";
import Menu from "./components/Menu";


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
