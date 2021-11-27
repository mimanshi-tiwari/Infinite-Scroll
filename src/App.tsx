import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Login} from "./components/login/login";
import {Home} from "./components/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-infinite-scroll">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
