import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';


class App extends React.Component {
  constructor(){
    super();   
  }
  
  render() {
  return (
   <div>
      <Navbar/>
      <Home/>
   </div>
  );
}
}

export default App;
