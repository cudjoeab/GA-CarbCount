// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components
// none

// All pages:
import About from '../Pages/About/About.js';
import Contact from '../Pages/Contact/Contact.js';
import FAQ from '../Pages/FAQ/FAQ.js';
// import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
// import Homepage from '../Pages/Homepage/Homepage.js';
// import LandingPage from '../Pages/LandingPage/LandingPage.js';
// import NewCount from '../Pages/NewCount/NewCount.js';
// import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
// import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';
// import SignIn from '../Pages/SignIn/SignIn.js';
// import Register from '../Pages/Register/Register.js';

import fat_secret_logo from './images/powered_by_fatsecret.svg';

// Call stylesheet last:
import './Footer.css';

const Footer = () => {
    return (
        <> {/* Remove these after choosing a footer */}
        <footer>
            <ul>
                <li>
                    <Link class name = 'footer-link' to='/'>CarbCount</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/FAQ'>
                        FAQ
                    </Link>
                </li>
                <li>Terms &amp; Policy</li>
                <li>A.M.O.A.L. ©2019</li>
                <li>
                    <a href="https://platform.fatsecret.com" target="_blank">
                        <img src={fat_secret_logo} border="0" alt="Our app powered by FatSecret API." />
                    </a>
                </li>
            </ul>
        </footer>

        {/* <br/><br/><br/> */}
        
        {/* <footer class="page-footer font-small cyan darken-3">
            <div class="container">
                <div class="row justify-content-center">
                            <div class="col-2">
                                <Link to='/'>
                                    Home -- Remove this
                                </Link>
                            </div>
                    <div class="col-1">
                        <Link to='/about'>
                            About
                        </Link>
                    </div>
                    <div class="col-1">
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </div>
                    <div class="col-md-12 py-1">
                        <div class="mb-1 flex-center">
                            <a class="fb-ic">
                                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> FB</i>
                            </a>
                            <a class="ins-ic">
                                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> IG</i>
                            </a>
                            <a class="tw-ic">
                                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> TW</i>
                            </a>
                            <a class="li-ic">
                                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> LI</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3">
                <ul>
                    <li>CarbCount</li>
                    <li>
                        <a href="https://platform.fatsecret.com" target="_blank">
                            <img src={fat_secret_logo} border="0" alt="Our app powered by FatSecret API." />
                        </a>
                    </li>
                    <li>
                        <Link to='/FAQ'>
                            FAQ
                        </Link>
                    </li>
                    <li>Terms &amp; Policy</li>
                    <li>A.M.O.A.L. ©2019</li>
                </ul>
            </div>
        </footer> */}
        {/* Remove these after choosing a footer */}
        </>
    );
}

export default Footer;
