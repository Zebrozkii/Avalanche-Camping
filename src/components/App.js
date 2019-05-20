import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import LocationAndCampGrounds from './Location&CampGrounds';
import SignIn from './SignIn';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <LocationAndCampGrounds/>
      <SignIn/>
    </div>
  );
}

export default App;
