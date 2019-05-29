import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
// import logo from './logo.svg';
import uuid from 'uuid';
import $ from 'jquery'; 
import './' 
import Todos from './Components/Todos'; 

const appListStyle = {

}
class AppList extends Component { 
    constructor() { 
      super(); 
      this.state = {
      projects: [],
      todos:[]
     }
    }

    getTodos(){ // this is where we make our request (jquery is easy)
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        });
      }.bind(this),
      error: function(xhr, status, err){
    console.log(err);
      }
    });
    }
    getProjects(){
      // this is life-cycle method  
    this.setState({projects: [  //  data will go to componentWillMount();
  {
        id:uuid.v4(),
        title: 'Blockchain Sustainability Issues and The Double-Edged Sword', 
        category: 'block'
      },{
        id:uuid.v4(),
        title: 'Widening Circles of Mobile-App Security Risks', 
        category: 'web'
       },{
        id:uuid.v4(),
        title: 'A Return to the Question of Guns, Germs, and Steel',      
        category: 'soc'
       },{
        id:uuid.v4(),
        title: 'A Return to the Question of Guns, Germs, and Steel: Part II and the Germs', 
        category: 'soc'
       },{
        id:uuid.v4(),
        title: 'April 23 Implementation of the FCC Net Neutrality Laws:<br /> The Coming Battle of States&#39; versus Federal Rights', 
        category: 'web'
  }
       ]});
    }
    componentWillMount(){ //  data removed, placed into getProjects();
    this.getProjects();
    this.getTodos();
    }
    
    componentDidMount(){
    this.getTodos();
    } 
    handleAddProject(project){
      console.log(project);
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
    }
    handleDeleteProject(id){
      let projects= this.state.projects;
      let index = projects.findIndex(x => x.id === id);
      projects.splice(index, 1);
      this.setState({projects:projects});
    }
    render() { 
    return (
      <div className="AppList" style={{appListStyle}}>  
  
      <AddProject addProject={this.handleAddProject.bind(this)} /> 
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
       <hr />
      <Todos todos={this.state.todos} />  

       
        
      </div>
    );
  }
}

export default AppList;
