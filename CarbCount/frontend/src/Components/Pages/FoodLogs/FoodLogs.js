// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import FoodLog from './FoodLog/FoodLog.js';

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faTint } from '@fortawesome/fontawesome-free-solid';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

// Call stylesheet last:
import './FoodLogs.css';


class FoodLogs extends Component {
    JSONresponse = [
        { date: 'September 7', food: 'Pizza' }, { date: 'September 8', food: 'Hamburger' }, { date: 'September 8', food: 'Cereal' }, { date: 'September 8', food: 'Bagel' }, { date: 'September 9', food: 'Apple' }, { date: 'September 10', food: 'Orange' }
    ];

    state = {
        // logs: this.JSONresponse
        meals: this.JSONresponse
    }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        // const logElements = this.state.logs.map(
        //     (log, id) => <p>{log.date} - {log.food} - {log.carbs} carbs - {log.fibre} fibre - {log.meal_type} - {log.blood_glucose} blood glucose</p>
        // )

        const mealElements = this.state.meals.map(
            (log, id) => <p key={id}>{log.date} - {log.food} - <Link to={`/food_logs/${id}`} key={`food_logs/${id}`}>More Details</Link></p>
        )

        return (
            <article>
                <h2>Food Logs</h2>
                <FontAwesomeIcon icon={faAppleAlt} />
                <FontAwesomeIcon icon={faSyringe} />
                <FontAwesomeIcon icon={faTint} />
                {/* {logElements} */}
                {mealElements}
                {/* <FoodLog /> */}
            </article>
        );
    }
}

export default FoodLogs;
