// Vanilla React:
import React from 'react';

// Bootstrap-React components:
import CardDeck from "react-bootstrap/CardDeck";

// Smaller components:
import { OurCard } from './OurCard/OurCard.js';

// Call stylesheet last:
import './Homepage.css';

const Homepage = () => {
    return (
        <>
        <h2>Homepage.js</h2>
        <CardDeck>
            <OurCard cardTarget='new_count' />
            <OurCard cardTarget='new_recipe' />
        </CardDeck>
        <CardDeck>
            <OurCard cardTarget='food_log' />
            <OurCard cardTarget='saved_recipes' />
        </CardDeck>
        </>
    );
}

export default Homepage;
