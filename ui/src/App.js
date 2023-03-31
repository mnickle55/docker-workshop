import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ol>
          <li>Michael Blumberg</li>
          <li>Emmanuel Londono</li>
          <li>Tanner Anderson</li>
          <li>Madison Yancey</li>
          <li>Mack Nickle</li>
          <li>New User</li>
        </ol>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
