import React from 'react';
import './App.css';
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './Pages/Details';
import Routing from './Routing';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Details/> */}
      <Routing/>
    </div>
  );
}

export default App;

