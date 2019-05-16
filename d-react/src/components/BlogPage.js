import React from 'react';
//import { Link } from 'react-router-dom'; 
//import { Navbar, NavItem } from 'react-materialize';
import Button from './mods/Button';
///import CardModal from './mods-blog/Card'; 
//import NavbarBlog from './mods-blog/Navbar';
//import Dropdown from './mods-blog/Dropdown';
//import Carousel from './mods-blog/Carousel';
import Modal from './mods/Modal';   
//import Modal from './mods-blog/Modal';      <Dropdown />  <Modal /> <Navbar />   <Card />   <Carousel />  <Footer />
import Grid from './mods/Grid';
//import '../styles/blog-page.css'; 
///import NavbarBlog from './mods-blog/Navbarblog'
// Since this component is simple and static, there's no parent container for it.

const blog = { backgroundColor: 'transparent',
padding: '10px',
opacity: .75,
margin: '10px',
minHheight:'500px',
backgroundColor:'rgba(50, 160, 197, 0.322)',
width:'130%' };
const BlogPage = () => {
  return (
 <div  style={blog} id="blog">
 <h4>OUR DAILY TECH</h4> 
    <Modal />
<Grid />
<br />
<Button />  
 </div>
 )
};

export default BlogPage;
