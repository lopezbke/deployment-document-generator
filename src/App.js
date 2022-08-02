import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Deploymentform from './components/Deploymentform/Deploymentform';
import Userinputform from './components/Userinputform/Userinputform';
import 'bulma/css/bulma.min.css';
function App() {
  return (
    <div className="App container is-max-desktop">
      <br></br>
      <Userinputform></Userinputform>   
        <Deploymentform></Deploymentform>
    </div>
  );
}

export default App;
