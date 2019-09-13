import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Homepage from '../Pages/Homepage/Homepage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import { OurCard } from '../Pages/Homepage/OurCard/OurCard';
import { ProgressBar } from '../ProgressBar/ProgressBar';

// Bootstrap-React components
import Jumbotron from "react-bootstrap/Jumbotron";

import './Main.css';

export class Main extends Component {
    render() {
        return (
        <Jumbotron>
            {/* <Switch> */}

            <h2>Main component</h2>
            {/* <p>Main content</p>
            <ProgressBar />
            <article className='manyCards'>
                <OurCard />
                <OurCard />
                <OurCard />
            </article> */}

            <ul>
                <li><Link to='/'>Homepage</Link></li>
                <li><Link to='/new_count'>NewCount</Link></li>
                <li><Link to='/new_recipe'>New Recipe</Link></li>
                {/* 
                
                <li><Link to='/food_log'>Food Log</Link></li>
                <li><Link to='/saved_recipes'>Saved Recipe</Link></li> */}
            </ul>
            
            


            


                <Route exact path="/" component={Homepage} />
                <Route path="/new_count" component={NewCount} /> 
                {/* <Route path="/new_recipe" component={Homepage} /> 
                <Route path="/food_log" component={Homepage} /> 
                <Route path="/saved_recipes" component={Homepage} />  */}
            {/* </Switch> */}



        </Jumbotron>
        );
    }
}
