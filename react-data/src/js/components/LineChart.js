var makeProductionSeriesLinesGWP = function (location, startdate) { //encapsulate the d3 to update upon clicking map icons
	if (startdate != '') {
		var timevalue = "-timeslice"
	} else {
		var timevalue = ""
	}; //it's a temporary thang

	var legendRectSize = 18;
	var legendSpacing = 4;
	var svg = d3.select("svg#svg-gaswaterpressure" + timevalue),
		margin = {
			top: 20,
			right: 50,
			bottom: 30,
			left: 50
		},
		width = svg.attr("width") - margin.left - margin.right,
		height = svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	//var parseTime = d3.timeParse("%Y%m%d");
	var parseTime = d3.timeParse("%Y-%m-%d");

	// set the ranges
	var x = d3.scaleTime().range([0, width]);
	var y0 = d3.scaleLinear().range([height, 0]);
	var y1 = d3.scaleLinear().range([height, 0]);
	var z = d3.scaleOrdinal(["red","steelblue","green"]);

	// define the 1st line
	var valueline = d3.line()
		.x(function (d) {
			return x(d.date);
		})
		.y(function (d) {
			return y0(d.gas);
		});

	// define the 2nd line
	var valueline2 = d3.line()
		.x(function (d) {
			return x(d.date);
		})
		.y(function (d) {
			return y0(d.water);
		});

	// define the 2nd line
	var valueline3 = d3.line()
		.x(function (d) {
			return x(d.date);
		})
		.y(function (d) {
			return y1(d.sp);
		});

	// Get the data
	d3.csv("//www.quantigy.com/rest-api/well-prod-history-pressure.php?api=" + location + "&startdate=" + startdate, function (error, data) {
		if (error) throw error;
	//stats added for legend use	
	var stats = data.columns.slice(1).map(function(id) {
	  return {
		id: id,
		values: data.map(function(d) {
		  return {date: d.date, pressure: d[id]};
		})
	  };
	});

		// format the data
		data.forEach(function (d) {
			d.date = parseTime(d.date);
			d.gas = +d.gas;
			d.water = +d.water;
			d.sp = +d.sp;
		});

		// Scale the range of the data
		x.domain(d3.extent(data, function (d) {
			return d.date;
		}));
		y0.domain([0, d3.max(data, function (d) {
			if (Math.max(d.gas) > Math.max(d.water)) {
				return Math.max(d.gas);
			} else {
				return Math.max(d.water);
			}
		})]);
		y1.domain([0, d3.max(data, function (d) {
			return Math.max(d.sp);
		})]);

		// Add the valueline path.
		g.append("path")
			.data([data])
			.attr("class", "line")
			.style("stroke", "red")
			.attr("d", valueline);

		// Add the valueline2 path.
		g.append("path")
			.data([data])
			.attr("class", "line")
			.style("stroke", "steelblue")
			.attr("d", valueline2);

		g.append("path")
			.data([data])
			.attr("class", "line")
			.style("stroke", "green")
			.attr("d", valueline3);

		// Add the X Axis
		g.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		// Add the Y0 Axis
		g.append("g")
			.attr("class", "axisSteelBlue")
			.call(d3.axisLeft(y0))
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("fill", "black")
			.text("GAS MCF/WATER BBL");

		// Add the Y1 Axis
		g.append("g")
			.attr("class", "axisRed")
			.attr("transform", "translate( " + width + ", 0 )")
			.call(d3.axisRight(y1))
			.append("text")
			.attr("transform", "rotate(90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("fill", "green")
			.text("STATIC PRESSURE PSI");

		// draw legend////////////////////////////////////
	  var legend = svg.selectAll("legend")
		.data(stats)
		.enter().append("g")
		.attr("class", "legend");
  
	  // draw legend colored rectangles
	  legend.append("rect")
	  .attr("x", width-100)
		.attr("y", function(d,i){return (i*20)+margin.top})
		.attr("width", 18)
		.attr("height", 18)
		.style("fill", function(d) { return z(d.id); });
  
	  // draw legend text
	  legend.append("text")
		  .attr("x", (width-100)+20)
		  .attr("y", function(d,i){return (i*20)+margin.top})
		  .attr("dy", 12)
		  .style("text-anchor", "start")
		  .attr("font-family", "sans-serif")
		  .attr("font-size", "11px")
		  .attr("fill", "black")
		  .text(function(d) { return d.id; });

	});
}