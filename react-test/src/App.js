import logo from './logo.svg';
import './App.css';

import CoverflowEffect from './components/CoverflowEffect';

function App() {
  return (
    <div className="App">
      <CoverflowEffect>
        <div></div>
      </CoverflowEffect>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
    </div>
  );
}

export default App;
