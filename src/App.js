import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Pages
import Welcome from './components/welcome/Welcome'
import Challenges from './components/challenges/Challenges'
import NotFound from './components/notFound/NotFound'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
//import Menu from './components/Menu'
//import styles from "./components/commonStyles/main.module.scss"

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/challenges" component={Challenges} />
          <Route path="/experience" component={Experience} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/welcome" component={Welcome} />
          <Route exact path="/" component={Welcome} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
