
import './App.css';
import Main1 from './main';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Admin from './login';


function App() {
  return (
    <Router>
    <div className="App" >
      <Route path ="/" exact component={Admin}></Route>
      <Route path ="/page" exact component={Main1}></Route>
        
      </div>
      </Router>
  );
}

export default App;
