 
//require('./app-blog'); 
require('./dom-loader'); 
require('./toolkit'); 
require('./tether.min');
require('./jquery-3.2.1.min');
require('./bootstrap.min');
require('./application');
require('./popper.min');
require('./jquery-3.2.1.slim.min');
// var Main = require('./Main');
// var Home = require('./Home');
// var About = require('./About');
// var React = require('react');
// var Router = require('react-router');
// var {DefaultRoute, Route, Routes} = Router;
/*
var routes = (
  <Route name="main" path="/" handler={Main}>
    <Route name="about" handler={About} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body);
});
*/
 
var blogs = [
  {posts: 'February'},
  {posts: 'March'}

];
$.each(blogs, function(key, value){
  $('.blogs').append('<h2>'+value.posts+'</h2>');
});
console.log(blogs.posts);
