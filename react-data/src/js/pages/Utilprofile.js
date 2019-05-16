import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {csv} from 'd3-request';
import BarChart from '../components/BarChart';
var api = require('../utils/api');

function UserInfoDisplay(){
  return(
      <div id="lead-box" className="clearfix">
        <div id="lead-left" className="clearfix">
          <p className="big">DATA DRIVEN DOCUMENTS</p> 
        </div>
        <div id="lead-right" className="clearfix">
          <p className="big">EASTERN EUROPEAN AND SOUTH AMERICAN NATIONS</p>
          <p>PER CAPITA ENERGY USAGE</p>
        </div>
      </div>
    )
}

function InfoDisplay(props){
  return(
    <div>
      {props.repos.map(function(repo,index){
        return(
            <div key={index}> 
                    <p className="content-box-header-text"> Energy Usage <br/> </p>
                    <div id="statcontentholder-utiltext" className="full-width-divider clearfix">
                      <div className='plate-container-multiple clearfix'>
                        <div className='plate-rounded clearfix'>
                          <p className='header'>Average</p>
                          <p className='description'>ENERGY</p>
                          <p className='big'>{repo.average_kwh}</p>
                          <p className='description'>Monthly</p>
                          <p className='big'>${repo.average_charge}</p>
                        </div>
                      </div>
                      <div className='plate-container-multiple clearfix'>
                        <div className='plate-rounded clearfix'>
                          <p className='header'>Highs</p>
                          <p className='description'>Monthly Usage {repo.highest_kwh_month}</p>
                          <p className='big'>{repo.highest_kwh} KwH</p>
                          <p className='description'>Monthly Charge {repo.highest_charge_month}</p>
                          <p className='big'>${repo.highest_charge}</p>
                        </div>
                      </div>
                       <div className='plate-container-multiple clearfix'>
                         <div className='plate-rounded clearfix'>
                          <p className='header'>Lows</p>
                          <p className='description'>Monthly Usage {repo.lowest_kwh_month}</p>
                          <p className='big'>{repo.lowest_kwh} KwH</p>
                          <p className='description'>Monthly Charge {repo.lowest_charge_month}</p>
                          <p className='big'>${repo.lowest_charge}</p>
                        </div>
                      </div>
                    </div>
                  </div>
          )
        })
      }
    </div>)
}

InfoDisplay.propTypes = {
	repos: PropTypes.array.isRequired,
}

function AttributeDisplay(){//props){
  return(
            <div> 
                    <p className="content-box-header-text"> ENERGY </p>
                    <div className="plate-container-multiple clearfix">
                        <div className="plate-rounded clearfix">
                          <p className="description">COLUMBIA</p>
                          <p className="big">1,000,133,333</p>
                        </div>
                    </div>
                    <div className="plate-container-multiple clearfix">
                        <div className="plate-rounded clearfix">
                          <p className="description">COLUMBIA</p>
                          <p className="big">99,999 pounds</p>
                        </div>
                    </div>
                    <div className="plate-container-multiple clearfix">
                        <div className="plate-rounded clearfix">
                          <p className="description">COLUMBIA</p>
                          <p className="big">99,999 pounds</p>
                        </div>
                    </div>
                    <div className="plate-container-multiple clearfix">
                        <div className="plate-rounded clearfix">
                          <p className="description">COLUMBIA</p>
                          <p className="big">99,999 pounds</p>
                        </div>
                    </div>
              
                  <div className="content-100-100 clearfix"> </div>
                <div className="entry-links"></div>

                </div>
          )
      }

class UtilProfile extends React.Component {

	constructor (props){
		super(props);
		this.state = {
			repos: null,
      data: null,
      columns: null
		};
		//always call updateLocation with correct context
		this.updateLocation = this.updateLocation.bind(this);
	}

  componentWillMount() {
      //csv('../data/barchart.csv', (error, data) => {
      csv('http://localhost:8000/bardata.csv', (error, data) => {
      console.log("data",data);
    
      if (error) {
        this.setState({loadError: true});
      }
      //console.log("proc1",data);
      this.setState({
        data: data.map(d => ({...d, KwH: Number(d.KwH), Charge: Number(d.Charge)})),
        columns: data.columns //csv function delivers column names at the end of the data! 
      });
    })
  }

	componentDidMount () {
		//AJAX request here
		this.updateLocation(this.state.selectedLocation)
	}

	//update state
	updateLocation(loctn){
		this.setState(function(){
			return {
				selectedLocation: loctn,
				repos: null
			}
		});

		api.fetchPopularRepos(loctn)
		.then(function(repos){
			this.setState(function(){
				return {
					repos: repos
				}
			})
		}.bind(this));
	}

	render() {
    if (this.state.loadError) {
      return <div>couldn't load file</div>;
    }
    if (!this.state.data) {
      return <div />;
    }
    return (
			<div>
				{!this.state.repos?<p>Loading</p>:
          <div>
          <UserInfoDisplay />
          <div className="content-70-100 clearfix">
            <InfoDisplay repos={this.state.repos} />
            <BarChart data={this.state.data} columns={this.state.columns} />
          </div>
          <div className="content-30-100 clearfix">
            <AttributeDisplay />
          </div>
          </div>
        }
			</div>
			)
	}
}

export default UtilProfile;//old version used module.exports = UtilProfile;