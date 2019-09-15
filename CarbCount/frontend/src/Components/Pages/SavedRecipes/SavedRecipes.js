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
            <>
            <h2>Saved Recipes</h2>
            <p>Saved Recipes</p>
            </>
        );
    }
}

export default SavedRecipes;
