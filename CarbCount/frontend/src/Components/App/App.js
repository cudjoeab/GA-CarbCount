import React from 'react';

// import Jumbotron from "react-bootstrap/Jumbotron";

import './App.css';

// Components
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <OurNavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;