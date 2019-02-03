import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,   NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import AppApi from './AppApi';
import Users from './users/Users';
import AppInput from './Components/AppInput'; 
import Navbar from './Modules/Navbar';
 

const User = (params) => {
  return (  <h3> WELCOME DAILY-TECH USER {params.username}</h3>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = () => {
    this.setState(prevState => ({
     loggedIn: !prevState.loggedIn  
    }))
  }
  render() {

    return (
      <div>
      <div  id="style2">


    <input id="login" type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
 <Navbar />
      <Router>
        <div  id="style1" className="App">
        <ul id="a">
          <li id="menu1">
            <NavLink to="/"   id="a" exact activeStyle={
              { color:'white' }
            }>HOME</NavLink>
          </li>
          <li id="menu1">
            <NavLink to="/about"   id="a"  exact activeStyle={
              { color:'white' }
            }>ABOUT DAILY TECH</NavLink>
          </li>
          <li id="menu1">
            <NavLink to="/user/Member"  id="a"  exact activeStyle={
              { color:'white' }
            }>MEMBER ACCESS</NavLink>
          </li>
          <li id="menu1">
            <NavLink to="/user/Guest" id="a" exact activeStyle={
              { color:'white' }
            }>GUEST ACCESS</NavLink>
          </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'To Access, Please Log in as Guest or Member' : true
             }}
          />

    <div id="route1" >
        <Route path="/" exact strict render={
          () => {
            return ( 
            <div  id="style1" >
            <h1>OUR DAILY TECH</h1>
            <h4>MUSING BLOCKCHAIN</h4>
            <h4>WEB DEV AFFAIRS</h4>
            <h4>SOCIOLOGY TOMORROW</h4>
            </div>
            );
          }
        }/>
        </div>
        <Route path="/about" exact strict render={
          () => {
            return ( <h2>ABOUT<br /> DAILY TECH</h2>);
          }
        }/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>  
      </div>
      <AppApi />
      
      <Users />
      <AppInput />
      </div>
    );
  }
}

export default App;
