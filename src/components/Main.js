import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AboutMe from './AboutMe';
import Contact from './Contact';


class Main extends Component {
  render() {
    return (
      
        <Switch>
            <Route exact path='/' component={AboutMe}/>
            <Route exact path='/about_me' component={AboutMe}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
         
    );
  }
}

export default Main;