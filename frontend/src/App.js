import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import About from "./components/About";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Status from "./components/Status";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/navbar" component={Nav} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
