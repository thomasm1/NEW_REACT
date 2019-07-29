import React, { Component } from 'react'

export class NewCoinTracker extends Component {
    state= {
        symbol: ''
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value });
            // make into options selection dropdown!!
    render() {

        return (
            <form  style={{display:'flex'}} >
                <input type="text" name="symbol" placeholder="Add New Coin Tracker ..."  style={{flex:'10', padding:'5px' }} value={ this.state.symbol } onChange={this.onChange} />
                <input type="submit" value="Submit" className="btn" style={{flex:'1'}} />
            </form>
        )
    }
}

export default NewCoinTracker