import React, { Component } from 'react';
import { Card } from '../Card';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

import './index.css';

export class Main extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Title of page</h1>
        <p>Main content</p>
        <Card />
        <Card />
        <Card />
      </Jumbotron>
    );
  }
}
