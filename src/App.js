//import logo from './logo.svg';
import './App.css';
import TwitchPlayer from './components/TwitchPlayer';
import LoginManager from './components/Login';
import Experience from './features/experience/Experience';
import liveUpdater from './features/live/Live'

function App() {
  liveUpdater() // put all this in a game manager
  Experience()
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <LoginManager />
      <TwitchPlayer />
    </div>
    
  );
}

export default App;
