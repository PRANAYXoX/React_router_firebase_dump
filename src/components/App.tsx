import "./App.css";
import Form from "./form";
import Repository from "./repository";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Form />
        </Route>
        <Route exact path={"/repository"}>
          <Repository />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
