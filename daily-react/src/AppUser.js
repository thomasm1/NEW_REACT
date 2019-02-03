import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class AppUser extends Component {
  render() {
var appUser = 
{width:'50%', 
backgroundColor:'slategray',color:'teal'};
    return (
      <div style={appUser} className="AppUser">
        <Users/>
      </div>
    );
  }
}

export default AppUser;
