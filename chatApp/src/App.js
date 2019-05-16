import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase';
import './App.css';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'hello world', 
        'message number two',
      ],
    }
  }

  componentDidMount = () => {
    const messagesRef = firebase.database().ref('messages');

    messagesRef.on('value', (snapshot) => {
      let messages = [];
      snapshot.forEach(element => {
        messages.push(`${element.val().username}: ${element.val().message}`);
      })
      this.setState({
        messages,
      })
    });
  }

  addNewMessage = message => {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.push({
      username: 'jhonny#5',
      message,
    }, function(error) {
      if(error) {
        console.log(error);
      }else{
        console.log('success');
      }
      })
      //this.setState({messages: [...this.state.messages, message]});
    }
   
  render() {
    return (
      <div className="App">
        <ChatWindow messages={this.state.messages} />
        <ChatInput addNewMessage={this.addNewMessage} />
      </div>
    );
  }
}

export default App;
