// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './FoodLog.css';


class FoodLog extends Component {
    JSONresponse = [
        { date: 1568486543210, food: 'Pizza', carbs: 42, fibre: 15, meal_type: 'Dinner', blood_glucose: 20 },
        { date: 1568486554321, food: 'Hamburger', carbs: 50, fibre: 9, meal_type: 'Dinner', blood_glucose: 15 },
        { date: 1568486565432, food: 'Cereal', carbs: 60, fibre: 16, meal_type: 'Breakfast', blood_glucose: 18 },
        { date: 1568486576543, food: 'Bagel', carbs: 70, fibre: 10, meal_type: 'Lunch', blood_glucose: 16 },
        { date: 1568486587654, food: 'Apple', carbs: 30, fibre: 12, meal_type: 'Snack', blood_glucose: 13 },
        { date: 1568486598765, food: 'Orange', carbs: 40, fibre: 14, meal_type: 'Snack', blood_glucose: 12 }
    ];

    state = {
        meal: this.JSONresponse
    }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <h4>September 8th 2019</h4>
                <p>A single food log.</p>
            </section>
        );
    }
}

export default FoodLog;
