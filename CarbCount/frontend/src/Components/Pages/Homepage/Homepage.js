// Vanilla React:
import React from 'react';

// Bootstrap-React components:
// none

// Smaller components:
import { OurCard } from './OurCard/OurCard.js';

// Call stylesheet last:
import './Homepage.css';

const Homepage = () => {
    return (
        <>
        <h2>Homepage.js</h2>
        <article className='manyCards'>
            <OurCard cardTarget='new_count' />
            <OurCard cardTarget='new_recipe' />
            <OurCard cardTarget='food_log' />
            <OurCard cardTarget='saved_recipes' />
        </article>
        </>
    );
}

export default Homepage;
