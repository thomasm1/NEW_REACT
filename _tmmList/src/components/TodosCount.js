const React = require('react');

const TodosCount = function(props) {
  let { todosCount } = props;

  return (
    <div className="well well-sm">
      <h4>Total Todos: {todosCount}</h4>
    </div> 
  );
};

module.exports = TodosCount;
