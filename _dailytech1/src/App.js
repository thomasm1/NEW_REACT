import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,   NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'; 
import AppList from './AppList';
import Navbar from './Modules/Navbar'; 

const User = (params) => {
  return (  <h5> Welcome Daily-Tech User: {params.username}</h5>)
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


 <Navbar />
      <input id="login" type="button" value={this.state.loggedIn ? 'log out': 'log in'} onClick={this.loginHandle.bind(this)}/>
      <Router> 
        <div  id="style1" className="App">
        <div id="route1" >
    
        <Route path="/" exact strict render={
          () => {
            return ( 
            <div  id="style1" > 
            </div>
            );
          }
        }/>
        </div>
        <ul id="a">
          <li className="menu1">
            <NavLink to="/"   className="a" exact activeStyle={
              { color:'white' }
            }>HOME</NavLink>
          </li>
          <li  className="a" className="menu1">
            <NavLink to="/about"   className="a"  exact activeStyle={
              { color:'white' }
            }>ABOUT DAILY TECH</NavLink>
          </li>
          <li className="menu1">
            <NavLink to="/user/Member"  className="a"  exact activeStyle={
              { color:'white' }
            }>MEMBER ACCESS</NavLink>
          </li>
          <li className="menu1">
            <NavLink to="/user/Guest" className="a" exact activeStyle={
              { color:'white' }
            }>GUEST ACCESS</NavLink>
          </li>
          </ul>
          {  <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
               return location.pathname.startsWith('/user') ? 'To Access, Please Log in as Guest or Member' : true
             }}
          />   }
        <Route path="/about" exact strict render={
          () => {
            return ( <h6>_</h6>);
          }
        }/>
        <Route path="/user/:username" exact strict render={({match})=>(
          this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/' />)
        )}/>
        </div>
      </Router>  


     
<AppList />
      </div> 
      
      </div>
    );
  }
}

export default App;
