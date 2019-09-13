import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

// All pages:
import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
import Homepage from '../Pages/Homepage/Homepage.js';
import LandingPage from '../Pages/LandingPage/LandingPage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';

// Smaller components:
import { OurCard } from '../Pages/Homepage/OurCard/OurCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import './Main.css';

export class Main extends Component {
    render() {
        return (
        <main class='jumbotron'>
            {/* <Switch> */}

            {/* <p>Main content</p>
            <ProgressBar />
            <article className='manyCards'>
                <OurCard />
                <OurCard />
                <OurCard />
            </article> */}

            <ul>
                <li><Link to='/'>Landing Page</Link></li>
                <li><Link to='/homepage'>Homepage</Link></li>
                <li><Link to='/new_count'>NewCount</Link></li>
                <li><Link to='/new_recipe'>New Recipe</Link></li>
                <li><Link to='/food_logs'>Food Log</Link></li>
                <li><Link to='/saved_recipes'>Saved Recipe</Link></li>
            </ul>
              

                <Route exact path="/" component={LandingPage} />
                <Route path="/homepage" component={Homepage} />
                <Route path="/new_count" component={NewCount} /> 
                <Route path="/new_recipe" component={NewRecipe} /> 
                <Route path="/food_logs" component={FoodLogs} /> 
                <Route path="/saved_recipes" component={SavedRecipes} /> 
            {/* </Switch> */}

        </main>
        );
    }
}
