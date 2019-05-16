import React from 'react';
//import {*} as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { scaleBand } from 'd3-scale';
import { scaleOrdinal } from 'd3-scale';
import { max } from 'd3-array';
import { axisRight } from 'd3-axis';
import { axisLeft } from 'd3-axis';
import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

export default class BarChart extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data:this.props.data,
		};
		this.createBarChart = this.createBarChart.bind(this);
	}

	componentDidMount(){
		this.createBarChart();
	}

	componentDidUpdate(){
		this.createBarChart();
	}

	createBarChart(){
		const node = this.node;
		const svg = select(node),
		margin = {top: 20,right: 40,bottom: 70,left: 40},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var x0 = scaleBand().rangeRound([0, width]).paddingInner(0.1);
		var x1 = scaleBand().padding(0.05);
		var y0 = scaleLinear().rangeRound([height, 0]);
		var y1 = scaleLinear().rangeRound([height, 0]);
		var z = scaleOrdinal().range(["#0033ff", "#99cc99", "#7b6888", "#6b486b", "#a05d56", "#98abc5", "#8a89a6"]);

		var keys = this.props.columns.slice(1); //strip date and get the other column headers
		x0.domain(this.props.data.map(function (d) { return d.Month; }));
		x1.domain(keys).rangeRound([0, x0.bandwidth()]);
		y0.domain([0, max(this.props.data, function (d) { return Math.max(d.KwH); })]);
		y1.domain([0, max(this.props.data, function (d) { return Math.max(d.Charge); })]);

		g.append("g")
			.selectAll("g")
			.data(this.props.data)
			.enter().append("g")
			.attr("transform", function (d) {
				return "translate(" + x0(d.Month) + ",0)";
			})
			.selectAll("rect")
			.data(function (d) {
				return keys.map(function (key) {
					return {
						key: key,
						value: d[key]
					};
				});
			})
			.enter().append("rect")
			.attr("x", function (d) {
				return x1(d.key);
			})
			.attr("y", function (d) { //return height - y(d.value);
				if (d.key === "KwH") {
					return y0(d.value);
				} else {
					return y1(d.value);
				}
			})
			.attr("width", x1.bandwidth())
			.attr("height", function (d) { //return height - y(d.value);
				if (d.key === "KwH") {
					return height - y0(d.value);
				} else {
					return height - y1(d.value);
				}
			})
			.attr("fill", function (d) {
				return z(d.key);
			});

		g.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + height + ")")
			.call(axisBottom(x0))
			.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", function (d) {
				return "rotate(-65)"
			});

		g.append("g")
			.attr("className", "axis")
			.call(axisLeft(y0))
			.append("text")
			.attr("x", 2)
			.attr("y", y0(y0.ticks().pop()) + 0.5)
			.attr("dy", "0.32em")
			.attr("fill", "#000")
			.attr("font-weight", "bold")
			.attr("text-anchor", "start")
			.text("Kilowatt Hours")
			.attr("fill", "#0033ff");

		g.append("g")
			.attr("className", "axis")
			.attr("transform", "translate( " + width + ", 0 )")
			.call(axisRight(y1))
			.append("text")
			.attr("x", -2)
			.attr("y", y1(y1.ticks().pop()) + 0.5)
			.attr("dy", "0.32em")
			.attr("fill", "#000")
			.attr("font-weight", "bold")
			.attr("text-anchor", "end")
			.text("Cost")
			.attr("fill", "#99cc99");

		var legend = g.append("g")
			.attr("font-family", "sans-serif")
			.attr("font-size", 10)
			.attr("text-anchor", "end")
			.attr("x", width - 100)
			.selectAll("g")
			.data(keys.slice().reverse())
			.enter().append("g")
			.attr("transform", function (d, i) {
				return "translate(0," + i * 20 + ")";
			});

		legend.append("rect")
			.attr("x", width / 2 - 19)
			.attr("width", 19)
			.attr("height", 19)
			.attr("fill", z);

		legend.append("text")
			.attr("x", width / 2 - 24)
			.attr("y", 9.5)
			.attr("dy", "0.32em")
			.text(function (d) {
				return d;
			});
}

		render() {
			return (
				<div className="full-width-divider clearfix">
        			<div className="plate-container-single clearfix">
            			<div className="plate-rounded clearfix">
							<svg ref={node => this.node = node} width={1040} height={400}></svg>					
						</div>
          			</div>
        		</div>
			)
		}
}
