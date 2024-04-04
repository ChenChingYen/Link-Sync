import logo from './assets/main-logo.svg';
import pikachu from './assets/pikachu.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='CenterWrapper'>
        <img id='Logo' src={logo} alt="Link Sync" />
        <img className='Opacity-32' id='Pikachu' src={pikachu} alt="Pikachu" />
        <div className='TextWrapper'>
          <div className='Font-48'>Happy Link Sync!</div>
          <div className='Font-16 Opacity-64'>The Project is Under Development</div>
        </div>
      </div>
    </div>
  );
}

export default App;
