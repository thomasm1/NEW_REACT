import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTodo from './ProjectTodo';
import '../styles/about-page.css'; 

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div> 
            <ProjectTodo/>
      <h2 className="alt-header"> </h2>
      <p>
        <Link to="/">home</Link>
      </p>
    </div>
  );
};

export default AboutPage;
