const React = require('react');
const TodoItem = require('./TodoItem');

const TodoList = function(props) {
  let todoList = [];
  let { todos, onDeleteBtnClick }  = props;
 
  for (let i = 0; i < todos.length; ++i) {
    todoList.push(<TodoItem todo={todos[i]} index={i} onDeleteBtnClick={onDeleteBtnClick} />);
  }

  return (
    <ul className="list-group">
      {todoList}
    </ul>
  );
};

module.exports = TodoList;
