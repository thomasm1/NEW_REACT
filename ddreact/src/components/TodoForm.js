var React = require('react');
import Button from './mods/Button';   

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
  }
  handleFormSubmit(evt) {
    evt.preventDefault();
    var todo = this.inputRef.value;
    this.props.onNewTodoItem(todo);
    this.inputRef.value = '';
  }
  handleRefInputEvt(inputRef) {
    this.inputRef = inputRef;
  }
  render() {
    return (
      <form className="form-group" onSubmit={this.handleFormSubmit}>
        <input type="text" className="form-control" placeholder="Add Todo Item" ref={this.handleRefInputEvt}/>
        <Button />
      </form>
    );
  }
}

module.exports = TodoForm;
