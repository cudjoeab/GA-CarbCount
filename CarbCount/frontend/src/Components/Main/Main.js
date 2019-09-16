// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Jumbotron from "react-bootstrap/Jumbotron";

// All pages:
import About from '../Pages/About/About.js';
import Contact from '../Pages/Contact/Contact.js';
import FAQ from '../Pages/FAQ/FAQ.js';
import FoodLog from '../Pages/FoodLogs/FoodLog/FoodLog.js';
import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
import Homepage from '../Pages/Homepage/Homepage.js';
import LandingPage from '../Pages/LandingPage/LandingPage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';
import SignIn from '../Pages/SignIn/SignIn.js';
import Register from '../Pages/Register/Register.js';

// Smaller components:
// import { OurCard } from '../Pages/Homepage/OurCard/OurCard';
// import { ProgressBar } from '../ProgressBar/ProgressBar';

// Call stylesheet last:
import './Main.css';

class Main extends Component {
    // checkLoggedIn = () => {
    //     console.log('hey')
    //     return 'yes';
    // }

    // authenticatedRoutes = () => {
    //     return (
    //         <>
    //             <Route path="/new_recipe" component={NewRecipe} /> 
    //             <Route path="/food_logs/:id" component={FoodLog} /> 
    //             <Route path="/food_logs" component={FoodLogs} /> 
    //             <Route path="/saved_recipes" component={SavedRecipes} /> 
    //         </>
    //     );
    // }

    // nonAuthenticatedRoutes = () => {
    //     return (
    //         <>
    //             <Route path="/sign_in" component={SignIn} /> 
    //             <Route path="/register" component={Register} /> 
    //         </>
    //     );
    // }

    // otherRoutes = () => {
    //     return (
    //         <>
    //             <Route path="/homepage" component={Homepage} /> 
    //             <Route path="/new_count" component={NewCount} /> 
    //             <Route path="/contact" component={Contact} /> 
    //             <Route path="/about" component={About} /> 
    //             <Route path="/FAQ" component={FAQ} /> 
    //             <Route exact path="/" component={LandingPage} />
    //         </>
    //     );
    // }

    // state = {
    //     loggedIn: this.props.route,
    //     activeRoutes: this.checkLoggedIn()
    // }

    render() {
        const { route } = this.props;
        // console.log(route)
        console.log('Main is authenticated', route)
        // console.log('Main is loggedin', this.state.loggedIn)
        // console.log('Main has active routes', this.state.activeRoutes)

        return (
            <main>
                <section className='jumbotron jumbotron-fluid'>

                    <Switch>
                        { route === 'home'
                            ? // User is logged in. They can access these routes.
                                <>
                                    <Route path="/food_logs/:id" component={FoodLog} /> 
                                    <Route path="/food_logs" component={FoodLogs} /> 
                                    <Route path="/saved_recipes" component={SavedRecipes} /> 
                                </>
                            : // User is not logged in.
                                <>
                                    <Route path="/register" component={Register} /> 
                                    <Route path="/sign_in" component={SignIn} /> 
                                </>
                        }
                    
                    
                        {/* { this.nonAuthenticatedRoutes }
                        { this.otherRoutes }
                        { this.authenticatedRoutes } */}

                        {/* These routes are always available when user is logged in or not. */}
                        <Route path="/about" component={About} /> 
                        <Route path="/contact" component={Contact} /> 
                        <Route path="/FAQ" component={FAQ} /> 
                        <Route path="/homepage" component={Homepage} /> 
                        <Route path="/new_count" component={NewCount} /> 
                        <Route path="/new_recipe" component={NewRecipe} /> 
                        <Route exact path="/" component={LandingPage} />
                    </Switch>

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

                        <li><Link to='/food_logs/3'>One specific Food Log</Link></li>
                        <li><Link to='/food_logs'>Food Logs</Link></li>

                        <li><Link to='/saved_recipes'>Saved Recipes</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/FAQ'>FAQ</Link></li>
                    </ul>
                    <p>{route}</p>
                </section>
            </main>
        );
    }
}

export default Main;
