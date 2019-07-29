import React from 'react';
import Trackers from './components';
import './App.css';

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
      netPositive:false,
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
      netPositive:false,
      tracking:true
    },
    {
      id:3,
      symbol: 'XRP', 
      date: '2019-07-04',
      open: .311,
      close: .322,
      high: .344,
      low:.310,
      netPositive:true,
      tracking:false
    }
  ]
}


trackThis = (id) => {
  console.log(id + ' tracked! ..from App.js');
  this.setState({ trackers: this.state.trackers.map(tracker => {
    if(tracker.id === id) {
      tracker.tracking = !tracker.tracking
    }
    return tracker;
  }) });
}

  render() {
   // console.log(this.state.trackers)
    return (
      <div className="App">
        <header className="App-header">
        </header>
          <Trackers trackers={this.state.trackers}  trackThis={this.trackThis} />
      </div>
    );
  }
}
export default App;
