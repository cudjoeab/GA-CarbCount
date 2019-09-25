// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";

// Smaller components:
import OurCard from './OurCard/OurCard.js';

// Call stylesheet last:
import './Homepage.css';


class Homepage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            successMessage: ''
        };
      }

    cardDetails = [
        { title: 'New Count', text: 'Add a New Count to your Log.', link: 'new_count' }, 
        { title: 'New Recipe', text: 'Add a New Recipe to your list.', link: 'new_recipe' }, 
        { title: 'Food Log', text: 'See your Food Log.', link: 'food_logs' }, 
        { title: 'Saved Recipes', text: 'See all your Saved Recipes.', link: 'saved_recipes' }
    ];

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        const cardElements = this.cardDetails.map(
            (card, id) => <OurCard cardTitle={card.title} cardText={card.text} cardLink={card.link} key={id} />
        )

        // if (localStorage.getItem('user')) {
        //     var getUser = JSON.parse(localStorage.getItem('userId'));
        // } else {
        //     getUser = '';
        // }
        

        return (
            <section className='borderBox'>
                <h1>Enter a New Meal or Review Past Meals</h1>
                
                
                {/* <p>UserId saved: {getUser.userId}</p>
                <p>UserName saved: {getUser.userName}</p> */}
                
                
                {/* <CardDeck>
                    <OurCard cardTarget='new_count' />
                    <OurCard cardTarget='new_recipe' />
                </CardDeck>
                <CardDeck>
                    <OurCard cardTarget='food_log' />
                    <OurCard cardTarget='saved_recipes' />
                </CardDeck> */}

                {/* <CardColumns>
                    {cardElements} */}
                    {/* <OurCard cardTarget='saved_recipes' />
                    <OurCard cardTarget='saved_recipes' />
                    <OurCard cardTarget='saved_recipes' />
                    <OurCard cardTarget='saved_recipes' /> */}
                
                    {/* <Card>
                        <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card> */}
               
                {/* </CardColumns> */}


                <div class="card-columns">
                    <div class="card">
                        
                            <div class="card-header"><a class="home-page-links" href="/new_count">New Count</a></div>
                        
                        <div class="card-body">
                            <p class="card-text">Add a New Count to your Log.<br/></p>
                        </div>
                    </div>
                    <div class="card bg-light text-white">
                        
                        <div class="card-header"><a class="home-page-links" href="/new_recipe">New Recipe</a></div>
                        <div class="card-body"><p class="card-text">Add a New Recipe to your list.<br/></p></div>
                        </div>
                        <div class="card bg-light text-white">
                            <div class="card-header"><a class="home-page-links" href="/food_logs">Food Log</a></div>
                            <div class="card-body"><p class="card-text">See your Food Log.<br/></p></div></div>
                            <div class="card bg-light text-white">
                                <div class="card-header"><a class="home-page-links" href="/saved_recipes">Saved Recipes</a></div>
                        <div class="card-body"><p class="card-text">See all your Saved Recipes.<br/>
                        </p>
                        </div>
                        </div>
                        </div>
            </section>
        );
    }
}

export default Homepage;
