import Congratulation from "./components/Congratulation";
import Level1 from "../src/components/Level1";
import Level2 from "./components/Level2";
import Fly from "./components/Fly";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Congratulation} />
          <Route path="/Level1" exact component={Level1} />
          <Route path="/level2" component={Level2} />
          <Route path="/fly" component={Fly} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
