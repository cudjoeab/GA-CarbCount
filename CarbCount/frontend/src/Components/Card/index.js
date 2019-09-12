import React, { Component } from 'react';
import './index.css';

export class Card extends Component {
  render() {
    return (
      <article class='card'>
        <h2>Title of card</h2>
        <p>Main content</p>
      </article>
    );
  }
}
