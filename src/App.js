import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Pages
import Welcome from './components/welcome/Welcome'
import About from './components/about/About'
import Menu from './components/Menu'

function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
