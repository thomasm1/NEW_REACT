var React = require('react');

var TodosCount = function(props) {
  return (
    <div className="well well-sm">
    <hr></hr>
      <h4>Total Todos: {props.todosCount}</h4>
    <hr></hr>
    </div>
  );
};

module.exports = TodosCount;
