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
        { name: 'Pizza', total_carbs: 26.08, total_fibre: 1.6, meal_type: 'Dinner', blood_glucose: 7.6, insulin_dose: 5  }, 
        { name: 'Spaghetti', total_carbs: 26.81, total_fibre: 1.1, meal_type: 'Dinner', blood_glucose: 11.7, insulin_dose: 10.79 }, 
        { name: 'Grilled Chicken', total_carbs: 27.4, total_fibre: 1.7, meal_type: 'Breakfast', blood_glucose: 9.0, insulin_dose: 3 }, 
        { name: 'Lasagna', total_carbs: 53.02, total_fibre: 2.3, meal_type: 'Lunch', blood_glucose: 16, insulin_dose: 8 }, 
        { name: 'Stir-Fry', total_carbs: 19.06, total_fibre: 3.3, meal_type: 'Snack', blood_glucose: 13, insulin_dose: 1 }, 
        { name: 'Curry', total_carbs: 15.39, total_fibre: 3.1, meal_type: 'Snack', blood_glucose: 12, insulin_dose: 1 }
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
