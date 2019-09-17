// Vanilla React:
// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
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

    render() {
        const id = 7;

        return (
            <section className='borderBox'>
                <h2>New Count</h2>


                <h6>Step 1:</h6>
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



                    <br/><br/>
                    <h6>Step 1B - only appears after search:</h6>
                    <DropdownButton variant="info" id="dropdown-item-button" title={'Please choose an Item'}>
                        {/* <Dropdown.Item as="button">{procedureData.title}</Dropdown.Item> */}
                        <Dropdown.Item as="button">Green Apple</Dropdown.Item>
                        <Dropdown.Item as="button">Yellow Apple</Dropdown.Item>
                    </DropdownButton>



                    <br/><br/>
                    <h6>Step 1C - only appears clicking on item:</h6>
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
                    </ul>

                    <Button variant="secondary" type="submit">
                        Back
                    </Button>

                    <Button variant="primary" type="submit">
                        Calculate
                    </Button>
                </Form>



                <br/><br/><br/>
                <h6>Step 2 - Show results:</h6>
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
                </Form>
            </section>
        );
    }
}

export default NewCount;
