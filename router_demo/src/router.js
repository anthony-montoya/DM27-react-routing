import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Faq from './Faq';
import People from './People';
import Person from './Person';
import Company from './Company';

export default (
    // This file renders our components based on the URL.
    <Switch> {/* Order is super important when using switch */}
        <Route exact path='/' component={ Home } />
        <Route path='/about' render={ () => { 
            return ( <About>
                <Switch>
                    <Route path='/about/company' component={ Company }  />
                    <Route path='/about/faq' component={ Faq } />
                </Switch>
            </About>)
        }} />
        <Route path='/people/:id' component={ Person } />
        <Route path='/people' component={ People } />
    </Switch>
)