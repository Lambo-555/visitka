import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Pages
import Welcome from './components/welcome/Welcome'
import About from './components/about/About'
import Menu from './components/Menu'
import styles from "./components/commonStyles/main.module.scss"

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
