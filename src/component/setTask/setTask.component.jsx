import React from "react";
import FormInput from "../FormInput/FormInput.component";
import Task from "../task/task.component";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
      setTask: [],
    };
  }
  addTodo = ({ value, id }) => {
    const add = { value, id };
    const task = [add, ...this.state.setTask];
    this.setState({
      setTask: task,
    });
  };
  update = (id, value) => {
    console.log(id);
    console.log(value);
    const check = this.state.setTask.map((item) =>
      item.id === id ? { id, value } : item
    );
    console.log("check " + [...check]);
    this.setState({
      setTask: check,
    });
  };

  remove = (id) => {
    this.setState({
      setTask: this.state.setTask.filter((item) => item.id !== id),
    });
  };

  render() {
    console.log(this.state.setTask);
    return (
      <div>
        <FormInput addTodo={this.addTodo} />
        <Task
          value={this.state.setTask}
          update={this.update}
          remove={this.remove}
        />
      </div>
    );
  }
}

export default Todo;
