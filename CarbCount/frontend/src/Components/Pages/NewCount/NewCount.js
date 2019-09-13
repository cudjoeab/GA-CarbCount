// Vanilla React:
import React, { useState, useEffect } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

// Call stylesheet last:
import './NewCount.css';



const ourJSON = {
    'Heirloom oranges':1342, 'Florida Orange':34553, 'Tasty Oranges': 34153
}



const NewCount = () => {

    const id = 7;

    let [procedureData, setProcedureData] = useState({ title: '...', description: '...', items: '...'});

            //A combination of componentDidMount AND componentDidUpdate.
            // useEffect ( () => {  //This runs once on page load.
            //     console.log(`Fetching id: ${ id }`);

            //     setTimeout( () => {
            //     setProcedureData({
            //         title: 'Hello',
            //         description: 'World!'
            //     })
            //     }, 1000)
            // }, [id]); //This empty array is a list of things to watch. It will rerender for each item in the array.

    useEffect( () => {  //This runs three times when the title & description update.
        console.log('Updating!');

        // procedureData.items = ourJSON.map

        console.log(procedureData.title);
        console.log(procedureData.description);
      }, [procedureData.title, procedureData.description, procedureData.items]);



      const updateItemsList = () => {
        setProcedureData(
          (prevListings) => {
            const newListings = ourJSON.map(
              (l) => ({
                title: l.title,
                description: l.description,
                views: l.views + 1
              })
            );
            console.log(updateItemsList);
            return newListings
          }
        )
      }



    return (
        <>
            <h2>New Count</h2>
            <h6>Step 1:</h6>
            <Form>
                <Form.Group controlId="formBasicGlucose">
                    <Form.Label>Blood Glucose:</Form.Label>
                    <Form.Control type="text" placeholder="Enter glucose (optional)" />
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
                    <Dropdown.Item as="button">{procedureData.title}</Dropdown.Item>
                    <Dropdown.Item as="button">Green Apple</Dropdown.Item>
                    <Dropdown.Item as="button">Yellow Apple</Dropdown.Item>
                </DropdownButton>

                <br/><br/>
                <h6>Step 1B - only appears after search:</h6>
                <Form.Group controlId="formBasicServing">
                    <Form.Label>Serving:</Form.Label>
                    <Form.Control type="text" placeholder="Enter serving" />
                    <Form.Text className="text-muted">
                    (Descriptive text here)
                    </Form.Text>
                </Form.Group>

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
        </>
    );
}

export default NewCount;
