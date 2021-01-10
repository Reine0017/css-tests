import logo from './logo.svg';
import './App.css';
import Swiper from 'react-id-swiper'
import 'swiper/swiper-bundle.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Swiper>
          <div>
            Slide 1
          </div>
          <div>
            Slide 2
          </div>
          <div>
            Slide 3
          </div>
          <div>
            Slide 4
          </div>
          <div>
            Slide 5
          </div>
        </Swiper>
      </header>
    </div>
  );
}

export default App;
