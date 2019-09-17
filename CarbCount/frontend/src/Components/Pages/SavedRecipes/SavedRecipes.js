// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './SavedRecipes.css';


class SavedRecipes extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <h1>Saved Recipes</h1>
                <p>See all your Saved Recipes.</p>
            </section>
        );
    }
}

export default SavedRecipes;
