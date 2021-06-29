import React from 'react';
import './App.css';
import GetUsers from "./GetUsers"
import GetOneUser from "./GetOneUser"


function App() {
  
  return (
    <div className="App">
      <h1>User API Practice</h1>
      <GetUsers />
      <GetOneUser />
    </div>
  );
}

export default App;
