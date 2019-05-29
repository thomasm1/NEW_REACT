import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AppUser from './AppUser';  
import Users from '../users/Users';

import  '../AppList.css';
 
class Todos extends Component { 
  // deleteProject(id){
  //   this.props.onDelete(id);
 //  }
  render() {
      let TodoItems;
      let apiPosts= {
        backgroundColor:'darkblue',
        padding:'10px'
      }
      let apiStyle = { 
        backgroundColor: 'rgba(0, 247, 255, 0.5)',
      padding:'1.5rem',
      listStyleType:'none',
      maxHeight:'400px',
      overflowY:'scroll',
      overflowX:'none'
      };
      let userStyle = {
        
      }
       let apiTitle = {
        backgroundColor: 'rgba(0, 247, 255, 0.5)',

       }

      if(this.props.todos){
        TodoItems = this.props.todos.map(todo => {

   return (       
    <TodoItem style={apiStyle} 
    // onDelete={this.deleteProject.bind(this)}
     key={todo.title} todo = {todo} /> 
          ); 
     });
  } 
    return (<div>
      <h5  style={apiTitle} >API Collections</h5>
    
    <div style={apiStyle} className="Todos"> 
       <div className="apiPosts" style={apiPosts}>
       <span id="apiPosts" className="apiPosts" >
       <h5>JSONPlaceholder.typicode.com</h5>
       </span>
       {TodoItems}          
       </div>  
       </div>

       
      <AppUser style={userStyle} />
    </div>
    );
  }
}

export default Todos;
