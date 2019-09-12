import React, { Component } from 'react';
import { OurCard } from '../OurCard/OurCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

import './Main.css';

export class Main extends Component {
    render() {
        return (
        <Jumbotron>
            <h2>Title of page</h2>
            <p>Main content</p>
            <ProgressBar />
            <article className='manyCards'>
                <OurCard />
                <OurCard />
                <OurCard />
            </article>
        </Jumbotron>
        );
    }
}
