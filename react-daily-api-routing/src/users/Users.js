import React, { Component } from 'react';
import User from './User';

class Users extends Component { 
  state = {
    users: [
      {name:"UserOnea", bal:20},
      {name:"UserOneb", bal:30},
      {name:"UserOnec", bal:40},
      {name:"UserOned", bal:30},
      {name:"UserOnee", bal:50}
    ],
    title:"LEDGER LIST"
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
    var users = {backgroundColor:'steelblue',opacity:'.8',padding:'10px'}

    return (<div style={users}>
      <button onClick={this.debitMyAccount}>Subtract  10 units</button>
      <br/>
      <h1>{this.state.title}</h1>
      {
        this.state.users.map((user)=>{
          return <User bal={user.bal}>{user.name}</User>
        })
      }
      </div>)
  }
}

export default Users;
