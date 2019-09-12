import React, { Component } from 'react';
import { ProgressDot } from './ProgressDot/ProgressDot';

// Bootstrap-React components

import './ProgressBar.css';

const temporaryState = 1;
const numberOfSteps = 7;
let dotElements = '';

// for (let x = 1; x <= numberOfSteps; x++) {
//     dotElements += <ProgressDot toggle='toggleOn' />
//     console.log(dotElements)
// }

export class ProgressBar extends Component {
    render() {
        return (
            <section class='progressBar'>
                { dotElements }
                <ProgressDot toggle='toggleOn' />
                <ProgressDot toggle='toggleOff' />
                <ProgressDot toggle='toggleOff' />
                <ProgressDot toggle='toggleOff' />
                <ProgressDot toggle='toggleOff' />
            </section>
        );
    }
}
