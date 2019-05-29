import React, { Component } from 'react';

import  '../AppList.css';

class ProjectItem extends Component {
	deleteProject(id){
		this.props.onDelete(id);
	}
  render() {  
   return (      
    <li className="Project">   
  <strong><span className="category">{this.props.project.category} </span></strong>:  {this.props.project.title}

  <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>- X</a>
    </li>  
      );
  }
  
}

export default ProjectItem;
