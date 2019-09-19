// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './SavedRecipes.css';


class SavedRecipes extends Component {
    JSONresponse = [
        { name: 'Pizza', total_carbs: 26.08, total_fibre: 1.6, ingredients: 'Dinner', total_servings: 7.6, description: 5, total_servings: 7.6, description: 5  }, 
        { name: 'Spaghetti', total_carbs: 26.81, total_fibre: 1.1, ingredients: 'Dinner', total_servings: 11.7, description: 10.79, total_servings: 7.6, description: 5 }, 
        { name: 'Grilled Chicken', total_carbs: 27.4, total_fibre: 1.7, ingredients: 'Breakfast', total_servings: 9.0, description: 3, total_servings: 7.6, description: 5 }, 
        { name: 'Lasagna', total_carbs: 53.02, total_fibre: 2.3, ingredients: 'Lunch', total_servings: 16, description: 8, total_servings: 7.6, description: 5 }, 
        { name: 'Stir-Fry', total_carbs: 19.06, total_fibre: 3.3, ingredients: 'Snack', total_servings: 13, description: 1, total_servings: 7.6, description: 5 }, 
        { name: 'Curry', total_carbs: 15.39, total_fibre: 3.1, ingredients: 'Snack', total_servings: 12, description: 1, total_servings: 7.6, description: 5 }
    ];

    // name
    // total_carbs
    // total_fibre
    // ingredients
    // total_servings
    // description
    // tags
    // image_link
    // diabetic_id

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
