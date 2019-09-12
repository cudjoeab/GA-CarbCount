import React, { Component } from 'react';
import { OurCard } from '../OurCard/OurCard';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

import './Main.css';

export class Main extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Title of page</h1>
        <p>Main content</p>
        <OurCard />
        <OurCard />
        <OurCard />
      </Jumbotron>
    );
  }
}
