import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

import  '../AppList.css';
 
class Projects extends Component { 
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
      let projectItems;
      let style1 = {   
      listStyleType:'none' 
      };
      if(this.props.projects){
        projectItems = this.props.projects.map(project => {

   return (       
    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project = {project} /> 
          ); 
     });
  } 
    return (
      <div style={style1} className="Projects"> 
       <h5>Post Index</h5>
       <div className="index"> 
       {projectItems}     
       </div>       
       </div>
    );
  }
}

export default Projects;
