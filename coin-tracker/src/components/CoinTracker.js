import React, { Componenet } from 'react';
import PropTypes from 'prop-types';
//import './CoinTracker.css';


export class CoinTracker extends Component {
    getTrackerStyle = () => {
        return {
           // backgroundColor: 'aliceblue',
            padding: '10px',
            border: this.props.tracker.netPositive ? 'solid 1px green' : 'solid 1px red', 
            backgroundColor: this.props.tracker.tracking ? 'rgba(141, 213, 236, 0.5)' : 'rgba(119, 136, 153, 0.5)'
        }
    }
   //1 trackThis(e) {

    //2 trackThis = (e) => {
    //     console.log(this.props)
    // }

    render() {

        const { id, symbol } = this.props.tracker;

        return (
            <div style={this.getTrackerStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.trackThis.bind(this, id)} /> {' '}
                    {symbol}</p>
            </div>
        );
    }
}

CoinTracker.propTypes = {
    tracker: PropTypes.object.isRequired
}

//1  <input type="checkbox" onChange={this.trackThis.bind(this)} /> {' '}

// const trackerStyle = {
//     backgroundColor:'aliceblue'
// }
export default CoinTracker;
