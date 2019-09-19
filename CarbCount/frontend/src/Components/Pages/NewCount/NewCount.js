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


class NewCount extends Component {
    // ourJSON = {
    //     'Heirloom oranges':1342, 'Florida Orange':34553, 'Tasty Oranges': 34153
    // }

    ourJSON = [
        {name:'Valencias California Oranges'}, {name:'Florida Oranges'}, {name:'Cara Cara Oranges'}, {name:'Minneola Tangelo Orange'}, {name:'Cara Cara Navel Oranges'}, {name:'Mandarin Oranges'}, {name:'Orange Lemon Drink'}, {name:'Orange Juice'}, {name:'Orange Strawberry Banana Juice'}, {name:'Madarin Orange (Canned or Frozen)'}, {name:'Freshly Squeezed Orange Juice'}
    ]

    constructor() {
        super();
        this.state = {
            stageOfProcess: 0,
            userGlucose: 0,
            userSearch: '', 
            foodList: []
        }
    }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    // displayCurrentStep(step) {
    //     if (this.state.stageOfProcess === 1) {


    //     }
    // }

    handleBackClick = (event) => {
        event.preventDefault();
        console.log('Go back!');

        this.setState({
            stageOfProcess: this.state.stageOfProcess-1
        });
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
            (elem, id) => <Dropdown.Item as="button">{elem.name}</Dropdown.Item>
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
                                <Form.Group controlId="formBasicGlucose">
                                    <Form.Label>Blood Glucose:</Form.Label>
                                    <Form.Control type="number" placeholder="Enter blood glucose (optional)" step='0.001' />
                                    <Form.Text className="text-muted">
                                    Entering your blood glucose reading (mmol/L) will factor into your suggested dose. 
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicSearch">
                                    <Form.Label>Search:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter search" />
                                    <Form.Text className="text-muted">
                                    Source: FatSecret 
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit"  onClick={this.handleForwardClick}>
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
                                    <li>apple <a href='/'>+</a> <a href='/'>-</a></li>
                                    <li>bread <a href='/'>+</a> <a href='/'>-</a></li>
                                    <li>pizza <a href='/'>+</a> <a href='/'>-</a></li>
                                    <li>orange <a href='/'>+</a> <a href='/'>-</a></li>
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
                            <h2>Step 3 - Results:</h2>
                            <p>1 Valencia California Orange</p>
                            <p>Snack</p>
                            <p><FontAwesomeIcon icon={faBreadSlice} /> Carbs: 14.39g, Fibre: 3g </p>
                            <p><FontAwesomeIcon icon={faTint} /> Blood sugar: 5.6mmol/L</p>
                            <p><FontAwesomeIcon icon={faSyringe} /> Suggested dose: 2.3 units</p>
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
