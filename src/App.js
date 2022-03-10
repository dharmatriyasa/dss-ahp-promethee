import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="">
      {/* <header className="App-header"> */}
        <Navbar />
        <Hero />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
