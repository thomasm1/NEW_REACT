import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
 
class Projects extends Component { 
  deleteProject(id){
    this.props.onDelete(id);
  }
  render() {
      let projectItems;
      let style1 = { 
        backgroundColor: 'rgba(0, 247, 255, 0.5)',
      padding:'2rem',
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
       <h4>BLOG ARCHIVE INDEX</h4>
       {projectItems}            
       </div>
    );
  }
}

export default Projects;
