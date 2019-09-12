import React, { Component } from 'react';
import { Card } from '../Card';
import './index.css';

export class Main extends Component {
  render() {
    return (
      <main>
        <h1>Title of page</h1>
        <p>Main content</p>
        <Card />
        <Card />
        <Card />
      </main>
    );
  }
}
