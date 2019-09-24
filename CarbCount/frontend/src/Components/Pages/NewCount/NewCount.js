// Vanilla React:
// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSyringe, faTint } from '@fortawesome/fontawesome-free-solid';
import { faBreadSlice, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

// Smaller components:
// none

// Call stylesheet last:
import './NewCount.css';

// import axios from 'axios'
import axios, * as others from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class NewCount extends Component {
    // ourJSON = {
    //     'Heirloom oranges':1342, 'Florida Orange':34553, 'Tasty Oranges': 34153
    // }

    ourJSON = [
        {name:'Valencias California Oranges'}, {name:'Florida Oranges'}, {name:'Cara Cara Oranges'}, {name:'Minneola Tangelo Orange'}, {name:'Cara Cara Navel Oranges'}, {name:'Mandarin Oranges'}, {name:'Orange Lemon Drink'}, {name:'Orange Juice'}, {name:'Orange Strawberry Banana Juice'}, {name:'Madarin Orange (Canned or Frozen)'}, {name:'Freshly Squeezed Orange Juice'}
    ]

    // constructor() {
    //     super();
        state = {
            stageOfProcess: 0,
            bloodGlucose: 0,
            foodSearch: 'test', 
            foodList: {},
            summary: {}
        }
    // }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    // displayCurrentStep(step) {
    //     if (this.state.stageOfProcess === 1) {


    //     }
    // }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    handleBackClick = (event) => {
        event.preventDefault();
        console.log('Go back!');

        this.setState({
            stageOfProcess: this.state.stageOfProcess-1
        });
    }

    handleStepOne = (event) => {
        event.preventDefault();

        const query = { query: this.state.foodSearch }

        if (this.state.foodSearch === '') {
            console.log('Invalid search ; user input is no good.')
        } else {
            console.log('Valid search. Go forwards!');

            axios.post("/api/food_search/", query)
            .then((response)=> {
                console.log('Then:', { query: this.state.foodSearch })

            })
            .catch((error)=> {
                console.log('Error:', error)
            })




            this.setState({
                // stageOfProcess: this.state.stageOfProcess+1
            });
        }


    }

    handleForwardClick = (event) => {
        event.preventDefault();
        console.log('Go forwards!');

        this.setState({
            stageOfProcess: this.state.stageOfProcess+1
        });
    }

    render() {
        const jsonElements = this.ourJSON.map(
            (elem, id) => <Dropdown.Item>{elem.name}</Dropdown.Item>
        )
        return (
            <section className='borderBox'>
                <h1>New Carb Count</h1>
                <p>Calculate the amount of carb for your next meal </p>

                <Carousel activeIndex={this.state.stageOfProcess} controls={false} interval={null} wrap={false} >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Step 1:</h2>
                            <Form>
                                <Form.Group controlId="bloodGlucose">
                                    <Form.Label>Blood Glucose:</Form.Label>
                                    <Form.Control type="number" 
                                    name="bloodGlucose"
                                    value={this.state.bloodGlucose}
                                    placeholder="Enter blood glucose (optional)" step='0.001'
                                    onChange = {this.onChange}
                                    />
                                    <Form.Text className="text-muted">
                                    Entering your blood glucose reading (mmol/L) will factor into your suggested dose. 
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="foodSearch">
                                    <Form.Label>Search:</Form.Label>
                                    <Form.Control type="text"
                                    name="foodSearch" 
                                    value={this.state.foodSearch}
                                    placeholder="Enter search" 
                                    onChange = {this.onChange}
                            required />
                                    <Form.Text className="text-muted">
                                    Source: FatSecret 
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit"  onClick={this.handleStepOne}>
                                    Search for Food
                                </Button>
                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Step 2:</h2>
                            <Form>    
                                <DropdownButton variant="info" id="dropdown-item-button" title={'Please choose an Item'}>
                                    {/* <Dropdown.Item as="button">{procedureData.title}</Dropdown.Item> */}
                                    {jsonElements}
                                </DropdownButton>
                                <Form.Group controlId="formBasicQuantity">
                                    <Form.Label>Quantity:</Form.Label>
                                    <Form.Control type="number" placeholder="Enter quantity" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>

                                <h3>List:</h3>
                                <ul>
                                    <li>Valencia California Orange <a href='/'>+</a> <a href='/'>-</a></li>
                                    <li>a&w restaurant spicy habanero chicken burger <a href='/'>+</a> <a href='/'>-</a></li>
                                </ul>

                                <Button variant="secondary" type="submit" onClick={this.handleBackClick}>
                                    Back
                                </Button>

                                <Button variant="primary" type="submit" onClick={this.handleForwardClick}>
                                    Calculate
                                </Button>
                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>SUMMARY:</h2>
                            {/* <p>SUMMARY</p> */}
                            <p>1 Valencia California Orange</p>
                            <p>1 A&W restaurant spicy habanero chicken burger</p>
                            <p><strong>Lunch</strong></p>
                            <p><FontAwesomeIcon icon={faBreadSlice} /> Carbs: 61.29g, Fibre: 5.1g </p>
                            <p><FontAwesomeIcon icon={faTint} /> Blood sugar: 5.6mmol/L</p>
                            <p><FontAwesomeIcon icon={faSyringe} /> Suggested dose: 12.3 units</p>
                            <Form>    
                                <Button variant="secondary" type="submit" onClick={this.handleBackClick}>
                                    Back
                                </Button>
                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>




                

                <Form>
                    
                </Form>



                {/* <br/><br/><br/>
                <h2>Step 3 - Show results:</h2>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td>Total Carbs:</td>
                            <td>18 g</td>
                        </tr>
                        <tr>
                            <td>Dose:</td>
                            <td>3 units of Fiasp</td>
                        </tr>
                    </tbody>
                </Table>
                <Form>
                    <Button variant="secondary" type="submit">
                        Back
                    </Button>

                    <Button variant="primary" type="submit">
                        Enter Log
                    </Button>
                </Form> */}
            </section>
        );
    }
}

export default NewCount;
