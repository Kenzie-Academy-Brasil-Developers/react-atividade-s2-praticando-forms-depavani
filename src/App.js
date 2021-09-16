import "./App.css";
import { Switch, Route } from "react-router-dom";
import Forms from "./pages/forms";
import Card from "./pages/card";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Forms />
        </Route>
        <Route exact path={"/card"}>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
