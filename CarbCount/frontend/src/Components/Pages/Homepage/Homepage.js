import React from 'react';
import { OurCard } from './OurCard/OurCard.js'

// Bootstrap-React components

// Call stylesheet last:
import './Homepage.css';

const Homepage = () => {
    return (
        <>
        <h2>Homepage.js</h2>
        <article class='manyCards'>
            <OurCard cardTarget='new_count' />
            <OurCard cardTarget='new_recipe' />
            <OurCard cardTarget='food_log' />
            <OurCard cardTarget='saved_recipes' />
        </article>
        </>
    );
}

export default Homepage;
