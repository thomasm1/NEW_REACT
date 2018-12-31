##########
go to server directory: yarn start -->3002 port
go to src directory: yarn start --> 3005 port

##########

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
// function(t){ // 
        return t * t;
        }
// http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/



TOBIAS AHLIN
Overview
Blog
Tutorials
Speaking
Moving Letters TypeSource SpinKit
TOBIAS AHLIN / BLOG

10 Chart.js example charts to get you started
10 Graph.js example graphs
Chart.js is a powerful data visualization library, but I know from experience that it can be tricky to just get started and get a graph to show up. There are all sorts of things that can wrong, and I often just want to have something working so I can start tweaking it.

This is a list of 10 working graphs (bar chart, pie chart, line chart, etc.) with colors and data set up to render decent looking charts that you can copy and paste into your own projects, and quickly get going with customizing and fine-tuning to make them fit your style and purpose.

To use these examples, make sure to also include Chart.js:

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
These are the graphs that we’ll go through (click to get to the code):

Bar chart
Bar chart
Line chart
Line chart
Pie chart
Pie chart
Radar chart
Radar chart
Polar area chart
Polar area
Doughnut chart
Doughnut chart
Horizontal bar chart
Horizontal bars
Grouped bar chart
Grouped bars
Mixed chart
Mixed charts
Bubble chart
Bubble chart
1. Bar chart

Bar charts are created by setting type to bar (to flip the direction of the bars, set type to horizontalBar). The colors of the bars are set by passing one color to backgroundColor (all bars will have the same color), or an array of colors.

If you’re passing an array (like in the example below), the colors are assigned to the label and number that share the same index in their respective arrays. I.e., below, “Africa” being the first label, will be set to #3e95cd (the first color), and 2478 (the first number).

Bar chart HTML & JavaScript
<canvas id="bar-chart" width="800" height="450"></canvas>
// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
2. Line chart

Line charts are created by setting type to line. By default, lines come with a dark transparent fill, covering the area between the line and x-axis. I think these fills tend to obfuscate other lines, so I’ve removed them on every dataset in this example (fill: false).

If you want to remove fills for all your line graphs, a more efficiant way of achieving the same effect is to change the global default for fills: Chart.defaults.global.elements.line.fill = false;.

Line chart: HTML & JavaScript
<canvas id="line-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  }
});
3. Pie chart

Pie charts are created by setting type to pie. They are almost identical to doughnut charts, and will work with the same configurations (part from changing the type).

Pie chart: HTML & JavaScript
<canvas id="pie-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
4. Radar chart

Radar chart: HTML & JavaScript
Radar charts—also known as web charts, spider charts, star charts—are created by setting type to radar. Radar charts typically require more vertical space than other graphs to be legible, so you might have to tweak the graph proportions.

<canvas id="radar-chart" width="800" height="600"></canvas>
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
5. Polar area chart

A polar area chart is created by setting type to polarArea. Polar area charts are closely related to pie charts, with the difference that in addition to the angles representing the relative size of the data points, the radius of each element is set in relation to its value.

Polar chart: HTML & JavaScript
<canvas id="polar-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
6. Doughnut chart

Doughnut charts are created by setting type to doughnut. They are almost identical to pie charts, and will work the same configurations.

Doughnut chart: HTML & JavaScript
<canvas id="doughnut-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
7. Horizontal bar chart

Horizontal bar charts are created by setting type to horizontalBar. They are identical to regular bar charts in every other aspect, and will work with the same configurations.

Horizontal bar chart: HTML & JavaScript
<canvas id="bar-chart-horizontal" width="800" height="450"></canvas>
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
8. Grouped bar chart

A grouped bar chart is not a unique chart type per say, but it requires you to setup your data a bit differently compared to the bar charts we’ve seen so far.

type is still set to bar, but as soon as you pass more than one object to datasets, Chart.js will create a new group of bars for every object. Setting the color for that group of bars is then done by passing a color to backgroundColor.

Grouped bar chart: HTML & JavaScript
<canvas id="bar-chart-grouped" width="800" height="450"></canvas>
new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [
        {
          label: "Africa",
          backgroundColor: "#3e95cd",
          data: [133,221,783,2478]
        }, {
          label: "Europe",
          backgroundColor: "#8e5ea2",
          data: [408,547,675,734]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});
9. Mixed chart

You can mix several charts and overlay them on top of each other. This is done by setting type to bar (not to e.g. mixed or line—it has to be bar), and then setting the bar type for every dataset object in your datasets array.

To produce the graph above, for example, we have four data objects: two set to bar, and two set to line, while the type for the Chart object is set to bar.

Mixed chart: HTML & JavaScript
<canvas id="mixed-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("mixed-chart"), {
    type: 'bar',
    data: {
      labels: ["1900", "1950", "1999", "2050"],
      datasets: [{
          label: "Europe",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Africa",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Europe",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Africa",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions): Europe & Africa'
      },
      legend: { display: false }
    }
});
10. Bubble chart

Last but not least, there’s the bubble chart, a favorite of Hans Rosling. Bubble charts can be great for visualizing a lot of different data points simultaneously. In this example, every bubble is made up of three values: x position, y position, and size (r)—showing the GDP, happiness, and population, respectively, of each country.

In the example above, I’m using the happiness index from the World Happiness Report for a country’s Y position, GDP estimates from International Monetary Fund to set the X position, and the population size to set the size of the bubble. (Note that I’ve removed some of the data in the example code to reduce the amount of code you have to copy.)

You can pass several objects (setting x, y, and x) to each data array within every dataset object (each object will create a new bubble), but in this example I’m using only one object per array since I want every bubble to have a unique color and label.

Bubble chart: HTML & JavaScript
<canvas id="bubble-chart" width="800" height="800"></canvas>
new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["China"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 21269017,
            y: 5.245,
            r: 15
          }]
        }, {
          label: ["Denmark"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 258702,
            y: 7.526,
            r: 10
          }]
        }, {
          label: ["Germany"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 3979083,
            y: 6.994,
            r: 15
          }]
        }, {
          label: ["Japan"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 4931877,
            y: 5.921,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Happiness"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "GDP (PPP)"
          }
        }]
      }
    }
});
Next steps
I hope you’ll be able to kick-start your process and quickly get started with these template graphs. Chart.js is highly customizable, so if you want to change the design of the graphs I recommend digging into the official documentation to explore all the parameters that you can tweak.

If you’re new to Chart.js and want to get a better overview of the library, I recommend reading my earlier post: Data visualization with Chart.js: An introduction.


Get a $300 free trial credit today. Try it free.
ads via Carbon
PUBLISHED IN RESOURCES • DATA • TUTORIAL | 03 MAY 2017

Get new posts delivered to your inbox: 
Email Address
 
Keep me up to date
Hi! I'm Tobias, and I love to design, develop, and teach. I'm the Experience Design Director for Minecraft, and work as an Industry Leader for Hyper Island in Stockholm. I used to make things at Spotify & GitHub.

You can follow me on twitter at @tobiasahlin. Say hello!        
