import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import axios from 'axios';

import Header from './components/layout/Header';
import About from './components/pages/About';
import AddCoin from './components/AddCoin';
import Trackers from './components/Trackers';
import './App.css';

class App extends Component {

  state = {
    trackers: 
    [
      {
        id: uuid.v4(),
        symbol: 'BTC',
        date: '2019-07-04',
        open: 9000,
        close: 9898,
        high: 10000,
        low: 9787,
        netPositive: true,
        tracking: true
      },
      {
        id: uuid.v4(),
        symbol: 'ETH',
        date: '2019-07-04',
        open: 220.8,
        close: 219.0,
        high: 221.1,
        low: 218.9,
        netPositive: true,
        tracking: false
      },
      {
        id: uuid.v4(),
        symbol: 'XRP',
        date: '2019-07-04',
        open: .311,
        close: .310,
        high: .344,
        low: .310,
        netPositive: false,
        tracking: true
      }
    ]
  };
  // componentDidMount() {
  //   axios
	// 		.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((res) =>
  //      this.setState({ trackers: res.data })
  //      );
  // }
  //Track/Not Track
  trackThis = (id) => {
   // console.log(id + ' tracked! ..from App.js');
    this.setState({
      trackers: this.state.trackers.map(tracker => {
        if (tracker.id === id) {
          tracker.tracking = !tracker.tracking;
        }
        return tracker;
      })
    });
  };

  // Delete Coin (Tracking)
  delCoin = (id) => { 
    // axios 
    // .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // .then((res) =>
    this.setState({ trackers: [...this.state.trackers.filter(tracker => tracker.id !== id)] 
   });
     console.log('delcoin' + id);
  //  ); 
  };
  // Add New Coin Type (not default tracking)
  addCoin = (symbol) => {
    const newCoin = {
      id: uuid.v4(),
      symbol: symbol,
      tracking: false
    }
    console.log(symbol);
    // axios
		// 	.post('https://jsonplaceholder.typicode.com/todos', {
		// 		title,
		// 		completed: false
		// 	})
		// 	.then((res) => {
		// 		res.data.id = uuid.v4(); 
    this.setState({ trackers: [...this.state.trackers, newCoin]   });
    //  });
  };

  render() {
    // console.log(this.state.trackers)
    return (
      <div className="App">
        <div className="Container">
          <Header />
          <AddCoin addCoin={this.addCoin} />
          <Trackers trackers={this.state.trackers} trackThis={this.trackThis} delCoin={this.delCoin} />
        </div>
      </div>
    );
  }
}
export default App;
