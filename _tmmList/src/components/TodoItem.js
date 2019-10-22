const React = require('react');

const TodoItem = function(props) {
  let { todo, onDeleteBtnClick, index } = props;

  return (
    <li className="list-group-item">
      <h3>
        {todo}
        <button
          className="btn btn-default btn-danger pull-right"
          onClick={onDeleteBtnClick}
          value={index}
        >
          Delete
        </button>
      </h3>
    </li>
  );
};

module.exports = TodoItem;
