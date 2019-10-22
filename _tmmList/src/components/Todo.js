import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
 

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
    this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);

    //const [list, setList] = useState([
    //   {id: 1, text: "Bitcoin" },
    //   {id: 2, text: "Litecoin" },
      
    // ])
  }
  handleNewTodoItem(todo) {
    this.setState(function(prevState) {
      let todos = prevState.todos.concat(todo);

      return {
        todos: todos
      };
    });
  }
  handleDeleteBtnClick(evt) {
    let index = Number(evt.target.value);
    this.setState(function(prevState) {
      let { todos } = prevState;
      // todos.splice(index, 1);  // Prefer NOT to mutate the state object
      todos = todos.slice(0, index).concat(todos.slice(index + 1));

      return {
        todos: todos
      };
    });
  }
  render() {
    let { todos, handleNewTodoItem, handleDeleteBtnClick } = this.state;
    return (
      <div>
        <TodoForm onNewTodoItem={handleNewTodoItem} />
        <TodoList
          todos={todos}
          onDeleteBtnClick={handleDeleteBtnClick}
        />
        <TodosCount todosCount={todos.length} />
      </div>
    );
  }
}

module.exports = Todo;
