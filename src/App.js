import React from 'react';
import {Route,Link} from 'react-router-dom';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
      <h1><Link to ='/'>Noteful</Link></h1>
      </div>
      <main role="main">
      {/* main page is rendered here */}
    <Route exact path = '/' component={Main}>

    </Route>
    </main>
    </div>
    
  );
}

export default App;
