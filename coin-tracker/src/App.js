import React from 'react';
import Header from './components/layout/Header';
import Trackers from './components/Trackers';
import './App.css';
import NewCoinTracker from './components/NewCoinTracker';

class App extends Component {

state = {
  trackers: [
    {
      id:1,
      symbol: 'BTC', 
      date: '2019-07-04',
      open: 9000,
      close: 9898,
      high: 10000,
      low:9787,
      netPositive:true,
      tracking:true
    },
    {
      id:2,
      symbol: 'ETH', 
      date: '2019-07-04',
      open: 220.8,
      close: 219.0,
      high: 221.1,
      low:218.9,
      netPositive:true,
      tracking:false
    },
    {
      id:3,
      symbol: 'XRP', 
      date: '2019-07-04',
      open: .311,
      close: .310,
      high: .344,
      low:.310,
      netPositive:false,
      tracking:true
    }
  ]
}

//Track/Not Track
trackThis = (id) => {
  console.log(id + ' tracked! ..from App.js');
  this.setState({ trackers: this.state.trackers.map(tracker => {
    if(tracker.id === id) {
      tracker.tracking = !tracker.tracking
    }
    return tracker;
  }) });
}

// Delete Coin (Tracking)
delCoin = (id) => {
  console.log('delete coin ..' + id);
  this.setState({trackers: [...this.state.trackers.filter(tracker => tracker.id !== id)] });
}


  render() {
   // console.log(this.state.trackers)
    return (
      <div className="App">
      <div className="Container">
      <Header />
       <NewCoinTracker />
          <Trackers trackers={this.state.trackers}  trackThis={this.trackThis} delCoin={delCoin} />
      </div>
      </div>
    );
  }
}
export default App;
