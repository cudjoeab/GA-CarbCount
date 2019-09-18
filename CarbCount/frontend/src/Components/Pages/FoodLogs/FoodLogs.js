// Vanilla React:
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSyringe, faTint } from '@fortawesome/fontawesome-free-solid';
import { faBreadSlice, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

// Smaller components:
// import FoodLog from './FoodLog/FoodLog.js';

// Call stylesheet last:
import './FoodLogs.css';


class FoodLogs extends Component {
    JSONresponse = [
        { date: 'September 7', food: 'Pizza', carbs: 26.08, fibre: 1.6, meal_type: 'Dinner', blood_glucose: 7.6, insulin_dose: 5  }, 
        { date: 'September 8', food: 'Hamburger', carbs: 26.81, fibre: 1.1, meal_type: 'Dinner', blood_glucose: 11.7, insulin_dose: 11 }, 
        { date: 'September 8', food: 'Cereal', carbs: 27.4, fibre: 1.7, meal_type: 'Breakfast', blood_glucose: 9.0, insulin_dose: 9 }, 
        { date: 'September 8', food: 'Bagel', carbs: 53.02, fibre: 2.3, meal_type: 'Lunch', blood_glucose: 16.2, insulin_dose: 18 }, 
        { date: 'September 9', food: 'Apple', carbs: 19.06, fibre: 3.3, meal_type: 'Snack', blood_glucose: 4.0, insulin_dose: 3 }, 
        { date: 'September 10', food: 'Orange', carbs: 15.39, fibre: 3.1, meal_type: 'Snack', blood_glucose: 7.0, insulin_dose: 2.5 }
    ];

    state = {
        meals: this.JSONresponse,
        show: false,
        currItem: ''
    }

    handleShow = (event) => {
        event.preventDefault();

        // console.log(event.target)
        // console.log(event.key)
        // console.log(event.target.key)
        // console.log(event.id)
        console.log(this.JSONresponse[event.target.id])

        this.setState({
            show: true,
            currItem: this.JSONresponse[event.target.id]
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
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
            // (log, id) => <p key={id}><Link to={`/food_logs/${id}`} key={`food_logs/${id}`}>{log.date}</Link> - {log.food} - {log.meal_type}</p>

            (log, id) => <p key={id}><a href={id} onClick={this.handleShow} alt={`A summary of ${log.date} ${log.food}.`} id={id}>{log.date}</a> - {log.meal_type}</p>
        )

        return (
            <section className='borderBox'>
                <h1>Food Log</h1>
                <p>See your past saved meals </p>

                {mealElements}

                {/* This only appears when user clicks on one of the links. */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.currItem.date}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>{this.state.currItem.meal_type}:</li>
                            <li><FontAwesomeIcon icon={faAppleAlt} />{this.state.currItem.food} </li>
                            <li><FontAwesomeIcon icon={faBreadSlice} />: {this.state.currItem.carbs} g of Carb, {this.state.currItem.fibre} g of Fibre  </li>
                            <li><FontAwesomeIcon icon={faTint} />: {this.state.currItem.blood_glucose} mmol/L </li>
                            <li><FontAwesomeIcon icon={faSyringe} />: {this.state.currItem.insulin_dose} units </li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default FoodLogs;
