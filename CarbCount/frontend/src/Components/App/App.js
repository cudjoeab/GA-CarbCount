// Vanilla React:
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// All pages:
import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
import Homepage from '../Pages/Homepage/Homepage.js';
import LandingPage from '../Pages/LandingPage/LandingPage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';
import SignIn from '../Pages/SignIn/SignIn.js';
import Register from '../Pages/Register/Register.js';

// Smaller components:
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <div className="App">
                    <OurNavBar />
                    <Main />
                    
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/homepage" component={Homepage} />
                    <Route path="/new_count" component={NewCount} /> 
                    <Route path="/new_recipe" component={NewRecipe} /> 
                    <Route path="/food_logs" component={FoodLogs} /> 
                    <Route path="/saved_recipes" component={SavedRecipes} /> 

                    <Route exact path="/" component={LandingPage} />

                    <Footer />
                </div>
            </Switch>
        </Router>
    );
}

export default App;