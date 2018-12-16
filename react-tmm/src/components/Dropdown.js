
import React from 'react';
import {SideNav, Button, SideNavItem, NavItem, Navbar, Dropdown   } from 'react-materialize';
 //import '../css/dropdown.css';

export default () => ( 
    <div>
<SideNav
        trigger={<Button>CODING TOOLS</Button>}
        options={{ closeOnClick: false }}
        >
  <SideNavItem userView
        user={{ 
          image: 'img/laTriomphe.jpg',
          name: 'Thomas Maestas',
          email: 'thomas@ourdailytech.com'
        }}
        /> 
<Dropdown trigger={
    <Button>WEB LINKS</Button>
  }>
 	<SideNavItem ><a href="http://webreference.com/" >Web Reference</a></SideNavItem>
   <SideNavItem><a href="https://developer.mozilla.org" >Mozilla Dev</a></SideNavItem>
   <SideNavItem><a href="http://support.google.com/webmasters/?hl=en" >Google Dev</a></SideNavItem>
   <SideNavItem><a href="http://developer.yahoo.com/" >Yahoo! Dev</a></SideNavItem>
   <SideNavItem><a href="http://www.w3schools.com" >W3 schools</a></SideNavItem>
   <SideNavItem><a href="http://www.w3.org/" >World Wide Web Consortium</a></SideNavItem>
   <SideNavItem><a href="https://www.icann.org" >ICANN</a></SideNavItem>
   <SideNavItem  ><a href="http://html-color-codes.info/" >Color Codes</a></SideNavItem>
<SideNavItem  ><a href="https://inkscape.org/en/" >Inkscape</a></SideNavItem>
<SideNavItem  ><a href="https://v4-alpha.getbootstrap.com" >Bootstrap</a></SideNavItem>
<SideNavItem  ><a href="http://www.dynamicdrive.com/" >Dynamic Drive</a></SideNavItem>
<SideNavItem  ><a href="http://php.net" >PHP.net</a></SideNavItem>
<SideNavItem><a href="http://www.useit.com/" >Jakob Nielson</a></SideNavItem>
<SideNavItem><a href="http://www.alistapart.com/" >A List Apart</a></SideNavItem>
<SideNavItem><a href="http://codepen.io/" >codepen.io</a></SideNavItem>
<SideNavItem><a href="http://www.sitepoint.com/" >sitepoint</a></SideNavItem>
<SideNavItem><a href="http://www.kaggle.com" >Kaggle</a></SideNavItem>
<SideNavItem><a href="http://plnkr.co/" >Plunker</a></SideNavItem>
<SideNavItem><a href="https://github.com" >GitHub</a></SideNavItem>
<SideNavItem><a href="https://gist.github.com/" >Gist <small>GitHub</small> </a></SideNavItem>
<SideNavItem><a  href="http://stackoverflow.com" >Stack Overflow</a></SideNavItem> 
 <SideNavItem divider /> 
  </Dropdown>
  <Dropdown trigger={
    <Button>D3 TOOLS</Button>
  }>
   <SideNavItem ><a href="http://d3js.org" >D3js</a></SideNavItem>
   <SideNavItem ><a href="https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md">d3.v3</a></SideNavItem>
   <SideNavItem ><a href="https://chartio.com/" >chartio</a></SideNavItem>
   <SideNavItem ><a href="http://code.shutterstock.com/rickshaw/" >rickshaw</a></SideNavItem>
   <SideNavItem ><a href="http://rawgraphs.io/" >rawgraphs.io </a></SideNavItem>
   <SideNavItem ><a href="http://dimplejs.org" >dimplejs</a></SideNavItem>
   <SideNavItem   ><a href="http://nvd3.org/" >nvd3</a></SideNavItem>
   <SideNavItem   ><a href="https://developer.mozilla.org/en-US/docs/Web/SVG" >SVG</a></SideNavItem>
   <SideNavItem   ><a href="https://www.khronos.org/webgl/" >WebGL</a></SideNavItem>
   <SideNavItem   ><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" >Canvas</a></SideNavItem>
   <SideNavItem   ><a href="http://aNavItemgnedleft.com/tutorials/d3/binding-data" >binding-data</a></SideNavItem>
   <SideNavItem ><a href="http://datajournaNavItemsmhandbook.org/1.0/en/getting_data_3.html" >getting_data</a></SideNavItem>
   <SideNavItem ><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" >Canvas</a></SideNavItem>
   <SideNavItem ><a href="https://github.com/d3/d3/blob/master/CHANGES.md" >d3.v4 changes</a></SideNavItem>
   <SideNavItem ><a href="https://github.com/d3/d3/blob/master/API.md" >D3js APIs</a></SideNavItem> 
    
 <SideNavItem divider /> 
</Dropdown>


  <Dropdown trigger={
<Button>Javascript</Button> 
  }>
			<SideNavItem><a href="http://jqueryui.com" >jQueryUI</a></SideNavItem>
			<SideNavItem    ><a href=" http://jquery.com/" >jQuery</a></SideNavItem>
			<SideNavItem    ><a href="https://jsbin.com" >JS Bin</a></SideNavItem>
			<SideNavItem    ><a href="https://developer.mozilla.org/en-US/docs/Web/API" >JavaScript APIs</a> </SideNavItem> 
      <SideNavItem><a href="https://stackoverflow.com/questions/7169370/d3-js-and-document-onready"> d3-js </a></SideNavItem>
<SideNavItem><a href="http://www.d3noob.org/2012/12/getting-data.html"> .d3noob </a></SideNavItem> 
<SideNavItem><a href="http://learnjsdata.com/read_data.html"> read_data.html </a></SideNavItem>
 <SideNavItem divider /> 
 <SideNavItem><a href="https://stackoverflow.com/questions/7169370/d3-js-and-document-onready"> d3-js </a></SideNavItem>
<SideNavItem><a href="http://www.d3noob.org/2012/12/getting-data.html"> .d3noob </a></SideNavItem>

<SideNavItem><a href="http://learnjsdata.com/read_data.html"> read_data.html </a></SideNavItem>
<SideNavItem><a href="http://www.jeromecukier.net/blog/2012/07/16/animations-and-transitions/"> </a></SideNavItem>

<SideNavItem><a href="http://blog.andreaskoller.com/2014/02/d3-and-ui-animations/"> </a></SideNavItem>

<SideNavItem><a href="http://synthesis.sbecker.net/articles/2012/07/10/learning-d3-part-3-animation-interaction"> </a></SideNavItem>
<SideNavItem><a href="http://christopheviau.com/d3_tutorial/"> </a></SideNavItem>
<SideNavItem><a href="http://www.stator-afm.com/tutorial/d3-js-mouse-events/"> </a></SideNavItem><SideNavItem><a href="http://www.d3noob.org/2013/01/adding-tooltips-to-d3js-graph.html"> </a></SideNavItem>
<SideNavItem><a href="http://tomhicks.github.io/code/2014/08/11/some-of-this.html"> </a></SideNavItem>
<SideNavItem><a href="">TOM HICKS </a></SideNavItem>
<SideNavItem><a href="https://bl.ocks.org/">bl.ocks.org</a></SideNavItem>
<SideNavItem><a href="https://gist.github.com">gist.github</a></SideNavItem>
<SideNavItem><a href="https://github.com/PMSI-AlignAlytics/dimple/wiki/dimple">dimple</a></SideNavItem>
<SideNavItem><a href="https://gist.github.com/mbostock/1353700">gears</a></SideNavItem>
<SideNavItem><a href="https://bl.ocks.org/mbostock/1353700">gear how-to </a></SideNavItem>
<SideNavItem><a href="http://dataremixed.com/2012/05/clarity-or-aesthetics-part-2-a-tale-of-four-quadrants/">4 quadrants</a></SideNavItem>
<SideNavItem><a href="http://viz.wtf/">wtf  viz</a></SideNavItem>
<SideNavItem><a href="http://www.designyourway.net/blog/inspiration/when-infographics-go-bad-or-how-not-to-design-data-visualization/">when-infographics-go-bad</a></SideNavItem>
<SideNavItem><a href="http://www.businessinsider.com/the-27-worst-charts-of-all-time-2013-6?op=1">27-worst-charts</a></SideNavItem>
<SideNavItem><a href="http://www.perceptualedge.com/example20.php">perceptualedge</a></SideNavItem>
<SideNavItem><a href="http://www.oecdbetterlifeindex.org/responses/">oecdbetterlifeindex </a></SideNavItem>
<SideNavItem><a href="https://www.nytimes.com/interactive/2014/07/08/upshot/how-the-year-you-were-born-influences-your-politics.html?abt=0002&abg=1"> </a></SideNavItem>
<SideNavItem><a href="http://www.nytimes.com/interactive/2009/03/01/business/20090301_WageGap.html"> </a></SideNavItem>
<SideNavItem><a href="https://www.nytimes.com/interactive/2014/05/19/health/rating-a-health-laws-success.html"> </a></SideNavItem>
<SideNavItem><a href="https://www.theguardian.com/global-development/interactive/2012/oct/04/rise-of-megacities-interactive"> </a></SideNavItem>
</Dropdown>




  <Dropdown trigger={
<Button>MySQL  &amp; Public Data</Button>
}> 
<SideNavItem ><a href="https://www.mysql.com/" >MySQL</a></SideNavItem>
   <SideNavItem  ><a href="http://www.oracle.com/technetwork/developer-tools/apex/overview/index-155186.html" >Oracle Express</a></SideNavItem>
   <SideNavItem  ><a href="http://iacademy.oracle.com" >Application Express</a></SideNavItem> 
   <SideNavItem ><a href="http://www.icpsr.umich.edu/icpsrweb/ICPSR/index.jsp" >ICPSR Datasets</a></SideNavItem>
   <SideNavItem ><a href="http://data.imf.org/?sk=7CB6619C-CF87-48DC-9443-2973E161ABEB" >Datasets IMF</a></SideNavItem> 
    
 <SideNavItem divider /> 
</Dropdown>


 <Dropdown trigger={
<Button>DATA VIZ</Button>
}> 
 <SideNavItem    ><a href="https://stats.idre.ucla.edu/other/dae/" >Stats</a></SideNavItem>
   <SideNavItem    ><a href="http://openrefine.org/" >OpenRefine</a></SideNavItem>
   <SideNavItem   ><a href="http://statacumen.com" >Stat Acumen</a></SideNavItem>
   <SideNavItem   ><a href="http://www.mapageweb.umontreal.ca/durandc/" >Montr&eacute;al Stats</a></SideNavItem> 
   <SideNavItem  >    <a href="https://www.r-project.org/" >R-Project </a></SideNavItem>
   <SideNavItem><a href="https://www.rstudio.com/" >RStudio</a></SideNavItem>
   <SideNavItem><a href="https://shiny.rstudio.com/" >Shiny</a></SideNavItem>
   <SideNavItem><a href="http://amsantac.co/blog/en/2015/10/31/qgis-r.html" >Open GIS</a></SideNavItem>
   <SideNavItem><a href="http://www.tableau.com/products/cloud-bi" >Tableau </a></SideNavItem> 
   
</Dropdown>
 

  <Dropdown trigger={ 
<Button>
   Python 
 </Button> 
 }>  
<SideNavItem  ><a href="https://www.python.org/" >Python.org</a></SideNavItem>
<SideNavItem><a href="https://pypi.python.org/pypi" >Python Package Index</a></SideNavItem>
<SideNavItem><a href="https://docs.python.org/2/library/index.html" >Python Standard Library</a></SideNavItem>
<SideNavItem><a href="https://pandas.pydata.org/pandas-docs/stable/" >Pandas Data Analysis Toolkit</a></SideNavItem>
<SideNavItem><a href="https://matplotSideNavItemb.org/">matplotSideNavItemb</a></SideNavItem>
<SideNavItem><a href="https://seaborn.pydata.org/">seaborn</a></SideNavItem>
<SideNavItem><a href="http://bokeh.pydata.org/en/latest/">bokeh</a></SideNavItem>
<SideNavItem><a href="http://timmyreilly.azurewebsites.net/pyAthon-pip-virtualenv-installation-on-windows/">VirtualEnv</a></SideNavItem>
<SideNavItem><a href="https://pypi.python.org/pypi/bqplot">bqplot</a></SideNavItem>
<SideNavItem><a href="https://pypi.python.org/pypi/ggpy/0.1.2">ggplot</a></SideNavItem>
<SideNavItem><a href="https://pypi.python.org/pypi/ggpy/0.1.2">ggpy</a></SideNavItem>  
<SideNavItem><a href="https://ramnathv.github.io/pycon2014-r/visualize/ggplot2.html"> ggplot2.html </a></SideNavItem>
<SideNavItem><a href="https://altair-viz.github.io/">altair</a></SideNavItem> 

</Dropdown>

<Dropdown trigger={ 
            <Button>
            Validators 
            </Button> 
 }>
   <SideNavItem ><a href="https://stats.idre.ucla.edu/other/dae/" >Validators </a></SideNavItem>
   <SideNavItem><a href="http://validator.w3.org" >HTML validator</a></SideNavItem>
   <SideNavItem><a href="http://jigsaw.w3.org/css-validator/" >CSS validator</a></SideNavItem>
   <SideNavItem><a href="http://jsonlint.com/" >JSON Validator</a></SideNavItem>
</Dropdown>  

 </SideNav>
</div>
)