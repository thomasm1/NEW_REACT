import React, { Component } from 'react';
import TodoItem from './TodoItem';
 
class Todos extends Component { 
  // deleteProject(id){
  //   this.props.onDelete(id);
 //  }
  render() {
      let TodoItems;
      let style2 = { 
        backgroundColor: 'rgba(0, 247, 255, 0.6)',
      padding:'2rem',
      listStyleType:'none',
      maxHeight:'600px',
      overflowY:'scroll'
      };
      if(this.props.todos){
        TodoItems = this.props.todos.map(todo => {

   return (       
    <TodoItem style={style2} 
    // onDelete={this.deleteProject.bind(this)}
     key={todo.title} todo = {todo} /> 
          ); 
     });
  } 
    return (
      <div style={style2} className="Todos"> 
       <h4>API Data Source: (TESTING) JSONPlaceholder.typicode.com </h4>
       {TodoItems}            
       </div>
    );
  }
}

export default Todos;
