import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import logo from './logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      
        // <Router basename="/sports">
        <div className="App">
          <div className="App__Aside">
          <div className="App-header">
          <h1>Inter-school sport competitions</h1>
          <p>This is to inform that all students that our school is organizing inter-school sport competitions.</p>
          <p>The students will get a participation certificate and the winners will get their prizes on that day.</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>The details are date-26 november 2018 time-8:30am to 12:30 am.</p>
          <p>Venue-playground PR.junior college kkd. </p>
          <p>Interested candidates are register here.</p>
          <p>If you are already registered.please signin with your credentials and apply.</p>
          </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
                // <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                // <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

             
              // </Route>
              // <Route path="/sign-in" component={SignInForm}>
              // </Route>
          </div>

        </div>
      // </Router>
    );
  }
}

export default App;