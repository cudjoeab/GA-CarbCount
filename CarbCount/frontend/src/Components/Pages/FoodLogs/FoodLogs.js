// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import { FoodLog } from './FoodLog/FoodLog.js';

// Call stylesheet last:
import './FoodLogs.css';


class FoodLogs extends Component {

    JSONresponse = [
        { date: 1568486543210, food: 'Pizza', carbs: 42, fibre: 15, meal_type: 'Dinner', blood_glucose: 20 },
        { date: 1568486554321, food: 'Hamburger', carbs: 50, fibre: 9, meal_type: 'Dinner', blood_glucose: 15 },
        { date: 1568486565432, food: 'Cereal', carbs: 60, fibre: 16, meal_type: 'Breakfast', blood_glucose: 18 },
        { date: 1568486576543, food: 'Bagel', carbs: 70, fibre: 10, meal_type: 'Lunch', blood_glucose: 16 }
    ];

    componentWillMount = () => {
        console.log('Component will mount!')
    }

    render() {
        return (
            <>
            <h2>Food Logs</h2>
            <p>New Logs</p>
            {/* <FoodLog /> */}
            </>
        );
    }
}

export default FoodLogs;