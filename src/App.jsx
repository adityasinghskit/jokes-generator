// App.js

import Joke from "./components/joke/Joke";
import './App.css';
function App() {
    return (
        <div className="App">
          <div>
          <h1>Joke Generator Using React and Joke API</h1>
          <Joke/>
          </div>
        </div>
    );
}

export default App;