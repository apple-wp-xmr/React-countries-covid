import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';

// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
