// // Vanilla React:
// import React, { Component } from './node_modules/react';

// // Bootstrap-React components:
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// // Call stylesheet last:
// import './CountFlow.css';

// export class CountFlow extends Component {
//     this.setState({
//         steps: 1
//     })

//     const Page = () => {
//         if (state == 1) {
//             return (
//                 <Form>
//                     <Form.Group controlId="formBasicIngredient">
//                         <Form.Label>Name:</Form.Label>
//                         <Form.Control type="text" placeholder="Enter ingredient" />
//                         <Form.Text className="text-muted">
//                         (Descriptive text here)
//                         </Form.Text>
//                     </Form.Group>
//                     <Form.Group controlId="formBasicServing">
//                         <Form.Label>Serving:</Form.Label>
//                         <Form.Control type="text" placeholder="Enter serving" />
//                         <Form.Text className="text-muted">
//                         (Descriptive text here)
//                         </Form.Text>
//                     </Form.Group>
//                     <Button variant="primary" type="submit">
//                         Submit
//                     </Button>
//                 </Form>
//         )
//             }
//         else if (state == 2) {
//             return (
// <Form>
//                 <Form.Group controlId="formBasicIngredients">
//                     <Form.Label>Ingredients:</Form.Label>
//                     <Form.Control type="text" placeholder="Enter ingredient" />
//                     <Form.Text className="text-muted">
//                     (Descriptive text here -- Flour)
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId="formBasicAmount">
//                     <Form.Label>Amount:</Form.Label>
//                     <Form.Control type="text" placeholder="Enter amount" />
//                     <Form.Text className="text-muted">
//                     (Descriptive text here)
//                     </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId="formBasicMeasurements">
//                     <Form.Label>Unit of Measurement:</Form.Label>
//                     <Form.Control type="text" placeholder="Enter unit of measurement" />
//                     <Form.Text className="text-muted">
//                     (Descriptive text here)
//                     </Form.Text>
//                 </Form.Group>
//                 <p>(Plus sign)</p>
//                 <ul>
//                     <li>Flour - <a href=''>Remove</a></li> 
//                 </ul>
//                 <Button variant="primary" type="submit">
//                     Back
//                 </Button>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//             )
//     }
//     render () {
//         return Page()
//     }