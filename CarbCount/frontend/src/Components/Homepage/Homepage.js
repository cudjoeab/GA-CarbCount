import React, { Component } from 'react';
import { OurCard } from '../OurCard/OurCard';

// Bootstrap-React components

import './Homepage.css';

export class Homepage extends Component {
    render() {
        return (
            <>
            <h2>Homepage</h2>
            <article class='manyCards'>
                <OurCard cardTarget='new_count' />
                <OurCard cardTarget='new_recipe' />
                <OurCard cardTarget='food_log' />
                <OurCard cardTarget='saved_recipes' />
            </article>
            </>
        );
    }
}
