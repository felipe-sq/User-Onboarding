import logo from './logo.svg';
import './App.css';
import * as yup from 'yup'
import axios from 'axios'

import Form from './Form'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Form />
    </div>
  );
}

export default App;
