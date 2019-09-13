// Vanilla React:
import React from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";

// Smaller components:
// none

// Call stylesheet last:
import './NewRecipe.css';

const NewRecipe = () => {
    return (
        <>
            <h3>New Recipe</h3>
            <h6>Step 1:</h6>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br/><br/>
            
            <h6>Step 2:</h6>
            <Form>
                <Form.Group controlId="formBasicIngredients">
                    <Form.Label>Ingredients:</Form.Label>
                    <Form.Control type="text" placeholder="Enter ingredient" />
                    <Form.Text className="text-muted">
                    (Descriptive text here -- Flour)
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicQuantity">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="text" placeholder="Enter quantity" />
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
                </Form.Group>
                <p><a href=''>(Plus sign)</a></p>

                <ul>
                    <li>Flour - <a href=''>Remove</a></li> 
                    <li>Flour - <a href=''>Remove</a></li> 
                </ul>

                <Button variant="primary" type="submit">
                    Back
                </Button>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default NewRecipe;
