import logo from './logo.svg';
import ben from'./png/ben1.PNG';
import './App.css';
import UserTable from './userTable/userTable'

// https://randomuser.me/api/?results=20


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>HackerMan 420</code>.
        </p>
        <a
          className="App-link"
          href="https://bestbenchbuddy.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About NickieB
        </a>
      </header>
      <header className='Body-header'>
        <UserTable >
          
        </UserTable>
      </header>
       
    </div>
  );
}

export default App;
