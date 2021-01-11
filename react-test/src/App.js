import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import CoverflowEffect from './components/CoverflowEffect';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            path="/swiper"
            component = {CoverflowEffect}>
          </Route>
        </Switch>
      </Router>
      {/* <CoverflowEffect>
        <div></div>
      </CoverflowEffect> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
    </div>
  );
}

export default App;
