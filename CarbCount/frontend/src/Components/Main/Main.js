// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// All pages:
import About from '../Pages/About/About.js';
import Contact from '../Pages/Contact/Contact.js';
import FAQ from '../Pages/FAQ/FAQ.js';
// import FoodLog from '../Pages/FoodLogs/FoodLog/FoodLog.js';
import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
import Homepage from '../Pages/Homepage/Homepage.js';
import LandingPage from '../Pages/LandingPage/LandingPage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
import Profile from '../Pages/Profile/Profile.js';
import Register from '../Pages/Register/Register.js';
import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';
import SignIn from '../Pages/SignIn/SignIn.js';
import Terms from '../Pages/Terms/Terms.js';


// Smaller components:
// import { OurCard } from '../Pages/Homepage/OurCard/OurCard';
// import { ProgressBar } from '../ProgressBar/ProgressBar';

// Call stylesheet last:
import './Main.css';

class Main extends Component {

    // handleLogin = (event) => {
    //     console.log('Lets login!')


    // }

    componentDidMount() {
        console.log('Main Component did mount!');
        console.log(this.props.handleLogin)
        console.log(this.props.handleLogout)
        window.scrollTo(0, 0); //Brings user to top of page.
    }



    render() {
        // const { route } = this.props;
        console.log('Main, route is:', this.props.handleLogin)

        return (
            <main>
                <section className='jumbotron jumbotron-fluid'>

                    <Switch>
                        {/* These routes are always available when user is logged in or not. */}
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/contact" component={Contact} /> 
                        <Route exact path="/FAQ" component={FAQ} /> 
                        <Route exact path="/homepage" component={Homepage} /> 
                        <Route exact path="/new_count" component={NewCount} /> 
                        <Route exact path="/new_recipe" component={NewRecipe} /> 
                        <Route exact path="/profile" component={Profile} /> 
                        <Route exact path="/terms" component={Terms} /> 
                        <Route exact path="/landing_page" component={LandingPage} />
                        <Route exact path="/" component={LandingPage} />

                        {/* Uncomment these 8 lines when Authentication is working: */}
                        {/* { route === 'home' */}
                            {/* ? // User is logged in. They can access these routes. */}
                                {/* <> */}
                                    {/* <Route exact path="/food_logs/:id" component={FoodLog} />  */}
                                    <Route exact path="/food_logs" component={FoodLogs} /> 
                                    <Route exact path="/saved_recipes" component={SavedRecipes} /> 
                                {/* </> */}
                            {/* : // User is not logged in. */}
                                {/* <> */}
                                    
                                    <Route exact path="/register"
                                    render = {
                                        (props) => (<Register handleLogin={this.props.handleLogin} />)
                                    } /> 
                                    
                                    <Route exact path="/sign_in"
                                    render = {
                                        (props) => (<SignIn handleLogin={this.props.handleLogin} />)
                                    } /> 
                                {/* </> */}
                        {/* } */}
                    </Switch>

                    {/* <p>Main content</p>
                    <ProgressBar />
                    */}

                    {/* <ul>
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

                        <li><Link to='/Terms'>Terms</Link></li>
                    </ul> */}
                </section>
            </main>
        );
    }
}

export default Main;
