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
    cardDetails = [
        { title: 'New Count', text: 'Add a New Count to your Log.', link: 'new_count' }, 
        { title: 'New Recipe', text: 'Add a New Recipe.', link: 'new_recipe' }, 
        { title: 'Food Log', text: 'See all your Food Logs.', link: 'food_logs' }, 
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

        return (
            <>
                <h2>Homepage.js</h2>
                {/* <CardDeck>
                    <OurCard cardTarget='new_count' />
                    <OurCard cardTarget='new_recipe' />
                </CardDeck>
                <CardDeck>
                    <OurCard cardTarget='food_log' />
                    <OurCard cardTarget='saved_recipes' />
                </CardDeck> */}

                <CardColumns>
                    {cardElements}
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
               
                </CardColumns>
            </>
        );
    }
}

export default Homepage;
