import React, { Component } from 'react';
import User from './User';

import '../AppList.css';

class Users extends Component { 
  state = {
    users: [
      {name:"UserOnea", bal:20},
      {name:"UserOneb", bal:30},
      {name:"UserOnec", bal:40},
      {name:"UserOned", bal:30},
      {name:"UserOnee", bal:50}
    ],
    title:"Ledger List"
  }
 
  // Handle to modify state
  debitMyAccount = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      tempUser.bal -=10;
      return tempUser;
    });
    this.setState({
      newState
    });
  }

  render(){
    const users = {backgroundColor:'darkblue',opacity:'.8',padding:'10px'}

    return (<div className="users" style={users}>
    <div className="">
      <h5>{this.state.title}</h5>
      <button className="subtract" onClick={this.debitMyAccount}>Subtract  10 units</button>
      <br /> 
      {
        this.state.users.map((user)=>{
          return <User bal={user.bal}>{user.name}</User>
        })
      }
      </div>
      </div>)
  }
}

export default Users;
