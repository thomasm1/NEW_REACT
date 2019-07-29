import React, { Componenet } from 'react';
import CoinTracker from './CoinTracker';
import PropTypes from 'prop-types';
import './Trackers.css';

class Trackers extends Component {

    render() {
        return this.props.trackers.map((tracker) => (
            <CoinTracker key={tracker.id} tracker={tracker} trackThis={this.props.trackThis} />
        ));     
    }
}

Trackers.propTypes = {
    trackers: PropTypes.array.isRequired
}

export default Trackers;
