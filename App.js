import './App.css';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <> 
    <Switch>
    <Route path='/Signup' component={Signup}/>
     <Route path='/Login' component={Login}/>
     </Switch>
    </>
    </Router>
  );
}

export default App;
