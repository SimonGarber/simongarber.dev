import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter.js'
import NavBar from './Components/NavBar/NavBar.js'
function App() {
  return (
    <div style={{
      textAlign:'center',
      position:'relative',
      width:'100%',
      top:'0'
      
    }}>
      
      <NavBar />
      
    <Counter />
    </div>
  );
}

export default App;
