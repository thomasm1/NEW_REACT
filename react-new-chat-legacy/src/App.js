import React, { Component } from 'react';
import firebase from './firebase';
import './App.css';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';
import styled from 'styled-components';

const MainContainer = styled.div`
width: 100%;
background-color: darkblue;
color:white;
padding: 50px;
`;

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
      username: 'TomTom',
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
      <MainContainer className="App">
        <ChatWindow messages={this.state.messages} />
        <ChatInput addNewMessage={this.addNewMessage} />
      </MainContainer>
    );
  }
}

export default App;
