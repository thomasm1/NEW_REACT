import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddCoin extends Component {
    state = {
        symbol: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCoin(this.state.symbol);
        this.setState({ symbol: '' });
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    // make into options selection dropdown!!
    render() {

        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input
                    type="text"
                    name="symbol"
                    placeholder="Add New Coin Tracker ..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.symbol}
                    onChange={this.onChange} />
                <input
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{ flex: '1' }} />
            </form>
        )
    }
}
 
AddCoin.propTypes = {
    addCoin: PropTypes.func.isRequired
  }
  
export default AddCoin