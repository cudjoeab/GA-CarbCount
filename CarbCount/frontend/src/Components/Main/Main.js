import React, { Component } from 'react';
import { OurCard } from '../OurCard/OurCard';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

import './Main.css';

export class Main extends Component {
    render() {
        return (
        <Jumbotron>
            <h2>Title of page</h2>
            <p>Main content</p>
            <article class='manyCards'>
                <OurCard />
                <OurCard />
                <OurCard />
            </article>
        </Jumbotron>
        );
    }
}
