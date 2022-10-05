// import logo from './logo.svg';
import './App.css';

const logo ="https://avatars.githubusercontent.com/u/49443133?"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="name"> 
          Lenin Fernandes
        </p>
        <a
          className="App-link"
          href="https://github.com/Lchris22"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Lchris22
        </a>
      </header>
    </div>
  );
}

export default App;
