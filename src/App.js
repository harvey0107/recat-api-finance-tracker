import React from 'react';
import './App.css';
import GetUsers from "./GetUsers"
import GetOneUser from "./GetOneUser"
import DelUser from "./DelUser"


function App() {
  
  return (
    <div className="App">
      <h1>User API Practice</h1>
      <GetUsers />
      <GetOneUser />
      <DelUser />
    </div>
  );
}

export default App;
