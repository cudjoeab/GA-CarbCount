// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// none

// Smaller components:
import { OurCard } from '../Pages/Homepage/OurCard/OurCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

// Call stylesheet last:
import './Main.css';

export class Main extends Component {
    render() {
        return (
        <main class='jumbotron jumbotron-fluid'>

            {/* <p>Main content</p>
            <ProgressBar />
            <article className='manyCards'>
                <OurCard />
                <OurCard />
                <OurCard />
            </article> */}

            <ul>
                <li>These links are for testing only:</li>
                <li><Link to='/'>Landing Page</Link></li>
                <li><Link to='/homepage'>Homepage</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/sign_in'>Sign In</Link></li>
                <li><Link to='/new_count'>NewCount</Link></li>
                <li><Link to='/new_recipe'>New Recipe</Link></li>
                <li><Link to='/food_logs'>Food Log</Link></li>
                <li><Link to='/saved_recipes'>Saved Recipe</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/FAQ'>FAQ</Link></li>
            </ul>
        </main>
        );
    }
}
