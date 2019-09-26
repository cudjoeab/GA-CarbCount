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


import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class NewCount extends Component {
    // ourJSON = {
    //     'Heirloom oranges':1342, 'Florida Orange':34553, 'Tasty Oranges': 34153
    // }

    // ourJSON = [
    //     {name:'Valencias California Oranges'}, {name:'Florida Oranges'}, {name:'Cara Cara Oranges'}, {name:'Minneola Tangelo Orange'}, {name:'Cara Cara Navel Oranges'}, {name:'Mandarin Oranges'}, {name:'Orange Lemon Drink'}, {name:'Orange Juice'}, {name:'Orange Strawberry Banana Juice'}, {name:'Madarin Orange (Canned or Frozen)'}, {name:'Freshly Squeezed Orange Juice'}
    // ]
  

    

    // constructor() {
    //     super();
        state = {
            stageOfProcess: 0,  // Which carousel the page is on.
            bloodGlucose: 0,  //User's blood glucose level. Optional.
            queryItem: 'banana',  //What the user is searching for.
            queryResults: [],  //The result of the API search.
            selectedItems: [],  //Which items the user has selected.

            extractedData: [], //Need to run Regex on data.
        }
    // }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.

        var string = [
        {
            "food_description": "Per 100g - Calories: 89kcal | Fat: 0.33g | Carbs: 22.84g | Protein: 1.09g",
            "food_id": "5388",
            "food_name": "Banana",
            "food_type": "Generic",
            "food_url": "https://www.fatsecret.com/calories-nutrition/generic/banana-raw"
          }
        ]


        // var string = "border-radius:10px 20px 30px 40px";
        var numbers = string[0]['food_description'].match(/[+-]?\d+(?:\.\d+)?/g);
        console.log('Comp', numbers)

        
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

        const query = { query: this.state.queryItem }

        if (this.state.queryItem === '') {
            console.log('Invalid search ; user input is no good.')
        } else {
            console.log('Valid search. Go forwards!');

            // axios.post("/api/food_search/", query)
            // .then((response)=> {
            //     console.log('Then:', { query: this.state.queryItem })

            // })
            // .catch((error)=> {
            //     console.log('Error:', error)
            // })




            this.setState({
                stageOfProcess: this.state.stageOfProcess+1
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
    


    handleSearchClick = (event) => {

        const self = this

        event.preventDefault();
        let JSONquery = []
        let userQuery = document.querySelector('#queryItem').value;



        axios.get(`/api/food_search/?q=${userQuery}`)
        .then(function (response) {
            console.log(response.data);
            JSONquery= response.data; 



            // let ourForEachList = []

            // JSONquery.forEach(function(element, index) {
            //     // console.log(index);
            //     console.log(element);
            //     // extractedData[index].append(element)
            //     // ourForEachList.push(element.food_name)



            //     var numbers = element['food_description'].match(/[+-]?\d+(?:\.\d+)?/g);
            //     console.log(numbers)


            //     ourForEachList.push({'food_name': element.food_name, 'food_id':element.food_id})
            //   }); 


            //   console.log(ourForEachList)



            self.setState({
                queryResults: JSONquery
            //     queryResults: ourForEachList
            })

            // alert(self.state.queryResults)

        })
        .catch(function (error) {
            console.log(error);
        });
        // console.log(JSONquery)
        // console.log(JSONquery.food_id)
        // console.log(JSONquery.food_name)


        // console.log(JSONquery)

        // this.setState({
        //     queryResults: JSONquery
        // });

        console.log(this.state.queryResults)

        // console.log(this.state.queryResults)

        this.handleForwardClick(event); 
    }



    handleAddFood = (event) => {
        event.preventDefault();
        
        // event.target.id is the id of the dropdown link.
        // It corresponds to the related data in this.state.queryResults.
        // ie: The first dropdown item can be accessed by this.state.queryResults[0]
        
        console.log(event.target.id)
        console.log(this.state.queryResults[event.target.id])






    }



    render() {
        let jsonElements;

        if (this.state.queryResults) {
            jsonElements = this.state.queryResults.map(
                // (elem, id) => <Dropdown.Item id={elem.food_id} key={elem.food_id} onClick={this.handleAddFood}>{elem.food_name}</Dropdown.Item>
                (elem, id) => <Dropdown.Item id={id} key={elem.food_id} onClick={this.handleAddFood}>{elem.food_name}</Dropdown.Item>
            )
        }

        
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
                                    Entering your blood glucose reading (mmol/L) will factor into your suggested dose. (Optional.)
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="queryItem">
                                    <Form.Label>Search:</Form.Label>
                                    <Form.Control type="text"
                                    name="queryItem" 
                                    value={this.state.queryItem}
                                    placeholder="Enter search" 
                                    onChange = {this.onChange}
                            required />
                                    <Form.Text className="text-muted">
                                    Source: FatSecret 
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={this.handleSearchClick}>



                                    Search for Food
                                </Button>
                            </Form>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <h2>Step 2:</h2>
                            <Form>    
                                <DropdownButton class='overflow-auto' data-boundary="viewport" variant="info" id="dropdown-item-button" title={'Please choose an Item'}>
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
