// Vanilla React:
// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

// Smaller components:
// none

// Call stylesheet last:
import './NewCount.css';


class NewCount extends Component {
    ourJSON = {
        'Heirloom oranges':1342, 'Florida Orange':34553, 'Tasty Oranges': 34153
    }

    constructor() {
        super();
        this.state = {
            stageOfProcess: 1,
            userGlucose: 0,
            userSearch: '', 
            foodList: []
        }
    }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    displayCurrentStep(step) {
        if (this.state.stageOfProcess === 1) {


        }
    }

    render() {
        return (
            <section className='borderBox'>
                <h1>New Count</h1>
                <p>Add a New Count to your Log.</p>

                {/* <>
                <div class="carousel slide"><ol class="carousel-indicators"><li class="active"></li> <li></li> <li></li> </ol><div class="carousel-inner"><div class="carousel-item active carousel-item"><div class="carousel-caption"><h2>Step 1:</h2><form class=""><div class="form-group"><label class="form-label" for="formBasicGlucose">Blood Glucose:</label><input placeholder="Enter glucose (optional)" type="number" id="formBasicGlucose" class="form-control" />><small class="text-muted form-text">(Descriptive text here)</small></div><div class="form-group"><label class="form-label" for="formBasicSearch">Search:</label><input placeholder="Enter search" type="text" id="formBasicSearch" class="form-control" />><small class="text-muted form-text">(Descriptive text here)</small></div><button type="submit" class="btn btn-primary">Search for Food</button></form></div></div><div class="carousel-item carousel-item"><div class="carousel-caption"><h2>Step 2 - only appears after search:</h2><form class=""><div class="dropdown"><button aria-haspopup="true" aria-expanded="false" id="dropdown-item-button" type="button" class="dropdown-toggle btn btn-info">Please choose an Item</button></div><h2>Step 2b - only appears clicking on item:</h2><div class="form-group"><label class="form-label" for="formBasicQuantity">Quantity:</label><input placeholder="Enter quantity" type="text" id="formBasicQuantity" class="form-control" />><small class="text-muted form-text">(Descriptive text here)</small></div><h3>List:</h3><ul><li>apple <a href="">(minus sign)</a></li><li>bread <a href="">(minus sign)</a></li><li>bread <a href="">(minus sign)</a></li><li>bread <a href="">(minus sign)</a></li></ul><button type="submit" class="btn btn-secondary">Back</button><button type="submit" class="btn btn-primary">Calculate</button></form></div></div><div class="carousel-item carousel-item"><div class="carousel-caption"><h3>Third slide label</h3><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div></div></div></div>
                </> */}

                <Carousel controls={false} interval={null} wrap={false}>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Step 1:</h2>
                            <Form>
                                <Form.Group controlId="formBasicGlucose">
                                    <Form.Label>Blood Glucose:</Form.Label>
                                    <Form.Control type="number" placeholder="Enter glucose (optional)" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicSearch">
                                    <Form.Label>Search:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter search" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Search for Food
                                </Button>
                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Step 2 - only appears after search:</h2>
                            <Form>    
                                <DropdownButton variant="info" id="dropdown-item-button" title={'Please choose an Item'}>
                                    {/* <Dropdown.Item as="button">{procedureData.title}</Dropdown.Item> */}
                                    <Dropdown.Item as="button">Green Apple</Dropdown.Item>
                                    <Dropdown.Item as="button">Yellow Apple</Dropdown.Item>
                                </DropdownButton>
                                <h2>Step 2b - only appears clicking on item:</h2>
                                <Form.Group controlId="formBasicQuantity">
                                    <Form.Label>Quantity:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter quantity" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>

                                <h3>List:</h3>
                                <ul>
                                    <li>apple <a href=''>(minus sign)</a></li>
                                    <li>bread <a href=''>(minus sign)</a></li>
                                    <li>bread <a href=''>(minus sign)</a></li>
                                    <li>bread <a href=''>(minus sign)</a></li>
                                </ul>

                                <Button variant="secondary" type="submit">
                                    Back
                                </Button>

                                <Button variant="primary" type="submit">
                                    Calculate
                                </Button>

                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
