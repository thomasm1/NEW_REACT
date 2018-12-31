import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import $ from 'jquery';
 
 $.getJSON('http://localhost:3002/charts .json', function(json){
	const data = {
		type:"horizontalBar", // radar, horizontalBar,line
		data:json,
		options:{
responsive: true,
        text:"Constituents Analysis",
                title:{
        display:true,
            text:"Constituents Analysis"
        },
                hover:{
        mode:'label'
                },
                tooltips:{
        mode:'label' //single
                }
        	}
	};

	ReactDOM.render(<Chart width="800" height="400" {...data} />, document.getElementById("react"));

});












