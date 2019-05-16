import React, { Component } from 'react';
import logo from './img/icon.png';
//import './App.css';
import Nav from './js/components/Nav';
import Welcome from './js/pages/Welcome';
import UtilProfile from './js/pages/Utilprofile';
import {
  BrowserRouter as Router,
  Route,Redirect,Switch
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
             <Router>
                <div id="router-container">
                    <div id="branding-box" className="clearfix">
                        <img className='logo' src={logo} width="300" height="50"/>   
                    </div>
                    <Nav />
                    <div id="page-content clearfix">
                        <Switch>
                            <Route exact path='/utility-user-react' component={Welcome}/>
                            <Route path='/utility-user-react/utility-profile' component={UtilProfile}/>
                            <Route render={function(){//instead of calling in a component to do the job, you can render in the Route call
                                return(<p>Page not found</p>)
                            }}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;



/*       


<div id="menu-box" class="clearfix">
          <nav id="site-navigation" class="main-navigation clearfix">
            Menu guts
          </nav>
        </div>

        <div id="page-content clearfix">


       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        */