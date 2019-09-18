// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

// Smaller components:
// none

// Call stylesheet last:
import './NewRecipe.css';


class NewRecipe extends Component {

    constructor() {
        super();
        this.state = {
            stageOfProcess: 0,
        }
    }


    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <h1>New Recipe</h1>
                <p>Add a New Recipe.</p>

                {/* <Carousel activeIndex={this.state.stageOfProcess} controls={false} interval={null} wrap={false} >
                    <Carousel.Item>
                        <Carousel.Caption> */}
                            <h2>Step 1:</h2>

                            <Form>
                                <Form.Group controlId="formBasicRecipe">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter recipe" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicServing">
                                    <Form.Label>Serving:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter serving" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>

                                <br/><br/>
                            
                                <h2>Add ingredient:</h2>
                                <Form.Group controlId="formBasicIngredients">
                                    <Form.Label>Ingredients:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter ingredient" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here -- Flour)
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicQuantity">
                                    <Form.Label>Quantity:</Form.Label>
                                    <Form.Control type="number" placeholder="Enter quantity" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicMeasurements">
                                    <Form.Label>Unit of Measurement:</Form.Label>
                                    <Form.Control type="text" placeholder="Enter unit of measurement" />
                                    <Form.Text className="text-muted">
                                    (Descriptive text here)
                                    </Form.Text>
                                    <Button variant="secondary" type="submit">
                                        Add Ingredient
                                    </Button>
                                </Form.Group>

                                <h2>Your Recipe's Ingredients:</h2>
                                <ul>
                                    <li>Flour - <a href=''>Remove</a></li> 
                                    <li>Flour - <a href=''>Remove</a></li> 
                                </ul>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        {/* </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
            </section>
        );
    }
}

export default NewRecipe;
